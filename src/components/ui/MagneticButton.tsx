'use client';

import { useRef, useCallback, useState } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

interface MagneticButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function MagneticButton({ href, children, className = '' }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 20, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 200, damping: 20, mass: 0.5 });

  const [ringKey, setRingKey] = useState(0);
  const [showRing, setShowRing] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReduced) return;

      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      // Reduced pull ratio: 20% (was 35%)
      x.set(dx * 0.2);
      y.set(dy * 0.2);
    },
    [x, y]
  );

  const handleMouseEnter = useCallback(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;
    setRingKey((k) => k + 1);
    setShowRing(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
    setShowRing(false);
  }, [x, y]);

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="inline-block relative"
    >
      {/* Hover ring — grows from 0 to 32px radius, fades out */}
      <AnimatePresence>
        {showRing && (
          <motion.span
            key={ringKey}
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 m-auto rounded-full border border-accent"
            style={{ width: 0, height: 0 }}
            initial={{ width: 0, height: 0, opacity: 1 }}
            animate={{ width: 64, height: 64, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          />
        )}
      </AnimatePresence>

      <motion.div style={{ x: springX, y: springY }}>
        <Link
          href={href}
          className={`inline-flex items-center justify-center rounded-full bg-accent text-bg-base font-sans font-medium px-8 py-3.5 text-sm tracking-wide transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${className}`}
        >
          {children}
        </Link>
      </motion.div>
    </div>
  );
}
