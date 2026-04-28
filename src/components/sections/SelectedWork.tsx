'use client';

import { useEffect, useRef, useState } from 'react';
import { COAGENT, IMAGERY } from '@/config/copy';
import { Container } from '@/components/layout/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { TextLink } from '@/components/ui/TextLink';
import CoAgentArchitectureCompact from '@/components/diagrams/CoAgentArchitectureCompact';
import Image from 'next/image';

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

export function SelectedWork() {
  const { ref, inView } = useInView();

  const fadeUp = {
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(16px)',
    transition: 'opacity 0.5s ease, transform 0.5s ease',
  };

  const hasImage = Boolean(IMAGERY.selectedWorkCoAgent.src);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 bg-bg-subtle border-t border-white/[0.04]"
      aria-label="Selected work"
    >
      <Container>
        <div style={fadeUp}>
          <Eyebrow className="mb-10">{COAGENT.eyebrow}</Eyebrow>

          {/* 12-col showcase grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
            {/* Image area — 7 cols */}
            <div className="md:col-span-7 rounded-xl overflow-hidden bg-bg-elevated border border-white/[0.06]">
              {hasImage ? (
                <Image
                  src={IMAGERY.selectedWorkCoAgent.src}
                  alt={IMAGERY.selectedWorkCoAgent.alt}
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                />
              ) : (
                <div className="p-8 md:p-10">
                  <CoAgentArchitectureCompact className="w-full h-auto opacity-80" />
                </div>
              )}
            </div>

            {/* Text area — 5 cols */}
            <div className="md:col-span-5 flex flex-col justify-center gap-5 md:pt-2">
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-fg-base leading-snug">
                {COAGENT.headline}
              </h2>
              <p className="text-sm text-fg-muted leading-relaxed">
                {COAGENT.body}
              </p>
              <p className="text-xs text-fg-muted/60 tracking-wide">
                Local-first AI agent&nbsp;&middot;&nbsp;Shipped 2026&nbsp;&middot;&nbsp;Built by RAIN
              </p>
              <TextLink href={COAGENT.ctaHref} className="text-sm w-fit">
                {COAGENT.ctaLabel}&nbsp;&rarr;
              </TextLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
