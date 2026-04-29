"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { whyNow } from "@/content/why-now";
import { palette } from "@/lib/theme";
import { Container } from "@/components/ui/Container";
import { DateTicker } from "./why-now/DateTicker";
import { CalendarGrid } from "./why-now/CalendarGrid";
import { ConnectingLine } from "./why-now/ConnectingLine";
import { AnchorPanel } from "./why-now/AnchorPanel";

/**
 * WhyNow — the motion-heavy showpiece section.
 *
 * Architecture:
 * - A tall scroll container (~280vh) creates the pin space.
 * - The inner panel is position:sticky, filling the viewport.
 * - useScroll tracks progress through the scroll container (0→1).
 * - Five motion layers animate against scroll progress:
 *   1. Background date ticker (slow y-translate)
 *   2. Quarterly grid (cell-by-cell stroke-dasharray reveal)
 *   3. Anchor dots (scale-in + single dampened settle)
 *   4. Connecting lines (pathLength draw-in → color fade)
 *   5. Copy panel (per-anchor fade-in)
 * - Final beat: terracotta wash breathes once at progress ~0.85
 * - Section unpins after third anchor lands; closing prose follows below.
 *
 * Mobile (≤640px): vertical timeline, no pin, same copy.
 * prefers-reduced-motion: section unpins; all reveals collapse to fade-in.
 */
export default function WhyNow() {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Scroll thresholds for each anchor landing (within 0→0.85 of total progress)
  const ANCHOR_THRESHOLDS = [0.2, 0.42, 0.64];
  // When the terracotta final-beat pulse fires
  const FINAL_BEAT = 0.82;

  // Final-beat terracotta wash — breathes once, ~5% opacity
  const washOpacity = useTransform(
    scrollYProgress,
    [FINAL_BEAT, FINAL_BEAT + 0.04, FINAL_BEAT + 0.1],
    shouldReduceMotion ? [0, 0, 0] : [0, 0.05, 0]
  );

  return (
    <section aria-label="Why the next 18 months matter">
      {/* ── Mobile layout (≤ 640px): vertical timeline, no pin ── */}
      <div className="block sm:hidden">
        <MobileWhyNow />
      </div>

      {/* ── Desktop layout (> 640px): scroll-pinned showpiece ── */}
      <div
        ref={containerRef}
        className="hidden sm:block relative"
        style={{
          // ~280vh of scroll space. Reduced-motion collapses to natural height.
          height: shouldReduceMotion ? "auto" : "280vh",
        }}
      >
        {/* Sticky panel — fills the viewport while scrolling through container */}
        <div
          className={
            shouldReduceMotion
              ? "relative py-24"
              : "sticky top-0 h-screen overflow-hidden"
          }
        >
          {/* Layer 1 — background date ticker */}
          <DateTicker
            progress={scrollYProgress}
            reducedMotion={shouldReduceMotion ?? false}
          />

          {/* Final-beat terracotta wash */}
          <motion.div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundColor: palette.accent,
              opacity: washOpacity,
            }}
          />

          <Container size="wide" className="relative z-10 h-full flex flex-col justify-center py-16">
            {/* H2 — the still center. Never moves. */}
            <h2
              className="font-serif font-normal text-[clamp(1.5rem,3.5vw,2.5rem)] leading-tight max-w-[600px] mb-12"
              style={{ color: palette.heading }}
            >
              {whyNow.h2}
            </h2>

            {/* Main content: grid left, copy panel right */}
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
              {/* Calendar visual — layers 2, 3, 4 */}
              <div className="relative flex-1 min-w-0">
                {/* Layer 2 — quarterly grid */}
                <CalendarGrid
                  progress={scrollYProgress}
                  reducedMotion={shouldReduceMotion ?? false}
                />

                {/* Layers 3 + 4 — anchors + connecting lines, overlaid on grid */}
                <AnchorOverlay
                  progress={scrollYProgress}
                  thresholds={ANCHOR_THRESHOLDS}
                  reducedMotion={shouldReduceMotion ?? false}
                />
              </div>

              {/* Layer 5 — copy panel */}
              <div className="w-full lg:w-[340px] xl:w-[380px] flex-shrink-0">
                <AnchorPanel
                  anchors={whyNow.anchors}
                  progress={scrollYProgress}
                  thresholds={ANCHOR_THRESHOLDS}
                  reducedMotion={shouldReduceMotion ?? false}
                />
              </div>
            </div>
          </Container>
        </div>

        {/* Closing prose — lives below the sticky panel, appears after unpin */}
        {!shouldReduceMotion && (
          <ClosingProse />
        )}
      </div>

      {/* Closing prose for reduced-motion: inline */}
      {shouldReduceMotion && (
        <div className="hidden sm:block">
          <ClosingProse />
        </div>
      )}
    </section>
  );
}

// ─── Anchor overlay (dots + lines) ────────────────────────────────────────────

interface AnchorOverlayProps {
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  thresholds: number[];
  reducedMotion: boolean;
}

/**
 * Positioned overlay on the calendar grid.
 * Renders anchor dots and connecting lines via SVG.
 *
 * Grid geometry: 4 columns (Q1–Q4) × 2 rows (2026, 2027).
 * Anchors land at: Q2 2026, Q3 2026, Q4 2026 (col 1, 2, 3 of row 0).
 * Lines connect from decision quarter to a point in 2027 row.
 */
