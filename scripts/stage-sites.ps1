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
Copy-Item -LiteralPath (Join-Path $output 'server/index.mjs') -Destination (Join-Path $dist 'server/index.js') -Force
