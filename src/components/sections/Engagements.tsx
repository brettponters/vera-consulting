'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { ENGAGEMENTS } from '@/config/copy';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' as const },
  }),
};

export function Engagements() {
  return (
    <section className="py-24 bg-bg-base">
      <Container>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-fg-base mb-4">
          Engagements
        </h2>
        <p className="text-fg-muted text-lg mb-14 max-w-xl">
          Three ways to work together. All scoped, all priced upfront.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ENGAGEMENTS.map((eng, i) => (
            <motion.div
              key={eng.id}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="group relative flex flex-col border border-fg-muted/20 rounded-lg p-8 bg-bg-base transition-all duration-300 hover:bg-bg-subtle hover:-translate-y-1"
            >
              {/* Price */}
              <span className="font-display text-2xl font-bold text-fg-base">
                {eng.priceLabel}
              </span>
              <span className="text-fg-muted text-sm mt-1 mb-5">
                {eng.durationLabel}
              </span>

              {/* Name */}
              <h3 className="font-display text-xl font-bold text-fg-base mb-3">
                {eng.name}
              </h3>

              {/* Description */}
              <p className="text-fg-muted text-sm leading-relaxed mb-6 flex-1">
                {eng.description}
              </p>

              {/* Deliverables */}
              <ul className="space-y-2">
                {eng.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm text-fg-muted">
                    <span className="mt-0.5 shrink-0 text-fg-muted select-none">—</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
