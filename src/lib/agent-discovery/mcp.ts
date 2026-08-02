import { MCP_SERVER_NAME, MCP_VERSION, SITE_ORIGIN } from "./constants";

const PAGES = [
  { path: "/", title: "Home" },
  { path: "/pricing", title: "Pricing" },
  { path: "/docs", title: "Docs" },
  { path: "/changelog", title: "Changelog" },
  { path: "/privacy", title: "Privacy" },
  { path: "/guides", title: "Guides" },
  { path: "/guides/ai-dubbing-guide", title: "AI dubbing guide" },
  { path: "/llms.txt", title: "llms.txt" },
  { path: "/auth.md", title: "auth.md" },
];

const TOOLS = [
  {
    name: "get_site_overview",
    description: "Return a short Markdown overview of Trackdub from llms.txt.",
    inputSchema: { type: "object", properties: {}, additionalProperties: false },
  },
  {
    name: "list_public_pages",
    description: "List public marketing pages and their paths.",
    inputSchema: { type: "object", properties: {}, additionalProperties: false },
  },
  {
    name: "get_pricing_summary",
    description: "Return the public Personal / Pro / Studio pricing summary.",
    inputSchema: { type: "object", properties: {}, additionalProperties: false },
  },
] as const;

type JsonRpcId = string | number | null;

type JsonRpcRequest = {
  jsonrpc?: string;
  id?: JsonRpcId;
  method?: string;
  params?: Record<string, unknown>;
};

function jsonRpcResult(id: JsonRpcId | undefined, result: unknown) {
  return { jsonrpc: "2.0", id: id ?? null, result };
}

function jsonRpcError(id: JsonRpcId | undefined, code: number, message: string) {
  return { jsonrpc: "2.0", id: id ?? null, error: { code, message } };
}

const SITE_OVERVIEW = `# Trackdub

Local-first Windows desktop workstation for AI video dubbing.

See ${SITE_ORIGIN}/llms.txt for the canonical page index and ${SITE_ORIGIN}/auth.md for agent auth notes.
`;

async function callTool(name: string): Promise<unknown> {
  switch (name) {
    case "get_site_overview":
      return {
        content: [
          {
            type: "text",
            text: SITE_OVERVIEW,
          },
        ],
      };
    case "list_public_pages":
      return {
        content: [
          {
            type: "text",
            text: PAGES.map((p) => `- ${p.title}: ${SITE_ORIGIN}${p.path}`).join("\n"),
          },
        ],
      };
    case "get_pricing_summary":
      return {
        content: [
          {
            type: "text",
            text: [
              "Personal: Free (watermarked exports, 5-minute max)",
              "Pro: $149 one-time (no watermark, no duration limit, 2 machine activations)",
              "Studio: In development (not sold yet)",
              `Waitlist: ${SITE_ORIGIN}/#waitlist`,
            ].join("\n"),
          },
        ],
      };
    default:
      throw new Error(`Unknown tool: ${name}`);
  }
}

async function handleMessage(message: JsonRpcRequest): Promise<unknown> {
  const method = message.method ?? "";
  switch (method) {
    case "initialize":
      return jsonRpcResult(message.id, {
        protocolVersion: "2025-03-26",
        capabilities: { tools: {} },
        serverInfo: { name: MCP_SERVER_NAME, version: MCP_VERSION },
      });
    case "notifications/initialized":
    case "initialized":
      return null;
    case "tools/list":
      return jsonRpcResult(message.id, { tools: TOOLS });
    case "tools/call": {
      const params = message.params ?? {};
      const name = typeof params.name === "string" ? params.name : "";
      try {
        const result = await callTool(name);
        return jsonRpcResult(message.id, result);
      } catch (error) {
        return jsonRpcError(
          message.id,
          -32000,
          error instanceof Error ? error.message : "Tool call failed",
        );
      }
    }
    case "ping":
      return jsonRpcResult(message.id, {});
    default:
      return jsonRpcError(message.id, -32601, `Method not found: ${method}`);
  }
}

export async function handleMcpRequest(request: Request): Promise<Response> {
  if (request.method === "GET" || request.method === "HEAD") {
    const body = JSON.stringify({
      name: MCP_SERVER_NAME,
      version: MCP_VERSION,
      transport: "streamable-http",
      tools: TOOLS.map((t) => t.name),
    });
    return new Response(request.method === "HEAD" ? null : body, {
      status: 200,
      headers: {
        "content-type": "application/json; charset=utf-8",
        "cache-control": "public, max-age=60",
      },
    });
  }

  if (request.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405, headers: { allow: "GET, HEAD, POST" } });
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return Response.json(jsonRpcError(null, -32700, "Parse error"), { status: 400 });
  }

  if (Array.isArray(payload)) {
    const results = [];
    for (const item of payload) {
      const result = await handleMessage(item as JsonRpcRequest);
      if (result !== null) results.push(result);
    }
    return Response.json(results);
  }

  const result = await handleMessage(payload as JsonRpcRequest);
  if (result === null) return new Response(null, { status: 204 });
  return Response.json(result);
}
