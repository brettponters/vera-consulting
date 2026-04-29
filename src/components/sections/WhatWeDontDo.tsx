'use client';

import { motion, type Transition, type Variants } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { WHAT_WE_DONT_DO } from '@/config/copy';

const easeOut = [0.22, 1, 0.36, 1] as Transition['ease'];

const fade: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: easeOut },
  }),
};

export function WhatWeDontDo() {
  return (
    <section className="border-t border-black/[0.06] bg-bg-deep py-24 md:py-28">
      <Container>
        <div className="mx-auto max-w-4xl">
          <motion.h2
            className="mb-14 font-display text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-[1.1] tracking-tight text-fg-base"
            variants={fade}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {WHAT_WE_DONT_DO.heading}
          </motion.h2>

          <ul className="space-y-8 md:space-y-10">
            {WHAT_WE_DONT_DO.items.map((item, i) => (
              <motion.li
                key={i}
                className="grid grid-cols-[auto_1fr] items-baseline gap-x-6 border-t border-black/[0.08] pt-8 md:gap-x-10"
                variants={fade}
                custom={i + 1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
              >
                <span aria-hidden className="font-display text-sm tabular-nums text-fg-muted">
                  No.
                </span>
                <p className="max-w-2xl font-display text-[clamp(1.25rem,2.2vw,1.625rem)] font-medium leading-[1.4] tracking-[-0.005em] text-fg-base">
                  {item}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
