#!/usr/bin/env bash
# Regenerate every branded PDF from its HTML source.
# Output PDFs land in public/ so Next.js serves them at the site root.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

if [[ ! -x "$CHROME" ]]; then
  echo "Google Chrome not found at $CHROME" >&2
  exit 1
fi

render() {
  local src="$1" out="$2"
  echo "→ $src  →  $out"
  "$CHROME" --headless --disable-gpu --no-pdf-header-footer \
    --print-to-pdf="$ROOT/public/$out" \
    --print-to-pdf-no-header \
    "file://$ROOT/deliverables/$src" >/dev/null 2>&1
}

render "strategy-guide/strategy-guide.html"      "strategy-guide.pdf"
render "strategy-guide/strategy-guide-navy.html" "strategy-guide-navy.pdf"
render "brochure/brochure.html"                  "brochure.pdf"
render "one-pager/one-pager-digital.html"        "one-pager-digital.pdf"

echo "✓ All PDFs regenerated in public/"
