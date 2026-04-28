'use client';

import Image from 'next/image';
import { motion, type Variants, type Transition } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { DotGrid } from '@/components/ui/DotGrid';
import { HERO, IMAGERY } from '@/config/copy';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 8 },
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
      {/* Light overlay so copy reads over photo */}
      {IMAGERY.hero.src && (
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background:
              'linear-gradient(to bottom, rgba(250,250,247,0.55) 0%, rgba(250,250,247,0.78) 60%, rgba(250,250,247,0.92) 100%)',
          }}
          aria-hidden="true"
        />
      )}
      <DotGrid />
      <Container className="relative z-10 py-24 md:py-32">
        <div className="max-w-3xl">
          <motion.p
            className="mb-6 font-display text-[clamp(0.75rem,1.5vw,0.875rem)] font-medium uppercase tracking-[0.2em] text-fg-muted"
            variants={fadeUp}
            custom={0}
            initial="hidden"
            animate="visible"
          >
            {HERO.name}
          </motion.p>

          <motion.p
            className="font-sans text-[clamp(1.125rem,2vw,1.25rem)] leading-[1.75] text-fg-base"
            variants={fadeUp}
            custom={0.1}
            initial="hidden"
            animate="visible"
          >
            {HERO.paragraph1}
          </motion.p>

          <motion.p
            className="mt-5 font-sans text-[clamp(1.125rem,2vw,1.25rem)] leading-[1.75] text-fg-base"
            variants={fadeUp}
            custom={0.2}
            initial="hidden"
            animate="visible"
          >
            {HERO.paragraph2}
          </motion.p>

          <motion.div
            className="mt-10"
            variants={fadeUp}
            custom={0.35}
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
