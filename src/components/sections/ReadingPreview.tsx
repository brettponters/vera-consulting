'use client';

import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence, type Transition, type Variants } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { TextLink } from '@/components/ui/TextLink';
import { READING_PREVIEW } from '@/config/copy';

const easeOut = [0.22, 1, 0.36, 1] as Transition['ease'];

const fade: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.06, ease: easeOut },
  }),
};

const AUTO_ADVANCE_MS = 6500;

export function ReadingPreview() {
  const papers = READING_PREVIEW.papers;
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((next: number) => {
    setDirection(next > index ? 1 : -1);
    setIndex((next + papers.length) % papers.length);
  }, [index, papers.length]);

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    if (paused) return;
    const id = window.setTimeout(next, AUTO_ADVANCE_MS);
    return () => window.clearTimeout(id);
  }, [index, paused, next]);

  const paper = papers[index];

  return (
    <section className="border-t border-black/[0.06] bg-bg-subtle py-24 md:py-32">
      <Container>
        <div className="mx-auto max-w-5xl">
          <motion.h2
            className="mb-5 font-display text-[clamp(2.25rem,5vw,3.75rem)] font-bold leading-[1.05] tracking-tight text-fg-base"
            variants={fade}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {READING_PREVIEW.heading}
          </motion.h2>
          <motion.p
            className="mb-14 max-w-2xl font-sans text-[1.0625rem] leading-[1.75] text-fg-muted md:text-lg"
            variants={fade}
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {READING_PREVIEW.paragraph1}
          </motion.p>

          {/* Carousel */}
          <div
            className="relative"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="relative h-[280px] overflow-hidden rounded-xl border border-black/[0.1] bg-bg-elevated md:h-[320px]">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.a
                  key={paper.id}
                  href={paper.href}
                  custom={direction}
                  initial={{ opacity: 0, x: direction * 80 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -80 }}
                  transition={{ duration: 0.5, ease: easeOut }}
                  className="absolute inset-0 flex flex-col justify-between p-8 md:p-12"
                  tabIndex={paper.href === '#' ? -1 : 0}
                  aria-disabled={paper.href === '#'}
                >
                  <div>
                    <span className="font-display text-[10px] uppercase tracking-[0.2em] text-accent">
                      Paper {String(index + 1).padStart(2, '0')} / {String(papers.length).padStart(2, '0')}
                    </span>
                    <p className="mt-5 font-display text-[clamp(1.5rem,3.2vw,2.25rem)] font-semibold leading-[1.15] tracking-tight text-fg-base">
                      {paper.title}
                    </p>
                  </div>
                  <p className="font-sans text-sm text-fg-muted md:text-base">
                    {paper.authors}
                  </p>
                </motion.a>
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="mt-6 flex items-center justify-between">
              <div className="flex gap-2" role="tablist" aria-label="Select paper">
                {papers.map((p, i) => (
                  <button
                    key={p.id}
                    type="button"
                    role="tab"
                    aria-selected={i === index}
                    aria-label={`Go to paper ${i + 1}`}
                    onClick={() => goTo(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === index ? 'w-8 bg-fg-base' : 'w-4 bg-fg-muted/30 hover:bg-fg-muted/60'
                    }`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous paper"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-black/[0.12] text-fg-base transition-colors duration-200 hover:border-black/[0.3] hover:bg-bg-elevated"
                >
                  <span aria-hidden>←</span>
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Next paper"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-black/[0.12] text-fg-base transition-colors duration-200 hover:border-black/[0.3] hover:bg-bg-elevated"
                >
                  <span aria-hidden>→</span>
                </button>
              </div>
            </div>
          </div>

          <motion.div
            className="mt-12"
            variants={fade}
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <TextLink href={READING_PREVIEW.ctaHref} className="text-sm">
              {READING_PREVIEW.ctaLabel}
            </TextLink>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
