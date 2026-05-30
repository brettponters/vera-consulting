# VERA Consulting SEO, Lead Strategist Synthesis

_Generated from an 8-agent parallel audit of the codebase + live site. 112 raw findings, deduped and prioritized._

## 1. Verdict

The site has a genuinely strong structural foundation: clean sitemap (29 URLs), valid robots, canonicals on server-rendered pages, and well-built `/for/[slug]` vertical pages with Service + FAQPage + BreadcrumbList schema. But it is leaking its two most valuable opportunities.

First, the entire local-intent strategy (Boca Raton / Delray Beach / Palm Beach County) is effectively dead: no local pages exist, the `SouthFlorida` component is commented out, every `/locations/*` link 404s, schema `areaServed` says "United States," and there is no Google Business Profile.

Second, two high-conversion pages (`/contact`, `/get-started`) silently emit zero metadata because they are `"use client"` at the page level.

Layered on top is a brand-consistency problem: the canon anchor phrase "runs on trust" lives only in the hero, while six-plus indexed surfaces still say the retired "runs on what they know," and the founder's name appears in indexable copy in violation of the SEO hold. None of this requires a rebuild. It requires disciplined cleanup plus one net-new local content cluster and a claimed GBP.

## 2. Top 10 Highest-Leverage Moves (ranked, deduped)

### 1. Claim and complete the Google Business Profile, the single highest-leverage local move
- **What:** Create and verify a GBP for VERA in Boca Raton. Primary category "Business Consultant," secondaries "Marketing Consultant" / "Coach." Set service area to Palm Beach County, add phone, website, hours, start collecting reviews (5+ to enter the pack).
- **Why:** For local intent ("Boca Raton AI coaching," "AI coach near me"), the map pack is gated entirely on a verified GBP. No amount of on-site schema substitutes. Lives outside the repo; without it the local strategy cannot rank in the 3-pack regardless of code.
- **Effort:** M
- **Where:** External (GBP dashboard) + `src/app/layout.tsx:62` (add GBP URL to `sameAs`).

### 2. Fix the missing metadata on `/contact` and `/get-started`
- **What:** Both `page.tsx` files open with `"use client"`, so Next.js drops all metadata; they inherit the homepage's default title and have no canonical, OG, or Twitter tags.
- **Why:** These are the two conversion pages, indexed with a duplicate homepage title and no canonical. Worst signal-to-value ratio on the site.
- **Fix:** Split each into a server wrapper + client component (as `/about`, `/reading`, `/how-we-work` already do). Rename to `ContactClient.tsx` / `GetStartedClient.tsx`; new `page.tsx` exports `metadata` (unique title, <160-char description with a Boca Raton mention, canonical, OG, Twitter).
- **Effort:** S
- **Where:** `src/app/contact/page.tsx`, `src/app/get-started/page.tsx`.

### 3. Build the local landing-page cluster and re-enable SouthFlorida
- **What:** No page targets any priority local term. `/locations/*` is linked from `SouthFlorida.tsx` but the route directory doesn't exist (hard 404s), and `SouthFlorida` is commented out of the homepage.
- **Fix:** Create `src/app/locations/[slug]/page.tsx` with `generateStaticParams` matching `LOCATIONS`, plus a `/locations` index. Each city page: keyword H1 ("AI Coaching in Boca Raton, FL"), 300–400+ words unique local copy, LocalBusiness JSON-LD scoped to that city, visible NAP, CTA. Add all `/locations/*` to `sitemap.ts`. Uncomment `SouthFlorida` (`src/app/page.tsx:9,44`) once links resolve; put city names in plain body text, not just link labels.
- **Effort:** L
- **Where:** new `src/app/locations/`, `src/components/sections/SouthFlorida.tsx`, `src/app/page.tsx`, `src/app/sitemap.ts`.

### 4. Fix the Organization/LocalBusiness schema for local relevance
- **What:** `areaServed` is the string "United States"; `@type` lacks `LocalBusiness`; `sameAs` empty; `PostalAddress` has no `streetAddress`/`postalCode`; no `logo`, `openingHours`, or founder `Person` node.
- **Why:** A national `areaServed` on a local provider suppresses local-pack eligibility and contradicts the Boca geo-coordinates already present.
- **Fix:** `@type: ["LocalBusiness","ProfessionalService"]`; City/AdministrativeArea `areaServed` (Boca Raton, Delray Beach, Palm Beach County); add `postalCode` (33431/33432) + `streetAddress` matching GBP; add `logo` ImageObject; `openingHours`; founder `Person` node using a role descriptor (not the personal name, per the hold); shorten `serviceType` to "AI Coaching and Consulting."
- **Effort:** M
- **Where:** `src/app/layout.tsx:38-63`.

