'use client';

import { motion, type Transition, type Variants } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { ENGAGEMENTS } from '@/config/copy';

const easeOut = [0.22, 1, 0.36, 1] as Transition['ease'];

const fade: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: easeOut },
  }),
};

export function Engagements() {
  return (
    <section className="border-t border-black/[0.06] bg-bg-base py-24 md:py-32">
      <Container>
        <div className="mx-auto max-w-4xl">
          <motion.h2
            className="mb-4 font-display text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-[1.1] tracking-tight text-fg-base"
            variants={fade}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {ENGAGEMENTS.heading}
          </motion.h2>
          <motion.p
            className="mb-16 max-w-2xl text-base leading-relaxed text-fg-muted md:text-lg"
            variants={fade}
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {ENGAGEMENTS.subhead}
          </motion.p>

          <div>
            {ENGAGEMENTS.items.map((item, i) => (
              <motion.div
                key={item.id}
                custom={i}
                variants={fade}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                className="grid grid-cols-[auto_1fr] items-baseline gap-x-8 border-t border-black/[0.08] py-10 md:gap-x-12 md:py-12"
              >
                <span className="font-display text-sm tabular-nums text-fg-muted">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="mb-3 font-display text-2xl font-semibold tracking-tight text-fg-base md:text-3xl">
                    {item.name.replace(/\.$/, '')}
                  </h3>
                  <p className="max-w-2xl font-sans text-base leading-[1.75] text-fg-base md:text-[1.0625rem]">
                    {item.body}
                  </p>
                </div>
              </motion.div>
            ))}
            <div className="border-t border-black/[0.08]" />
          </div>
        </div>
      </Container>
    </section>
  );
}
