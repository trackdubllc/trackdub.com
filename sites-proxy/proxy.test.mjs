import assert from "node:assert/strict";
import test from "node:test";

import worker, { proxyRequest } from "./index.js";

test("forwards the path and query to trackdub.com", async () => {
  let upstreamRequest;
  const response = await proxyRequest(
    new Request("https://trackdub.dev/pricing?currency=usd"),
    async (request) => {
      upstreamRequest = request;
      return new Response("ok", { headers: { "content-type": "text/plain" } });
    },
  );

  assert.equal(upstreamRequest.url, "https://trackdub.com/pricing?currency=usd");
  assert.equal(await response.text(), "ok");
  assert.equal(response.headers.get("x-trackdub-mirror"), "chatgpt-sites");
  assert.equal(response.headers.get("x-robots-tag"), "noindex, nofollow");
});

test("forwards request methods and bodies", async () => {
  let upstreamRequest;
  const response = await proxyRequest(
    new Request("https://trackdub.dev/api/waitlist", {
      method: "POST",
      body: JSON.stringify({ email: "person@example.com" }),
      headers: { "content-type": "application/json" },
    }),
    async (request) => {
      upstreamRequest = request;
      return new Response(null, { status: 204 });
    },
  );

  assert.equal(upstreamRequest.method, "POST");
  assert.equal(await upstreamRequest.text(), JSON.stringify({ email: "person@example.com" }));
  assert.equal(response.status, 204);
});

test("keeps same-site redirects on trackdub.dev", async () => {
  const response = await proxyRequest(
    new Request("https://trackdub.dev/old"),
    async () =>
      new Response(null, {
        status: 302,
        headers: { location: "https://trackdub.com/new?from=old" },
      }),
  );

  assert.equal(response.headers.get("location"), "https://trackdub.dev/new?from=old");
});

test("preserves redirects to external sites", async () => {
  const response = await proxyRequest(
    new Request("https://trackdub.dev/docs"),
    async () =>
      new Response(null, {
        status: 302,
        headers: { location: "https://github.com/trackdubllc" },
      }),
  );

  assert.equal(response.headers.get("location"), "https://github.com/trackdubllc");
});

test("ignores the Sites env argument passed to the worker entrypoint", async () => {
  const originalFetch = globalThis.fetch;
  globalThis.fetch = async () => new Response("proxied");

  try {
    const response = await worker.fetch(new Request("https://trackdub.dev/"), { WAITLIST_DB: {} });
    assert.equal(await response.text(), "proxied");
  } finally {
    globalThis.fetch = originalFetch;
  }
});
