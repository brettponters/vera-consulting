# RAIN — Site Design (v0.1)

> Translation of `docs/business-plan.md` into pages, sections, and proposed copy. Read it through, redline anything that's wrong, and we build from the version you approve. No code is written until this doc is settled.

> Voice test (from business plan §7): *"The reader should finish a paragraph and feel: I'm safe in their hands."* Every section in this doc is held to that test.

---

## 1. Site map

Five pages. Right-sized. No filler.

```
/                    Home
/work/coagent        CoAgent — case study deep dive
/reading             What we read — research with plain-English summaries
/about               Studio + structure
/contact             Contact form
```

**Things explicitly not on the site (yet):**
- A blog. We don't have time to maintain one and a stale blog hurts more than no blog. Replaced by the *What we read* page, which is the same energy with less editorial overhead.
- A pricing page. Pricing is private until we have closed engagements to anchor against.
- A team grid with photos. Until there's a real team, the *About* page is one honest paragraph about who's behind RAIN, not a roster of avatars.

---

## 2. Home page — section-by-section

The home page is one continuous narrative. Each section sets up the next. No section is a stacked card; every section reads like the next paragraph of the previous one. This is what "flow right" means.

### 2.1 Hero — *Who we are, what we do, the promise*

No clever tagline. Studio voice. The hero opens with a real paragraph that does the pitch honestly, then a single CTA.

**Proposed copy:**

