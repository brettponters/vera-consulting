# v2 Visual References: Depth, Motion, Cursor, Scroll

> Tactical reference sheet for the RAIN site v2 rebuild.
> Each entry: site name + URL + ONE concrete tactic to steal + ONE thing to avoid.
>
> Hard constraints for all recommendations:
> - No purple/blue gradients
> - No mesh backgrounds
> - No neural-net visuals
> - No Inter as primary font
> - Single accent #e8693a reserved for CTAs only

---

## Current v1 diagnosis

The site ships a single flat black (#0a0a0a) with one step to #111111 (`bg-subtle`).
Every section uses the same `fadeUp` variant (opacity 0 + y 24). Lenis smooth-scrolls
the whole page. CursorDot is a hardcoded 8px accent circle that scales to 14px on hover.
DotGrid adds faint texture but only in the hero. The result: seven sections of identical
black rectangles with identical entrance animations. "Flat-black" is the right diagnosis.

What v1 gets right: Cabinet Grotesk + Satoshi pairing, restrained accent, CoAgent
architecture diagram quality. Those stay.

---

## 1. Dark sites that aren't flat black

### 1a. Linear (linear.app)

**Tactic to steal:** Opacity-based elevation system. Linear uses white-at-opacity layers
(`rgba(255,255,255,0.03)`, `0.05`, `0.08`) rather than separate hex values for each
surface. This means every "card" or "panel" automatically inherits depth relative to its
parent without maintaining a parallel color scale. Their 2025 redesign rebuilt the theme
engine in LCH color space so elevation stays perceptually uniform across custom themes.

Concrete implementation: replace our two-token system (`bg-base`/`bg-subtle`) with a
5-step elevation ladder:

| Token          | Value                        | Use                          |
|----------------|------------------------------|------------------------------|
| `--surface-0`  | `#0a0a0a`                    | Page background              |
| `--surface-1`  | `rgba(255,255,255,0.025)`    | Alternate section bands      |
| `--surface-2`  | `rgba(255,255,255,0.045)`    | Cards, panels                |
| `--surface-3`  | `rgba(255,255,255,0.065)`    | Hover states, active cards   |
| `--surface-4`  | `rgba(255,255,255,0.09)`     | Tooltips, dropdowns          |

**Avoid:** Using named dark hex values (#111, #1a1a1a, #222) as separate tokens.
They drift apart visually and create the "wall of slightly different blacks" problem.

---

### 1b. Vercel (vercel.com)

**Tactic to steal:** Hairline border as section punctuation. Vercel uses
`border-bottom: 1px solid rgba(255,255,255,0.06)` between major page sections, paired
with a barely-visible horizontal gradient that fades to transparent at the edges.
The border IS the divider -- no padding band, no background change. This creates rhythm
without the stacking-rectangles feel.

Also: Vercel styles `<html>` with `color-scheme: dark` so scrollbars, form controls,
and native UI match. We should do the same.

Concrete implementation:
```css
.section-divider {
  border-bottom: 1px solid rgba(255,255,255,0.06);
  /* Optional: warm-tinted gradient hairline */
  background-image: linear-gradient(
    90deg,
    transparent 5%,
    rgba(232,105,58,0.08) 50%,
    transparent 95%
  );
  background-size: 100% 1px;
  background-position: bottom;
  background-repeat: no-repeat;
}
```

**Avoid:** Making dividers visible enough to see at a glance. If you can spot the border
at normal reading distance, it's too heavy. The goal is felt rhythm, not visible lines.

---

### 1c. Anthropic (anthropic.com)

**Tactic to steal:** Warm black as base, not neutral black. Anthropic's dark sections
use a barely-warm black (hint of brown/terracotta in the base) rather than pure neutral
`#0a0a0a`. This single shift makes the entire palette feel human rather than terminal.
Their accent warmth (terracotta, sand) echoes through the base tone.

Concrete implementation: Shift base from `#0a0a0a` to `#0b0a09` (warm) or keep neutral
base but tint the surface layers warm: `rgba(232,105,58,0.015)` instead of pure white
opacity. This carries the accent DNA into the background without making it visible.

**Avoid:** Going too warm -- anything above `0.03` opacity on the accent tint reads as
a sepia filter. The warmth should be subliminal.

---

### 1d. Raycast (raycast.com)

**Tactic to steal:** Spotlight backdrop. Raycast places a single radial gradient (soft,
desaturated) behind hero content -- not a background fill, but a light-source simulation.
`radial-gradient(ellipse 60% 40% at 50% 0%, rgba(232,105,58,0.06) 0%, transparent 70%)`
placed behind the hero headline gives the section a warm "overhead light" without
any visible gradient shape.

**Avoid:** Making the spotlight large enough to touch the viewport edges. It should feel
like light falling on a surface, not a gradient background.

---

### 1e. Teenage Engineering (teenage.engineering)

**Tactic to steal:** Section band alternation between true black and off-black with NO
transition element between them. TE simply alternates `#000` and `#0d0d0d` sections --
the shift is so subtle you feel it without seeing it. No borders, no gradients, no
dividers. Just two blacks.

Concrete implementation: Alternate between `--surface-0` and `--surface-1` for
adjacent sections. The CoAgent block uses `--surface-1`, the next section uses
`--surface-0`, etc.

**Avoid:** Giving every section a unique background tone. Two alternating values
is enough. Three is chaos.

---

### 1f. Stripe (stripe.com/sessions)

**Tactic to steal:** Noise/grain texture overlay at near-invisible opacity. Stripe uses
a 200x200px tileable noise PNG at `opacity: 0.015` over dark sections. This breaks the
digital-flat feel and adds a tactile quality that photographs and prints have naturally.

Concrete implementation:
```css
.grain-overlay {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 9999;
  opacity: 0.018;
  background-image: url('/noise.png');
  background-size: 200px 200px;
  mix-blend-mode: overlay;
}
```

**Avoid:** Using SVG `<feTurbulence>` for noise -- it re-renders on every frame and
kills GPU perf. A static tiled PNG is nearly free.

---

## 2. Section transitions and depth

### 2a. Linear (linear.app) -- Sticky header morph

**Tactic to steal:** The nav bar starts transparent with full padding, then on scroll
gains a `backdrop-filter: blur(12px)` background with `rgba(10,10,10,0.8)` and compresses
its padding. This creates a felt "layer" -- the header becomes a frosted surface that
floats above content. Achieved with a single `IntersectionObserver` on a sentinel
element, toggling a class. No JS animation library needed.

**Avoid:** Animating header height with JS -- use CSS transitions on padding and
background. JS recalculates layout; CSS transitions are compositor-thread only.

---

### 2b. Framer (framer.com) -- Full-bleed vs contained alternation

**Tactic to steal:** Framer alternates between full-bleed sections (background touches
viewport edges) and contained sections (content sits in a max-width container with
visible page background on both sides). This asymmetry breaks the "stacked boxes"
pattern. The contained sections feel inset, the full-bleed sections feel expansive.

Concrete implementation for RAIN: Hero and CoAgent block go full-bleed. Methodology
and About sit in a narrower container with `--surface-0` showing on the sides. This
creates visual breathing room.

**Avoid:** Making every section full-bleed. The alternation IS the design.

---

### 2c. Family.co -- Asymmetric grid breaks

**Tactic to steal:** Family uses a 12-column grid but regularly lets content span
non-obvious column ranges (3-10 instead of 1-12, or 2-8 for text with an image at
9-12). This keeps the eye moving and prevents the "everything is centered at max-w-xl"
sameness.

Concrete implementation: The Methodology section could shift to a 2-column layout
where the step numbers live in column 1-3 and content in 4-12 on desktop. The About
section could offset left (columns 1-8) with deliberate empty space on the right.

**Avoid:** Random asymmetry. Every break should have a reason (hierarchy, reading
flow, emphasis). Chaos reads as broken, not designed.

---

### 2d. Basement Studio (formerly Studio Freight) -- Masked section reveals

**Tactic to steal:** Basement uses CSS `clip-path: inset()` animated on scroll to
reveal sections. As you scroll down, the next section "uncovers" from behind the
current one via a clip-path transition. This is now achievable with pure CSS
scroll-driven animations (`animation-timeline: view()`).

Concrete implementation:
```css
.section-reveal {
  clip-path: inset(8% 0 0 0);
  animation: reveal-in linear both;
  animation-timeline: view();
  animation-range: entry 0% entry 40%;
}
@keyframes reveal-in {
  from { clip-path: inset(8% 0 0 0); opacity: 0.7; }
  to   { clip-path: inset(0 0 0 0); opacity: 1; }
}
```

**Avoid:** Clip-path animations on sections with scroll-linked content (they fight
each other). Use this on static content sections only.

---

### 2e. Active Theory (activetheory.net) -- Depth through z-layering

**Tactic to steal:** Active Theory layers elements at different perceived z-depths
using subtle scale and opacity differences. Background elements at `scale(0.98)` and
`opacity: 0.6`, midground at `scale(1)`, foreground slightly oversized. No 3D transforms
needed -- just scale and opacity create the depth cue.

**Avoid:** Actual CSS `perspective` and `translateZ` for this effect. It forces GPU
compositing on every child element and causes paint storms on mobile.

---

## 3. Cursor and pointer interactions that don't suck

### 3a. Locomotive (locomotive.ca) -- Contextual cursor swap

**Tactic to steal:** Locomotive's cursor transforms into a WORD when hovering over
specific zones. Over a project thumbnail, the dot becomes "View." Over a CTA, it
becomes "Go." The cursor is a semantically meaningful label, not a decorative shape.
Implementation: a fixed `<div>` that cross-fades between states using CSS transitions,
with `data-cursor` attributes on target elements read by a lightweight JS controller.

Concrete implementation:
```tsx
// On hoverable elements:
<a data-cursor="View" href="/work/coagent">...</a>
<button data-cursor="Talk" ...>Book a call</button>

// Cursor component reads data-cursor on mouseenter
// and cross-fades the label inside the fixed cursor div
```

**Avoid:** Showing the contextual label AND the default cursor. Hide `cursor: none`
on the body when the custom cursor is active. But always fall back to default cursor
on touch devices (detect via `pointer: coarse` media query).

---

### 3b. Vercel (vercel.com) -- Hover highlight slide

**Tactic to steal:** In Vercel's nav/sidebar, hovering over an item causes a subtle
background highlight to slide from the previous item to the new one (not just appear/
disappear). Achieved with a single absolutely-positioned div whose `top`/`left`/`width`/
`height` are animated via CSS transitions. The "highlight" element moves; the items
themselves don't animate at all.

Concrete implementation: For the RAIN nav links, a shared highlight `<div>` slides
behind whichever link is hovered. Use `transform: translate()` for the slide (GPU) and
`opacity` for enter/exit.

**Avoid:** Animating background-color on each item individually. The sliding highlight
is what makes it feel physical and intentional.

---

### 3c. Anthropic (anthropic.com) -- Minimal cursor, rich hover states

**Tactic to steal:** Anthropic does NOT use a custom cursor at all. Instead, they
invest in rich hover states on the elements themselves: links get a subtle underline
animation (clip-path reveal from left), cards get a warm border glow, buttons get a
fill transition. The interaction quality lives in the TARGET, not the pointer.

This is the best option if the team wants to kill the CursorDot entirely. Replace it
with nothing -- but upgrade every hoverable element's hover state.

Concrete implementation: Kill `CursorDot.tsx`. Add:
- Links: underline that animates width from 0 to 100% on hover via `scaleX` transform
- CTA button: background fill slides in from left (`background-size` animation)
- Case study card: `box-shadow: 0 0 0 1px rgba(232,105,58,0.15)` fades in on hover

**Avoid:** Replacing the cursor dot with an equally decorative alternative. If you
remove a gimmick, replace it with quality, not a different gimmick.

---

### 3d. Linear (linear.app) -- Magnetic zone without visible cursor change

**Tactic to steal:** Linear's buttons have a subtle magnetic pull (the button itself
shifts 1-2px toward the cursor on approach) but NO custom cursor. The `MagneticButton`
we already have is the right idea -- but it should be the ONLY cursor-adjacent effect.
Remove the CursorDot and let the magnetic pull speak for itself.

**Avoid:** Combining magnetic buttons with a custom cursor. They compete for attention
and the result feels over-designed.

---

## 4. Cooler scroll motion (cheap, native scroll)

### 4a. CSS scroll-driven text reveal

**Tactic to steal:** Native CSS `animation-timeline: view()` with a color transition.
Text starts as `color: rgba(237,237,237,0.15)` and transitions to full opacity as it
scrolls into the viewport center. No JS. Works with native scroll (no Lenis needed).
Browser support: Chrome 115+, Safari 18+, Firefox 127+. Covers ~92% of users as of
April 2026.

Concrete implementation:
```css
.text-reveal {
  color: rgba(237,237,237,0.15);
  animation: text-brighten linear both;
  animation-timeline: view();
  animation-range: entry 20% cover 40%;
}
@keyframes text-brighten {
  to { color: rgba(237,237,237,1); }
}
```

Apply to the Methodology step descriptions and the About paragraph. Headlines stay
fully visible (they're above the fold or need immediate readability).

**Avoid:** Applying text reveal to headings or CTAs. Users need to read those
instantly. Reveal is for supporting copy that rewards attention.

---

### 4b. Staggered line-by-line reveal with Motion (motion.dev)

**Tactic to steal:** Split a paragraph into lines (or use per-word spans) and stagger
their entrance with `whileInView` + `staggerChildren`. Motion (formerly Framer Motion)
handles this natively with variants and the `staggerChildren` transition prop. Each
line fades up with a 0.08s stagger.

Concrete implementation:
```tsx
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};
const line = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
};
```

Best for: Methodology steps, engagement card descriptions, the About section.

**Avoid:** Staggering more than 6-8 items. Long staggers make users wait and feel
like loading states rather than reveals.

---

### 4c. Image/diagram clip reveal

**Tactic to steal:** The CoAgent architecture diagram currently fades in with a
generic opacity+translateY. Replace with a `clip-path: inset(0 100% 0 0)` that
animates to `inset(0 0 0 0)` -- a horizontal wipe reveal. Driven by
`animation-timeline: view()` for scroll-linked, or `whileInView` with a spring
transition for JS.

Concrete implementation (CSS-only):
```css
.diagram-reveal {
  clip-path: inset(0 100% 0 0);
  animation: wipe-in 0.8s ease both;
  animation-timeline: view();
  animation-range: entry 10% entry 50%;
}
@keyframes wipe-in {
  to { clip-path: inset(0 0 0 0); }
}
```

**Avoid:** Parallax on the diagram. It's dense content that needs to be read
stationary. Parallax on information-dense elements is hostile.

---

### 4d. Marquee strip for social proof / anti-position

**Tactic to steal:** The AntiPosition section currently sits in a static centered
`<p>`. Replace with a slow-scrolling CSS marquee using `@keyframes` + `translateX`.
Two duplicated strips scrolling in opposite directions creates a ticker-tape effect
that fills dead space and adds motion without scroll-jacking.

Concrete implementation:
```css
.marquee-track {
  display: flex;
  width: max-content;
  animation: marquee-scroll 30s linear infinite;
}
@keyframes marquee-scroll {
  to { transform: translateX(-50%); }
}
```

Duplicate the content so the strip loops seamlessly. Use `prefers-reduced-motion`
to pause the animation.

**Avoid:** Fast marquee speeds. Anything under 20s feels like a stock ticker. 30s+
feels ambient. Also avoid marquee for content that users need to read carefully.

---

### 4e. Sticky section with content swap (Framer pattern)

**Tactic to steal:** For the Methodology section -- instead of a vertical list, pin
the section title on the left and scroll the steps on the right. As each step scrolls
into the sticky zone, the step number on the left cross-fades. This is achievable with
`position: sticky` and `IntersectionObserver` -- no GSAP, no scroll-jacking.

Concrete implementation:
```tsx
// Left column: sticky
<div className="sticky top-32">
  <span className="text-8xl font-bold text-fg-muted/20">{activeStep}</span>
  <h2>How we work</h2>
</div>

// Right column: scrolls naturally
<div className="space-y-[50vh]">
  {steps.map(step => (
    <div ref={/* IO target */} className="...">
      {step.content}
    </div>
  ))}
</div>
```

**Avoid:** Scroll-jacking (hijacking native scroll to control section transitions).
The content scrolls naturally; only the left column is sticky. Users stay in control.

---

## 5. What NOT to do (anti-references)

### Lenis smooth scroll

Lenis intercepts native scroll and re-renders every frame via rAF. It adds latency
to every scroll interaction, fights with native CSS scroll-driven animations, breaks
`find-on-page`, and costs ~8KB gzip for an effect most users can't distinguish from
native smooth scroll. The v1 SmoothScrollProvider should be removed entirely.

### The accent dot cursor

The 8px `#e8693a` dot is:
1. Invisible on mobile (where most traffic comes from for a consulting site)
2. A distraction on desktop -- it constantly draws attention away from content
3. Indistinguishable from "I installed a cursor library" rather than "I designed this"

Kill it. Replace with upgraded hover states on interactive elements (see 3c above).

### Identical fadeUp on every section

When every element enters with the same `opacity: 0, y: 24` animation, the motion
becomes invisible through repetition. Vary the vocabulary:
- Hero: immediate (no entrance animation -- it's above the fold)
- Section headings: fade only (no translate)
- Body copy: text-reveal brighten (see 4a)
- Diagrams/images: clip-path wipe (see 4c)
- Cards: staggered fade-up (keep but tighten to `y: 12`)

---

## Top 5 punch list for the rebuild team

### 1. Replace 2-token bg system with 5-step opacity elevation ladder
Current `bg-base`/`bg-subtle` creates flat black. New system uses `rgba(255,255,255,N)`
layers on the same `#0a0a0a` base. Alternate `--surface-0`/`--surface-1` between
sections. Cards use `--surface-2`. Hovers use `--surface-3`. See section 1a.

### 2. Kill CursorDot + Lenis, invest in hover states
Remove `CursorDot.tsx` and `SmoothScrollProvider.tsx`. Replace cursor dot with nothing.
Replace Lenis with `scroll-behavior: smooth` (if even needed). Redirect that effort
into per-element hover states: link underline reveals, button fill transitions, card
border glows. See sections 3c and 3d.

### 3. Add grain overlay + warm hairline dividers
One fixed `noise.png` overlay at `opacity: 0.018`. Hairline `1px rgba(255,255,255,0.06)`
borders between sections, optionally with a warm gradient tint center. These two
additions break the digital-flat feel. See sections 1f and 1b.

### 4. Vary the motion vocabulary -- minimum 4 distinct entrance types
Kill the universal `fadeUp`. Assign: no-animation for hero (above fold), opacity-only
for headings, CSS `animation-timeline: view()` text-brighten for body copy, clip-path
wipe for images/diagrams, stagger for card grids. See section 5 "What NOT to do."

### 5. Alternate full-bleed and contained sections
Hero and CoAgent block: full-bleed (background touches viewport). Methodology and About:
contained (narrower max-width, `--surface-0` visible on sides). This alternation creates
the depth and rhythm that v1 lacks without adding any color. See section 2b.
