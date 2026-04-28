'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { ABOUT } from '@/config/copy';

export function About() {
  return (
    <section className="py-24 bg-bg-subtle border-t border-white/[0.04]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="max-w-prose"
        >
          <Eyebrow className="mb-4">Studio</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-fg-base mb-6">
            {ABOUT.heading}
          </h2>
          <p className="font-sans text-lg leading-relaxed text-fg-muted">
            {ABOUT.body}
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
