const apexUrl = "https://trackdub.com/";
const wwwUrl = "https://www.trackdub.com/";
const waitlistUrl = "https://trackdub.com/api/waitlist";
const allowedOrigins = ["https://trackdub.dev", "https://www.trackdub.dev"];

function fail(message) {
  throw new Error(message);
}

async function request(url, options) {
  return fetch(url, {
    ...options,
    signal: AbortSignal.timeout(20_000),
  });
}

async function checkWwwRedirect() {
  const response = await request(wwwUrl, { method: "HEAD", redirect: "manual" });
  const location = response.headers.get("location");

  if (![301, 302, 303, 307, 308].includes(response.status)) {
    fail(`www redirect: expected a redirect, received HTTP ${response.status}`);
  }

  if (location !== apexUrl) {
    fail(`www redirect: expected Location ${apexUrl}, received ${location ?? "<missing>"}`);
  }

  console.log(`PASS www redirects to ${apexUrl} (HTTP ${response.status})`);
}

async function checkPreflight(origin) {
  const response = await request(waitlistUrl, {
    method: "OPTIONS",
    headers: {
      Origin: origin,
      "Access-Control-Request-Method": "POST",
      "Access-Control-Request-Headers": "content-type",
    },
  });
  const allowOrigin = response.headers.get("access-control-allow-origin");
  const allowMethods = response.headers.get("access-control-allow-methods");
  const allowHeaders = response.headers.get("access-control-allow-headers");
  const vary = response.headers.get("vary");

  if (response.status !== 204) {
    fail(`${origin} preflight: expected HTTP 204, received HTTP ${response.status}`);
  }
  if (allowOrigin !== origin) {
    fail(
      `${origin} preflight: expected Access-Control-Allow-Origin ${origin}, received ${allowOrigin ?? "<missing>"}`,
    );
  }
  if (allowMethods !== "POST, OPTIONS") {
    fail(
      `${origin} preflight: expected Access-Control-Allow-Methods POST, OPTIONS, received ${allowMethods ?? "<missing>"}`,
    );
  }
  if (allowHeaders !== "Content-Type") {
    fail(
      `${origin} preflight: expected Access-Control-Allow-Headers Content-Type, received ${allowHeaders ?? "<missing>"}`,
    );
  }
  if (!vary?.split(",").some((value) => value.trim().toLowerCase() === "origin")) {
    fail(`${origin} preflight: expected Vary to include Origin, received ${vary ?? "<missing>"}`);
  }

  console.log(`PASS ${origin} waitlist preflight (HTTP 204)`);
}

try {
  await checkWwwRedirect();
  for (const origin of allowedOrigins) {
    await checkPreflight(origin);
  }
} catch (error) {
  console.error(`FAIL post-deploy smoke: ${error instanceof Error ? error.message : error}`);
  process.exitCode = 1;
}
