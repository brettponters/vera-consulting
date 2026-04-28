'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { Reveal } from '@/components/ui/Reveal';
import { HOW_WE_THINK } from '@/config/copy';

const paraVariant = {
  hidden: { opacity: 0, y: 8 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.08, ease: 'easeOut' as const },
  }),
};

export function HowWeThink() {
  return (
    <section className="py-24 bg-bg-subtle border-t border-black/[0.06]">
      <Container>
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-fg-base tracking-tight mb-10">
              {HOW_WE_THINK.heading}
            </h2>
          </Reveal>

          {HOW_WE_THINK.opening.map((para, i) => (
            <motion.p
              key={i}
              custom={i}
              variants={paraVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              className="font-sans text-base leading-[1.85] text-fg-base mb-5"
            >
              {para}
            </motion.p>
          ))}

          <div className="mt-10 space-y-8">
            {HOW_WE_THINK.values.map((val, i) => (
              <motion.p
                key={val.id}
                custom={i + HOW_WE_THINK.opening.length}
                variants={paraVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                className="font-sans text-base leading-[1.85] text-fg-base"
              >
                <strong className="font-semibold text-fg-base">{val.name}.</strong>{' '}
                {val.body}
              </motion.p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
