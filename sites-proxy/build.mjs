import { cp, mkdir, rm } from "node:fs/promises";

// Emit into sites-proxy/dist so paths stay relative to this package
// (wrangler resolves "main" relative to sites-proxy/wrangler.jsonc).
const outDir = new URL("./dist/server/", import.meta.url);

await rm(outDir, { recursive: true, force: true });
await mkdir(outDir, { recursive: true });
await cp(new URL("./index.js", import.meta.url), new URL("./index.js", outDir));
