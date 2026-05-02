"use client";

import { useRef, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Delay in seconds before the animation starts. Default: 0 */
  delay?: number;
  /** How much of the element must be visible before triggering. Default: 0.15 */
  threshold?: number;
}

/**
 * Scroll-triggered fade + subtle upward translate (~12px).
 * 600ms ease-out. Used for all sections except motion-heavy showpieces
 * that manage their own animation internally.
 *
 * Respects prefers-reduced-motion: global CSS collapses transitions to 0.01ms,
 * so framer-motion completes instantly without code branching.
 */
export function Reveal({
  children,
  className = "",
  delay = 0,
  threshold = 0.15,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: threshold });

  return (
    <motion.div
      ref={ref}
      className={`reveal-on-scroll ${className}`}
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
