'use client';

import { motion, type Transition, type Variants } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { TextLink } from '@/components/ui/TextLink';
import { FIELD_NOTES } from '@/config/copy';

const easeOut = [0.22, 1, 0.36, 1] as Transition['ease'];

const fade: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: easeOut },
  }),
};

export function FieldNotes() {
  const note = FIELD_NOTES.notes[0];

  return (
    <section className="border-t border-black/[0.06] bg-bg-subtle py-24 md:py-32">
      <Container>
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 flex items-baseline justify-between gap-6">
            <motion.h2
              className="font-display text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-[1.1] tracking-tight text-fg-base"
              variants={fade}
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
            >
              {FIELD_NOTES.heading}
            </motion.h2>
            <motion.p
              className="hidden max-w-md text-right font-sans text-sm leading-[1.6] text-fg-muted md:block"
              variants={fade}
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
            >
              {FIELD_NOTES.description}
            </motion.p>
          </div>

          <motion.a
            href={note.href}
            className="group block border-y border-black/[0.1] py-10 transition-colors duration-300 hover:bg-bg-elevated md:py-14"
            variants={fade}
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <div className="grid grid-cols-1 gap-y-6 gap-x-12 md:grid-cols-12">
              <div className="md:col-span-3">
                <p className="font-display text-[10px] uppercase tracking-[0.22em] text-accent">
                  {note.number}
                </p>
                <p className="mt-2 font-sans text-sm tabular-nums text-fg-muted">
                  {note.date}
                </p>
              </div>
              <div className="md:col-span-9">
                <h3 className="font-display text-[clamp(1.5rem,3vw,2.25rem)] font-semibold leading-[1.15] tracking-tight text-fg-base transition-colors duration-200 group-hover:text-accent">
                  {note.title}
                </h3>
                <p className="mt-5 max-w-2xl font-sans text-[1.0625rem] leading-[1.8] text-fg-base">
                  {note.lede}
                </p>
                <p className="mt-6 inline-flex items-baseline gap-2 font-display text-sm font-medium text-fg-base">
                  <span className="border-b border-fg-base/40 pb-0.5 transition-colors duration-200 group-hover:border-accent">
                    Read note
                  </span>
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </p>
              </div>
            </div>
          </motion.a>

          <motion.div
            className="mt-10"
            variants={fade}
            custom={4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <TextLink href={FIELD_NOTES.ctaHref} className="text-sm">
              {FIELD_NOTES.ctaLabel}
            </TextLink>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
