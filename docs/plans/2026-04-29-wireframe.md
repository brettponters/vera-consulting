# RAIN — Homepage Wireframe (v0.1)

Date: 2026-04-29
Status: working draft, decisions in flight

## Decisions locked

- **Palette:** Option A (refined cream + off-black + muted terracotta). Hex values below.
- **Acronym:** RAIN remains a chosen word in public. No expansion on homepage, About, footer.
- **Engagement model:** three shapes (Strategy / Build / Steward), no prices, no tiers, parallel one-liners.
- **Book a call:** present in header (always visible) + dedicated section before footer.
- **Animation:** one motion-heavy section only (the calendar). Rest of site stays restrained.
- **Voice:** trusted family doctor / senior engineer. No hype words.

## Palette

| Role | Hex |
|---|---|
| Page background | `#F5EDE0` |
| Raised surface | `#FAF6EC` |
| Body text | `#1A1818` |
| Headings | `#131314` |
| Muted body / metadata | `#6B6359` |
| Hairline / divider | `#E2D8C6` |
| Accent (terracotta) — links, marks, single CTA | `#C97B3F` |
| Second accent (sage) — long-form, footnotes only | `#6B8775` |

## Section order

1. Header
2. Hero
3. Why now (calendar animation — the showpiece)
4. Three shapes (no eyebrow)
5. Selected work
6. Research-backed (reading list preview)
7. About (founder-forward)
8. Book a call
9. Footer

---

## 1. Header

- Logo: RAIN
- Nav: Work · Reading · About
- Right side: **Book a call** (always-visible, restrained, not button-heavy)
- Thin hairline divider, off-black on cream

## 2. Hero

- Eyebrow: "AI consulting · Public Benefit Corporation"
- H1 (~18-22 words, two clauses): worldview + verb-led offer in one breath
  - Placeholder: "We help regulated companies put AI to work — capably, honestly, and with the depth to know how it behaves."
- Subhead (~40-50 words): plain restatement, names the audience (finance, healthcare, legal, regulated B2B SaaS)
- Two CTAs:
  - Primary: "See selected work →"
  - Secondary: "Book a call"
- One atmospheric visual element (NO orbs, networks, gradients)

## 3. Why now — calendar animation (the showpiece)

**No eyebrow.** Let the H2 carry the timeframe implicitly.

- H2: "What gets shipped between now and 2027 will set the audit trail for a decade."

### Calendar animation spec

Section pins on entry; ~250–300vh of scroll distance.

**Layered motion:**

- **Layer 1 — background date ticker:** date numerals advance like a mechanical departures board. Color `#6B6359` at ~25% opacity. Continuous, slow, never grabs focus.
- **Layer 2 — quarterly grid:** cells draw cell-by-cell across 2026 → 2027 tied to scroll progress. Stroke-dasharray reveal. Color `#E2D8C6` (hairline). Quarter labels `#1A1818` monospaced.
- **Layer 3 — anchors:** three weighted dots "land" on quarters as scroll thresholds hit. Slight settle-bounce, then still. Color `#C97B3F`.
- **Layer 4 — connecting lines:** SVG paths draw from each anchor (decision quarter) to a point further right (consequence). Scroll-tied. Color `#C97B3F` drawing in, fading to `#6B6359` after landing.
- **Layer 5 — copy panel:** rides alongside the calendar, advancing the three "decision now → consequence by 2027" pairs in sync with anchor landings. Headings `#131314`, body `#1A1818`.

**Final beat:** all three lines visible, grid pulses subtly (terracotta wash ~5% opacity, breathes once), section unpins.

### Three anchor pairs

```
Anchor 1 — Q2 2026
  DECISION NOW
    Pick a model vendor without an audit interface.
  CONSEQUENCE BY 2027
    External audit reveals months of unloggable inference with no
    recourse to reconstruct.

Anchor 2 — Q3 2026
  DECISION NOW
    Train on customer data without provenance tagging.
  CONSEQUENCE BY 2027
    First GDPR / CCPA discovery request your team can't answer.

Anchor 3 — Q4 2026
  DECISION NOW
    Wire an agent into a core workflow without a rollback path.
  CONSEQUENCE BY 2027
    The system can't be removed without halting the operation it now
    runs.
```

### Closing prose (after unpin)

- "None of these are predictions. They are decisions being made this quarter, in companies that will spend the next ten years living with them. We help our clients make them on purpose."
- Cravath line: "We are not, and do not aim to be, a large firm. We take on a small number of engagements where we can be accountable to the result."

### Animation rules

- All motion ease-out only, no bounce or spring (except the anchor settle, which is a single subtle dampened settle, ~150ms)
- No element animation longer than ~400ms
- Reduce-motion preference: section unpins, all reveals collapse to fade-in only
- Performance: GSAP + ScrollTrigger; SVG paths use `pathLength` for cross-browser consistency
- Mobile: simplified vertical timeline; same anchors, same copy, less motion

## 4. Three shapes

- No eyebrow.
- H2: "Three shapes. Sized to the work."
- Three parallel cards: Strategy / Build / Steward
  - Each: one verb-led sentence, ~22-28 words
  - No prices, no tiers, no "Learn more" buttons
- One sentence below: "Most engagements start with a Strategy conversation."

## 5. Selected work

- Eyebrow: "Selected work"
- Featured: CoAgent
  - Brief description, link to deep-dive page
- Optional second tile or honest "More work to come — by name, when clients have agreed to be named."

## 6. Research-backed (reading list preview)

- Eyebrow: **"Research-backed"**
- H2: "The papers and books our practice is built on."
- 3-4 entries: title · author · year · one-line "why it matters"
- Link: "See the full reading list →"

## 7. About — founder-forward

- Photo of founder (real, not stock)
- One paragraph in founder voice (~80-100 words). Named, first-person.
- One sentence on PBC structure + commitment, stated as fact:
  - "RAIN is incorporated as a Public Benefit Corporation. 5% of net consulting revenue is committed annually to independent AI safety research, in our charter."
- Link: "More about RAIN →"

## 8. Book a call

- H2: "Book a call."
- Body, 2-3 sentences:
  - "Calls are 30 minutes. We talk about what you're trying to do, what you've tried, and what would actually help. No deck. No pitch. If we're not the right fit, we'll say so."
- Primary action: "Schedule a call with [Founder Name] →"
- Secondary: "Or send an email: founder@rain.studio"

## 9. Footer

- RAIN
- One sentence: "RAIN is a Public Benefit Corporation. A fixed percentage of net consulting revenue is committed annually to independent AI safety and alignment research."
- Nav repeated: Work · Reading · About · Contact
- Legal: Charter · Annual benefit report · Privacy
- Copyright

---

## Open slots requiring real copy

1. **Hero H1** — needs the actual thesis sentence. Placeholder gestures at shape only.
2. **Three shapes copy** — Strategy / Build / Steward each need their final one-liner.
3. **Calendar anchor copy** — current placeholders are illustrative; real ones should reflect actual regulated-industry decision patterns the founder has seen.
4. **About paragraph** — founder voice, first-person.
5. **Book a call body** — current draft is close; review for voice fit.

## Pages downstream of this wireframe

- `/work/coagent` — technical deep-dive (already a planned page)
- `/reading` — full reading list with annotations
- `/about` — fuller founder + RAIN page
- `/contact` — Book-a-call form / calendar
