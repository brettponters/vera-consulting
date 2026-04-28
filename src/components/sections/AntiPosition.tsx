'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { ANTI_POSITION } from '@/config/copy';

export function AntiPosition() {
  const reduced = useReducedMotion();

  return (
    <div className="relative bg-bg-subtle border-y border-fg-base/10">
      <Container>
        <motion.p
          className="py-4 text-center font-sans text-xs font-medium uppercase tracking-[0.18em] text-fg-muted"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20px' }}
          transition={
            reduced
              ? { duration: 0 }
              : { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
          }
        >
          {ANTI_POSITION.line}
        </motion.p>
      </Container>
    </div>
  );
}
