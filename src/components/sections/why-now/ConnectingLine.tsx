"use client";

import { motion, useTransform, type MotionValue } from "framer-motion";
import { palette } from "@/lib/theme";

interface ConnectingLineProps {
  /** SVG path d string — caller computes from grid geometry */
  d: string;
  progress: MotionValue<number>;
  /** When line starts drawing */
  drawStart: number;
  /** When line finishes drawing */
  drawEnd: number;
  /** When line fades from accent to muted */
  fadeStart: number;
  reducedMotion: boolean;
}

/**
 * An SVG path that draws itself as scroll advances, then fades from
 * terracotta to muted after landing.
 * pathLength is used for cross-browser stroke-dasharray consistency.
 */
export function ConnectingLine({
  d,
  progress,
  drawStart,
  drawEnd,
  fadeStart,
  reducedMotion,
}: ConnectingLineProps) {
  const pathLength = useTransform(
    progress,
    [drawStart, drawEnd],
    reducedMotion ? [1, 1] : [0, 1]
  );

  // Stroke color transitions from accent → muted after landing
  // We approximate with opacity on a muted-colored duplicate
  const accentOpacity = useTransform(
    progress,
    [fadeStart, fadeStart + 0.06],
    reducedMotion ? [0, 0] : [1, 0]
  );

  const mutedOpacity = useTransform(
    progress,
    [fadeStart, fadeStart + 0.06],
    reducedMotion ? [1, 1] : [0, 1]
  );

  const lineOpacity = useTransform(
    progress,
    [drawStart, drawStart + 0.02],
    reducedMotion ? [1, 1] : [0, 1]
  );

  return (
    <g>
      {/* Muted version underneath */}
      <motion.path
        d={d}
        stroke={palette.muted}
        strokeWidth="1"
        fill="none"
        pathLength={pathLength}
        style={{ opacity: mutedOpacity, pathLength }}
        strokeLinecap="round"
      />
      {/* Accent version on top, fades out after landing */}
      <motion.path
        d={d}
        stroke={palette.accent}
        strokeWidth="1.5"
        fill="none"
        pathLength={pathLength}
        style={{ opacity: accentOpacity, pathLength }}
        strokeLinecap="round"
      />
    </g>
  );
}
