const DEFAULT_UPSTREAM_ORIGIN = "https://trackdub.com";

function upstreamOriginSet(upstreamOrigin) {
  const base = new URL(upstreamOrigin);
  const hostnames = [
    base.hostname,
    base.hostname.startsWith("www.") ? base.hostname.slice(4) : `www.${base.hostname}`,
  ];
  return new Set(
    hostnames.map((hostname) => {
      const candidate = new URL(upstreamOrigin);
      candidate.hostname = hostname;
      return candidate.origin;
    }),
  );
}

function rewriteLocation(location, upstreamUrl, downstreamUrl, origins) {
  const target = new URL(location, upstreamUrl);
  // Compare origin (scheme + host + port), not hostname alone, so a redirect like
  // https://trackdub.com:8443/path is left alone instead of being rewritten to the
  // mirror's default port.
  if (!origins.has(target.origin)) return location;

  target.protocol = downstreamUrl.protocol;
  // Assign hostname and port separately. Setting `host` alone can retain an
  // upstream non-default port (e.g. :8443) on the mirror URL.
  target.hostname = downstreamUrl.hostname;
  target.port = downstreamUrl.port;
  return target.toString();
}

export async function proxyRequest(
  request,
  fetchImpl = fetch,
  upstreamOrigin = DEFAULT_UPSTREAM_ORIGIN,
) {
  const downstreamUrl = new URL(request.url);
  const upstreamUrl = new URL(downstreamUrl.pathname + downstreamUrl.search, upstreamOrigin);
  const upstreamRequest = new Request(upstreamUrl, request);
  const upstreamResponse = await fetchImpl(upstreamRequest, { redirect: "manual" });
  const headers = new Headers(upstreamResponse.headers);
  const location = headers.get("location");

  if (location) {
    headers.set(
      "location",
      rewriteLocation(location, upstreamUrl, downstreamUrl, upstreamOriginSet(upstreamOrigin)),
    );
  }

  // Keep the mirror out of search indexes so trackdub.com remains canonical.
  headers.set("x-robots-tag", "noindex, nofollow");
  headers.set("x-trackdub-mirror", "chatgpt-sites");

  return new Response(upstreamResponse.body, {
    status: upstreamResponse.status,
    statusText: upstreamResponse.statusText,
    headers,
  });
}

export default {
  fetch(request, env) {
    // Sites passes (request, env, ctx); only UPSTREAM_ORIGIN is read from env.
    const upstreamOrigin = env?.UPSTREAM_ORIGIN || DEFAULT_UPSTREAM_ORIGIN;
    return proxyRequest(request, undefined, upstreamOrigin);
  },
};
