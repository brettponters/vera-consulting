# RAIN Consulting Site — Design

> **Status:** Approved by user 2026-04-28 (autonomous-loop mode — research → build → review → iterate). User intervenes when something doesn't pass the eye test.

> **Brand placeholder:** `RAIN`. Renamable in one place: `src/config/brand.ts` `BRAND_NAME` constant. Not hardcoded anywhere else.

## Goal

Ship a Framer-tier consulting website for a solo AI consultancy. Two service lanes — **AI strategy** and **custom AI agent builds** — with a **responsible/safe AI** angle expressed as concrete engineering deliverables (red-team report, guardrails spec, monitoring spec), not philosophy. Marquee proof = CoAgent.

## Non-goals (YAGNI)

- Light mode toggle
- CMS / blog
- Multi-language support
- Auth, accounts, dashboard
- Form-to-database backend (contact form posts to email or a webhook only)
- Page transitions beyond fade
- Parallax, scroll-jacking, GSAP timeline spectacles

## Tech Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS for styling
- Framer Motion for entry animations + magnetic CTA
- Lenis for smooth scroll
- Cabinet Grotesk (display) + Satoshi (body) self-hosted woff2
- Deploys to Vercel

## Visual Language (anti-cliché rules are HARD)

- **Dark mode default. Base `#0a0a0a`.** No light mode.
- **Banned:** purple/blue gradients, mesh backgrounds, generic neural-net visuals, stock robot photos, Inter as primary font, Lucide-default-icons-everywhere.
- Single warm accent reserved for CTAs only — burnt orange `#e8693a` (tweakable in `src/config/theme.ts`).
- Subtle dot grid behind hero only (Vercel pattern).
- Motion budget: **20% of Locomotive, not 100%.** Fade-in on view (Framer Motion `whileInView`), magnetic CTA, custom cursor dot. Smooth scroll via Lenis. Respects `prefers-reduced-motion`. Bundle target: < 50KB JS added for motion.
- Performance gate: 55+ FPS scroll, Lighthouse perf ≥ 90.

## Copy Rules (anti-cliché)

**Forbidden words/phrases:**

> leverage, transform, harness, empower, AI-powered, intelligent automation, cutting-edge, revolutionary, unleash, supercharge, next-gen, AI solutions, synergy, paradigm shift, mission-critical, holistic

Anti-position the brand: "No decks. No buzzwords. I build the thing."

Lead with proof, not promise. Hero must contain a named product (CoAgent) or a specific claim, not a verb-heavy abstraction.

## Information Architecture

```
/                  — single-page scroll-driven home
/work/coagent      — CoAgent case study deep-dive
/contact           — book a call / email form
```

Three pages total. No nav menu with 8 items.

## Home Page Sections (top → bottom)

1. **Hero** — Statement layout. Big BRAND_NAME, one-sentence positioning, single CTA.
   - Tentative copy: *"I build AI agents that ship. My latest: CoAgent."*
   - Single CTA: "Book a call" → `/contact`
2. **Anti-position strip** — small text band: *"No decks. No buzzwords. I build the thing."*
3. **Three engagements**:
   - **Sprint** ($X–$Y range visible) — 2-week assessment, deliverable: AI deployment plan + risk register
   - **Build** ($X–$Y range visible) — 6-week defined-scope project, deliverable: shipped agent + red-team report + monitoring spec
   - **Fractional** ("let's talk") — ongoing AI lead retainer
4. **CoAgent marquee** — architecture diagram, 2-min demo (or screenshot if not ready), 2 key metrics, link to `/work/coagent`
5. **How I work** — methodology section. Safety angle expressed as a checklist of concrete deliverables every Build engagement ships with:
   - Red-team report (adversarial probing of the deployed agent)
   - Deployment guardrails spec (input/output filters, refusal patterns, cost caps)
   - Monitoring spec (drift detection, latency budgets, FA-rate ceilings)
6. **About** — short, founder-led, no corporate-speak
7. **Contact CTA** — single big block

## Build Plan — 5 Builder Assignments

Builders run mostly in parallel after **Builder 1** lands the foundation.

### Builder 1: Foundation
Scaffold Next.js project, install deps (Tailwind, Framer Motion, Lenis), set up self-hosted fonts (Cabinet Grotesk + Satoshi), Tailwind theme tokens (`#0a0a0a` base + `#e8693a` accent + neutral scale), `<RootLayout>`, `<SmoothScrollProvider>` (Lenis), brand config at `src/config/brand.ts`, theme tokens at `src/config/theme.ts`. Ships scaffolded `/`, `/work/coagent`, `/contact` route stubs.

### Builder 2: Hero + Anti-position strip
Sections 1 & 2. Hero with statement layout, magnetic CTA button, custom cursor dot, dot-grid texture background, scroll-fade-in for hero text. Anti-position strip below.

### Builder 3: Three Engagements + How-I-work
Sections 3 & 5. Engagement cards with hover state, prices visible on Sprint + Build. Methodology section with the three concrete safety deliverables as a typographic checklist (not generic icons).

### Builder 4: CoAgent marquee + `/work/coagent` deep-dive
Section 4 on home + the full case study page. Architecture diagram (placeholder SVG OK), demo embed slot, two key-metric tiles. Deep-dive page: problem → approach → architecture → results structure.

### Builder 5: About + Contact + `/contact` page
Sections 6 & 7 on home. `/contact` page with email/book-a-call form (posts to a `/api/contact` route that emails or webhooks — placeholder in env). About section copy is short, founder-tone, no corporate speak.

## Review Loop (autonomous)

After each builder ships:
1. **Visual review** — does it match the visual language rules? Anti-cliché rules followed? Bundle size on budget?
2. **If bad:** dispatch researcher for targeted reference pull → rebuild that section.
3. **If good:** advance to next builder slot.
4. User intervenes when something offends the eye.

## Open Items (deferred)

- Final brand name (RAIN is placeholder)
- Final accent color (burnt orange is provisional)
- Real CoAgent metrics (using placeholder numbers until provided)
- Real engagement prices (using placeholder ranges until provided)
- Actual demo video / screenshots (placeholder block until provided)
