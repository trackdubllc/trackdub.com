import { HOMEPAGE_LINK_HEADERS } from "./constants";
import {
  agentIndexDocument,
  apiCatalogDocument,
  authMarkdown,
  a2aAgentCardDocument,
  jwksDocument,
  mcpServerCardDocument,
  oauthAuthorizationServerDocument,
  oauthProtectedResourceDocument,
  oauthUnavailableJson,
  openIdConfigurationDocument,
  waitlistOpenApiDocument,
} from "./documents";
import { handleMcpRequest } from "./mcp";

type DiscoveryMatch = {
  path: string;
  contentType: string;
  body: string | (() => string);
  status?: number;
};

const SKILL_MD = `# Trackdub site discovery

Discover public Trackdub marketing pages, pricing, docs, and waitlist endpoints.

## When to use

Use this skill when an agent needs accurate product facts about Trackdub without scraping HTML.

## Instructions

1. Read https://trackdub.com/llms.txt for the canonical page index.
2. Prefer \`Accept: text/markdown\` on HTML routes.
3. Use the read-only MCP server at https://trackdub.com/mcp for structured tools.
4. Waitlist signup requires a Cloudflare Turnstile token; do not invent OAuth credentials.
5. Respect Content Signals on https://trackdub.com/robots.txt.
`;

// Filled by scripts/update-agent-skills-digest.mjs or computed at build-time below.
export const TRACKDUB_SITE_SKILL_MARKDOWN = SKILL_MD;

export async function sha256Hex(input: string): Promise<string> {
  const data = new TextEncoder().encode(input);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

export async function agentSkillsIndexDocument() {
  const digest = await sha256Hex(TRACKDUB_SITE_SKILL_MARKDOWN);
  return {
    $schema: "https://schemas.agentskills.io/discovery/0.2.0/schema.json",
    skills: [
      {
        name: "trackdub-site",
        type: "skill-md",
        description:
          "Discover Trackdub marketing pages, pricing, docs, waitlist API, and read-only MCP tools.",
        url: "https://trackdub.com/.well-known/agent-skills/trackdub-site/SKILL.md",
        digest: `sha256:${digest}`,
      },
    ],
  };
}

function jsonResponse(body: unknown, contentType: string, status = 200): Response {
  return new Response(JSON.stringify(body, null, 2) + "\n", {
    status,
    headers: {
      "content-type": contentType,
      "cache-control": "public, max-age=300",
      "access-control-allow-origin": "*",
    },
  });
}

function textResponse(body: string, contentType: string, status = 200): Response {
  return new Response(body, {
    status,
    headers: {
      "content-type": contentType,
      "cache-control": "public, max-age=300",
      "access-control-allow-origin": "*",
    },
  });
}

export async function matchAgentDiscovery(request: Request): Promise<Response | null> {
  const url = new URL(request.url);
  // Scanners sometimes append a stray markdown backtick to discovered URLs.
  const path = (url.pathname.replace(/\/+$/, "") || "/").replace(/`+$/g, "");

  if (path === "/mcp") {
    return handleMcpRequest(request);
  }

  const agentAuthNotEnabled = () =>
    jsonResponse(
      oauthUnavailableJson(
        "Anonymous agent registration is not enabled on the Trackdub marketing site. See https://trackdub.com/auth.md",
        "anonymous_not_enabled",
      ),
      "application/json; charset=utf-8",
      403,
    );

  if (
    request.method === "POST" &&
    (path === "/agent/auth" ||
      path === "/agent/identity" ||
      path === "/agent/identity/claim" ||
      path === "/oauth/token" ||
      path === "/oauth/authorize")
  ) {
    return agentAuthNotEnabled();
  }

  if (request.method !== "GET" && request.method !== "HEAD") {
    if (
      path === "/oauth/authorize" ||
      path === "/oauth/token" ||
      path === "/agent/auth" ||
      path === "/agent/identity" ||
      path === "/agent/identity/claim"
    ) {
      return agentAuthNotEnabled();
    }
    return null;
  }

  switch (path) {
    case "/.well-known/api-catalog":
      return jsonResponse(apiCatalogDocument(), "application/linkset+json; charset=utf-8");
    case "/.well-known/oauth-protected-resource":
      return jsonResponse(oauthProtectedResourceDocument(), "application/json; charset=utf-8");
    case "/.well-known/oauth-authorization-server":
      return jsonResponse(oauthAuthorizationServerDocument(), "application/json; charset=utf-8");
    case "/.well-known/openid-configuration":
      return jsonResponse(openIdConfigurationDocument(), "application/json; charset=utf-8");
    case "/.well-known/jwks.json":
      return jsonResponse(jwksDocument(), "application/json; charset=utf-8");
    case "/.well-known/mcp/server-card.json":
      return jsonResponse(mcpServerCardDocument(), "application/json; charset=utf-8");
    case "/.well-known/agent-card.json":
      return jsonResponse(a2aAgentCardDocument(), "application/json; charset=utf-8");
    case "/.well-known/agent-index.json":
      return jsonResponse(agentIndexDocument(), "application/json; charset=utf-8");
    case "/.well-known/agent-skills/index.json":
      return jsonResponse(await agentSkillsIndexDocument(), "application/json; charset=utf-8");
    case "/.well-known/agent-skills/trackdub-site/SKILL.md":
      return textResponse(TRACKDUB_SITE_SKILL_MARKDOWN, "text/markdown; charset=utf-8");
    case "/openapi/waitlist.json":
      return jsonResponse(waitlistOpenApiDocument(), "application/openapi+json; charset=utf-8");
    case "/auth.md":
      return textResponse(authMarkdown(), "text/markdown; charset=utf-8");
    case "/oauth/authorize":
    case "/oauth/token":
    case "/agent/auth":
    case "/agent/identity":
    case "/agent/identity/claim":
      return agentAuthNotEnabled();
    default:
      return null;
  }
}

export function withHomepageLinkHeaders(request: Request, response: Response): Response {
  const url = new URL(request.url);
  const path = url.pathname.replace(/\/+$/, "") || "/";
  if (path !== "/" || !response.ok) return response;

  const headers = new Headers(response.headers);
  for (const link of HOMEPAGE_LINK_HEADERS) {
    headers.append("Link", link);
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

// Keep type exported for tests / future static generation.
export type { DiscoveryMatch };
