const DEFAULT_UPSTREAM_ORIGIN = "https://trackdub.com";

function upstreamHostSet(upstreamOrigin) {
  const hostname = new URL(upstreamOrigin).hostname;
  return new Set([hostname, hostname.startsWith("www.") ? hostname.slice(4) : `www.${hostname}`]);
}

function rewriteLocation(location, upstreamUrl, downstreamUrl, hosts) {
  const target = new URL(location, upstreamUrl);
  if (!hosts.has(target.hostname)) return location;

  target.protocol = downstreamUrl.protocol;
  target.host = downstreamUrl.host;
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
      rewriteLocation(location, upstreamUrl, downstreamUrl, upstreamHostSet(upstreamOrigin)),
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
