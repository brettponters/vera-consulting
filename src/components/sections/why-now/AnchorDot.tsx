"use client";

import { motion, useTransform, type MotionValue } from "framer-motion";
import { palette } from "@/lib/theme";

interface AnchorDotProps {
  /** 0-based index of this anchor (0=Q2, 1=Q3, 2=Q4) */
  index: number;
  /** Column position on the grid (0-indexed of 4 columns) */
  col: number;
  progress: MotionValue<number>;
  /** Scroll threshold at which this anchor lands */
  threshold: number;
  reducedMotion: boolean;
}

/**
 * A weighted dot that "lands" on its quarter column as scroll passes threshold.
 * Single dampened settle on arrival (~150ms). Terracotta accent.
 * Note: SVG-native AnchorDotSvg is used inside WhyNow.tsx for the overlay.
 * This component is kept for potential reuse in HTML contexts.
 */
export function AnchorDot({ index, col, progress, threshold, reducedMotion }: AnchorDotProps) {
  const scale = useTransform(
    progress,
    [threshold - 0.01, threshold],
    reducedMotion ? [1, 1] : [0, 1]
  );

  const opacity = useTransform(
    progress,
    [threshold - 0.02, threshold + 0.02],
    reducedMotion ? [1, 1] : [0, 1]
  );

  return (
    <motion.div
      className="w-3 h-3 rounded-full"
      style={{
        backgroundColor: palette.accent,
        scale,
        opacity,
      }}
      transition={
        reducedMotion
          ? {}
          : {
              type: "spring",
              stiffness: 280,
              damping: 22,
              mass: 0.6,
              duration: 0.15,
            }
      }
    />
  );
}
