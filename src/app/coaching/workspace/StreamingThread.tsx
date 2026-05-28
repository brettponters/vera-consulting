"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import type { ToolStep } from "./types";

interface StreamingThreadProps {
  /** Reset key, pass the active scene key so the thread resets cleanly. */
  resetKey: string;
  steps: ToolStep[];
  /** Steps run only while `active` is true. */
  active: boolean;
  /** Called once after the last step finishes its duration. */
  onComplete: () => void;
}

type StepState = "pending" | "running" | "done";

/**
 * Animated "agent activity" rail.
 *
 * Steps come in sequentially. Each shows a small spinner while running,
 * then ticks to a hairline check. Mimics the planner/tool-call log you
 * see in Claude Code, Cursor agent mode, or v0.
 */
export function StreamingThread({
  resetKey,
  steps,
  active,
  onComplete,
}: StreamingThreadProps) {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [states, setStates] = useState<StepState[]>(() =>
    steps.map(() => "pending"),
  );

  // Reset when scene changes.
  useEffect(() => {
    setCurrentIndex(-1);
    setStates(steps.map(() => "pending"));
  }, [resetKey, steps]);

  // Kick off the first step once the thread becomes active.
  useEffect(() => {
    if (!active) return;
    if (currentIndex !== -1) return;
    const t = window.setTimeout(() => setCurrentIndex(0), 140);
    return () => window.clearTimeout(t);
  }, [active, currentIndex]);

  // Drive the step pipeline.
  useEffect(() => {
    if (!active) return;
    if (currentIndex < 0 || currentIndex >= steps.length) return;

    setStates((prev) => {
      const next = [...prev];
      next[currentIndex] = "running";
      return next;
    });

    const step = steps[currentIndex];
    const t = window.setTimeout(() => {
      setStates((prev) => {
        const next = [...prev];
        next[currentIndex] = "done";
        return next;
      });
      if (currentIndex === steps.length - 1) {
        // Hand off after a short beat so the final tick is visible.
        window.setTimeout(onComplete, 260);
      } else {
        setCurrentIndex((i) => i + 1);
      }
    }, step.duration);

    return () => window.clearTimeout(t);
    // onComplete is stable enough via parent useCallback; we only re-run
    // when the step pointer advances.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, active, steps]);

  return (
    <ol className="space-y-3 list-none m-0 p-0">
      {steps.map((step, i) => {
        const state = states[i] ?? "pending";
        const visible = state !== "pending";

        return (
          <AnimatePresence key={`${resetKey}-${i}`} mode="popLayout">
            {visible && (
              <motion.li
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-[18px_1fr] gap-2 items-start"
              >
                <span className="mt-[3px] inline-flex h-3.5 w-3.5 items-center justify-center">
                  {state === "running" ? (
                    <span className="relative inline-flex h-3 w-3">
                      <span className="absolute inset-0 rounded-full border border-[var(--color-accent)]/30" />
                      <span
                        className="absolute inset-0 rounded-full border border-transparent border-t-[var(--color-accent)] animate-spin"
                        style={{ animationDuration: "0.9s" }}
                      />
                    </span>
                  ) : (
                    <svg
                      viewBox="0 0 12 12"
                      className="h-3 w-3 text-[var(--color-accent)]"
                      aria-hidden="true"
                    >
                      <path
                        d="M2.5 6.4 L5 8.8 L9.5 3.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </span>

                <div className="min-w-0">
                  <p
                    className={[
                      "font-sans text-[12.5px] leading-snug",
                      state === "done"
                        ? "text-[var(--color-body)]"
                        : "text-[var(--color-heading)]",
                    ].join(" ")}
                  >
                    {step.label}
                    {state === "running" && <BlinkingCursor />}
                  </p>
                  {step.detail && (
                    <p className="font-mono text-[11px] leading-snug text-[var(--color-muted)] mt-0.5 truncate">
                      {step.detail}
                    </p>
                  )}
                </div>
              </motion.li>
            )}
          </AnimatePresence>
        );
      })}
    </ol>
  );
}

function BlinkingCursor() {
  return (
    <span
      aria-hidden="true"
      className="inline-block align-baseline ml-1 h-[0.9em] w-[2px] bg-[var(--color-accent)] animate-[blink_1s_step-end_infinite]"
    />
  );
}
