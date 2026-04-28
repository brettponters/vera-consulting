'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { CONTACT_CTA } from '@/config/copy';

export function ContactCTA() {
  return (
    <section className="py-24 bg-bg-deep border-t border-black/[0.06]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-fg-base leading-tight mb-5">
            {CONTACT_CTA.heading}
          </h2>
          <p className="font-sans text-base leading-relaxed text-fg-muted mb-10">
            {CONTACT_CTA.body}
          </p>
          <MagneticButton href={CONTACT_CTA.ctaHref}>
            {CONTACT_CTA.ctaLabel}
          </MagneticButton>
        </motion.div>
      </Container>
    </section>
  );
}