> RAIN is an AI consulting studio.
>
> Business innovation should be backed by research and fundamentals. You have to understand the fundamentals to understand the risks and the rewards. Most teams adopting AI today are moving fast on tools they don't fully understand — and that's the gap RAIN is built to close.
>
> We help companies put AI to work capably, honestly, and with the depth to know how it actually behaves. The thing we're offering is the feeling of being safe in our hands.
>
> [Let's talk →]

**Visual:** Atmospheric photo (warm, editorial — the current hero photo direction is fine). Light overlay so the copy reads. No buzzword-stack badges. No "trusted by" logo strip until we have logos to put there.

**Motion:** One reveal on scroll for the headline + paragraph + CTA. That's it.

---

### 2.2 What we do — *Three engagement shapes, plain English*

Replaces the current "Engagements" section. Three shapes, no prices, no tier names.

**Heading:** *What we do*
**Subhead:** *Three ways we work with companies. We size each engagement to what the work actually needs.*

**Strategy.**
A short, focused engagement. We come in, look at what you have, look at what you're being sold, and tell you what's real, what's risky, and what's worth doing. The output is a written assessment a non-technical executive can act on — and that often saves you from spending millions on the wrong thing.

**Build.**
We design and ship custom AI systems — agents, internal tools, decision-support, document-handling pipelines, whatever the work needs. We write the code. We integrate it. We test it adversarially. We hand it over with documentation a competent in-house team can maintain.

**Steward.**
Ongoing partnership for clients who want us watching their AI systems over time. Quarterly reviews, incident response, retraining, regulatory adaptation, and the unsexy work of keeping production AI healthy.

**Visual:** Three blocks, equal weight, plain typography. No icons. No prices. No "starting at $X." A small footer line on the section: *Most clients start with Strategy. A subset graduate to Build. A subset of those graduate to Steward.*

---

### 2.3 How we think about this work — *Belief + values, woven*

Combines business plan §2 (what we believe) and §5 (what we care about) into one flowing section. Not stacked value-cards — narrative paragraphs, each setting up the next.

**Heading:** *How we think about this work*

**Opening paragraph (the belief):**
> Business innovation should be backed by research and fundamentals. You have to understand the fundamentals to understand the risks and the rewards. Most teams adopting AI today are moving fast on tools they don't fully understand — and that's the gap RAIN is built to close.
>
> The depth that catches the risks is the same depth that captures the rewards. Reading the research isn't friction on innovation — it's what makes innovation real.

**Then four values, but written as continuing paragraphs, not bullets:**

> **Responsibly powerful.** We don't sell caution. We sell outcomes — real ones — delivered by AI systems that are full-strength: capable, autonomous where it makes sense, integrated deeply into your operations. We're also honest: models hallucinate, agents hit cases their training didn't prepare them for, tools fail in ways that surprise their builders. We don't promise AI that doesn't make mistakes. We promise the discipline that catches the mistakes the moment they happen, contains them, and surfaces them — so the system fails gracefully, not catastrophically.

> **Transparency.** We're open about what we're building, how it works, and what it can and can't do. No black-box demos. No mystified architecture diagrams. Our clients understand what they're getting — and so do their boards, their auditors, and their customers.

> **Data security.** What goes into your models, and what comes out, is treated like the sensitive material it is. Least privilege. Audit trails. Clear ownership. We name the risks of training-data leakage, prompt injection, and model exfiltration explicitly, and we engineer against them.

> **Research-grounded judgment.** The AI field moves fast and most of what's in trade press is wrong. We read the actual papers — alignment, interpretability, agent design, security, safety — and our recommendations are grounded in them. The reading list on this site isn't decoration; it's how we work.

**Visual:** Single column, generous line-height, restrained. No icons next to value names. The names are bold within the paragraph, not floating headers. This is meant to read like a serious essay, not a deck.

---

### 2.4 CoAgent — *The proof, in preview*

Short section that previews the CoAgent case study and links to the full deep-dive at `/work/coagent`.

**Heading:** *CoAgent — what it looks like when we build*

**Body (proposed):**
> CoAgent is a local-first autonomous AI agent we designed and built end-to-end. It runs entirely on the user's own machine, integrates with their tools through open standards (MCP), keeps data local, and queues high-stakes decisions for human approval. We built it to demonstrate every value on this page in working code: powerful (autonomous, multi-tool), responsible (human-in-the-loop where it matters), transparent (architecture and memory readable to anyone who looks), and secure by design (your data never leaves your machine).
>
> It's currently deployed in real estate. The architecture is general.
>
> [Read the full case study →]

**Visual:** Use the existing `CoAgentArchitectureCompact` SVG as the visual anchor (it already lives in the codebase). One line of metric-style proof points if we have any (e.g., "Active in production since [date]" or "Handles X categories of work autonomously"). No fake metrics — only real ones.

---

### 2.5 What we read — *The proof that's hardest to fake*

Preview of the reading list with a link to the full page at `/reading`.

**Heading:** *What we read*

**Body (proposed):**
> The recommendations we make come from somewhere. Below is a small sample of the papers and books our practice is built on. The full list lives at our reading page, updated regularly.
>
> *We don't make this up.*

**Visual:** Quiet horizontal scrolling list (the only animation outside reveals on the entire site) of 6–10 paper titles with author + year underneath. Each card links to the source. No fake "AI summary" — these are real papers we've read, summarized by us in plain English.

[Browse the full list →]

---

### 2.6 The structure — *One paragraph naming the mission lock*

The structure is too important to bury and too prone to becoming a sermon if given its own page. So: one paragraph on the home page, calmly stated, with a link to the full version on `/about`.

**Heading:** *How we're structured*

**Body (proposed):**
> RAIN is a Public Benefit Corporation. The charter names a specific public benefit purpose — advancing the responsible development and deployment of AI — and a fixed percentage of net consulting revenue is committed in writing to independent AI safety and alignment research. Mission lock isn't a marketing line; it's part of the legal entity.
>
> What you get when you hire us is a partner whose incentives can't quietly drift: do the work well, tell the truth, and contribute, transparently, to the safety research the field still needs.
>
> [More on how we're structured →]

**Visual:** Quiet, single-column. No badges or seals (B Corp logo comes later if/when certified). One muted accent line.

---

### 2.7 Contact CTA — *The close*

Short, calm, single-action.

**Heading:** *Working on something serious?*

**Body:**
> Tell us about it. We read every message ourselves and reply within two business days.
>
> [Start a conversation →]

**Visual:** A quiet final band. No form on the home page — the CTA links to `/contact`.

---

## 3. CoAgent page (`/work/coagent`) — section-by-section

The deep dive. Written for engineers AND the executives who employ them.

**Sections (in order):**

1. **Hero** — title + one-paragraph framing.
2. **What it is** — the elevator description, slightly longer than the home preview.
3. **Architecture** — the diagram + a plain-English walkthrough of how the pieces connect (Claude as brain, MCP servers as hands, memory as markdown, triggers as wake-up sources). Honest, not hand-wavy.
4. **The autonomy split** — what runs automatically vs. what queues for approval, and why we drew the line where we did. This is the "responsibly powerful" value made concrete.
5. **What we got right** — design choices that paid off (local-first, MCP, markdown memory, etc.) and why.
6. **What broke** — actual failure modes we hit and what we did about them. This is the most important section. Most case studies skip it; ours leads with it.
7. **What it taught us** — the lessons that inform how RAIN approaches every engagement.
8. **CTA** — *Want to see something like this for your business?* → contact.

**Voice:** Same as the rest of the site, but slightly more technical. Doesn't dumb it down. Doesn't show off either.

**Visual:** Diagrams over decoration. Real screenshots if we have them and they're not embarrassing. Code excerpts only when they make the point clearer than prose. No "wow" cinematic transitions.

---

## 4. Reading page (`/reading`) — section-by-section

The list, with care.

**Sections:**

1. **Hero / framing.** One paragraph: *"This is what our practice is built on. We update it as our reading evolves. If you've read these too, we probably already speak the same language."*
2. **The list, categorized.** Five categories matching the business plan §5: Alignment, Interpretability, Agent design, Security, Safety. Each entry includes:
   - Title
   - Author(s) + year
   - Source link (arXiv, publisher, etc.)
   - 2–3 sentence plain-English summary written by us
   - One sentence: *"Why this matters to our work."*
3. **Update note.** *"Last reviewed: [date]. We add and remove entries as our practice evolves. If there's a paper you think should be here, tell us."*

**Editorial standard:** Every entry is a real paper or book we have actually read. No padding. Better to ship 12 honest entries than 50 dressed-up ones. New additions go through a real read-and-summarize pass — never an AI-generated summary, because that would be the exact opposite of the section's whole point.

**Open question:** Initial seed list of 10–15 papers needs to be assembled. (Founder + me — I can propose a starting set drawn from what RAIN's work actually relies on; you confirm or swap.)

---

## 5. About page (`/about`) — section-by-section

Honest and short. The structure content from business plan §8 lives here, condensed.

**Sections:**

1. **Studio.** Who's behind RAIN. One paragraph, in the founder's own voice. Honest about the size — RAIN today is a studio of one. We do not invent a team.
2. **Structure.** Concise version of business plan §8. PBC status, what the public benefit charter binds the studio to, the annual benefit report, what it doesn't mean (not a non-profit; clients don't get tax deductions; it's a legitimate for-profit consulting business with a legally binding mission). No legal jargon.
3. **The commitment.** The safety-research grant commitment — the percentage, the recipient orgs, when it's reviewed. Link to the most recent annual benefit report once one exists.
4. **Advisors / advisory board.** When real people are advising, listed here with one-line bios. Until then, this section is empty rather than fictional.
5. **Contact link.** *Want to talk?* → /contact.

**Open questions for founder:**
- Founder bio (one paragraph in your own voice — I can draft a structure, you fill in or rewrite)
- Initial advisors (when ready to name them)
- Final safety-research percentage (placeholder 5%) and recipient orgs (named in §11 of business plan, still open)

---

## 6. Contact page (`/contact`) — section-by-section

Already largely built in the codebase. Light edits to bring voice in line.

**Sections:**

1. **Heading + framing.** *"Tell us what you're working on."* One short paragraph: how we read every message, response time, and a note that there's no sales funnel — the next thing that happens is a real conversation with a real person.
2. **Form.** Name, email, message. Optional company / role fields. No multi-step funnel. No "What's your budget?" dropdown.
3. **Confirmation.** After submission: a calm thank-you and an honest note about what happens next.
4. **Alternative.** Founder email address as a fallback for people who don't trust forms.

**Voice on the form labels and placeholders matters.** Replace any "Your message" placeholder text with something like *"What are you trying to figure out, ship, or fix?"* — invites real content, signals the kind of conversation we want.

---

## 7. What gets removed from the current build

The codebase currently has structure that doesn't match this plan. Things to delete in the cleanup pass:

- **AntiPosition strip** ("No decks. No buzzwords.") — performative, gone.
- **HowRainWorks multi-part narrative section** — content folds into §2.3 ("How we think about this work") on home + the §5 about page. The standalone section disappears.
- **CoAgentMarquee** (if still on home) — replaced by §2.4 preview.
- **Engagements section** with three engagement cards — replaced by §2.2 ("What we do") with no pricing tier framing.
- **Standalone "Our commitment" band** (if any) — content folded into §2.6 home + §5 about.
- **Decorative orange hairline divider** — gone (was a leftover from the dark version).
- **Selected Work section** — replaced by §2.4 (CoAgent preview); no need for a separate "selected work" framing when there's one named project.

---

## 8. Visual direction (locked from prior decisions, restated for clarity)

- **Palette:** Warm cream / off-black / muted orange accent. Already wired (`globals.css`, `theme.ts`). Light, welcoming, professional.
- **Typography:** Cabinet Grotesk (display) + Satoshi (body). Already wired.
- **Imagery:** Editorial / atmospheric photography only. No stock people. No "diverse team in conference room" shots. No AI-generated images. Photos credit visible, small, in corner.
- **Motion:** Restrained. Reveals on scroll, only. One quiet horizontal carousel for the *What we read* preview. No marquees, no parallax theatrics, no cursor effects, no smooth-scroll libraries.
- **Density:** Generous whitespace. Long line-heights. The site reads like an essay, not a brochure.

---

## 9. Voice rules (the test, restated)

Every line of copy on the site is held to one test:
> *Does this make the reader feel safe in our hands?*

If a sentence makes the reader feel pitched, hyped, or sold to, it gets cut.

**Forbidden phrases (the no-fly list):**
> leverage, transform, harness, empower, AI-powered, intelligent automation, cutting-edge, revolutionary, unleash, supercharge, next-gen, AI solutions, synergy, paradigm shift, mission-critical, holistic, world-class, best-in-class, game-changing, disruptive

**Studio voice rules:**
- No first person singular ("I"). RAIN is the subject.
- "We" used carefully — only when it actually means the team, not as a marketing voice trick.
- Plain English. Sentences a smart non-technical executive understands without effort.
- No hyped adjectives. The work speaks; the copy points to it.

---

## 10. Open decisions (for the founder)

Things only you can resolve before we ship:

1. **Founder visibility on /about.** What goes in the studio paragraph? Are you naming yourself? Is there a real headshot? Or is RAIN deliberately not-a-personal-brand and the about page leads with the studio rather than the founder?
2. **Initial reading list.** I propose a starting set of 10–15 papers; you confirm or substitute.
3. **Real metrics on the CoAgent page.** Are there specific real numbers we can cite (uptime, tasks handled, time saved)? Or do we ship the case study without numbers and add them later when we have permission to share?
4. **Email / contact alternative.** Is there a public-facing email address you're comfortable putting on the site, or is the form the only entry point?
5. **Imagery sourcing.** Stick with the warm editorial photography we have, or commission specific photography for RAIN? (Recommendation: keep the existing editorial direction for v1; commission later.)

---

## 11. Build order (when this doc is approved)

The order I'd build in, smallest blast radius first:

1. **Cleanup pass** — delete the sections being removed (§7 of this doc), commit clean baseline.
2. **Home page rebuild** — top-to-bottom, section by section, in order. Each section gets reviewed before the next one is built.
3. **About page** — short, mostly text, fast to build.
4. **Contact page** — already mostly built, light voice edits.
5. **Reading page** — content-heavy. Wait for founder-confirmed initial reading list before committing styled output.
6. **CoAgent page** — biggest single page, technical content. Built last because it benefits from the rest of the site being settled first.

Each step ends in a working, deployable site. We can stop at any point and the site is still complete (just narrower in scope) — no "half-broken state" between deploys.

---

*End of v0.1. Mark this up. Strike anything that's wrong. Add anything that's missing. The build doesn't start until this doc is right.*
