'use client';

import { motion, type Transition, type Variants } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { TextLink } from '@/components/ui/TextLink';
import CoAgentArchitectureCompact from '@/components/diagrams/CoAgentArchitectureCompact';
import { COAGENT_PREVIEW } from '@/config/copy';

const easeOut = [0.22, 1, 0.36, 1] as Transition['ease'];

const fade: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: easeOut },
  }),
};

export function SelectedWork() {
  return (
    <section className="border-t border-black/[0.06] bg-bg-base py-24 md:py-32">
      <Container>
        <div className="mx-auto max-w-5xl">
          <motion.h2
            className="mb-12 font-display text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-[1.1] tracking-tight text-fg-base"
            variants={fade}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {COAGENT_PREVIEW.heading}
          </motion.h2>

          <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-12 md:gap-16">
            <motion.div
              className="overflow-hidden rounded-lg border border-black/[0.08] bg-bg-elevated p-8 md:col-span-6 md:p-10"
              variants={fade}
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              <CoAgentArchitectureCompact className="h-auto w-full opacity-90" />
            </motion.div>

            <div className="flex flex-col gap-5 md:col-span-6 md:pt-2">
              <motion.p
                className="font-sans text-base leading-[1.85] text-fg-base md:text-[1.0625rem]"
                variants={fade}
                custom={3}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
              >
                {COAGENT_PREVIEW.paragraph1}
              </motion.p>
              <motion.div
                variants={fade}
                custom={4}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
              >
                <TextLink href={COAGENT_PREVIEW.ctaHref} className="text-sm">
                  {COAGENT_PREVIEW.ctaLabel}
                </TextLink>
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
