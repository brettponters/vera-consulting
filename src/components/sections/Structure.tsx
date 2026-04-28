'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { Reveal } from '@/components/ui/Reveal';
import { TextLink } from '@/components/ui/TextLink';
import { STRUCTURE } from '@/config/copy';

export function Structure() {
  return (
    <section className="py-24 bg-bg-base border-t border-black/[0.06]">
      <Container>
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-fg-base tracking-tight mb-8">
              {STRUCTURE.heading}
            </h2>
          </Reveal>

          {STRUCTURE.paragraphs.map((para, i) => (
            <motion.p
              key={i}
              className="font-sans text-base leading-[1.85] text-fg-base mb-5"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.1, ease: 'easeOut' }}
            >
              {para}
            </motion.p>
          ))}

          <motion.div
            className="mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <TextLink href={STRUCTURE.ctaHref} className="text-sm">
              {STRUCTURE.ctaLabel}
            </TextLink>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