### 5. Replace "runs on what they know" with "runs on trust" everywhere
- **What:** Six-plus indexed surfaces still use the old phrase; only `Hero.tsx:89` uses the canon.
- **Why:** Brand/keyword signal split across pages; the worst instance is `layout.tsx:10` `SITE_DESCRIPTION`, the fallback meta + OG for every page without its own. The `FounderVision` quote contradicts the hero on the same homepage.
- **Fix:** Targeted string replace in `src/app/layout.tsx:10`, `src/app/page.tsx`, `src/app/for/page.tsx:9,76`, `src/app/coaching/page.tsx:9,96`, `src/app/how-we-work/faq.ts:8`, `src/components/sections/FounderVision.tsx:47-48`.
- **Effort:** S

### 6. Remove the founder's name from indexable body copy (SEO hold violation)
- **What:** "Brett Ponters" renders as visible, crawlable text on the homepage (`FounderVision.tsx:56`, `aria-label` at line 22) and `/our-strategy` (`OurStrategyClient.tsx:174`).
- **Fix:** Replace visible name nodes with "Founder, VERA Consulting"; change the `aria-label` to "Founder of VERA Consulting."
- **Effort:** S
- **Where:** `src/components/sections/FounderVision.tsx:22,56`, `src/app/our-strategy/OurStrategyClient.tsx:174`.

### 7. Add a visible NAP block to the footer
- **What:** No address/phone/email in visible HTML anywhere; NAP lives only in JSON-LD.
- **Why:** Local ranking relies on both structured data and visible-text NAP, consistent with the GBP.
- **Fix:** Add business name, "Boca Raton, FL," phone "+1 (561) 900-8182," and `brett@veraconsulting.co` to `Footer.tsx`, formatted to match the GBP exactly.
- **Effort:** S
- **Where:** `src/components/layout/Footer.tsx`.

### 8. Rewrite keyword-empty title tags on pillar/money pages
- **What:** `/about` = "About"; `/our-strategy` = "Our Strategy"; `/how-we-work`, `/reading`, `/our-work` bare; `/coaching` title is 65 chars (truncates).
- **Fix:** e.g. `/our-strategy` → "AI Strategy for Solo Experts: Coaching, Strategy and Integration | VERA"; `/about` → "About VERA, Founder-Led Agentic AI Coaching"; `/coaching` → "1:1 AI Coaching for Coaches and Consultants | VERA" (~52 chars, match OG/Twitter). Reframe homepage title to "Agentic AI for Coaches and Consultants | VERA Consulting" so it owns brand + agentic and `/coaching` owns "AI coaching," resolving the consulting-vs-coaching cannibalization.
- **Effort:** S
- **Where:** `src/app/{about,our-strategy,how-we-work,reading,our-work,coaching}/page.tsx:5-7`, `src/app/page.tsx:13`.

### 9. Fix internal linking to the orphaned money pages
- **What:** `/coaching` and `/our-strategy` get zero inbound internal links from the footer; content pages don't link to them.
- **Fix:** Add `/coaching` and `/our-strategy` to footer nav. Contextual links: `/ai-fundamentals` closing → `/coaching`; each `/for/[slug]` → `/coaching` + breadcrumb back to `/for`; `/our-work` → `/coaching` + `/our-strategy`; `/reading` → `/our-strategy`. Descriptive anchor text.
- **Effort:** S

### 10. Optimize the hero/messaging core and the heavy media payload
- **(a) On-page:** Homepage H1 is "AI Consulting for Solo Entrepreneurs", that phrase appears nowhere else and isn't a target term; "agentic AI" appears in visible copy exactly once. Change `H1_TEXT` to "Agentic AI Coaching for Coaches and Consultants" (`Hero.tsx:8`); seed "agentic AI" into the `/coaching` H2, `/about` description, WhatWeDo coaching card.
- **(b) Perf:** `public/brett.jpg` is a 6.8 MB unoptimized JPEG loaded as a background image. Convert to AVIF/WebP with responsive `srcset` and explicit dimensions (~6.8 MB → ~0.8–1.2 MB). Direct LCP/CLS hit, worst on mobile.
- **Effort:** a = S, b = M

## 3. Quick Wins, in-repo, doable today

