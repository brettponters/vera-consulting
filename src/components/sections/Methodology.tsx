'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { METHODOLOGY } from '@/config/copy';

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

interface TickerNumberProps {
  target: number;
  triggered: boolean;
}

function TickerNumber({ target, triggered }: TickerNumberProps) {
  const reduced = useReducedMotion();
  const [displayed, setDisplayed] = useState(0);
  const rafRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!triggered) return;
    if (reduced) {
      setDisplayed(target);
      return;
    }

    setDisplayed(0);
    const start = performance.now();
    const duration = 400; // ms

    function tick() {
      const elapsed = performance.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out: progress = 1 - (1-t)^2
      const eased = 1 - Math.pow(1 - progress, 2);
      setDisplayed(Math.round(eased * target));
      if (progress < 1) {
        rafRef.current = setTimeout(tick, 16);
      }
    }

    rafRef.current = setTimeout(tick, 16);
    return () => {
      if (rafRef.current) clearTimeout(rafRef.current);
    };
  }, [triggered, target, reduced]);

  return (
    <span
      className="font-display text-2xl md:text-3xl font-bold text-fg-muted/40 leading-none pt-1 select-none tabular-nums"
      aria-hidden="true"
    >
      {String(displayed).padStart(2, '0')}
    </span>
  );
}

export function Methodology() {
  const [triggered, setTriggered] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-bg-base">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-16"
        >
          <Eyebrow className="mb-4">Process</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-fg-base mb-4">
            {METHODOLOGY.sectionTitle}
          </h2>
          <p className="text-fg-muted text-lg max-w-xl">
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
              <TickerNumber target={i + 1} triggered={triggered} />

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
