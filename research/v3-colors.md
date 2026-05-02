# RAIN Color Palette Research

## 1. Reference Palettes

### Anthropic (anthropic.com) — current premium-warm benchmark
- Foreground / off-black: `#131314`
- Cream / paper: `#FAF9F0`
- Terracotta accent: `#D97757` (signature)
- Slate light + cloud light (greyed neutrals via CSS vars)
- Role: cream background, near-black body & headings, terracotta as singular accent (links, selection, hero highlights).
- Signals: literary, calm, "lab notebook" warmth. The terracotta is desaturated enough to read as ink, not branding.

### Stripe Press (press.stripe.com)
- Base: `#181818` (near-black, not pure)
- Vivid yellow accent: `#FFD943`
- Per-book jewel pairings: navy `#0D121F` + silver `#D0D1D4`; burgundy `#6D2B3F`; mauve `#4D1A28` + pink `#EBADCB`; warm gold `#DFC78E` on khaki `#6E665B`
- Signals: serious-publisher confidence; near-black instead of true black is the load-bearing choice — feels printed, not digital.

### Pictet (pictet.com)
- Background: `#F7F7F7` (warm-light grey)
- Body: `#505050`
- Headings: `#794C42` (warm brown — unusual, very heritage)
- Cream tint: `#E9E5E5`
- Bronze accent: `#947068`
- Slate-blue functional: `#4D727A`
- Signals: 1805-old-money. The warm brown headline color (not navy, not black) is the signature — communicates "we don't need to shout."

### Mayo Clinic (mayoclinic.org)
- Background: `#FFFFFF` / secondary `#EBEBEB`
- Body: `#080808`
- Primary blue: `#0057B8`, dark `#002443`, hover `#1371D5`
- Secondary text: `#686868`
- Warning amber: `#C08800` (the only warm note)
- Signals: clinical-cold trust. Useful boundary case — Mayo is *not* warm, despite reputation. Trust here is delivered through saturation discipline and contrast, not warmth.

### Reos Partners (reospartners.com)
- BG: `#FFFFFF` / dark `#23232D`
- Body/headings: `#23232D`
- Burgundy headings: `#820001`
- Orange accent: `#FD6E29` (hot — close to construction)
- Gold: `#F3B120`
- Signals: NGO-energetic; the `#FD6E29` is exactly the saturation RAIN should *not* land on.

