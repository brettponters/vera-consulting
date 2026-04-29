"use client";

import { motion, useTransform, type MotionValue } from "framer-motion";
import { palette } from "@/lib/theme";

interface CalendarGridProps {
  progress: MotionValue<number>;
  reducedMotion: boolean;
}

const QUARTERS = ["Q1", "Q2", "Q3", "Q4"];
const YEARS = ["2026", "2027"];

const CELL_COUNT = QUARTERS.length * YEARS.length; // 8

/**
 * Quarterly grid that draws in cell-by-cell as scroll advances.
 * Uses SVG rectangles with stroke-dasharray reveal via pathLength.
 * Quarter labels sit beneath each column in #1A1818 monospace.
 */
export function CalendarGrid({ progress, reducedMotion }: CalendarGridProps) {
  // Stagger each cell's appearance across 0–0.6 of scroll progress
  const cells = YEARS.flatMap((year, yi) =>
    QUARTERS.map((q, qi) => ({
      id: `${year}-${q}`,
      label: `${q} ${year}`,
      col: qi,
      row: yi,
      threshold: ((yi * 4 + qi) / CELL_COUNT) * 0.6,
    }))
  );

  return (
    <div className="relative w-full" aria-hidden="true">
      <div className="grid grid-cols-4 gap-px">
        {cells.map((cell) => (
          <GridCell
            key={cell.id}
            label={cell.label}
            progress={progress}
            threshold={cell.threshold}
            reducedMotion={reducedMotion}
          />
        ))}
      </div>
    </div>
  );
}

interface GridCellProps {
  label: string;
  progress: MotionValue<number>;
  threshold: number;
  reducedMotion: boolean;
}

function GridCell({ label, progress, threshold, reducedMotion }: GridCellProps) {
  // Cell border reveals when scroll passes its threshold
  const pathLength = useTransform(
    progress,
    [threshold, threshold + 0.08],
    reducedMotion ? [1, 1] : [0, 1]
  );

  const opacity = useTransform(
    progress,
    [threshold, threshold + 0.08],
    reducedMotion ? [1, 1] : [0, 1]
  );

  return (
    <div className="relative aspect-[3/4] flex flex-col">
      {/* SVG cell border */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 133"
        preserveAspectRatio="none"
        fill="none"
      >
        <motion.rect
          x="1"
          y="1"
          width="98"
          height="131"
          stroke={palette.hairline}
          strokeWidth="0.8"
          pathLength={pathLength}
        />
      </svg>

      {/* Quarter label — bottom of cell */}
      <motion.span
        className="absolute bottom-2 left-0 right-0 text-center font-mono text-[clamp(0.5rem,1.2vw,0.65rem)] tracking-widest uppercase"
        style={{ color: palette.body, opacity }}
      >
        {label}
      </motion.span>
    </div>
  );
}
