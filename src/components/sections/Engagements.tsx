'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { Reveal } from '@/components/ui/Reveal';
import { ENGAGEMENTS } from '@/config/copy';

const itemVariant = {
  hidden: { opacity: 0, y: 8 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.1, ease: 'easeOut' as const },
  }),
};

export function Engagements() {
  return (
    <section className="py-24 bg-bg-base border-t border-black/[0.06]">
      <Container>
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-fg-base tracking-tight mb-3">
              {ENGAGEMENTS.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-fg-muted text-base leading-relaxed mb-16">
              {ENGAGEMENTS.subhead}
            </p>
          </Reveal>

          <div className="space-y-10">
            {ENGAGEMENTS.items.map((item, i) => (
              <motion.div
                key={item.id}
                custom={i}
                variants={itemVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                className={
                  i < ENGAGEMENTS.items.length - 1
                    ? 'pb-10 border-b border-black/[0.08]'
                    : ''
                }
              >
                <p className="font-sans text-base leading-[1.75] text-fg-base">
                  <strong className="font-semibold">{item.name}</strong>{' '}
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.p
            className="mt-12 text-sm text-fg-muted italic"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {ENGAGEMENTS.footerLine}
          </motion.p>
        </div>
      </Container>
    </section>
  );
}
