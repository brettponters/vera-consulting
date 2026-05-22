#!/usr/bin/env bash
# Render social/email banner PNGs from their HTML sources.
# Run after editing files in deliverables/banners/.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

if [[ ! -x "$CHROME" ]]; then
  echo "Google Chrome not found at $CHROME" >&2
  exit 1
fi

render() {
  local src="$1" out="$2" w="$3" h="$4"
  echo "→ $src  →  $out  (${w}×${h})"
  "$CHROME" --headless --disable-gpu \
    --window-size="${w},${h}" \
    --hide-scrollbars \
    --force-device-scale-factor=2 \
    --screenshot="$ROOT/deliverables/banners/$out" \
    "file://$ROOT/deliverables/banners/$src" >/dev/null 2>&1
}

# LinkedIn personal cover
render "linkedin-cover.html"  "linkedin-cover.png"  1584 396

# Email signature banner
render "email-banner.html"    "email-banner.png"    600 160

echo "✓ Banners rendered in deliverables/banners/"
