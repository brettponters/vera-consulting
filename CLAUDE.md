@AGENTS.md

# VERA Design & Frontend Skills

When working on VERA design deliverables, web components, or frontend code, use the skill that matches the task. Don't do these manually — the skills exist for a reason.

## Standards (always apply, no invocation needed)

ECC rules load automatically from `~/.claude/rules/ecc/web/*` and define the standards for everything below:

- `web/coding-style.md` — CSS tokens, naming, file organization
- `web/design-quality.md` — anti-template policy, required design qualities
- `web/patterns.md` — component composition, state management, data fetching
- `web/performance.md` — Core Web Vitals, bundle budgets
- `web/testing.md`, `web/security.md`, `web/hooks.md` — domain rules

These are the rulebook. Follow them; don't re-derive.

## Skills to invoke (when applicable)

### Branded deliverables — PDFs, one-pagers, strategy guides, proposals, SOWs, invoices

**`vera-branded-pdf`** — Triggers on "make a PDF", "create a proposal", "generate a one-pager", or any request for a VERA-branded document. Knows the VERA palette, typography, page structure, and the `scripts/build-pdfs.sh` workflow. Default for anything in `deliverables/`.

### Frontend interfaces — Next.js site, components, pages

Pick the direction first, then build. Order matters.

**`ecc:frontend-design-direction`** — Use **first** when starting a new surface. Picks editorial / neo-brutalism / glassmorphism / bento / scrollytelling / Swiss / etc. so the build has a real point of view instead of generic defaults.

**`frontend-design:frontend-design`** — Then use for the build itself. Distinctive, production-grade UI. Aligns with `web/design-quality.md` anti-template policy.

**`ecc:frontend-patterns`** — Reference for React/Next.js patterns: composition, state, data fetching, performance. Consult while building.

**`ecc:nextjs-turbopack`** — Next.js + Turbopack specifics. This project is on Next.js 16 (App Router) — see `AGENTS.md` for the "not the Next.js you know" warning.

**`ecc:design-system`** — When extracting reusable design tokens, components, or visual primitives into a system.

**`ecc:accessibility`** — A11y patterns. Apply to anything interactive — not optional.

**`ecc:make-interfaces-feel-better`** — Interface polish: microinteractions, perceived performance, the small details that signal craft.

### Motion / animation

**`ecc:motion-foundations`** → **`ecc:motion-ui`** → **`ecc:motion-patterns`** → **`ecc:motion-advanced`** — Progressive depth. Start with foundations, move up only as needed.

### Visual direction options worth knowing

**`ecc:liquid-glass-design`** — Glassmorphism with real depth.
**`ecc:frontend-slides`** — When the surface is presentation-style (pitch decks, strategy walkthroughs).

### Iterative visual loops

**`gan-design`** / **`ecc:gan-design`** — Generator/evaluator loop with bounded iterations and scoring. Use for polish-heavy work where multiple rounds are expected.

**`multi-frontend`** / **`ecc:multi-frontend`** — Multi-model frontend workflow. Research → plan → execute → review.

### Adjacent — brand, copy, distribution

**`ecc:brand-voice`** — Keep VERA's voice consistent across deliverables.
**`ecc:seo`** — Technical SEO + content/keyword for veraconsulting.co.
**`ecc:ui-demo`** — Record polished demo videos via Playwright when showing the site to prospects.

## Skill priority

When multiple skills match:

1. **`vera-branded-pdf`** wins for anything in `deliverables/`.
2. For net-new frontend surfaces: **`ecc:frontend-design-direction`** → then **`frontend-design`** → then reference **`ecc:frontend-patterns`** while building.
3. **`ecc:accessibility`** and **`ecc:make-interfaces-feel-better`** apply to *any* interactive surface.
4. **`gan-design`** / **`multi-frontend`** wrap the above when "iterate until it's good" is the brief.

## What lives where

- `deliverables/` — branded source HTML for PDFs (strategy guides, brochure, one-pager, banners, business cards, email signature). Edit HTML here, then run `npm run build:pdfs` or `scripts/build-banners.sh`.
- `public/` — rendered PDFs served by Next.js at the site root.
- `src/` — Next.js app (testimonials, marketing pages, routing).
- `scripts/build-pdfs.sh` — headless Chrome render pipeline for all PDFs.
- `scripts/build-banners.sh` — same pattern for social/email banner PNGs.

## Build commands

- `npm run dev` — Next.js dev server.
- `npm run build:pdfs` — regenerate every branded PDF.
- `./scripts/build-banners.sh` — regenerate LinkedIn cover, email banner, etc.

After editing any HTML in `deliverables/`, rebuild the corresponding PDF/PNG before claiming the work is done.

## Do not use

- Vercel-plugin skills (`vercel-plugin:nextjs`, `vercel-plugin:shadcn`, etc.). They load in session context automatically but this project doesn't rely on them. Use ECC rules + the skills above instead.
