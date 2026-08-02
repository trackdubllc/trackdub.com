import { CONTENT_SIGNAL_VALUE, MCP_SERVER_NAME, MCP_VERSION, SITE_ORIGIN } from "./constants";

const WAITLIST_OPENAPI = {
  openapi: "3.1.0",
  info: {
    title: "Trackdub marketing waitlist API",
    version: "1.0.0",
    description:
      "Public waitlist signup for trackdub.com. Protected by Cloudflare Turnstile, not OAuth. Desktop product auth lives elsewhere (see /auth.md).",
    contact: { email: "hello@trackdub.com" },
  },
  servers: [{ url: SITE_ORIGIN }],
  paths: {
    "/api/waitlist": {
      post: {
        operationId: "joinWaitlist",
        summary: "Join the Trackdub waitlist",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                required: ["email", "turnstileToken"],
                properties: {
                  email: { type: "string", format: "email" },
                  turnstileToken: { type: "string" },
                  interest: { type: "string", enum: ["personal", "pro", "studio"] },
                },
              },
            },
          },
        },
        responses: {
          "200": {
            description: "Email recorded",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: { ok: { type: "boolean" } },
                },
              },
            },
          },
          "400": { description: "Invalid body" },
          "403": { description: "Turnstile verification failed" },
        },
      },
      options: {
        operationId: "waitlistCorsPreflight",
        summary: "CORS preflight for trackdub.dev embedding",
        responses: { "204": { description: "No content" } },
      },
    },
  },
} as const;

export function apiCatalogDocument() {
  return {
    linkset: [
      {
        anchor: `${SITE_ORIGIN}/api/waitlist`,
        "service-desc": [
          {
            href: `${SITE_ORIGIN}/openapi/waitlist.json`,
            type: "application/openapi+json",
          },
        ],
        "service-doc": [
          {
            href: `${SITE_ORIGIN}/docs`,
            type: "text/html",
          },
          {
            href: `${SITE_ORIGIN}/llms.txt`,
            type: "text/plain",
          },
        ],
        status: [
          {
            href: `${SITE_ORIGIN}/.well-known/agent-index.json`,
            type: "application/json",
          },
        ],
      },
    ],
  };
}

export function oauthProtectedResourceDocument() {
  return {
    resource: `${SITE_ORIGIN}/`,
    authorization_servers: [SITE_ORIGIN],
    // Public read of marketing content. Waitlist writes use Turnstile, not bearer tokens.
    scopes_supported: ["public:read"],
    bearer_methods_supported: ["header"],
    resource_documentation: `${SITE_ORIGIN}/auth.md`,
  };
}

export function oauthAuthorizationServerDocument() {
  return {
    issuer: SITE_ORIGIN,
    authorization_endpoint: `${SITE_ORIGIN}/oauth/authorize`,
    token_endpoint: `${SITE_ORIGIN}/oauth/token`,
    jwks_uri: `${SITE_ORIGIN}/.well-known/jwks.json`,
    response_types_supported: ["code"],
    grant_types_supported: [
      "authorization_code",
      "urn:ietf:params:oauth:grant-type:jwt-bearer",
    ],
    code_challenge_methods_supported: ["S256"],
    token_endpoint_auth_methods_supported: ["none"],
    service_documentation: `${SITE_ORIGIN}/auth.md`,
    // Complete anonymous method advertised so agents can discover the surface.
    // POSTs return anonymous_not_enabled — marketing site does not issue agent credentials.
    agent_auth: {
      skill: `${SITE_ORIGIN}/auth.md`,
      register_uri: `${SITE_ORIGIN}/agent/auth`,
      identity_endpoint: `${SITE_ORIGIN}/agent/identity`,
      claim_endpoint: `${SITE_ORIGIN}/agent/identity/claim`,
      claim_uri: `${SITE_ORIGIN}/agent/identity/claim`,
      identity_types_supported: ["anonymous"],
      anonymous: {
        credential_types_supported: ["access_token"],
        claim_uri: `${SITE_ORIGIN}/agent/identity/claim`,
      },
    },
  };
}

export function openIdConfigurationDocument() {
  const oauth = oauthAuthorizationServerDocument();
  return {
    ...oauth,
    subject_types_supported: ["public"],
    id_token_signing_alg_values_supported: ["none"],
  };
}

export function jwksDocument() {
  return { keys: [] as unknown[] };
}

