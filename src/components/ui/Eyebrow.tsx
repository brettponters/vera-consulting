'use client';

import { motion, useReducedMotion } from 'framer-motion';

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

/**
 * Animated section eyebrow.
 * Renders small-caps text with a 32px hairline that grows left-to-right on whileInView.
 * Falls back to opacity 0→1 when prefers-reduced-motion is set.
 */
export function Eyebrow({ children, className = '', delay = 0 }: EyebrowProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={`inline-flex flex-col gap-2 ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay, ease: 'easeOut' }}
    >
      <span className="font-sans text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-fg-muted">
        {children}
      </span>
      <motion.span
        className="block h-px bg-fg-muted/30"
        style={{ width: 32 }}
        initial={{ scaleX: 0, originX: 0 }}
        whileInView={reduced ? { scaleX: 1 } : { scaleX: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={
          reduced
            ? { duration: 0 }
            : { duration: 0.5, delay: delay + 0.1, ease: [0.22, 1, 0.36, 1] }
        }
      />
    </motion.div>
  );
}
