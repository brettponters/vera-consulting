# Design References: Framer-Quality Consulting Website

> Actionable patterns extracted from premium sites. NOT a mood board -- steal specifics, avoid cliches.

---

## 1. Framer-Tier Reference Sites (What Makes Them Feel Premium)

### linear.app
- **Typography**: Cut back to monochrome black/white in 2025 redesign. Bold type as hero element. Variable fonts with tight letter-spacing on headlines.
- **Motion**: Entrance animations on every section. Loading skeletons as design elements, not afterthoughts. Smooth scroll-triggered reveals.
- **Color discipline**: Stripped color to near-zero. Monochrome with rare, intentional pops. Dark-first.
- **What to steal**: The restraint. Almost no color = everything that IS colored hits harder. Section transitions that feel like breathing, not bouncing.
- **What to avoid**: Don't copy the product-dashboard aesthetic if you're not a SaaS tool.

### vercel.com
- **Typography**: Geist Sans/Mono -- custom typeface inspired by Swiss design. Clean, geometric, optimized for both display and code contexts.
- **Layout**: Blueprint grid pattern (subtle dots/lines) behind content. Creates depth without clutter. Hero sections use the grid as texture.
- **Color**: Near-black backgrounds (#000 or close), white text, single accent gradient (subtle, not garish). 4 unique gradients total across the site.
- **Motion**: Minimal but precise. Hover states on cards feel physical. No gratuitous parallax.
- **What to steal**: The grid-as-texture pattern. Geist font (it's open source). The way gradients are used sparingly -- one per section max, desaturated.
- **What to avoid**: Don't replicate the developer-tooling density. A consultant site needs more whitespace.

### raycast.com
- **Typography**: Clean sans-serif, generous sizing. Headlines are statement-sized.
- **Color**: Shining accent colors against dark backgrounds. Linear light effects (glows, spotlights) that feel like real light sources, not flat gradients.
- **Hero pattern**: Product screenshot floating in a dark void with directional lighting. The glow IS the design.
- **What to steal**: Directional light effects -- a single glow source that creates hierarchy. Dark background + one luminous element = instant premium.
- **What to avoid**: The multi-feature grid layout (too product-y for a personal site).

### attio.com
- **Typography**: Clean sans-serif, restrained palette.
- **Layout**: Slim horizontal CTA that stretches near-full-width -- unusual and distinctive. Black/white/gray dominance with occasional color pops on inner pages only.
- **What to steal**: The full-width CTA bar. It's unexpected and draws the eye without being loud. Inner pages earn their color; the homepage stays disciplined.
- **What to avoid**: CRM-style feature grids.

### anthropic.com
- **Typography**: Styrene (Commercial Type) for headlines -- quirky, humanist, NOT generic. Tiempos (Klim) for body -- warm serif that says "we think about words." The slash in the logo is a single standout detail.
- **Color**: Warm palette that deliberately distances from cold-tech blue. Human-centered, not machine-centered.
- **Design philosophy**: Typography IS the brand. No hero images. No product screenshots on the homepage. Pure typographic confidence.
- **What to steal**: The courage to use a serif for body text on a tech site. The warm color system. The idea that your typeface choices ARE your visual identity. If you pick two excellent fonts and pair them well, you don't need illustrations.
- **What to avoid**: Don't use Styrene itself (it's their brand). But DO invest in a distinctive typeface pairing rather than defaulting to Inter.

### Locomotive (locomotive.ca)
- **Credentials**: Awwwards Agency of the Year 7 years running (2025). Webby Award winner.
- **Motion language**: Pioneered Locomotive Scroll (smooth scroll library). Buttery page transitions. Custom cursor effects. Every hover state is a micro-interaction.
- **What to steal**: The idea that scroll FEEL matters as much as scroll CONTENT. Smooth scroll + subtle parallax on a dark background = instant sophistication. Custom cursor that reacts to hoverable elements.
- **What to avoid**: Don't over-animate. Locomotive can do it because they're a motion studio. A consultant site needs 20% of their animation budget.

### Arc Browser / Dia Browser (diabrowser.com)
- **Hero pattern**: Single bold statement + product demo. No feature grids. The hero IS the entire above-the-fold.
- **Typography**: Large, confident headlines. Generous line-height.
- **What to steal**: The single-message hero. One sentence. One visual. That's it. Confidence = premium.
- **What to avoid**: AI-assistant framing (too product-specific).

---

## 2. Solo Consultant / Fractional Executive Sites That Work

### Pattern: What the good ones share
- **Hero structure**: Name + one-line positioning statement + optional subtle visual. NO stock photos. NO headshots above the fold (put those in an "about" section).
- **Social proof placement**: Logos of companies worked with, placed early (before the fold or just after). Not buried at the bottom.
- **Pricing/anchoring**: The best ones don't list prices -- they anchor with outcomes. "Helped X company achieve Y" > "$500/hr."
- **Case study format**: Problem > Approach > Outcome. 3 sentences each. Link to full case study for those who want depth.
- **CTA pattern**: One clear CTA repeated 2-3 times. "Book a call" or "Let's talk" -- not "Learn more."

### swyx.io (Shawn Wang)
- **What works**: Content-forward. The site IS the proof of expertise. Newsletter/blog as the primary asset. Simple layout, fast loading.
- **What to steal**: The idea that your content library IS your portfolio. If you've written/shipped enough, your archive does the selling.
- **What to avoid**: The visual simplicity borders on plain. A consulting site needs more visual polish.

### lennyrachitsky.com (Lenny Rachitsky)
- **What works**: Clean hub that connects newsletter, podcast, and advisory. The brand IS the person. Minimal design lets the content reputation speak.
- **What to steal**: The hub pattern -- one clean page that routes to your different content/service channels. Newsletter as lead magnet.
- **What to avoid**: Too newsletter-centric for a consulting site. Need more service framing.

### nicolalazzari.ai
- **What works**: Clear positioning as "AI Consultant & Creative Technologist." Domain name IS the brand (name + .ai). Personal AI assistant on-site as a differentiator.
- **What to steal**: The .ai domain convention for AI consultants. The idea of embedding a functional demo of your expertise INTO your site.
- **What to avoid**: Putting too much personality/hobbies on the homepage (save for about page).

### General solo consultant patterns (from fractionalctos.org top 20)
- **What the best charge**: $150-500/hr, or $3K-10K/month retainers. Outcome-based packages ($15K-50K) outperform hourly.
- **What their sites do**: Lead with credibility markers (companies scaled, exits, years). Short bio. 2-3 service tiers. One CTA. Fast.
- **What to steal**: The retainer/package pricing model displayed as tiers (not hourly rates). The "I've done this at [logos]" pattern.

---

## 3. AI Consultancy ANTI-PATTERNS (What to NEVER Do)

### The Purple Gradient Problem
- **Root cause**: AI-generated sites default to indigo-500/purple gradients because Tailwind's indigo appeared most frequently in training data. Every AI tool produces the same output.
- **The formula to avoid**: Purple/blue mesh gradient background + Inter font + three-column feature grid with icons + "Transform your business with AI" headline + rounded corners everywhere.
- **Why it's bad**: It's literally what happens when you type "make me an AI consulting website" into any AI tool. It signals "I used a template" to anyone who's seen more than 3 websites.

### Specific anti-patterns to avoid

1. **"Transform/Revolutionize/Harness" headlines** -- These words are the "synergy" of 2025. They say nothing. Replace with a specific claim: "I helped [company] cut inference costs 60%" > "Transform your business with AI."

2. **Neural network / brain / circuit board visuals** -- Stock imagery that screams "I Googled AI." If you must have a visual, make it abstract geometry, not a literal brain with glowing nodes.

3. **Stock robot photos** -- Nothing says "I don't actually work with AI" like a stock photo of a humanoid robot. Real AI work looks like terminals and Jupyter notebooks, not Hollywood robots.

4. **Blue-purple-teal color schemes** -- The unholy trinity of generic AI branding. Every AI startup from 2022-2024 used this palette. Stand out by going warm (Anthropic), monochrome (Linear), or earthy.

5. **"Powered by AI" badges / animated sparkle icons** -- The sparkle emoji as a feature indicator is dead. It went from novel (2023) to cliche (2024) to actively harmful (2025+).

6. **Feature grids with vague icons** -- "Strategy", "Implementation", "Support" with generic icons. If your services need icons to be understood, your copy isn't working.

7. **Chatbot widget on a consulting site** -- Unless the chatbot IS your demo (like nicolalazzari.ai), a generic chatbot says "I bought a SaaS tool" not "I build AI."

### The litmus test
> If you remove your name and logo, could this be ANY other AI consultant's site? If yes, start over.

---

## 4. Motion + Interaction Language (Specific Patterns to Implement)

### Scroll Patterns

| Pattern | Tool | When to use | Example sites |
|---------|------|-------------|---------------|
| Smooth scroll (lerped) | Locomotive Scroll or Lenis | Always -- baseline feel | locomotive.ca, linear.app |
| Scroll-triggered fade-in | Framer Motion `whileInView` | Section entrances | vercel.com, anthropic.com |
| Parallax (subtle, <10% offset) | GSAP ScrollTrigger | Background elements only | Awwwards SOTD winners |
| Scroll-linked progress bar | CSS `animation-timeline: scroll()` | Long pages | Blog/case study pages |
| Pinned section with content swap | GSAP ScrollTrigger pin | Feature showcase (use sparingly) | linear.app features section |

### Cursor Behaviors

| Pattern | Implementation | Effect |
|---------|---------------|--------|
| Custom cursor (dot + ring) | CSS + JS, scale on hover | Feels intentional, not default |
| Magnetic buttons | Framer Motion `useMotionValue` | CTA buttons subtly attract cursor |
| Cursor blend-mode on dark sections | `mix-blend-mode: difference` | Cursor inverts on dark/light boundary |

### Hover States

| Pattern | Where to use | Implementation |
|---------|-------------|----------------|
| Card lift + subtle shadow | Project/case study cards | `translateY(-4px)` + shadow transition |
| Border glow on hover | CTA buttons, feature cards | `box-shadow` with accent color, animated |
| Text reveal on hover | Navigation links | Clip-path or translateY animation |
| Image scale on hover | Portfolio thumbnails | `scale(1.05)` with `overflow: hidden` container |

### Page Transitions

| Pattern | Tool | Notes |
|---------|------|-------|
| Crossfade between routes | Framer Motion `AnimatePresence` | Minimum viable transition |
| Slide + fade | Framer Motion layout animations | For multi-page navigation |
| Shared layout animation | Framer Motion `layoutId` | When clicking from grid to detail view |

### Performance Guardrails
- **Max bundle size increase from animation libs**: 50KB
- **Min FPS on target devices**: 55+ FPS
- **Max CLS impact**: 0.05 or less
- **Prefer CSS animations** for simple opacity/transform. Use JS libraries only for scroll-linked or physics-based motion.
- **`prefers-reduced-motion`**: Always respect. Provide a static fallback.

---

## 5. Recommended Tech Stack for Motion

| Layer | Recommendation | Why |
|-------|---------------|-----|
| Smooth scroll | **Lenis** (successor energy to Locomotive Scroll, more actively maintained) | Locomotive Scroll development slowed (last major update July 2024). Lenis is lighter. |
| Component animation | **Framer Motion / Motion** (motion.dev) | Best React integration. `whileInView`, `AnimatePresence`, layout animations. |
| Complex timelines | **GSAP ScrollTrigger** | When you need pin + scrub + timeline precision. Marketing sections. |
| Micro-interactions | **CSS transitions + Tailwind** | Don't import a library for hover states. |
| Pre-built components | **Magic UI** or **Aceternity UI** | Copy-paste animated components. Good for hero sections, testimonial carousels. |

---

## 6. Typography Recommendations

### Premium font pairings (NOT Inter + system fonts)

| Headline | Body | Vibe | Used by |
|----------|------|------|---------|
| **Geist Sans** | Geist Mono | Developer-tool precision | Vercel (open source, free) |
| **Styrene** | Tiempos | Warm-tech humanist | Anthropic |
| **GT Walsheim** | Soehne | Friendly but serious | Stripe-adjacent sites |
| **Neue Montreal** | General Sans | Modern editorial | Awwwards-tier portfolios |
| **Space Grotesk** | DM Sans | Geometric + approachable | Indie premium |
| **Cabinet Grotesk** | Satoshi | Bold personality | Boutique studios |

### Rules
- Pick ONE headline font and ONE body font. That's it.
- Headlines: 48-80px on desktop. Don't be shy.
- Body: 18-20px minimum. 1.6-1.7 line-height.
- Letter-spacing: Tighten headlines (-0.02em to -0.04em). Leave body alone.
- Weight contrast: Bold (700+) headlines, Regular (400) body. No medium-on-medium.

---

## 7. Color Strategy

### What premium sites actually do

| Strategy | Example | Hex reference |
|----------|---------|---------------|
| **Near-black + white** | Linear, Vercel | `#000`/`#0a0a0a` bg, `#fafafa` text |
| **Warm neutrals** | Anthropic | Cream/sand backgrounds, warm gray text |
| **Monochrome + one accent** | Raycast | Dark bg + single luminous accent (cyan/amber glow) |
| **Dark + muted earth** | basecase.vc vibe | Charcoal + olive/terracotta accents |

### Rules
- Maximum 3 colors (background, text, accent). Everything else is a shade.
- NO gradients on backgrounds unless they're so subtle they're almost invisible.
- If you use a gradient, it's a LIGHT SOURCE (Raycast-style glow), not a SURFACE (mesh gradient).
- Dark mode is the default. Light mode is the variant, not the other way around.

---

## 8. Hero Section Templates (Ranked by Consultant Fit)

### 1. The Statement Hero (BEST for consultants)
```
[Your Name]
[One sentence: what you do + for whom + proof point]
[Single CTA button]
```
- No image. No animation. Just confident typography on a dark/clean background.
- Example: "I help Series A-C startups ship AI products. Previously led ML at [Company]."

### 2. The Proof Hero
```
[Headline claim]
[Row of 4-6 client logos, muted/grayscale]
[CTA]
```
- Logos do the talking. Headline is the "what."

### 3. The Demo Hero
```
[Short headline]
[Embedded interactive demo / terminal / code snippet]
[CTA]
```
- Only if you can show something real. A working prototype > any amount of copy.

### 4. AVOID: The Illustration Hero
```
[Generic headline]
[Abstract AI illustration / mesh gradient / 3D render]
[Multiple CTAs]
```
- This is what every AI template does. It says nothing.

---

## Summary: The 5 Commandments

1. **Dark mode first, warm accents, zero purple** -- Stand out from the AI slop gradient.
2. **Typography IS the design** -- Invest in one great font pairing. Make headlines huge and confident.
3. **Motion as taste signal** -- Smooth scroll + subtle reveals + magnetic buttons. 20% of what Locomotive does, not 100%.
4. **One message per section** -- If you can't say it in one sentence, it's two sections.
5. **Prove, don't claim** -- Logos, numbers, demos > adjectives.