### Acumen (acumen.org)
- Background cream "Stone": `#F7F2EA` (very close to RAIN's draft cream)
- White & pure black for type
- Body secondary: `#4B5563`
- Brand purple: `#70147D`, pink: `#AB2182`
- Earthy Spice: `#E45313`, Ember: `#FF3500`
- Deep greens: `#064F23`, `#087323`
- Signals: stone + ink + bold accent, deeply mission-led. The cream `#F7F2EA` is a defensible RAIN background.

### Nava PBC (navapbc.com) — direct PBC peer
- Navy: `#1A2B3D`
- Sage: `#5A7D6E`
- Plum/purple: `#6B4C9A`, `#8B5A8E`
- Gold: `#D4AF37`, light gold `#F5F1E8`
- Body: `#374151`, headings `#111827`
- Signals: government-modern. Navy + sage + gold is the "earnest-civic" formula — credible but slightly earnest for RAIN.

### Range Studio (range.studio)
- BG: `#FFFFFF`, body `#242424`, secondary `#474747`
- Gold: `#D4AF37`
- Periwinkle link `#5C83EE`, dark navy hover `#10182F`
- Signals: studio-neutral with metallic accent. Useful precedent for "near-white + charcoal + brass."

### Civilla (civilla.org)
- Charcoals: `#322B31`, `#363433`, `#40443F`, `#44372F` (warm-leaning)
- Vivid: pink `#FF7AAB`, purple `#5D30A4`, sky `#00ACFF`, gold `#F7B519`
- Signals: civic-design playful. Warm charcoals are useful RAIN reference; the brights are not.

### Reboot (reboot.io)
- White / black / grey `#313131` / light grey `#EEEEEE`
- Teal accent: `#179F76`
- Signals: monochrome + single calm accent. Good structural model, but cold for a coaching firm — they undershot warmth.

### Bridgespan / Sullivan & Cromwell / BBH / Cravath / Wachtell
All resisted CSS extraction. From visual canon: white or near-white BG, navy or near-black body, no warm tone, no accent — pure austerity. This is the boundary RAIN must not approach.

---

## 2. Palette Taxonomy

**Family A — Warm cream + ink + earth accent**
Examples: Anthropic, Acumen, the RAIN draft.
- BG `#F5–F8 EE–F2 E0–EA`, type `#10–15 11–14 12–18`, accent in terracotta/ochre/spice family.
- Suits: mission-led, literary-leaning, small studio with strong POV.
- Signals: thoughtful, calm, post-corporate.

**Family B — Heritage cream + warm brown / bronze**
Examples: Pictet, parts of Stripe Press.
- Light warm-grey BG, brown/bronze headings, slate-blue or sage as functional accent.
- Suits: legacy-feeling firms wanting to look 100 years old at year one.

**Family C — Civic navy + gold/sage**
Examples: Nava, parts of Mayo, Bessemer-style.
- White/cream BG, deep navy headings, gold or sage accent, mid-grey body.
- Suits: gov-tech, regulated B2B, anything pitching to procurement.

**Family D — Near-white + charcoal + metallic**
Examples: Range Studio, Are.na (paper variant), editorial defaults.
- BG `#FFF` or `#FAFAFA`, body `#222–28`, gold/brass accent ~`#D4AF37`.

**Family E — Pure austere (the boundary)**
Examples: Wachtell, Sullivan & Cromwell, BBH, Cravath. RAIN must not enter this family.

---

## 3. The Premium-Warm vs Premium-Cold Boundary

Three measurable choices govern the boundary:

**1. Background hue.** Warm-trust BGs sit at `#F5EDE0`–`#FAF9F0`. Cold-trust BGs sit at `#FFFFFF`–`#F7F7F7`. The 4–8 yellow points of saturation in the cream is the entire difference between "doctor's office" and "law firm."

**2. Off-black, not pure black.** Premium-warm uses `#131314`–`#1A1818`–`#23232D`. Pure `#000000` reads austere or graphic-design-loud. Off-black with a hint of warmth is the trust move.

**3. Accent saturation ceiling.** Trust-warm accents stay at ~50–65% saturation (Anthropic terracotta `#D97757`, Pictet bronze `#947068`). Trust-cold uses no accent. Tech-bro uses 80%+ saturation. The unsafe zone is anything that screams from a thumbnail.

**Rule of thumb:** if you reduce the page to a 3-color thumbnail and it could plausibly be the cover of a Knopf hardcover, you are warm-premium. If it could be a Vercel marketing page, you are tech-bro. If it could be a 1950s Wall Street annual report, you are cold-premium and have undershot warmth.

---

## 4. Accent Color Analysis

| Accent | Hex range | Signals | Pairs with | Avoid |
|---|---|---|---|---|
| Muted terracotta | `#C97B3F`–`#D97757` | Calm, literary, "Anthropic" | cream + ink-black | going past `#E0` saturation → fast food |
| Dusty ochre | `#B8893E`–`#C9A66B` | Heritage, parchment | warm cream, charcoal | greenish-yellow drift |
| Brass / muted gold | `#A88B4A`–`#D4AF37` | Old money, editorial | white, navy, charcoal | shiny chrome gradients |
| Sage | `#5A7D6E`–`#7A9882` | Civic, calm-modern | cream, navy | pastel saturation → wellness |
| Dusty teal | `#4D727A`–`#5E8A92` | Pictet-functional | cream, brown | too blue → corporate |
| Oxblood / burgundy | `#6D2B3F`–`#820001` | Serious, printed | cream, off-black | pure red `#FF0006` |
| Paper-on-cream (no accent) | tone-on-tone | Editorial discipline | type-led layouts | reads flat without strong type |

**Anti-accents:** electric blue `#0066FF`, `#2563EB`; construction orange `#FF6B35`, `#FD6E29`; neon green `#00D084`; violet/cyan gradients; pure cyan `#00ACFF`. Any of these will pull RAIN out of "trust" and into "SaaS startup" within one viewport.

---

## 5. Three Candidate Palettes for RAIN

### Option A — Refined Cream / Off-Black / Muted Terracotta (current direction, tightened)
| Role | Hex |
|---|---|
| Background (page) | `#F5EDE0` |
| Background (raised surface) | `#FAF6EC` |
| Body text | `#1A1818` |
| Headings | `#131314` |
| Muted body / metadata | `#6B6359` |
| Divider / hairline | `#E2D8C6` |
| Accent (links, marks, single CTA) | `#C97B3F` |

Rationale: warmer than Anthropic's `#FAF9F0` (more "paper," less "lab"), with a more muted accent than `#D97757` so it still reads as ink at small sizes. Distinct from Anthropic without abandoning the family.

### Option B — Cream / Ink / Sage (warm-but-different)
| Role | Hex |
|---|---|
| Background | `#F4EFE4` |
| Raised surface | `#FBF7EC` |
| Body | `#1C1B17` |
| Headings | `#11110E` |
| Muted | `#6E6A5E` |
| Divider | `#DED6C4` |
| Accent (sage) | `#6B8775` |
| Optional second accent (deep ochre, sparingly) | `#A8803E` |

Rationale: sage as primary accent reads as calm-civic and patently non-tech-bro. Gives RAIN a distinct lane from Anthropic.

### Option C — Warm-White / Deep Navy / Brass (cooler, more institutional)
| Role | Hex |
|---|---|
| Background | `#FAF7F0` |
| Raised surface | `#FFFFFF` |
| Body | `#1F2733` |
| Headings | `#0F1822` |
| Muted | `#5A6472` |
| Divider | `#E2DED2` |
| Accent (brass) | `#B8903F` |
| Functional secondary (slate) | `#4D727A` |

Rationale: tests the cold boundary. Reads more "Pictet / Bessemer / Bridgespan" than "Anthropic." Strong choice if buyer research shows finance/legal clients reading current draft as too informal. Cost: loses some studio warmth.

---

## 6. Anti-Patterns to Avoid

- **Electric blue accents:** `#0066FF`, `#2563EB`, `#3B82F6`, `#1E40AF` — every "AI for enterprise" startup.
- **Vercel/OpenAI gradients:** any `linear-gradient` mixing violet `#7C3AED`, cyan `#06B6D4`, pink `#EC4899`.
- **Construction orange:** `#FF6B35`, `#FD6E29`, `#FF5722` — saturation too high; reads as alert, not warmth.
- **Pure-black on pure-white:** `#000` on `#FFF` for body — feels brutalist or default-Bootstrap.
- **Neon greens:** `#00D084`, `#10B981` saturated — fintech / crypto signal.
- **Glassmorphism:** semi-transparent panels with blur on gradients — dates the site to 2021.
- **Three-stop branded gradients on text** — purest tech-bro tell.
- **Dark mode as default with cyan accents** — Linear / Vercel cosplay.

---

## 7. Five Takeaways

1. **The current cream + off-black + muted-orange direction is correct** — it sits in the same family as Anthropic, Acumen, and Stripe Press. The refinement work is in saturation discipline, not direction change.

2. **Push the cream warmer than Anthropic, push the accent more muted.** `#F5EDE0` background and a `#C97B3F` accent (vs Anthropic's `#FAF9F0` / `#D97757`) gives RAIN its own room in the family. Anthropic owns its specific pair; do not duplicate.

3. **Use off-black `#131314`–`#1A1818`, never `#000000`.** This single choice does more for the "trusted family doctor" feel than any accent.

4. **Cap accent usage at ~3% of any viewport.** Anthropic, Acumen, Pictet all treat the accent as an underline / mark / single CTA — not as section backgrounds.

5. **Hold a sage or brass alternate in the system as a second accent.** Long-form essays, footer, footnotes can use a desaturated sage `#6B8775` or brass `#B8903F` to avoid the orange becoming monotonous.
