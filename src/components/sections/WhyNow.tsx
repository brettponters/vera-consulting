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

/**
 * WhyNow — cinematic scroll-driven editorial section.
 *
 * Architecture:
 * - A tall scroll container (~300vh) creates the pin space.
 * - The inner panel is position:sticky, filling the viewport.
 * - useScroll tracks progress through the scroll container (0→1).
 * - Three "moments" are cross-faded into each other as scroll progresses.
 *   Each moment is a full-viewport composition: large display type as
 *   protagonist, small quarter label as metadata, one terracotta accent.
 * - Moments transition: scale(1)→scale(0.94) + opacity 1→0 on the
 *   outgoing moment; opacity 0→1 on the incoming. Ease-out only.
 * - A hairline progress indicator runs along the bottom during the pin.
 * - Closing prose fades in during the final phase, section unpins after.
 *
 * prefers-reduced-motion: section unpins; collapses to static vertical list.
 * Mobile (≤640px): drop pin entirely; clean vertical sequence.
 */

// Scroll layout constants
// Three moments each occupy ~28% of scroll progress; closing at ~88–100%.
const MOMENTS = [
  { start: 0.05, peak: 0.16, exit: 0.32 },
  { start: 0.32, peak: 0.44, exit: 0.60 },
  { start: 0.60, peak: 0.72, exit: 0.86 },
];
const CLOSING_START = 0.86;

export default function WhyNow() {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section aria-label="Why the next 18 months matter">
      {/* Mobile: static vertical list, no pin */}
      <div className="block sm:hidden">
        <StaticList />
      </div>

      {/* Desktop scroll-pinned showpiece */}
      <div
        ref={containerRef}
        className="hidden sm:block relative"
        style={{ height: shouldReduceMotion ? "auto" : "300vh" }}
      >
        <div
          className={
            shouldReduceMotion
              ? "relative py-24"
              : "sticky top-0 h-screen overflow-hidden"
          }
          style={{ backgroundColor: palette.bg }}
        >
          {/* H2 — fixed position at top, never moves */}
          <div className="absolute top-0 left-0 right-0 z-20 pt-14 pb-0 pointer-events-none">
            <Container size="wide">
              <h2
                className="font-serif font-normal text-[clamp(1.1rem,2vw,1.5rem)] leading-tight max-w-[520px]"
                style={{ color: palette.muted }}
              >
                {whyNow.h2}
              </h2>
            </Container>
          </div>

          {/* Three cinematic moments */}
          {shouldReduceMotion ? (
            <div className="relative z-10 flex flex-col gap-24 py-32 pt-40">
              {whyNow.anchors.map((anchor, i) => (
                <Container key={i} size="wide">
                  <MomentContent anchor={anchor} index={i} static />
                </Container>
              ))}
            </div>
          ) : (
            <>
              {whyNow.anchors.map((anchor, i) => (
                <ScrollMoment
                  key={i}
                  anchor={anchor}
                  index={i}
                  progress={scrollYProgress}
                  moment={MOMENTS[i]}
                />
              ))}
            </>
          )}

          {/* Closing prose — fades in during final phase */}
          {!shouldReduceMotion && (
            <ScrollClosing progress={scrollYProgress} />
          )}

          {/* Hairline progress bar along bottom edge */}
          {!shouldReduceMotion && (
            <ProgressBar progress={scrollYProgress} />
          )}
        </div>

        {/* Reduced-motion closing prose below the static list */}
        {shouldReduceMotion && (
          <div className="py-16">
            <Container size="prose">
              <ClosingProseText />
            </Container>
          </div>
        )}
      </div>
    </section>
  );
}

// ─── ScrollMoment ─────────────────────────────────────────────────────────────

interface MomentData {
  quarter: string;
  decisionNow: string;
  consequenceBy2027: string;
}

interface ScrollMomentProps {
  anchor: MomentData;
  index: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  moment: { start: number; peak: number; exit: number };
}

function ScrollMoment({ anchor, index, progress, moment }: ScrollMomentProps) {
  const { start, peak, exit } = moment;

  // Opacity: fade in from start→peak, hold through, fade out at exit
  const opacity = useTransform(
    progress,
    [start, peak, exit - 0.06, exit],
    [0, 1, 1, 0]
  );

  // Scale: starts slightly small, rises to 1 at peak, gently compresses on exit
  const scale = useTransform(
    progress,
    [start, peak, exit - 0.06, exit],
    [0.97, 1, 1, 0.95]
  );

  // Y lift: moment rises up very slightly as it exits (5vh)
  const y = useTransform(
    progress,
    [start, peak, exit - 0.06, exit],
    ["12px", "0px", "0px", "-24px"]
  );

  return (
    <motion.div
      aria-hidden={index > 0 ? "true" : undefined}
      className="absolute inset-0 z-10 flex items-center"
      style={{ opacity, scale, y }}
      transition={{ ease: "easeOut" }}
    >
      <Container size="wide">
        <MomentContent anchor={anchor} index={index} />
      </Container>
    </motion.div>
  );
}

// ─── MomentContent ────────────────────────────────────────────────────────────

interface MomentContentProps {
  anchor: MomentData;
  index: number;
  static?: boolean;
}

