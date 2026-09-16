const apexUrl = "https://trackdub.com/";
const wwwUrl = "https://www.trackdub.com/";
const waitlistUrl = "https://trackdub.com/api/waitlist";
const webBotAuthUrl = "https://trackdub.com/.well-known/http-message-signatures-directory";
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

async function checkWebBotAuthDirectory() {
  const response = await request(webBotAuthUrl);
  const contentType = response.headers.get("content-type") ?? "";
  const body = await response.json();

  if (response.status !== 200) {
    fail(`web bot auth: expected HTTP 200, received HTTP ${response.status}`);
  }
  if (!contentType.includes("application/http-message-signatures-directory+json")) {
    fail(`web bot auth: unexpected content-type ${contentType || "<missing>"}`);
  }
  if (!Array.isArray(body?.keys) || body.keys.length < 1) {
    fail("web bot auth: JWKS must include at least one public key");
  }
  const key = body.keys[0];
  if (key.kty !== "OKP" || key.crv !== "Ed25519" || typeof key.x !== "string") {
    fail("web bot auth: first key must be an Ed25519 OKP JWK");
  }
  if (typeof key.d === "string") {
    fail("web bot auth: directory leaked a private key parameter");
  }

  console.log(`PASS web bot auth directory (${body.keys.length} key)`);
}

try {
  await checkWwwRedirect();
  await checkWebBotAuthDirectory();
  for (const origin of allowedOrigins) {
    await checkPreflight(origin);
  }
} catch (error) {
  console.error(`FAIL post-deploy smoke: ${error instanceof Error ? error.message : error}`);
  process.exitCode = 1;
}
