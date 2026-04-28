'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { METHODOLOGY } from '@/config/copy';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: 'easeOut' as const },
  }),
};

export function Methodology() {
  return (
    <section className="py-24 bg-bg-base">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-fg-base mb-4">
            {METHODOLOGY.sectionTitle}
          </h2>
          <p className="text-fg-muted text-lg mb-16 max-w-xl">
            {METHODOLOGY.sectionSubtitle}
          </p>
        </motion.div>

        <ol className="space-y-12">
          {METHODOLOGY.items.map((item, i) => (
            <motion.li
              key={item.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="grid grid-cols-[2rem_1fr] md:grid-cols-[3rem_1fr] gap-x-6 items-start"
            >
              {/* Number */}
              <span
                className="font-display text-2xl md:text-3xl font-bold text-fg-muted/40 leading-none pt-1 select-none"
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, '0')}
              </span>

              <div>
                <h3 className="font-display text-xl md:text-2xl font-bold text-fg-base mb-2">
                  {item.title}
                </h3>
                <p className="text-fg-muted text-base leading-relaxed max-w-prose">
                  {item.description}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
