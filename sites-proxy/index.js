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

function buildUpstreamUrl(downstreamUrl, upstreamOrigin) {
  // Start from the configured origin, then assign path/search. Building with
  // `new URL(pathname + search, origin)` treats paths that begin with `//` as a
  // network-path reference and would route to an arbitrary host.
  const upstreamUrl = new URL(upstreamOrigin);
  upstreamUrl.pathname = downstreamUrl.pathname;
  upstreamUrl.search = downstreamUrl.search;
  return upstreamUrl;
}

export async function proxyRequest(request, options = {}) {
  const fetchImpl = options.fetchImpl ?? fetch;
  const upstreamOrigin = options.upstreamOrigin ?? DEFAULT_UPSTREAM_ORIGIN;
  const downstreamUrl = new URL(request.url);
  const upstreamUrl = buildUpstreamUrl(downstreamUrl, upstreamOrigin);
  const upstreamRequest = new Request(upstreamUrl, request);
  const upstreamResponse = await fetchImpl(upstreamRequest, {
    redirect: "manual",
    signal: request.signal,
  });
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
    return proxyRequest(request, {
      upstreamOrigin: env?.UPSTREAM_ORIGIN || DEFAULT_UPSTREAM_ORIGIN,
    });
  },
};
