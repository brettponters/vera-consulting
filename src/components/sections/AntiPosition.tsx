'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { ANTI_POSITION } from '@/config/copy';

export function AntiPosition() {
  const reduced = useReducedMotion();

  return (
    <div className="relative overflow-hidden bg-bg-subtle">
      {/* Top hairline — draws in from left */}
      <motion.div
        className="absolute top-0 left-0 h-px bg-fg-base/10"
        initial={{ scaleX: 0, originX: 0 }}
        whileInView={reduced ? { scaleX: 1 } : { scaleX: 1 }}
        viewport={{ once: true, margin: '-20px' }}
        transition={reduced ? { duration: 0 } : { duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{ width: '100%' }}
      />
      {/* Bottom hairline — draws in from right */}
      <motion.div
        className="absolute bottom-0 right-0 h-px bg-fg-base/10"
        initial={{ scaleX: 0, originX: 1 }}
        whileInView={reduced ? { scaleX: 1 } : { scaleX: 1 }}
        viewport={{ once: true, margin: '-20px' }}
        transition={reduced ? { duration: 0 } : { duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        style={{ width: '100%' }}
      />

      <Container>
        <motion.p
          className="py-4 text-center font-sans text-xs font-medium uppercase tracking-[0.18em] text-fg-muted"
          initial={reduced ? { opacity: 0 } : { opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-20px' }}
          transition={
            reduced
              ? { duration: 0.3 }
              : { duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }
          }
        >
          {ANTI_POSITION.line}
        </motion.p>
      </Container>
    </div>
  );
}
