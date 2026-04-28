'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { Reveal } from '@/components/ui/Reveal';
import { TextLink } from '@/components/ui/TextLink';
import { READING_PREVIEW } from '@/config/copy';

export function ReadingPreview() {
  return (
    <section className="py-24 bg-bg-subtle border-t border-black/[0.06]">
      <Container>
        <div className="max-w-3xl mb-10">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-fg-base tracking-tight mb-5">
              {READING_PREVIEW.heading}
            </h2>
          </Reveal>
          <motion.p
            className="font-sans text-base leading-[1.85] text-fg-base mb-2"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: 0.08 }}
          >
            {READING_PREVIEW.paragraph1}
          </motion.p>
          <motion.p
            className="font-sans text-base leading-[1.85] text-fg-muted italic"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: 0.14 }}
          >
            {READING_PREVIEW.tagline}
          </motion.p>
        </div>

        {/* Horizontal scrolling paper list — the only horizontal scroll on the site */}
        <div className="overflow-x-auto pb-4 -mx-6 px-6 md:-mx-10 md:px-10">
          <motion.ul
            className="flex gap-5 w-max"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            role="list"
          >
            {READING_PREVIEW.papers.map((paper, i) => (
              <motion.li
                key={paper.id}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: 0.05 * i, ease: 'easeOut' }}
              >
                <a
                  href={paper.href}
                  className="block w-56 shrink-0 rounded-lg border border-black/[0.08] bg-bg-elevated p-5 hover:border-black/[0.18] transition-colors duration-200"
                  tabIndex={paper.href === '#' ? -1 : 0}
                  aria-disabled={paper.href === '#'}
                >
                  <p className="font-sans text-sm font-medium text-fg-base leading-snug mb-3 line-clamp-3">
                    {paper.title}
                  </p>
                  <p className="font-sans text-xs text-fg-muted">
                    {paper.authors}
                  </p>
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <TextLink href={READING_PREVIEW.ctaHref} className="text-sm">
            {READING_PREVIEW.ctaLabel}
          </TextLink>
        </motion.div>
      </Container>
    </section>
  );
}
