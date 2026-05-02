# Components contract — v3 (white system)

Read this before writing any section component. These conventions are mandatory for all agents working under tasks #20–#25.

---

## Palette

All color values are locked. Use CSS variables or the Tailwind tokens below. Never hardcode hex values in component files — use the variable names.

| Role | CSS variable | Tailwind class | Hex |
|---|---|---|---|
| Page background | `var(--color-bg)` | `bg-[var(--color-bg)]` | `#FFFFFF` |
| Surface tint | `var(--color-surface)` | `bg-[var(--color-surface)]` | `#FAFAF7` |
| Body text | `var(--color-body)` | `text-[var(--color-body)]` | `#0F0F10` |
| Headings | `var(--color-heading)` | `text-[var(--color-heading)]` | `#050507` |
| Muted body / metadata | `var(--color-muted)` | `text-[var(--color-muted)]` | `#5C5C66` |
| Hairline / divider | `var(--color-hairline)` | `border-[var(--color-hairline)]` | `#E6E6EA` |
| Accent (terracotta) | `var(--color-accent)` | `text-[var(--color-accent)]` | `#C97B3F` |
| Second accent (sage — reserved for long-form, footnotes only) | `var(--color-sage)` | `text-[var(--color-sage)]` | `#6B8775` |

Cap accent usage to roughly 3% of any viewport. Accent is for filled CTAs, underlines, marks, and a single highlight per section — never for section backgrounds.

For non-CSS contexts (framer-motion inline styles, SVG strokes): import from `@/lib/theme`.

```ts
import { palette } from "@/lib/theme";
// palette.accent === "#C97B3F"
```

---

## Typography

Single font family: **Geist** (geometric humanist sans-serif). Used for both display and body.

| Role | Weight | Tracking | CSS variable |
|---|---|---|---|
| Display / H1–H2 | 600–700 | -0.02em | `var(--font-sans)` |
| Body copy | 400–500 | default | `var(--font-sans)` |
| UI labels / nav | 500 | default | `var(--font-sans)` |

Use `font-sans` Tailwind class throughout. No `font-serif` — Fraunces has been removed.

Heading weight class: `font-semibold` (600). Display/hero: `font-bold` (700). Body: `font-normal` (400) or `font-medium` (500).

---

## Primitives

All primitives are in `src/components/ui/`.

### Container

```tsx
import { Container } from "@/components/ui/Container";

// "wide" — max-width 1200px. Use for: hero, work grids, diagrams. (default)
// "prose" — max-width 720px. Use for: About, Reading, essay-feel copy.
<Container size="wide">...</Container>
<Container size="prose">...</Container>
```

### Eyebrow

```tsx
import { Eyebrow } from "@/components/ui/Eyebrow";

// Small uppercase label above a section heading.
<Eyebrow>Selected work</Eyebrow>
```

### Reveal

```tsx
import { Reveal } from "@/components/ui/Reveal";

// Scroll-triggered fade + 12px upward translate, 600ms ease-out.
// delay (seconds): stagger children by incrementing 0.1s per item.
<Reveal delay={0.1}>
  <p>Content here</p>
</Reveal>
```

`Reveal` respects `prefers-reduced-motion` via the global CSS rule (transitions collapse to 0.01ms).

### Hairline

```tsx
import { Hairline } from "@/components/ui/Hairline";

// "contained" — default, respects parent padding.
// "full" — bleeds to container edges.
<Hairline />
<Hairline variant="full" />
```

### Button

```tsx
import { Button } from "@/components/ui/Button";

// variant: "filled" (terracotta, default) | "ghost" (bordered)
// size: "sm" | "md" (default) | "lg"
// arrow: boolean — appends right-pointing chevron
// href: string — renders as Next.js Link; omit for <button>

<Button href="/contact" arrow>Book a call</Button>
<Button variant="ghost" size="sm">Learn more</Button>
<Button type="submit">Send</Button>
```

Use `filled` for primary CTAs (one per section maximum). Use `ghost` for secondary actions.

### Marquee

