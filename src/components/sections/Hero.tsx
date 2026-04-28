'use client';

import Image from 'next/image';
import { motion, type Variants, type Transition } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { DotGrid } from '@/components/ui/DotGrid';
import { Reveal } from '@/components/ui/Reveal';
import { HERO, IMAGERY } from '@/config/copy';
import { BRAND_NAME } from '@/config/brand';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as Transition['ease'],
      delay,
    },
  }),
};

export function Hero() {
  return (
    <section className="grain relative flex min-h-[92svh] items-center overflow-hidden bg-bg-base">
      {/* Background atmosphere photo */}
      {IMAGERY.hero.src && (
        <Image
          src={IMAGERY.hero.src}
          alt={IMAGERY.hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      )}
      {/* Dark overlay: base color + gradient toward bottom */}
      {IMAGERY.hero.src && (
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background:
              'linear-gradient(to bottom, rgba(10,10,10,0.82) 0%, rgba(10,10,10,0.88) 60%, rgba(10,10,10,0.95) 100%)',
          }}
          aria-hidden="true"
        />
      )}
      <DotGrid />
      <Container className="relative z-10 py-24 md:py-32">
        <div className="max-w-4xl">
          <motion.p
            className="mb-4 font-display text-[clamp(0.75rem,1.5vw,0.875rem)] font-medium uppercase tracking-[0.2em] text-fg-muted"
            variants={fadeUp}
            custom={0}
            initial="hidden"
            animate="visible"
          >
            {BRAND_NAME}
          </motion.p>

          <Reveal delay={0.08}>
            <h1
              className="font-display font-bold leading-[0.95] tracking-[-0.03em] text-fg-base"
              style={{ fontSize: 'clamp(3.5rem, 8vw, 7rem)' }}
            >
              {HERO.headline}
            </h1>
          </Reveal>

          <motion.p
            className="mt-6 max-w-xl font-sans text-[clamp(1rem,1.8vw,1.125rem)] leading-relaxed text-fg-muted"
            variants={fadeUp}
            custom={0.3}
            initial="hidden"
            animate="visible"
          >
            {HERO.subheadline}
          </motion.p>

          <motion.div
            className="mt-10"
            variants={fadeUp}
            custom={0.45}
            initial="hidden"
            animate="visible"
          >
            <MagneticButton href={HERO.ctaHref}>{HERO.ctaLabel}</MagneticButton>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
