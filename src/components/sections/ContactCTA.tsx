'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { CONTACT_CTA } from '@/config/copy';

export function ContactCTA() {
  return (
    <section className="py-24 bg-bg-subtle border-t border-white/[0.06]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-fg-base max-w-2xl leading-tight">
            {CONTACT_CTA.heading}
          </h2>
          <div className="shrink-0">
            <MagneticButton href={CONTACT_CTA.ctaHref}>
              {CONTACT_CTA.ctaLabel}
            </MagneticButton>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
