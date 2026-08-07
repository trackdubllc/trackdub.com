import { cp, mkdir, rm } from "node:fs/promises";

// Emit into sites-proxy/dist so the path stays relative to this directory
// (wrangler resolves "main" relative to the config file).
const outDir = new URL("./dist/server/", import.meta.url);

await rm(outDir, { recursive: true, force: true });
await mkdir(outDir, { recursive: true });
await cp(new URL("./index.js", import.meta.url), new URL("./index.js", outDir));
