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

# LinkedIn personal cover — original navy with tagline
render "linkedin-cover.html"          "linkedin-cover.png"          1584 396

# LinkedIn cover variants
render "linkedin-cover-cream.html"    "linkedin-cover-cream.png"    1584 396
render "linkedin-cover-bold.html"     "linkedin-cover-bold.png"     1584 396
render "linkedin-cover-pillars.html"  "linkedin-cover-pillars.png"  1584 396
render "linkedin-cover-minimal.html"  "linkedin-cover-minimal.png"  1584 396

# Email signature banner
render "email-banner.html"            "email-banner.png"            600 160

# Facebook page cover (1640x856) + matching profile icon (1080x1080)
# Backgrounds match so the circular profile bubble blends into the cover.
render "facebook-cover-cream.html"    "facebook-cover-cream.png"    1640 856
render "facebook-cover-navy.html"     "facebook-cover-navy.png"     1640 856
render "facebook-profile-cream.html"  "facebook-profile-cream.png"  1080 1080
render "facebook-profile-navy.html"   "facebook-profile-navy.png"   1080 1080

# Instagram profile icon, three V-lockup variants (1080x1080 source) + preview sheet
render "ig-icon-a-tucked.html"        "ig-icon-a-tucked.png"        1080 1080
render "ig-icon-b-twotone.html"       "ig-icon-b-twotone.png"       1080 1080
render "ig-icon-c-stack.html"         "ig-icon-c-stack.png"         1080 1080
render "ig-icon-preview.html"         "ig-icon-preview.png"         1600 1200

echo "✓ Banners rendered in deliverables/banners/"
