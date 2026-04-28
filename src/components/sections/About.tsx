'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { ABOUT, IMAGERY } from '@/config/copy';

export function About() {
  return (
    <section className="py-24 bg-bg-subtle border-t border-white/[0.04]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-10 md:gap-16 items-start">
          {/* Left: editorial photo */}
          {IMAGERY.about.src && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              className="relative w-full overflow-hidden rounded-sm"
              style={{ aspectRatio: '4/5' }}
            >
              <Image
                src={IMAGERY.about.src}
                alt={IMAGERY.about.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center"
                style={{ filter: 'brightness(0.7)' }}
              />
              {/* Credit */}
              <span
                className="absolute bottom-2 right-2 text-[10px] text-fg-muted/40 select-none"
                aria-hidden="true"
              >
                {IMAGERY.about.credit}
              </span>
            </motion.div>
          )}

          {/* Right: prose */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.08 }}
          >
            <Eyebrow className="mb-4">Studio</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-fg-base mb-6">
              {ABOUT.heading}
            </h2>
            <p className="font-sans text-lg leading-relaxed text-fg-muted">
              {ABOUT.body}
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
