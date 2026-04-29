'use client';

import { motion, type Transition, type Variants } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { HERO } from '@/config/copy';

const easeOut = [0.22, 1, 0.36, 1] as Transition['ease'];

const fade: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut, delay },
  }),
};

export function Hero() {
  return (
    <section className="grain relative flex min-h-[90svh] items-center overflow-hidden bg-bg-base pt-20">
      <Container className="relative z-10 py-24 md:py-32">
        <div className="max-w-4xl">
          {/* No eyebrow — the Header carries the brand on every page. The first text fixated
              here should be the thesis, not the studio name. */}
          {/* Headline */}
          <motion.h1
            className="font-display font-bold leading-[1.04] tracking-[-0.022em] text-[clamp(2.5rem,5.6vw,4.75rem)] text-fg-base"
            variants={fade}
            custom={0.1}
            initial="hidden"
            animate="visible"
          >
            {HERO.headlineLines.join(' ')}
          </motion.h1>

          {/* Static accent underline */}
          <motion.span
            aria-hidden
            className="mt-8 block h-[3px] w-20 bg-accent"
            variants={fade}
            custom={0.2}
            initial="hidden"
            animate="visible"
          />

          {/* Body */}
          <motion.p
            className="mt-8 max-w-2xl font-sans text-[clamp(1.125rem,1.7vw,1.25rem)] leading-[1.7] text-fg-base"
            variants={fade}
            custom={0.3}
            initial="hidden"
            animate="visible"
          >
            {HERO.body}
          </motion.p>

          {/* CTA */}
          <motion.div
            className="mt-12"
            variants={fade}
            custom={0.4}
            initial="hidden"
            animate="visible"
          >
            <a
              href={HERO.ctaHref}
              className="group inline-flex items-baseline gap-2 font-display text-base font-medium text-fg-base transition-colors duration-200 hover:text-accent"
            >
              <span className="border-b border-fg-base/40 pb-0.5 transition-colors duration-200 group-hover:border-accent">
                {HERO.ctaLabel}
              </span>
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </a>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
