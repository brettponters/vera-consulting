"use client";

import { motion, useTransform, type MotionValue } from "framer-motion";
import { palette } from "@/lib/theme";

interface AnchorData {
  quarter: string;
  decisionNow: string;
  consequenceBy2027: string;
}

interface AnchorPanelProps {
  anchors: readonly AnchorData[];
  progress: MotionValue<number>;
  /** Scroll thresholds at which each anchor's copy panel appears */
  thresholds: number[];
  reducedMotion: boolean;
}

/**
 * Copy panel that advances in sync with anchor landings.
 * Each pair fades in and sits until the next; all three visible at the end.
 * On reduced-motion, all three render as a static list.
 */
export function AnchorPanel({
  anchors,
  progress,
  thresholds,
  reducedMotion,
}: AnchorPanelProps) {
  return (
    <div className="flex flex-col gap-8">
      {anchors.map((anchor, i) => (
        <AnimatedAnchorCopy
          key={i}
          anchor={anchor}
          progress={progress}
          threshold={thresholds[i]}
          reducedMotion={reducedMotion}
        />
      ))}
    </div>
  );
}

// Each anchor gets its own component so useTransform is called at top level
interface AnimatedAnchorCopyProps {
  anchor: AnchorData;
  progress: MotionValue<number>;
  threshold: number;
  reducedMotion: boolean;
}

function AnimatedAnchorCopy({
  anchor,
  progress,
  threshold,
  reducedMotion,
}: AnimatedAnchorCopyProps) {
  const opacity = useTransform(
    progress,
    [threshold, threshold + 0.06],
    reducedMotion ? [1, 1] : [0, 1]
  );

  return (
    <motion.div style={{ opacity }}>
      <div className="flex flex-col gap-2">
        {/* Quarter label */}
        <span
          className="font-mono text-xs tracking-widest uppercase"
          style={{ color: palette.accent }}
        >
          {anchor.quarter}
        </span>

        {/* Decision block */}
        <div className="flex flex-col gap-1">
          <span
            className="font-mono text-[0.65rem] tracking-wider uppercase"
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

        {/* Consequence block */}
        <div
          className="flex flex-col gap-1 pl-3 border-l"
          style={{ borderColor: palette.hairline }}
        >
          <span
            className="font-mono text-[0.65rem] tracking-wider uppercase"
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
    </motion.div>
  );
}
