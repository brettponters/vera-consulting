# Components contract

Read this before writing any section component. These conventions are mandatory for all agents working under task #2, #3, and #4.

---

## Palette

All color values are locked. Use CSS variables or the Tailwind tokens below. Never hardcode hex values in component files — use the variable names.

| Role | CSS variable | Tailwind class | Hex |
|---|---|---|---|
| Page background | `var(--color-bg)` | `bg-[var(--color-bg)]` | `#F5EDE0` |
| Raised surface | `var(--color-surface)` | `bg-[var(--color-surface)]` | `#FAF6EC` |
| Body text | `var(--color-body)` | `text-[var(--color-body)]` | `#1A1818` |
| Headings | `var(--color-heading)` | `text-[var(--color-heading)]` | `#131314` |
| Muted body / metadata | `var(--color-muted)` | `text-[var(--color-muted)]` | `#6B6359` |
| Hairline / divider | `var(--color-hairline)` | `border-[var(--color-hairline)]` | `#E2D8C6` |
| Accent (terracotta) | `var(--color-accent)` | `text-[var(--color-accent)]` | `#C97B3F` |
| Second accent (sage — reserved for long-form, footnotes) | `var(--color-sage)` | `text-[var(--color-sage)]` | `#6B8775` |

Cap accent usage to roughly 3% of any viewport. Accent is for underlines, marks, and a single CTA per section — never for section backgrounds.

For non-CSS contexts (framer-motion inline styles, SVG strokes): import from `@/lib/theme`.

```ts
import { palette } from "@/lib/theme";
// palette.accent === "#C97B3F"
```

---

## Typography

| Family | Role | CSS variable | Import |
|---|---|---|---|
| Fraunces (variable serif) | Headings, display text | `var(--font-serif)` | injected via `layout.tsx` |
| Inter Tight (humanist sans) | Body, UI labels, nav | `var(--font-sans)` | injected via `layout.tsx` |

Use `font-serif` Tailwind shorthand for headings; `font-sans` for body. These map to the CSS variables set in `layout.tsx`.

Heading weights: use `font-normal` (400) for Fraunces at display sizes — its optical construction carries authority without needing weight. Reserve `font-medium` (500) for subheads in body contexts.

---

## Primitives

All primitives are in `src/components/ui/`.

### Container

```tsx
import { Container } from "@/components/ui/Container";

// "wide" — max-width 1200px. Use for: hero, work grids, calendar.
// "prose" — max-width 720px. Use for: About, Reading, essay-feel copy.
<Container size="wide">...</Container>
<Container size="prose">...</Container>
```

### Eyebrow

```tsx
import { Eyebrow } from "@/components/ui/Eyebrow";

// Small uppercase label above a section heading.
// Example: "Selected work" / "Research-backed"
<Eyebrow>Selected work</Eyebrow>
```

### Reveal

```tsx
import { Reveal } from "@/components/ui/Reveal";

// Scroll-triggered fade + slight upward translate.
// Wrap any element you want to reveal on scroll.
// delay (seconds): stagger children by incrementing 0.1s per item.
<Reveal delay={0.1}>
  <p>Content here</p>
</Reveal>
```

`Reveal` respects `prefers-reduced-motion`. The WhyNow section is the only section that manages its own motion directly — everywhere else use `Reveal`.

### Hairline

```tsx
import { Hairline } from "@/components/ui/Hairline";

// "contained" — default, respects parent padding.
// "full" — bleeds to container edges.
<Hairline />
<Hairline variant="full" />
```

---

## Animation rules

- **Library:** framer-motion only. No GSAP, no Lenis, no other motion libraries.
- **Easing:** ease-out only. No spring or bounce except the WhyNow anchor settle (single dampened settle, ~150ms).
- **Duration ceiling:** no element animation longer than ~400ms outside WhyNow.
- **WhyNow exception:** the calendar showpiece section (task #3) is the only motion-heavy section. It manages scroll-pinning and multi-layer animation internally.
- **Everywhere else:** use the `Reveal` primitive only.

---

## Voice constraints — no-fly list

These words and phrases are banned from all copy in the codebase. If you find them in placeholder text, remove them.

**Banned hype words:**
leverage · harness · empower · transform · supercharge · next-gen · world-class · AI-powered · cutting-edge · innovative · revolutionize · disrupt · unlock · game-changer · seamlessly · robust · scalable · synergy · holistic · best-in-class

**Banned patterns:**
- "We help you [verb] your [noun]" with any hype verb
- Testimonials with star ratings
- "Why choose us" framing
- Urgency / scarcity language ("limited spots", "act now")
- First-person plural posturing ("we are passionate about...")
- Any expansion of the acronym RAIN in public surfaces (homepage, About, footer, nav)

The test for every line of copy: does the reader finish this sentence and feel *safe in our hands* — or do they feel *pitched*? If pitched, cut it.

---

## Section ownership

| Section | Task | File path |
|---|---|---|
| Hero | #2 | `src/components/sections/Hero.tsx` |
| WhyNow (calendar) | #3 | `src/components/sections/WhyNow.tsx` |
| Three Shapes | #4 | `src/components/sections/ThreeShapes.tsx` |
| Selected Work | #4 | `src/components/sections/SelectedWork.tsx` |
| Research-backed | #4 | `src/components/sections/ResearchBacked.tsx` |
| About | #2 | `src/components/sections/About.tsx` |
| Book a Call | #2 | `src/components/sections/BookACall.tsx` |

Section agents: do not modify `src/app/layout.tsx`, `src/app/globals.css`, `src/app/fonts.ts`, `src/lib/theme.ts`, or any file under `src/components/layout/` or `src/components/ui/`. Those are owned by the foundation agent.
