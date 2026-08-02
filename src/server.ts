import "./lib/error-capture";

import { matchAgentDiscovery, withHomepageLinkHeaders } from "./lib/agent-discovery";
import {
  markdownForPath,
  markdownResponseFromHtml,
  requestPrefersMarkdown,
  rewriteAcceptForHtmlOrigin,
} from "./lib/agent-discovery/markdown";
import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!isH3SwallowedErrorBody(body) && !isAssetsHtmlOnlyError(body)) return response;

  console.error(consumeLastCapturedError() ?? new Error(`origin error response: ${body}`));
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

function isH3SwallowedErrorBody(body: string): boolean {
  try {
    const payload = JSON.parse(body) as { unhandled?: unknown; message?: unknown };
    return payload.unhandled === true && payload.message === "HTTPError";
  } catch {
    return false;
  }
}

function isAssetsHtmlOnlyError(body: string): boolean {
  try {
    const payload = JSON.parse(body) as { error?: unknown };
    return payload.error === "Only HTML requests are supported here";
  } catch {
    return false;
  }
}

function isDocumentPath(pathname: string): boolean {
  if (pathname.startsWith("/api/")) return false;
  if (pathname.startsWith("/assets/")) return false;
  if (pathname.startsWith("/.well-known/")) return false;
  if (pathname === "/mcp") return false;
  if (pathname.includes(".")) {
    // Allow extensionless app routes; skip static files like /og.png
    return false;
  }
  return true;
}

async function maybeMarkdownResponse(
  request: Request,
  env: unknown,
  ctx: unknown,
): Promise<Response | null> {
  if (!requestPrefersMarkdown(request)) return null;

  const url = new URL(request.url);
  const curated = markdownForPath(url.pathname);
  if (curated) return curated;

  if (!isDocumentPath(url.pathname)) return null;

  // Assets / some edge paths 500 when Accept is markdown-only. Always fetch HTML
  // from the app origin, then convert locally so agents get text/markdown.
  const handler = await getServerEntry();
  const htmlRequest = rewriteAcceptForHtmlOrigin(request);
  const htmlResponse = await handler.fetch(htmlRequest, env, ctx);
  const normalized = await normalizeCatastrophicSsrResponse(htmlResponse);
  if (!normalized.ok) return normalized;

  const contentType = normalized.headers.get("content-type") ?? "";
  if (!contentType.includes("text/html")) return normalized;

  const html = await normalized.text();
  return markdownResponseFromHtml(html, url);
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      const discovery = await matchAgentDiscovery(request);
      if (discovery) return discovery;

      const markdown = await maybeMarkdownResponse(request, env, ctx);
      if (markdown) return withHomepageLinkHeaders(request, markdown);

      // Prevent Cloudflare Assets from rejecting markdown-only Accept on HTML routes.
      const appRequest = requestPrefersMarkdown(request)
        ? rewriteAcceptForHtmlOrigin(request)
        : request;

      const handler = await getServerEntry();
      const response = await handler.fetch(appRequest, env, ctx);
      const normalized = await normalizeCatastrophicSsrResponse(response);
      return withHomepageLinkHeaders(request, normalized);
    } catch (error) {
      console.error(error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};
