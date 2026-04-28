'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { HOW_RAIN_WORKS, IMAGERY } from '@/config/copy';

// Last part has deliverables; others don't
type Part = (typeof HOW_RAIN_WORKS.parts)[number];
type PartWithDeliverables = Part & {
  deliverables: ReadonlyArray<{ title: string; description: string }>;
};

function hasDeliverables(part: Part): part is PartWithDeliverables {
  return 'deliverables' in part && Array.isArray((part as PartWithDeliverables).deliverables);
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

function ImageSlot() {
  if (!IMAGERY.howRainWorks.src) return null;

  return (
    <div className="mt-8 w-full relative overflow-hidden rounded-sm" style={{ aspectRatio: '16/9' }}>
      <Image
        src={IMAGERY.howRainWorks.src}
        alt={IMAGERY.howRainWorks.alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 60vw, 720px"
        className="object-cover object-center"
        style={{ filter: 'brightness(0.75)' }}
      />
      {IMAGERY.howRainWorks.credit && (
        <span
          className="absolute bottom-2 right-2 text-[10px] text-fg-muted/40 select-none"
          aria-hidden="true"
        >
          {IMAGERY.howRainWorks.credit}
        </span>
      )}
    </div>
  );
}

export function HowRainWorks() {
  const [activeId, setActiveId] = useState<string>(HOW_RAIN_WORKS.parts[0].id);
  const partRefs = useRef<Map<string, HTMLElement>>(new Map());

  // Intersection observer to track active TOC section
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    HOW_RAIN_WORKS.parts.forEach((part) => {
      const el = partRefs.current.get(part.id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveId(part.id);
          }
        },
        { threshold: 0.25, rootMargin: '-15% 0px -60% 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  function scrollTopart(id: string) {
    const el = partRefs.current.get(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // Image slot appears on the 'responsible-ai' part
  const IMAGE_PART_ID = 'responsible-ai';

  return (
    <section className="py-24 md:py-32 bg-bg-subtle">
      <Container>
        {/* Section header */}
        <div className="mb-16 md:mb-20">
          <Eyebrow className="mb-5">{HOW_RAIN_WORKS.eyebrow}</Eyebrow>
          <Reveal delay={0.1}>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-fg-base tracking-tight max-w-2xl">
              {HOW_RAIN_WORKS.sectionTitle}
            </h2>
          </Reveal>
        </div>

        {/* 2-column layout: sticky TOC + content */}
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-12 lg:gap-16 xl:gap-24">

          {/* Left: sticky TOC — hidden on mobile */}
          <aside className="hidden lg:block">
            <nav
              className="sticky top-24 flex flex-col gap-3"
              aria-label="Section navigation"
            >
              {HOW_RAIN_WORKS.parts.map((part) => {
                const isActive = activeId === part.id;
                return (
                  <button
                    key={part.id}
                    onClick={() => scrollTopart(part.id)}
                    className={[
                      'text-left text-sm leading-snug transition-colors duration-200 cursor-pointer',
                      isActive ? 'text-fg-base' : 'text-fg-muted hover:text-fg-base/70',
                    ].join(' ')}
                  >
                    {part.title}
                  </button>
                );
              })}
            </nav>
          </aside>

          {/* Right: content parts */}
          <div className="space-y-0">
            {HOW_RAIN_WORKS.parts.map((part, i) => {
              const isLast = i === HOW_RAIN_WORKS.parts.length - 1;
              const showImage = part.id === IMAGE_PART_ID;

              return (
                <motion.div
                  key={part.id}
                  ref={(el) => {
                    if (el) partRefs.current.set(part.id, el);
                    else partRefs.current.delete(part.id);
                  }}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-60px' }}
                  className={[
                    'pt-12 pb-12',
                    !isLast ? 'border-b border-white/[0.06]' : '',
                  ].join(' ')}
                >
                  <h3 className="font-display text-xl md:text-2xl font-bold text-fg-base mb-5 leading-snug">
                    {part.title}
                  </h3>

                  <p className="text-fg-base text-base md:text-[1.0625rem] leading-[1.8] max-w-prose">
                    {part.body}
                  </p>

                  {/* Image slot for the responsible-ai part */}
                  {showImage && <ImageSlot />}

                  {/* Deliverables list for the last part */}
                  {hasDeliverables(part) && (
                    <div className="mt-8 space-y-0">
                      {part.deliverables.map((d, di) => {
                        const isLastDeliv = di === part.deliverables.length - 1;
                        return (
                          <div
                            key={d.title}
                            className={[
                              'py-5',
                              !isLastDeliv ? 'border-b border-white/[0.06]' : '',
                            ].join(' ')}
                          >
                            <p className="font-display text-sm font-semibold text-fg-base mb-1 tracking-tight">
                              {d.title}
                            </p>
                            <p className="text-fg-muted text-sm leading-relaxed max-w-prose">
                              {d.description}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
