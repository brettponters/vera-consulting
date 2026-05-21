# v3 Warmth Research: Making RAIN's Dark Site Feel Welcoming

## Current Diagnosis

RAIN v2 is technically well-built but reads cold. The problems are specific:

- **Palette is binary.** #0a0a0a background, #ededed text, one orange accent used sparingly. No mid-tones, no warmth in the neutrals. The gray (#888) is a dead neutral -- no warmth bias at all.
- **No imagery anywhere.** The only visual is a technical SVG architecture diagram. Every section is text-on-black.
- **Voice is defensive.** "No decks. No buzzwords." / "gets declined" / "not optional" / "not an upsell." The copy defines RAIN by what it refuses rather than what it offers. This reads as guarded, not confident.
- **No human presence.** No photos, no materials, no light, no texture beyond a barely-visible dot grid and grain filter at 3% opacity.
- **Uniform density.** Every section has the same visual weight: eyebrow, heading, body text, list. No breathing room, no visual variety, no moments of surprise.

The site says "we're serious" but never says "we're glad you're here."

---

## 1. Warm Professional Dark Sites -- Reference Tactics

### Anthropic (anthropic.com)
**Warmth tactic: warm neutral palette on dark.** Anthropic's dark sections don't use pure black (#000 or #0a). They use a warm dark -- closer to #1a1915 or a dark charcoal with brown undertone. Their text isn't pure white either; it's a warm off-white. This micro-shift makes the entire surface feel inhabited rather than void-like.

**Takeaway for RAIN:** Shift bg-base from #0a0a0a to something like #0c0b0a (barely warm black). Shift fg-base from #ededed to #f0ede8 (barely warm white). The eye won't register the change consciously but the feel shifts from "terminal" to "room at night."

### Linear (linear.app)
**Warmth tactic: generous whitespace as invitation.** Linear's dark site feels breathable because of how much space surrounds each element. Headlines get enormous margins. Sections don't crowd each other. The spacing itself communicates confidence -- "we don't need to fill every pixel to justify ourselves."

**Takeaway for RAIN:** Current py-24 padding is adequate but uniform. Vary section padding -- hero needs more bottom breathing room, the methodology section needs more internal spacing between steps. Let some sections be sparse.

### Stripe Press (press.stripe.com)
**Warmth tactic: editorial photography and typographic variety.** Stripe Press introduces warmth through full-bleed photography with warm tones (amber, cream, natural light) and a mix of type sizes that feels like a magazine rather than a SaaS site. The combination of large display type and intimate body copy creates a human rhythm.

**Takeaway for RAIN:** Introduce 1-2 photos with warm ambient light. Vary the typographic scale more -- some sections could use a larger, more generous body text size (text-xl instead of text-lg for key statements).

### Resend (resend.com)
**Warmth tactic: subtle color in the dark palette.** Resend uses a very dark background but introduces color not through gradients or meshes but through colored code blocks, tinted UI screenshots, and accent colors that appear in context rather than in isolation. The color feels earned rather than decorative.

**Takeaway for RAIN:** The orange accent (#e8693a) only appears on buttons and one hairline. Let it appear in more contextual places -- a tinted border on case study cards, a warm glow on hover states, an accent in the methodology numbering.

### Plain (plain.com)
**Warmth tactic: direct, first-person voice that respects the reader.** Plain's copy speaks to you without performing. "We built Plain because..." rather than "Plain is a..." It's declarative without being defensive. The tone assumes you're smart and doesn't waste your time.

**Takeaway for RAIN:** The current copy explains what RAIN won't do ("no decks, no buzzwords, gets declined") more than what it will do. Flip the ratio. Lead with what the reader gets, mention the discipline second.

### Vercel (vercel.com)
**Warmth tactic: real product imagery creates credibility.** Vercel's dark site works because it's full of real screenshots, real terminal output, real deployment logs. These artifacts are warm because they're evidence -- they make the abstract concrete and the dark background becomes a stage rather than a void.

**Takeaway for RAIN:** The CoAgent architecture diagram is clinical. Replace or supplement it with a real screenshot of the product in use, or a photo of actual work artifacts (a terminal, a notebook, a whiteboard sketch).

### 37signals / Once (once.com)
**Warmth tactic: opinionated prose that shows personality.** Once.com is mostly text but it's warm because the writing has a point of view, humor, and rhythm. It reads like a person wrote it, not a committee. The confidence comes from saying something specific, not from withholding.

**Takeaway for RAIN:** The About and Methodology sections read like specifications. They need moments of human voice -- a sentence that reveals how RAIN actually thinks, not just what it delivers.

---

## 2. Photography in Dark Sites

### What works on dark backgrounds

**Warm ambient light, not studio light.** Photos that land well on dark sites have natural or incandescent light -- desk lamps, screen glow, late-afternoon window light. Cool blue-white studio lighting looks clinical against dark backgrounds.

**Materials and surfaces, not faces.** The strongest editorial photos on dark sites show: hands on keyboards, notebooks with handwriting, screens with code, printed documents on desks, architectural details, workshop tools. These create human presence without the stock-photo problem.

**Aspect ratios that breathe.** Wide aspect ratios (16:9 or wider) work better than square or 4:3 on dark sites. They create horizontal bands of warmth without dominating vertical scroll. Many strong dark sites use cropped panoramic photos that span the full width at maybe 300-400px height.

**Treatment: slightly muted, not desaturated.** Full-saturation photos pop too aggressively against dark backgrounds. The move is to pull saturation down 10-20% and add a slight warm tone shift (think VSCO-style film emulation, not Instagram filter). This makes the photo feel integrated rather than pasted on.

### Anti-patterns to avoid

- **Stock "diverse team around laptop"** -- instantly reads as purchased, kills credibility
- **Headshots on dark backgrounds** -- reads like a LinkedIn section
- **Photos with white/bright backgrounds** -- creates jarring contrast islands
- **Highly saturated hero images** -- fights the dark palette instead of complementing it
- **AI-generated imagery** -- experienced viewers spot it; undermines a site about technical credibility

### Recommended photo subjects for RAIN

1. Close-up of a screen showing a terminal or code editor, warm desk light visible in the reflection
2. A notebook or paper with handwritten architecture sketches, pen resting on it
3. An oblique shot of a workspace -- keyboard, coffee, monitor edge -- shallow depth of field
4. Abstract architectural detail (concrete, steel, glass) with warm natural light
5. Close-up of hands typing or writing -- no face needed

---

## 3. Substantive Narrative Sections

### The problem with RAIN's current prose

The "How RAIN Works" section lists three deliverables (red-team report, guardrails spec, monitoring spec) but never explains *why* these matter or *what experience led to this approach*. The About section says "A small studio that builds AI agents" but never says what RAIN has learned, what it believes, or why the reader should trust it.

Substantive narrative means prose that teaches the reader something or reveals a point of view they hadn't considered.

### Reference: Linear's method page

Linear's product pages include essay-style sections where the founders explain *why* they made specific technical decisions. "We chose X because Y, and here's what most teams get wrong about Z." This format -- thesis, evidence, implication -- creates trust because it demonstrates thinking, not just output.

### Layout for substantive prose on dark sites

The best examples use:

- **max-w-2xl or max-w-prose** (RAIN already does this -- good)
- **Generous line-height** (1.75-1.8 for body text in narrative sections)
- **Pull quotes or highlighted sentences** -- a single sentence from the paragraph set in larger type or with a left accent border. This breaks the wall of text and gives the reader entry points.
- **Section breaks within the narrative** -- not just heading + paragraph, but heading + lead paragraph + sub-sections with their own rhythm. Think essay structure, not feature list.

### What RAIN's narrative section should say

Instead of listing deliverables, explain the *reasoning*:

- Why does every build ship with a red-team report? Because RAIN has seen what happens when agents go to production without adversarial testing. Give one concrete example (anonymized) or a specific insight.
- Why guardrails before launch, not after? Because the cost of a production failure in AI isn't a bug ticket -- it's a trust violation. Say that.
- Why a monitoring spec? Because "it worked on demo day" is the most dangerous sentence in AI deployment.

This transforms the methodology from a feature list into a manifesto -- something that demonstrates expertise rather than just claiming it.

---

## 4. Voice: Welcoming Without Being Chummy

### The current voice problem

RAIN's copy oscillates between two registers:
1. **Guarded/defensive:** "No decks. No buzzwords. Gets declined."
2. **Specification-dry:** "Adversarial probing of the deployed agent -- prompt injection, jailbreaks, edge-case failures -- with severity ratings and remediation steps."

Neither register says "welcome." The first says "prove you're worthy." The second says "here's a technical document."

### The target register: confident directness

The voice RAIN needs is what you'd use if a smart potential client asked "what do you do?" over coffee. You'd be:
- **Direct** without being curt
- **Specific** without being exhaustive
- **Warm** without being casual ("we'd love to chat!" is not it)
- **Opinionated** without being combative

### Reference: Anthropic's public-facing copy

Anthropic's website copy is a strong model. It says things like "We research AI safety because we believe AI systems will be transformative, and the path to beneficial AI requires deliberate effort." That sentence is:
- Clear (no jargon)
- Warm (uses "we believe" -- reveals the human behind the company)
- Confident (doesn't hedge or qualify)
- Substantive (says something you can agree or disagree with)

### Specific voice fixes for RAIN

| Current (cold) | Proposed direction (warm) |
|---|---|
| "No decks. No buzzwords. The thing gets built." | "We build the thing. That's the whole pitch." |
| "Speculative builds... get declined." | "We take on work where we can ship something real." |
| "Not optional. Not an upsell." | "This is standard. Every build ships with it." |
| "If RAIN can help, the answer will be straightforward. If not, that will be clear too." | "Tell us what you're building. We'll be honest about whether we can help." |
| "A small studio that builds AI agents and ships them to production." | "RAIN is a small studio. We build AI agents and make sure they hold up after launch." |

The pattern: replace negation-first statements with affirmative-first statements. Say what you do, then (if needed) contrast with what you don't.

---

## 5. Anti-Patterns to Avoid

These will make the site feel worse, not better:

- **Stock photography of diverse teams laughing around laptops.** The single fastest way to look generic. If you can't shoot original photos, use materials/spaces/objects instead of people.
- **Glossy gradient mesh backgrounds.** These were fresh in 2022. Now they signal "template." RAIN's flat dark is actually better than a mesh -- it just needs warming, not decorating.
- **"We're a team of passionate..."** -- any copy that could describe any company describes no company. Every word should be specific to RAIN.
- **Marketing words:** transform, leverage, unlock, empower, revolutionary, cutting-edge, next-generation. Already banned in v2 -- keep the ban.
- **Hero photos of attractive people in offices.** This is the visual equivalent of "passionate team" copy. It says nothing and costs credibility.
- **Animated gradient orbs or floating particles.** These signal "crypto landing page" or "AI startup template." RAIN's restraint on motion is a strength -- keep it.

---

## Top 5 Punch List: Concrete Moves to Warm Up RAIN

### 1. Warm the palette (30 minutes)
Shift bg-base from `#0a0a0a` to `#0d0c0b` (warm black). Shift fg-base from `#ededed` to `#f0ede8` (warm white). Shift fg-muted from `#888888` to `#8a8680` (warm gray). This single change makes every section feel less clinical. The grain overlay and dot grid will also feel warmer because they inherit from these base colors.

### 2. Add 2-3 editorial photos (2-3 hours)
One in or near the hero area (atmospheric -- workspace, warm light, shallow DOF). One in or near the About section (materials -- notebook, pen, paper with sketches). Optionally one in the methodology section (screen showing real work). Treatment: slightly muted, warm-toned, wide aspect ratio. Use `next/image` with blur placeholder for performance.

### 3. Rewrite copy affirmative-first (1-2 hours)
Flip the About section, AntiPosition line, and Contact CTA from negation-leading ("no decks, no buzzwords") to affirmation-leading ("we build the thing"). Keep the directness, lose the defensiveness. Add 2-3 sentences to the About section that reveal what RAIN believes, not just what it does.

### 4. Expand "How RAIN Works" into a narrative section (2-3 hours)
Replace the current three-item list with a short essay (3-4 paragraphs) that explains *why* each deliverable matters. Include one pull-quote or highlighted sentence per sub-section. Use slightly larger body text (text-xl) and more generous spacing. This section should be the intellectual heart of the site -- the place where a reader thinks "these people know what they're doing."

### 5. Let the accent color breathe (30 minutes)
Currently the orange accent appears only on CTAs and one decorative hairline. Let it appear in: methodology step numbers (at reduced opacity), borders on the case study card, hover states on text links, and the pull-quote accent bar in the narrative section. This spreads warmth through the page without adding new colors.
