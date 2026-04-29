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
 * Scroll-triggered fade + slight upward translate.
 * Used for all sections except the WhyNow showpiece, which manages
 * its own motion directly via framer-motion.
 *
 * Respects prefers-reduced-motion: collapses to an instant opacity reveal.
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
      className={className}
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
      transition={{
        duration: 0.55,
        ease: [0.25, 0.1, 0.25, 1],
        delay,
      }}
      // framer-motion respects prefers-reduced-motion automatically when
      // the global CSS rule sets transition-duration to 0.01ms; the motion
      // values still run but complete in negligible time.
    >
      {children}
    </motion.div>
  );
}
