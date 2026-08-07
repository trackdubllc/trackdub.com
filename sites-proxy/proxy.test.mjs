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

test("does not rewrite same-hostname redirects on a different port", async () => {
  const response = await proxyRequest(
    new Request("https://trackdub.dev/old"),
    async () =>
      new Response(null, {
        status: 302,
        headers: { location: "https://trackdub.com:8443/internal" },
      }),
  );

  assert.equal(response.headers.get("location"), "https://trackdub.com:8443/internal");
});

test("rewrites www upstream redirects that share the configured origin port", async () => {
  const response = await proxyRequest(
    new Request("https://trackdub.dev/old"),
    async () =>
      new Response(null, {
        status: 302,
        headers: { location: "https://www.trackdub.com/new" },
      }),
  );

  assert.equal(response.headers.get("location"), "https://trackdub.dev/new");
});

test("clears an upstream explicit port when rewriting to the mirror", async () => {
  const response = await proxyRequest(
    new Request("https://trackdub.dev/old"),
    async () =>
      new Response(null, {
        status: 302,
        headers: { location: "https://staging.trackdub.com:9443/new" },
      }),
    "https://staging.trackdub.com:9443",
  );

  assert.equal(response.headers.get("location"), "https://trackdub.dev/new");
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

test("honors a custom UPSTREAM_ORIGIN via env", async () => {
  const originalFetch = globalThis.fetch;
  let upstreamUrl;
  globalThis.fetch = async (request) => {
    upstreamUrl = request.url;
    return new Response(null, { status: 200 });
  };

  try {
    const response = await worker.fetch(new Request("https://mirror.example/faq"), {
      UPSTREAM_ORIGIN: "https://staging.trackdub.com",
    });
    assert.equal(upstreamUrl, "https://staging.trackdub.com/faq");
    assert.equal(response.status, 200);
    assert.equal(response.headers.get("x-trackdub-mirror"), "chatgpt-sites");
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test("ignores unrelated Sites env arguments passed to the worker entrypoint", async () => {
  const originalFetch = globalThis.fetch;
  globalThis.fetch = async () => new Response("proxied");

  try {
    const response = await worker.fetch(new Request("https://trackdub.dev/"), { WAITLIST_DB: {} });
    assert.equal(await response.text(), "proxied");
  } finally {
    globalThis.fetch = originalFetch;
  }
});
