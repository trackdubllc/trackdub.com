# =============================================================================
# scripts/parse-check.ps1
#
# Parse-check helper for scripts/setup-deploy.ps1.
# Run from repo root:
#   pwsh scripts/parse-check.ps1
#
# Output is one of:
#   "Parse OK (<bytes> bytes)"     -> syntax valid
#   "PARSE ERROR line N: <message>" x N -> fix and re-run
#
# This sidesteps the PowerShell -c quoting trap: variables in the inner script
# are evaluated by the loader of THIS file, not by shell expansion of $-refs
# before pwsh sees them.
# =============================================================================

$ErrorActionPreference = 'Stop'
$target = Join-Path $PSScriptRoot 'setup-deploy.ps1'

if (-not (Test-Path $target)) {
    Write-Host "Target script not found: $target" -ForegroundColor Red
    exit 1
}

$errs   = $null
$tokens = $null
$null   = $null  # ensures $null is defined for ParseFile's [ref]
$ast    = [System.Management.Automation.Language.Parser]::ParseFile(
    $target,
    [ref]$tokens,
    [ref]$errs
)

if ($errs -and $errs.Count -gt 0) {
    Write-Host ''
    Write-Host "Parse FAILED for $target" -ForegroundColor Red
    foreach ($e in $errs) {
        $line = $e.Extent.StartLineNumber
        $col  = $e.Extent.StartColumnNumber
        Write-Host "  line ${line}:${col} - $($e.Message)" -ForegroundColor Red
    }
    exit 1
}

$bytes = (Get-Item $target).Length
Write-Host "Parse OK: $target ($bytes bytes, $tokens.Count tokens)" -ForegroundColor Green
