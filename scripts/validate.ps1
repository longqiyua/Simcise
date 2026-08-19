[CmdletBinding()]
param()

$ErrorActionPreference = 'Stop'
$repoRoot = Split-Path -Parent $PSScriptRoot
$errors = [System.Collections.Generic.List[string]]::new()

function Add-ValidationError {
  param([string]$Message)
  $errors.Add($Message)
}

$requiredFiles = @(
  'README.md',
  'Lesong Art：Simcise 设计规范.md',
  'SKILL.md',
  'tokens.json',
  'tokens.css',
  'INTEGRATION.md',
  'index.html',
  'CHANGELOG.md'
)

foreach ($relativePath in $requiredFiles) {
  if (-not (Test-Path -LiteralPath (Join-Path $repoRoot $relativePath))) {
    Add-ValidationError "Missing required artifact: $relativePath"
  }
}

try {
  $tokens = Get-Content -LiteralPath (Join-Path $repoRoot 'tokens.json') -Raw | ConvertFrom-Json
  if ($tokens.meta.version -ne 'V1.0') {
    Add-ValidationError "tokens.json meta.version must be V1.0"
  }
  foreach ($product in @('route', 'yuich')) {
    if (-not $tokens.products.$product) {
      Add-ValidationError "Missing product adapter metadata: $product"
    }
  }
  if (-not $tokens.quality.contrast.normalText) {
    Add-ValidationError 'Missing normal text contrast quality gate'
  }
} catch {
  Add-ValidationError "tokens.json is invalid: $($_.Exception.Message)"
}

$textFiles = Get-ChildItem -LiteralPath $repoRoot -File | Where-Object {
  $_.Extension -in @('.md', '.html', '.json', '.css')
}

foreach ($file in $textFiles) {
  $content = Get-Content -LiteralPath $file.FullName -Raw
  if ($content -match '(?i)\bv(?:[2-9]\d*|1\.[1-9]\d*|1\.0\.\d+)\b') {
    Add-ValidationError "Stale secondary version marker in $($file.Name)"
  }
  if ($content -match 'Display\.html') {
    Add-ValidationError "Stale Display.html reference in $($file.Name)"
  }
}

$index = Get-Content -LiteralPath (Join-Path $repoRoot 'index.html') -Raw
foreach ($marker in @(':focus-visible', 'prefers-reduced-motion', 'prefers-contrast', 'aria-live')) {
  if (-not $index.Contains($marker)) {
    Add-ValidationError "index.html missing accessibility marker: $marker"
  }
}

if ($errors.Count -gt 0) {
  $errors | ForEach-Object { Write-Error $_ }
  exit 1
}

Write-Output 'Simcise V1.0 validation passed.'