```tsx
import { Marquee } from "@/components/ui/Marquee";

// Infinite horizontal scroll strip. Children are duplicated for seamless looping.
// speed: pixels/second (default 40)
// pauseOnHover: boolean (default true)

<Marquee speed={35} pauseOnHover>
  <span className="px-8 text-sm text-[var(--color-muted)]">
    finance · healthcare · legal · insurance · regulated B2B SaaS
  </span>
</Marquee>
```

### AnimatedDiagram

```tsx
import { AnimatedDiagram } from "@/components/ui/AnimatedDiagram";

// Wrapper for inline SVG diagrams. Scroll-reveals on entry.
// Sets CSS variables on the wrapper for consistent SVG styling:
//   --diagram-stroke    stroke-width value (default 1.5)
//   --diagram-color     primary stroke/fill (default palette.body)
//   --diagram-accent    accent stroke/fill (default palette.accent)
//   --diagram-muted     muted stroke/fill (default palette.muted)

// reveal: "fade" (default) | "stroke"
// threshold: inView amount (default 0.2)
// delay: seconds (default 0)
// strokeWidth, strokeColor, accentColor: override defaults

<AnimatedDiagram reveal="fade" delay={0.1}>
  <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M 20 100 C 100 20, 300 180, 380 100"
      stroke="var(--diagram-color)"
      strokeWidth="var(--diagram-stroke)"
    />
  </svg>
</AnimatedDiagram>
```

Demonstrative diagrams (showing architecture, process, relationships) are preferred over decorative orbs or abstract shapes. The diagram should communicate something real about how RAIN works.

---

## Animation rules

- **Library:** framer-motion only. No GSAP, no Lenis, no other motion libraries.
- **Easing:** ease-out only (`[0.22, 1, 0.36, 1]`). No spring or bounce.
- **Duration ceiling:** 600ms maximum for reveals. No element animation longer than 400ms for micro-interactions.
- **Scroll-pinned showpieces** (WhyNow family): manage their own motion internally; do not wrap them in `Reveal`.
- **Everywhere else:** use the `Reveal` primitive.
- **Reduced motion:** global CSS collapses all transitions to 0.01ms — no code branching needed.

---

## Voice constraints — no-fly list

These words and phrases are banned from all copy in the codebase. If you find them in placeholder text, remove them.

**Banned hype words:**
leverage · harness · empower · transform · supercharge · next-gen · world-class · AI-powered · cutting-edge · innovative · revolutionize · disrupt · unlock · game-changer · seamlessly · robust · scalable · synergy · holistic · best-in-class · streamline · journey · mission-critical · ecosystem · cultivate · forward-thinking

**Banned patterns:**
- "We help you [verb] your [noun]" with any hype verb
- Testimonials with star ratings
- "Why choose us" framing
- Urgency / scarcity language ("limited spots", "act now")
- First-person plural posturing ("we are passionate about...")
- Any expansion of the acronym RAIN in public surfaces (homepage, About, footer, nav)
- Exclamation marks in copy

The test for every line of copy: does the reader finish this sentence and feel *safe in our hands* — or do they feel *pitched*? If pitched, cut it.

---

## Section ownership (v3)

| Section | Task | File path |
|---|---|---|
| Hero + Industries marquee | #20 | `src/components/sections/Hero.tsx` |
| The 18 months (WhyNow rebuild) | #21 | `src/components/sections/WhyNow.tsx` |
| Three Shapes + How We Think | #22 | `src/components/sections/ThreeShapes.tsx`, `src/components/sections/HowWeThink.tsx` |
| Testimonials + Research-backed | #23 | `src/components/sections/Testimonials.tsx`, `src/components/sections/ResearchBacked.tsx` |
| About + Book a Call | #24 | `src/components/sections/About.tsx`, `src/components/sections/BookACall.tsx` |
| Integration + page.tsx | #25 | `src/app/page.tsx` |

Section agents: do not modify `src/app/layout.tsx`, `src/app/globals.css`, `src/app/fonts.ts`, `src/lib/theme.ts`, or any file under `src/components/layout/` or `src/components/ui/`. Those are owned by foundation-v3 (task #19).
