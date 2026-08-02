export const SITE_ORIGIN = "https://trackdub.com";
export const MCP_VERSION = "1.0.0";
export const MCP_SERVER_NAME = "trackdub-com";

export const HOMEPAGE_LINK_HEADERS = [
  `</.well-known/api-catalog>; rel="api-catalog"`,
  `</llms.txt>; rel="describedby"; type="text/plain"`,
  `</docs>; rel="service-doc"`,
  `</.well-known/oauth-protected-resource>; rel="oauth-protected-resource"`,
  `</.well-known/mcp/server-card.json>; rel="mcp-server-card"; type="application/json"`,
  `</.well-known/agent-skills/index.json>; rel="agent-skills"; type="application/json"`,
  `</auth.md>; rel="auth-md"; type="text/markdown"`,
] as const;

export const CONTENT_SIGNAL_VALUE = "ai-train=yes, search=yes, ai-input=yes";
