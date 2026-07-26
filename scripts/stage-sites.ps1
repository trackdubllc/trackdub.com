$ErrorActionPreference = 'Stop'

$root = Split-Path -Parent $PSScriptRoot
$output = Join-Path $root '.output'
$dist = Join-Path $root 'dist'

if (-not (Test-Path -LiteralPath (Join-Path $output 'server/index.mjs'))) {
  throw 'Missing .output/server/index.mjs. Run npm run build first.'
}

New-Item -ItemType Directory -Force -Path (Join-Path $dist 'server') | Out-Null
New-Item -ItemType Directory -Force -Path (Join-Path $dist 'public') | Out-Null

Copy-Item -Path (Join-Path $output 'server/*') -Destination (Join-Path $dist 'server') -Recurse -Force
Copy-Item -Path (Join-Path $output 'public/*') -Destination (Join-Path $dist 'public') -Recurse -Force

# Sites serves static files from the archive root, while Nitro references
# browser assets as /assets, /fonts, /screenshots, etc.
Copy-Item -Path (Join-Path $output 'public/*') -Destination $dist -Recurse -Force

function Get-ContentType([string] $path) {
  switch ([IO.Path]::GetExtension($path).ToLowerInvariant()) {
    '.css' { 'text/css; charset=utf-8'; break }
    '.js' { 'text/javascript; charset=utf-8'; break }
    '.mjs' { 'text/javascript; charset=utf-8'; break }
    '.json' { 'application/json; charset=utf-8'; break }
    '.txt' { 'text/plain; charset=utf-8'; break }
    '.html' { 'text/html; charset=utf-8'; break }
    '.ico' { 'image/vnd.microsoft.icon'; break }
    '.png' { 'image/png'; break }
    '.jpg' { 'image/jpeg'; break }
    '.jpeg' { 'image/jpeg'; break }
    '.svg' { 'image/svg+xml'; break }
    '.webp' { 'image/webp'; break }
    '.woff2' { 'font/woff2'; break }
    '.pdf' { 'application/pdf'; break }
    default { 'application/octet-stream' }
  }
}

$public = Join-Path $output 'public'
$assetEntries = Get-ChildItem -LiteralPath $public -File -Recurse | ForEach-Object {
  $path = '/' + ($_.FullName.Substring($public.Length).TrimStart('\', '/') -replace '\\', '/')
  $body = [Convert]::ToBase64String([IO.File]::ReadAllBytes($_.FullName))
  "  '$path': { type: '$(Get-ContentType $_.FullName)', body: '$body' }"
}

$staticModule = @"
export const staticAssets = {
$($assetEntries -join ",`n")
};
"@

$wrapper = @"
import worker from './index.mjs';
import { staticAssets } from './static-assets.mjs';

function decodeBase64(value) {
  const text = atob(value);
  const bytes = new Uint8Array(text.length);
  for (let i = 0; i < text.length; i += 1) {
    bytes[i] = text.charCodeAt(i);
  }
  return bytes;
}

const app = {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const asset = staticAssets[url.pathname];
    if (asset) {
      return new Response(decodeBase64(asset.body), {
        headers: {
          'content-type': asset.type,
          'cache-control': 'public, max-age=31536000, immutable',
        },
      });
    }
    return worker.fetch(request, env, ctx);
  },
};

for (const name of ['scheduled', 'email', 'queue', 'tail', 'trace']) {
  if (typeof worker[name] === 'function') {
    app[name] = (...args) => worker[name](...args);
  }
}

export default app;
"@

Set-Content -LiteralPath (Join-Path $dist 'server/static-assets.mjs') -Value $staticModule -Encoding utf8
Set-Content -LiteralPath (Join-Path $dist 'server/index.js') -Value $wrapper -Encoding utf8
