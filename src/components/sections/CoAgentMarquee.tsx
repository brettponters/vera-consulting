'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { COAGENT } from '@/config/copy';
import { Container } from '@/components/layout/Container';
import CoAgentArchitectureCompact from '@/components/diagrams/CoAgentArchitectureCompact';

function useInView(threshold = 0.15) {
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

interface MetricTileProps {
  value: string;
  label: string;
  delay?: string;
  visible: boolean;
}

function MetricTile({ value, label, delay = '0ms', visible }: MetricTileProps) {
  return (
    <div
      className="border border-fg-muted/20 bg-bg-subtle rounded-lg px-6 py-5 flex flex-col gap-1 min-w-[140px]"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(12px)',
        transition: `opacity 0.5s ease ${delay}, transform 0.5s ease ${delay}`,
      }}
    >
      <span className="font-display text-3xl font-bold text-fg-base leading-none">
        {value}
      </span>
      <span className="text-xs text-fg-muted leading-snug mt-1">{label}</span>
    </div>
  );
}

export function CoAgentMarquee() {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 bg-bg-subtle border-t border-white/[0.04]"
      aria-label="CoAgent case study preview"
    >
      <Container>
        {/* Header */}
        <div
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 0.5s ease 0ms, transform 0.5s ease 0ms',
          }}
        >
          <p className="text-xs font-medium tracking-widest uppercase text-fg-muted mb-3">
            {COAGENT.eyebrow}
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-fg-base mb-4">
            {COAGENT.headline}
          </h2>
          <p className="text-fg-muted max-w-xl leading-relaxed">{COAGENT.body}</p>
        </div>

        {/* Main content grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-start">
          {/* Architecture diagram */}
          <div
            className="border border-fg-muted/15 rounded-xl overflow-hidden bg-bg-subtle p-4"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 0.5s ease 100ms, transform 0.5s ease 100ms',
            }}
          >
            <CoAgentArchitectureCompact className="w-full h-auto" />
          </div>

          {/* Right column: demo slot + metrics */}
          <div className="flex flex-col gap-6 lg:w-72">
            {/* Demo slot */}
            <div
              className="border border-dashed border-fg-muted/25 rounded-xl aspect-video flex flex-col items-center justify-center gap-2 bg-bg-subtle/50"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(16px)',
                transition: 'opacity 0.5s ease 150ms, transform 0.5s ease 150ms',
              }}
              aria-label="Demo placeholder"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                className="text-fg-muted/40"
              >
                <rect
                  x="2"
                  y="4"
                  width="20"
                  height="14"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M8 20h8M12 18v2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <span className="text-xs text-fg-muted/50 font-medium tracking-wide">
                Demo coming
              </span>
            </div>

            {/* Metric tiles */}
            <div className="grid grid-cols-2 gap-3">
              {COAGENT.metrics.map((metric, i) => (
                <MetricTile
                  key={metric.label}
                  value={metric.value}
                  label={metric.label}
                  delay={`${200 + i * 80}ms`}
                  visible={inView}
                />
              ))}
            </div>
          </div>
        </div>

        {/* CTA link */}
        <div
          className="mt-10"
          style={{
            opacity: inView ? 1 : 0,
            transition: 'opacity 0.5s ease 350ms',
          }}
        >
          <Link
            href={COAGENT.ctaHref}
            className="text-sm text-fg-muted hover:text-accent transition-colors duration-200 inline-flex items-center gap-1 group"
          >
            {COAGENT.ctaLabel}
            <span
              className="inline-block transition-transform duration-200 group-hover:translate-x-0.5"
              aria-hidden="true"
            >
              &rarr;
            </span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