/**
 * The typographic composition for one risk moment.
 *
 * Hierarchy (top → bottom):
 *   - Quarter label: tiny monospace, muted. Terracotta accent only on Q2 (index 0).
 *   - Decision line: body-weight sans, medium size — the "now" framing
 *   - Consequence: large Fraunces display — the weight, the protagonist
 *
 * The consequence is intentionally much larger. The point is the consequence,
 * not the decision. Reading order is decision → consequence.
 */
function MomentContent({ anchor, index }: MomentContentProps) {
  // Terracotta is precious — used only on the quarter label, only on the first moment
  const quarterColor = index === 0 ? palette.accent : palette.muted;

  return (
    <div className="flex flex-col gap-6 max-w-[800px]">
      {/* Quarter — metadata, not protagonist */}
      <span
        className="font-mono text-xs tracking-[0.2em] uppercase"
        style={{ color: quarterColor }}
      >
        {anchor.quarter}
      </span>

      {/* Decision — body weight, the cause */}
      <p
        className="font-sans text-[clamp(1rem,1.5vw,1.25rem)] leading-relaxed max-w-[520px]"
        style={{ color: palette.body }}
      >
        {anchor.decisionNow}
      </p>

      {/* Consequence — display weight, the protagonist */}
      <p
        className="font-serif font-normal text-[clamp(2rem,5.5vw,4.5rem)] leading-[1.1] tracking-[-0.01em]"
        style={{ color: palette.heading }}
      >
        {anchor.consequenceBy2027}
      </p>
    </div>
  );
}

// ─── ScrollClosing ─────────────────────────────────────────────────────────────

interface ScrollClosingProps {
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}

function ScrollClosing({ progress }: ScrollClosingProps) {
  const opacity = useTransform(
    progress,
    [CLOSING_START, CLOSING_START + 0.06, 0.97],
    [0, 1, 1]
  );

  const y = useTransform(
    progress,
    [CLOSING_START, CLOSING_START + 0.08],
    ["16px", "0px"]
  );

  return (
    <motion.div
      className="absolute inset-0 z-10 flex items-center"
      style={{ opacity, y }}
      transition={{ ease: "easeOut" }}
      aria-hidden="true"
    >
      <Container size="prose">
        <ClosingProseText />
      </Container>
    </motion.div>
  );
}

// ─── ClosingProseText ─────────────────────────────────────────────────────────

function ClosingProseText() {
  return (
    <div
      className="flex flex-col gap-6 border-t pt-10"
      style={{ borderColor: palette.hairline }}
    >
      {whyNow.closingProse.map((paragraph, i) => (
        <p
          key={i}
          className="font-sans text-base leading-relaxed"
          style={{ color: i === 0 ? palette.body : palette.muted }}
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
}

// ─── ProgressBar ─────────────────────────────────────────────────────────────

interface ProgressBarProps {
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}

function ProgressBar({ progress }: ProgressBarProps) {
  // Only show during the pinned moments, before closing prose
  const opacity = useTransform(
    progress,
    [0, 0.04, CLOSING_START - 0.1, CLOSING_START],
    [0, 0.5, 0.5, 0]
  );

  const scaleX = useTransform(progress, [0, CLOSING_START], [0, 1]);

  return (
    <motion.div
      aria-hidden="true"
      className="absolute bottom-0 left-0 right-0 z-30 h-px origin-left"
      style={{
        backgroundColor: palette.hairline,
        opacity,
        scaleX,
      }}
    />
  );
}

// ─── StaticList (mobile + reduced-motion) ────────────────────────────────────

/**
 * Clean vertical reading layout — no motion, no pin.
 * Used for mobile and as the prefers-reduced-motion fallback.
 */
function StaticList() {
  return (
    <div className="py-16" style={{ backgroundColor: palette.bg }}>
      <Container size="prose">
        {/* H2 */}
        <h2
          className="font-serif font-normal text-[1.5rem] leading-tight mb-12"
          style={{ color: palette.muted }}
        >
          {whyNow.h2}
        </h2>

        {/* Three risks, stacked */}
        <div className="flex flex-col gap-14">
          {whyNow.anchors.map((anchor, i) => (
            <div key={i} className="flex flex-col gap-4">
              <span
                className="font-mono text-xs tracking-[0.2em] uppercase"
                style={{ color: i === 0 ? palette.accent : palette.muted }}
              >
                {anchor.quarter}
              </span>
              <p
                className="font-sans text-sm leading-relaxed"
                style={{ color: palette.body }}
              >
                {anchor.decisionNow}
              </p>
              <p
                className="font-serif font-normal text-[1.5rem] leading-[1.15]"
                style={{ color: palette.heading }}
              >
                {anchor.consequenceBy2027}
              </p>
            </div>
          ))}
        </div>

        {/* Closing prose */}
        <div
          className="mt-14 border-t pt-10 flex flex-col gap-5"
          style={{ borderColor: palette.hairline }}
        >
          {whyNow.closingProse.map((paragraph, i) => (
            <p
              key={i}
              className="font-sans text-sm leading-relaxed"
              style={{ color: i === 0 ? palette.body : palette.muted }}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </Container>
    </div>
  );
}
