'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { ENGAGEMENTS } from '@/config/copy';

const rowVariant = {
  hidden: { opacity: 0, y: 8 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.08, ease: 'easeOut' as const },
  }),
};

export function Engagements() {
  return (
    <section className="py-24 bg-bg-base border-t border-white/[0.04]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16">
          {/* Left col: section title + framing line */}
          <div className="lg:pt-1">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-fg-base tracking-tight mb-4">
              What we do
            </h2>
            <p className="text-fg-muted text-base leading-relaxed max-w-xs">
              Three ways to work together. Each ends with something real.
            </p>
          </div>

          {/* Right col: stacked vertical outcome list */}
          <div>
            {ENGAGEMENTS.map((eng, i) => (
              <motion.div
                key={eng.id}
                custom={i}
                variants={rowVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                className={
                  i < ENGAGEMENTS.length - 1
                    ? 'pb-10 mb-10 border-b border-white/[0.05]'
                    : 'pb-2'
                }
              >
                {/* Outcome headline */}
                <p className="font-display text-2xl md:text-3xl font-bold text-fg-base tracking-tight leading-snug mb-1">
                  {eng.outcomeHeadline}
                </p>

                {/* Duration label */}
                {eng.durationLabel && (
                  <p className="text-fg-muted text-sm mb-4">{eng.durationLabel}</p>
                )}

                {/* Description */}
                <p className="text-fg-muted text-base leading-relaxed max-w-prose mb-5">
                  {eng.description}
                </p>

                {/* Deliverables dash list */}
                <ul className="space-y-1.5">
                  {eng.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm text-fg-muted">
                      <span className="shrink-0 select-none">—</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