- [ ] Replace "runs on what they know" → "runs on trust" (`layout.tsx:10`, `page.tsx`, `for/page.tsx:9,76`, `coaching/page.tsx:9,96`, `how-we-work/faq.ts:8`, `FounderVision.tsx:47-48`).
- [ ] Remove "Brett Ponters" from `FounderVision.tsx:22,56` and `OurStrategyClient.tsx:174`.
- [ ] Split `/contact` and `/get-started` into server wrapper + client component with real metadata.
- [ ] Change homepage `H1_TEXT` to "Agentic AI Coaching for Coaches and Consultants" (`Hero.tsx:8`).
- [ ] Rewrite bare title tags: `/about`, `/our-strategy`, `/how-we-work`, `/reading`, `/our-work`; shorten `/coaching` (+ matching OG/Twitter).
- [ ] Reframe homepage title to own brand + "agentic AI" (`page.tsx:13`).
- [ ] Schema fixes in `layout.tsx`: `LocalBusiness` type, City/County `areaServed`, `postalCode`, `logo`, `openingHours`, founder `Person` node, concise `serviceType`.
- [ ] Add visible NAP block to `Footer.tsx`; add `/coaching` + `/our-strategy` to footer nav.
- [ ] Add `twitter` block to the 7 pages missing it (`about`, `how-we-work`, `our-strategy`, `our-work`, `reading`, `for`, `charter`); fix homepage OG url trailing-slash mismatch (`page.tsx:23`).
- [ ] `/ai-fundamentals`: change Article `author` Organization → Person, add required `image`, add `@id`, add `LearningResource` node (`page.tsx:29-57`).
- [ ] Fix `ItemList` `url` → `item` in `for/page.tsx:48`.
- [ ] Content correctness: replace `[State]` placeholder in `charter/page.tsx:36`; fix wrong email `hello@vera.ai` → `brett@veraconsulting.co` in `privacy/page.tsx:63`; fix em-dashes in `ThreeShapes.tsx`/`Purpose.tsx`/`lead/route.ts:24`; fix "a team" / "junior teams" positioning slips in `get-started/page.tsx:100`.
- [ ] Replace `new Date()` in `sitemap.ts:7` with honest per-route `lastModified` dates.
- [ ] Add contextual internal links from `/ai-fundamentals`, `/our-work`, `/reading`, `/for/[slug]` to money pages.

## 4. Bigger Bets, net-new pages/content roadmap

1. **Local cluster (highest-ROI net-new).** `src/app/locations/[slug]/page.tsx` + `/locations` index for Boca Raton, Delray Beach, Palm Beach County. Pairs with the GBP claim in move #1. (L)
2. **"Agentic AI for consultants" bridge page.** `/agentic-ai-for-consultants` targeting "agentic AI for solo experts," "AI coaching for consultants," "generative AI consultant." Bridges `/ai-fundamentals` to the offer. (M)
3. **Reposition `/ai-fundamentals` for commercial pickup.** Keep content; retitle toward generative/agentic, add "Generative AI"/"Agentic AI" to schema `about`, add a CTA block to `/for` and the new agentic page. (S)
4. **Standalone `/faq` hub.** Global FAQ + cross-vertical + local-intent questions; FAQPage schema; link from footer/`/coaching`/`/how-we-work`. (S)
5. **Geo modifiers on highest-ICP `/for/[slug]` pages.** Append "Serving coaches and consultants in Boca Raton, Delray Beach, and Palm Beach County, FL" to meta + a geo secondary keyword in `verticals.ts`. (S)
6. **Service / hasOfferCatalog schema for the three pillars + breadcrumbs site-wide.** (M)
7. **Render-perf pass.** Reduce 40 `"use client"` sections, consolidate `AIRoadmap`'s 10+ `useScroll` subscriptions, remove perma-`will-change` on marquees, load Calendly via `next/script` with dedupe, poster/preload on videos. (L)

## 5. Flying Blind, what we cannot assess without live data

Everything above is from static code analysis. We have no access to:

- **Google Search Console:** index coverage, crawl errors, manual actions, impressions/clicks/CTR per page, which queries already get traffic.
- **Live rank positions** for every priority term. Can't confirm the homepage-vs-`/coaching` cannibalization is real without rank data.
- **Google Business Profile status:** whether one exists/is verified, category, review count. Gates the local pack (move #1).
- **Backlink profile / domain authority** (needs Semrush/Ahrefs): can't judge which page should own the primary commercial term.
- **Keyword search volume & difficulty:** cluster is prioritized on intent logic, not demand data. No volume numbers invented.
- **Core Web Vitals field data (CrUX/PSI):** perf findings are lab-reasoned risks; real LCP/INP/CLS unmeasured.
- **Actual Googlebot render** of client-heavy pages: whether hydration failures hide content.
- **Citation consistency** across Yelp/BBB/Bing Places/Apple Maps: needed for a real NAP audit.
- **Rich Results Test output** confirming which JSON-LD nodes Google actually parses.

Recommended before heavy investment: connect GSC + a rank tracker, and check GBP status. Those three unlock prioritization on the local cluster and resolve the cannibalization question with evidence instead of inference.
