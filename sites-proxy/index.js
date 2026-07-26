const UPSTREAM_ORIGIN = "https://trackdub.com";
const UPSTREAM_HOSTS = new Set(["trackdub.com", "www.trackdub.com"]);

function rewriteLocation(location, upstreamUrl, downstreamUrl) {
  const target = new URL(location, upstreamUrl);
  if (!UPSTREAM_HOSTS.has(target.hostname)) return location;

  target.protocol = downstreamUrl.protocol;
  target.host = downstreamUrl.host;
  return target.toString();
}

export async function proxyRequest(request, fetchImpl = fetch) {
  const downstreamUrl = new URL(request.url);
  const upstreamUrl = new URL(downstreamUrl.pathname + downstreamUrl.search, UPSTREAM_ORIGIN);
  const upstreamRequest = new Request(upstreamUrl, request);
  const upstreamResponse = await fetchImpl(upstreamRequest, { redirect: "manual" });
  const headers = new Headers(upstreamResponse.headers);
  const location = headers.get("location");

  if (location) {
    headers.set("location", rewriteLocation(location, upstreamUrl, downstreamUrl));
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
  fetch(request) {
    // Sites passes (request, env, ctx); keep env from replacing fetchImpl.
    return proxyRequest(request);
  },
};
