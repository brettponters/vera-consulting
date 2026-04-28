'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { Reveal } from '@/components/ui/Reveal';
import { TextLink } from '@/components/ui/TextLink';
import CoAgentArchitectureCompact from '@/components/diagrams/CoAgentArchitectureCompact';
import { COAGENT_PREVIEW } from '@/config/copy';

export function SelectedWork() {
  return (
    <section className="py-24 bg-bg-base border-t border-black/[0.06]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
          {/* SVG visual — 5 cols */}
          <motion.div
            className="md:col-span-5 rounded-xl overflow-hidden bg-bg-elevated border border-black/[0.08] p-8 md:p-10"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <CoAgentArchitectureCompact className="w-full h-auto opacity-80" />
          </motion.div>

          {/* Text — 7 cols */}
          <div className="md:col-span-7 flex flex-col gap-6 md:pt-2">
            <Reveal>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-fg-base tracking-tight leading-snug">
                {COAGENT_PREVIEW.heading}
              </h2>
            </Reveal>

            <motion.p
              className="font-sans text-base leading-[1.85] text-fg-base"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: 0.08 }}
            >
              {COAGENT_PREVIEW.paragraph1}
            </motion.p>

            <motion.p
              className="font-sans text-base leading-[1.85] text-fg-base"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: 0.16 }}
            >
              {COAGENT_PREVIEW.paragraph2}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: 0.24 }}
            >
              <TextLink href={COAGENT_PREVIEW.ctaHref} className="text-sm">
                {COAGENT_PREVIEW.ctaLabel}
              </TextLink>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