function AnchorOverlay({ progress, thresholds, reducedMotion }: AnchorOverlayProps) {
  // Dot positions as % of SVG viewport (100 wide × 50 tall for 2 rows)
  // Columns at 12.5, 37.5, 62.5, 87.5 (centers of 4 equal columns)
  // Row 0 (2026) y=25%, row 1 (2027) y=75%
  const dotPositions = [
    { cx: 37.5, cy: 25 }, // Q2 2026
    { cx: 62.5, cy: 25 }, // Q3 2026
    { cx: 87.5, cy: 25 }, // Q4 2026
  ];

  // Each connecting line: from anchor quarter → same quarter in 2027
  const linePaths = dotPositions.map(({ cx, cy }) =>
    `M ${cx} ${cy} L ${cx} 75`
  );

  return (
    <svg
      viewBox="0 0 100 50"
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      {/* Connecting lines */}
      {linePaths.map((d, i) => (
        <ConnectingLine
          key={i}
          d={d}
          progress={progress}
          drawStart={thresholds[i] + 0.02}
          drawEnd={thresholds[i] + 0.1}
          fadeStart={thresholds[i] + 0.1}
          reducedMotion={reducedMotion}
        />
      ))}

      {/* Anchor dots */}
      {dotPositions.map(({ cx, cy }, i) => (
        <AnchorDotSvg
          key={i}
          cx={cx}
          cy={cy}
          progress={progress}
          threshold={thresholds[i]}
          reducedMotion={reducedMotion}
        />
      ))}
    </svg>
  );
}

// SVG-native anchor dot (avoids HTML-in-SVG foreignObject complexity)
interface AnchorDotSvgProps {
  cx: number;
  cy: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  threshold: number;
  reducedMotion: boolean;
}

function AnchorDotSvg({ cx, cy, progress, threshold, reducedMotion }: AnchorDotSvgProps) {
  const scale = useTransform(
    progress,
    [threshold - 0.02, threshold + 0.01],
    reducedMotion ? [1, 1] : [0, 1]
  );

  const opacity = useTransform(
    progress,
    [threshold - 0.02, threshold + 0.02],
    reducedMotion ? [1, 1] : [0, 1]
  );

  return (
    <motion.circle
      cx={cx}
      cy={cy}
      r="2.2"
      fill={palette.accent}
      style={{ scale, opacity }}
      // Single dampened settle — the only spring in the section
      transition={
        reducedMotion
          ? { duration: 0 }
          : {
              type: "spring",
              stiffness: 320,
              damping: 18,
              mass: 0.5,
              duration: 0.15,
            }
      }
    />
  );
}

// ─── Closing prose ─────────────────────────────────────────────────────────────

function ClosingProse() {
  return (
    <div
      className="py-20"
      style={{ backgroundColor: `var(--color-bg)` }}
    >
      <Container size="prose">
        <div
          className="border-t pt-12 flex flex-col gap-6"
          style={{ borderColor: palette.hairline }}
        >
          {whyNow.closingProse.map((paragraph, i) => (
            <p
              key={i}
              className="font-sans text-base leading-relaxed"
              style={{
                color: i === 0 ? palette.body : palette.muted,
              }}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </Container>
    </div>
  );
}

// ─── Mobile layout ─────────────────────────────────────────────────────────────

/**
 * Mobile vertical timeline — same three anchor pairs, same copy.
 * No pin, minimal motion. Clean reading experience on small screens.
 */
function MobileWhyNow() {
  return (
    <div className="py-16" style={{ backgroundColor: `var(--color-bg)` }}>
      <Container size="prose">
        {/* H2 */}
        <h2
          className="font-serif font-normal text-[1.75rem] leading-tight mb-10"
          style={{ color: palette.heading }}
        >
          {whyNow.h2}
        </h2>

        {/* Vertical timeline */}
        <div className="relative flex flex-col gap-0">
          {/* Timeline spine */}
          <div
            className="absolute left-[5px] top-2 bottom-2 w-px"
            style={{ backgroundColor: palette.hairline }}
            aria-hidden="true"
          />

          {whyNow.anchors.map((anchor, i) => (
            <div key={i} className="relative pl-8 pb-10 last:pb-0">
              {/* Timeline node */}
              <div
                className="absolute left-0 top-1 w-[11px] h-[11px] rounded-full border-2"
                style={{
                  backgroundColor: palette.bg,
                  borderColor: palette.accent,
                }}
                aria-hidden="true"
              />

              {/* Quarter label */}
              <span
                className="font-mono text-xs tracking-widest uppercase block mb-3"
                style={{ color: palette.accent }}
              >
                {anchor.quarter}
              </span>

              <div className="flex flex-col gap-3">
                {/* Decision */}
                <div>
                  <span
                    className="font-mono text-[0.6rem] tracking-wider uppercase block mb-1"
                    style={{ color: palette.muted }}
                  >
                    Decision now
                  </span>
                  <p
                    className="font-sans text-sm leading-snug"
                    style={{ color: palette.heading }}
                  >
                    {anchor.decisionNow}
                  </p>
                </div>

                {/* Consequence */}
                <div
                  className="pl-3 border-l"
                  style={{ borderColor: palette.hairline }}
                >
                  <span
                    className="font-mono text-[0.6rem] tracking-wider uppercase block mb-1"
                    style={{ color: palette.muted }}
                  >
                    Consequence by 2027
                  </span>
                  <p
                    className="font-sans text-sm leading-snug"
                    style={{ color: palette.body }}
                  >
                    {anchor.consequenceBy2027}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing prose */}
        <div
          className="border-t mt-12 pt-10 flex flex-col gap-5"
          style={{ borderColor: palette.hairline }}
        >
          {whyNow.closingProse.map((paragraph, i) => (
            <p
              key={i}
              className="font-sans text-sm leading-relaxed"
              style={{
                color: i === 0 ? palette.body : palette.muted,
              }}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </Container>
    </div>
  );
}
