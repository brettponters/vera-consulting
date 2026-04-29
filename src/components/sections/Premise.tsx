'use client';

import { motion, type Transition, type Variants } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { PREMISE } from '@/config/copy';

const easeOut = [0.22, 1, 0.36, 1] as Transition['ease'];

const fade: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: easeOut },
  }),
};

export function Premise() {
  return (
    <section className="border-t border-black/[0.06] bg-bg-deep py-24 md:py-28">
      <Container>
        <div className="mx-auto max-w-3xl">
          <motion.span
            aria-hidden
            className="mb-10 block h-[2px] w-12 bg-accent"
            variants={fade}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          />
          {PREMISE.paragraphs.map((para, i) => (
            <motion.p
              key={i}
              className="font-display text-[clamp(1.375rem,2.4vw,1.875rem)] font-medium leading-[1.4] tracking-[-0.005em] text-fg-base [&:not(:last-child)]:mb-8"
              variants={fade}
              custom={i + 1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
            >
              {para}
            </motion.p>
          ))}
        </div>
      </Container>
    </section>
  );
}
