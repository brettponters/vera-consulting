'use client';

import { motion, type Transition, type Variants } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { HOW_WE_THINK } from '@/config/copy';

const easeOut = [0.22, 1, 0.36, 1] as Transition['ease'];

const fade: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: easeOut },
  }),
};

export function HowWeThink() {
  return (
    <section className="border-t border-black/[0.06] bg-bg-subtle py-24 md:py-32">
      <Container>
        <div className="mx-auto max-w-4xl">
          <motion.h2
            className="mb-12 font-display text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-[1.1] tracking-tight text-fg-base"
            variants={fade}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {HOW_WE_THINK.heading}
          </motion.h2>

          {HOW_WE_THINK.opening.map((para, i) => (
            <motion.p
              key={i}
              custom={i + 2}
              variants={fade}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="mb-5 max-w-3xl font-sans text-[1.0625rem] leading-[1.85] text-fg-base"
            >
              {para}
            </motion.p>
          ))}
        </div>
      </Container>
    </section>
  );
}
