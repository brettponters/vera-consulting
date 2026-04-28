'use client';

import { useEffect, useRef, useState } from 'react';
import { COAGENT, SELECTED_WORK } from '@/config/copy';
import { Container } from '@/components/layout/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { TextLink } from '@/components/ui/TextLink';
import CoAgentArchitectureCompact from '@/components/diagrams/CoAgentArchitectureCompact';

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

function rowStyle(visible: boolean, delay: string) {
  return {
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(10px)',
    transition: `opacity 0.45s ease ${delay}, transform 0.45s ease ${delay}`,
  };
}

export function SelectedWork() {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 bg-bg-subtle border-t border-white/[0.04]"
      aria-label="Selected work"
    >
      <Container>
        {/* Header */}
        <div style={rowStyle(inView, '0ms')}>
          <Eyebrow className="mb-4">{COAGENT.eyebrow}</Eyebrow>
          <p className="text-fg-muted max-w-lg leading-relaxed">
            A sample of what RAIN has shipped. More in progress.
          </p>
        </div>

        {/* Work list */}
        <div className="mt-10">
          {/* CoAgent entry */}
          <div
            className="border-t border-white/[0.05] py-8 flex flex-col md:flex-row gap-6 md:gap-10 items-start"
            style={rowStyle(inView, '80ms')}
          >
            {/* Thumbnail — compact diagram at ~40% width */}
            <div className="w-full md:w-[40%] shrink-0 border border-fg-muted/10 rounded-lg overflow-hidden bg-bg-base/40 p-3">
              <CoAgentArchitectureCompact className="w-full h-auto opacity-75" />
            </div>

            {/* Text */}
            <div className="flex flex-col justify-center gap-3">
              <h2 className="font-display text-xl font-semibold text-fg-base leading-snug">
                {SELECTED_WORK[0].name}
              </h2>
              <p className="text-sm text-fg-muted leading-relaxed max-w-sm">
                {SELECTED_WORK[0].blurb}
              </p>
              <TextLink href={COAGENT.ctaHref} className="text-sm w-fit">
                {COAGENT.ctaLabel}
                <span
                  className="inline-block transition-transform duration-200 group-hover:translate-x-0.5"
                  aria-hidden="true"
                >
                  &rarr;
                </span>
              </TextLink>
            </div>
          </div>

          {/* Placeholder slot */}
          <div
            className="border-t border-white/[0.05] py-8 flex flex-col md:flex-row gap-6 md:gap-10 items-start"
            style={rowStyle(inView, '160ms')}
          >
            {/* Dashed placeholder visual */}
            <div className="w-full md:w-[40%] shrink-0 border border-dashed border-fg-muted/20 rounded-lg aspect-video flex items-center justify-center">
              <span className="text-xs text-fg-muted/40 tracking-wide">—</span>
            </div>

            {/* Text */}
            <div className="flex flex-col justify-center gap-1">
              <p className="text-sm text-fg-muted/50 leading-relaxed">
                More builds in progress.
              </p>
            </div>
          </div>

          {/* Bottom border */}
          <div
            className="border-t border-white/[0.05]"
            style={rowStyle(inView, '200ms')}
          />
        </div>
      </Container>
    </section>
  );
}
