"use client";

import { useRef, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { palette } from "@/lib/theme";

interface AnimatedDiagramProps {
  /** Inline SVG content */
  children: ReactNode;
  /**
   * Reveal strategy:
   * - "stroke" — animates stroke-dashoffset paths on entry (expects SVG paths to have data-animate)
   * - "fade"   — simple opacity fade on entry (default)
   */
  reveal?: "stroke" | "fade";
  /** How much of the element must be visible before triggering. Default: 0.2 */
  threshold?: number;
  /** Delay in seconds. Default: 0 */
  delay?: number;
  /** Width of strokes in this diagram. Applied as CSS variable --diagram-stroke */
  strokeWidth?: number;
  /** Primary stroke color. Defaults to palette.body */
  strokeColor?: string;
  /** Accent stroke color. Defaults to palette.accent */
  accentColor?: string;
  className?: string;
}

/**
 * Wrapper for inline SVG diagrams that scroll-reveals via stroke-dashoffset or fade.
 * Provides consistent stroke widths and colors via CSS custom properties.
 *
 * CSS variables set on the wrapper (use in child SVGs):
 *   --diagram-stroke        stroke width (default: 1.5)
 *   --diagram-color         primary stroke/fill (default: palette.body)
 *   --diagram-accent        accent stroke/fill (default: palette.accent)
 *   --diagram-muted         muted stroke/fill (default: palette.muted)
 *
 * Props:
 * - reveal: "fade" (default) | "stroke"
 * - threshold: inView threshold (default 0.2)
 * - delay: seconds (default 0)
 * - strokeWidth: number (default 1.5)
 * - strokeColor: hex (default palette.body)
 * - accentColor: hex (default palette.accent)
 * - className: applied to wrapper div
 */
export function AnimatedDiagram({
  children,
  reveal = "fade",
  threshold = 0.2,
  delay = 0,
  strokeWidth = 1.5,
  strokeColor = palette.body,
  accentColor = palette.accent,
  className = "",
}: AnimatedDiagramProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: threshold });

  const cssVars = {
    "--diagram-stroke": strokeWidth,
    "--diagram-color": strokeColor,
    "--diagram-accent": accentColor,
    "--diagram-muted": palette.muted,
  } as React.CSSProperties;

  const variants =
    reveal === "stroke"
      ? {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }
      : {
          hidden: { opacity: 0, y: 8 },
          visible: { opacity: 1, y: 0 },
        };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={cssVars}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
