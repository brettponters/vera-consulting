"use client";

import { motion, useTransform, type MotionValue } from "framer-motion";
import { palette } from "@/lib/theme";

interface DateTickerProps {
  progress: MotionValue<number>;
  reducedMotion: boolean;
}

// Dates to cycle through — Q2 2026 to Q4 2027, month-level granularity
const DATES = [
  "Apr 2026", "May 2026", "Jun 2026",
  "Jul 2026", "Aug 2026", "Sep 2026",
  "Oct 2026", "Nov 2026", "Dec 2026",
  "Jan 2027", "Feb 2027", "Mar 2027",
];

/**
 * Background date ticker — mechanical, slow, never demands focus.
 * Advances through calendar dates as scroll progresses.
 * Purely decorative; aria-hidden.
 */
export function DateTicker({ progress, reducedMotion }: DateTickerProps) {
  // Map scroll progress to a date index offset for the ticker
  const tickerY = useTransform(
    progress,
    [0, 1],
    ["0%", "-66.666%"]
  );

  if (reducedMotion) return null;

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden pointer-events-none select-none"
    >
      {/* Vertical cascade of large date numerals */}
      <motion.div
        style={{ y: tickerY }}
        className="absolute left-1/2 top-[-10%] -translate-x-1/2 flex flex-col items-center gap-16"
      >
        {[...DATES, ...DATES].map((date, i) => (
          <span
            key={i}
            className="font-mono text-[clamp(3rem,8vw,7rem)] leading-none tracking-tight whitespace-nowrap"
            style={{
              color: palette.muted,
              opacity: 0.22,
              fontVariantNumeric: "tabular-nums",
            }}
          >
            {date}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
