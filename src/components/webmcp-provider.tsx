import { useEffect } from "react";

type WebMcpTool = {
  name: string;
  description: string;
  inputSchema: Record<string, unknown>;
  execute: (args: Record<string, unknown>) => Promise<unknown> | unknown;
};

type ModelContext = {
  registerTool?: (tool: WebMcpTool) => void | (() => void);
  provideContext?: (context: { tools: WebMcpTool[] }) => void | (() => void);
};

declare global {
  interface Navigator {
    modelContext?: ModelContext;
  }
}

const TOOLS: WebMcpTool[] = [
  {
    name: "trackdub_open_waitlist",
    description: "Scroll to the Trackdub waitlist form on the homepage.",
    inputSchema: {
      type: "object",
      properties: {
        interest: {
          type: "string",
          enum: ["personal", "pro", "studio"],
          description: "Optional plan interest to preselect.",
        },
      },
      additionalProperties: false,
    },
    execute: async ({ interest }) => {
      const params = new URLSearchParams(window.location.search);
      if (typeof interest === "string" && interest) params.set("interest", interest);
      const query = params.toString();
      const target = `/${query ? `?${query}` : ""}#waitlist`;
      if (window.location.pathname !== "/" || !window.location.hash.includes("waitlist")) {
        window.location.assign(target);
        return { ok: true, navigatedTo: target };
      }
      document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth", block: "start" });
      return { ok: true, scrolledTo: "waitlist" };
    },
  },
  {
    name: "trackdub_list_pages",
    description: "List key Trackdub marketing pages.",
    inputSchema: { type: "object", properties: {}, additionalProperties: false },
    execute: async () => ({
      pages: [
        { path: "/", title: "Home" },
        { path: "/pricing", title: "Pricing" },
        { path: "/docs", title: "Docs" },
        { path: "/changelog", title: "Changelog" },
        { path: "/privacy", title: "Privacy" },
        { path: "/guides", title: "Guides" },
        { path: "/llms.txt", title: "llms.txt" },
        { path: "/auth.md", title: "auth.md" },
      ],
    }),
  },
  {
    name: "trackdub_get_pricing",
    description: "Return Trackdub public pricing summary.",
    inputSchema: { type: "object", properties: {}, additionalProperties: false },
    execute: async () => ({
      plans: [
        { name: "Personal", price: "Free", note: "Watermarked exports, 5-minute max" },
        { name: "Pro", price: "$149", note: "One-time, 2 machine activations" },
        { name: "Studio", price: "In development", note: "Not sold yet" },
      ],
    }),
  },
];

/**
 * Registers browser-side WebMCP tools when navigator.modelContext is available.
 * Safe no-op in browsers without the API.
 */
export function WebMcpProvider() {
  useEffect(() => {
    const modelContext = navigator.modelContext;
    if (!modelContext) return;

    const cleanups: Array<() => void> = [];

    if (typeof modelContext.registerTool === "function") {
      for (const tool of TOOLS) {
        const maybeCleanup = modelContext.registerTool(tool);
        if (typeof maybeCleanup === "function") cleanups.push(maybeCleanup);
      }
    } else if (typeof modelContext.provideContext === "function") {
      const maybeCleanup = modelContext.provideContext({ tools: TOOLS });
      if (typeof maybeCleanup === "function") cleanups.push(maybeCleanup);
    }

    return () => {
      for (const cleanup of cleanups) cleanup();
    };
  }, []);

  return null;
}