export function mcpServerCardDocument() {
  return {
    $schema: "https://static.modelcontextprotocol.io/schemas/server-card/v1.json",
    serverInfo: {
      name: MCP_SERVER_NAME,
      version: MCP_VERSION,
      title: "Trackdub marketing site",
      description:
        "Read-only MCP tools for Trackdub product pages, pricing summary, and llms.txt.",
    },
    transport: {
      type: "streamable-http",
      endpoint: `${SITE_ORIGIN}/mcp`,
    },
    capabilities: {
      tools: { listChanged: false },
      resources: { listChanged: false },
      prompts: { listChanged: false },
    },
    tools: [
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
    ],
  };
}

export function agentIndexDocument() {
  return {
    name: "Trackdub",
    description: "Local-first Windows desktop workstation for AI video dubbing.",
    website: SITE_ORIGIN,
    agents: [
      {
        id: "trackdub-mcp",
        name: MCP_SERVER_NAME,
        protocols: ["mcp"],
        endpoint: `${SITE_ORIGIN}/mcp`,
        card: `${SITE_ORIGIN}/.well-known/mcp/server-card.json`,
      },
    ],
    updated: "2026-08-02",
  };
}

export function waitlistOpenApiDocument() {
  return WAITLIST_OPENAPI;
}

export function a2aAgentCardDocument() {
  return {
    name: "Trackdub",
    version: MCP_VERSION,
    description:
      "Trackdub marketing site. Local-first Windows desktop workstation for AI video dubbing. Read-only discovery surface for product pages, pricing, and docs.",
    url: SITE_ORIGIN,
    preferredTransport: "JSONRPC",
    supportedInterfaces: [
      {
        url: `${SITE_ORIGIN}/mcp`,
        transport: "JSONRPC",
      },
    ],
    protocolVersion: "0.3.0",
    capabilities: {
      streaming: false,
      pushNotifications: false,
      stateTransitionHistory: false,
    },
    defaultInputModes: ["text/plain", "application/json"],
    defaultOutputModes: ["text/plain", "application/json"],
    skills: [
      {
        id: "site-overview",
        name: "Site overview",
        description: "Return a short product overview of Trackdub.",
        tags: ["docs", "marketing"],
      },
      {
        id: "pricing-summary",
        name: "Pricing summary",
        description: "Return Personal / Pro / Studio pricing summary.",
        tags: ["pricing"],
      },
      {
        id: "list-pages",
        name: "List public pages",
        description: "List public marketing pages and paths.",
        tags: ["docs", "navigation"],
      },
    ],
    documentationUrl: `${SITE_ORIGIN}/llms.txt`,
    provider: {
      organization: "Trackdub",
      url: SITE_ORIGIN,
    },
  };
}

export function authMarkdown(): string {
  return `# auth.md

Trackdub marketing site agent auth notes.

## Audience

AI agents discovering https://trackdub.com. This host is a public marketing site for a local-first desktop product. It is not an agent marketplace registration surface.

## Registration

Agent OAuth registration is not offered on this host.

Discovery documents:

- Protected resource metadata: <https://trackdub.com/.well-known/oauth-protected-resource>
- Authorization server metadata: <https://trackdub.com/.well-known/oauth-authorization-server>
- Registration / identity endpoint: <https://trackdub.com/agent/identity>
- Claim endpoint: <https://trackdub.com/agent/identity/claim>
- Skill: <https://trackdub.com/auth.md>

### Supported methods

The authorization server advertises \`anonymous\` in \`agent_auth.identity_types_supported\` for discovery compatibility. POSTs to the identity/claim endpoints return \`anonymous_not_enabled\`. Do not expect access tokens from this host.

Supported methods that complete successfully: none.

### Credential use

No agent credentials are issued. Public marketing content uses scope \`public:read\` without auth. Humans join the waitlist at <https://trackdub.com/#waitlist> with email + Cloudflare Turnstile.

## What is available without registration

- Public pages (HTML + Markdown via Accept: text/markdown)
- /llms.txt product summary
- Waitlist API POST /api/waitlist (human email + Turnstile)
- Read-only MCP tools at /mcp
- Discovery docs under /.well-known/

## Desktop licensing

Desktop license activation uses https://activate.trackdub.com (machine fingerprint + license key). That is not OAuth agent auth.

## Preferences

Content Signals: ${CONTENT_SIGNAL_VALUE}

## Contact

hello@trackdub.com
`;
}

export function oauthUnavailableJson(description: string, error = "access_denied") {
  return {
    error,
    error_description: description,
    error_uri: `${SITE_ORIGIN}/auth.md`,
  };
}
