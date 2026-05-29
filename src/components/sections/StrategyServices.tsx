"use client";

import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

const SERVICES = [
  {
    number: "01",
    title: "Coaching",
    description:
      "1:1 weekly sessions on your real clients, your real content, your real proposals. You get fluent in AI on your actual work, not toy examples. The fastest path to taking bigger work without hiring.",
    includes: [
      "Weekly 1:1 sessions with the founder",
      "Workflow design around your real work",
      "Prompt and tool fluency on your stack",
      "Async support between sessions",
      "Three-month minimum, then ongoing",
      "Documentation you can come back to",
    ],
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "We pick the three to five AI workflows that actually move your practice. Everything else gets cut so you can ship the ones that matter, in the right order, with honest tradeoffs you can defend to a client.",
    includes: [
      "Workflow inventory and triage",
      "Three-to-five workflow shortlist",
      "Tool selection and evaluation",
      "Implementation sequencing",
      "Simple measurement",
      "Tradeoffs you can defend",
    ],
  },
  {
    number: "03",
    title: "Integration",
    description:
      "AI wired into the tools you already run. Notion, HubSpot, ConvertKit, Stripe, Beehiiv, your scheduler, your CRM, whatever the stack is. Working output in three weeks, not three quarters.",
    includes: [
      "Tool connections and automations",
      "Workflow build and testing",
      "Prompt and template libraries",
      "Light operating documentation",
      "Handoff so you can run it yourself",
      "30-day post-build support",
    ],
  },
];

const DIFFERENTIATORS = [
  "Research-backed recommendations",
  "No handoffs to junior teams",
  "Full documentation & knowledge transfer",
  "30-day post-engagement support",
];

function ServiceCard({
  svc,
  isActive,
  anyActive,
  onSelect,
  span,
}: {
  svc: (typeof SERVICES)[number];
  isActive: boolean;
  anyActive: boolean;
  onSelect: () => void;
  span?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, []);

  return (
    <motion.div
      ref={ref}
      onClick={onSelect}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative cursor-pointer overflow-hidden rounded-2xl ${
        span ? "md:col-span-2" : ""
      }`}
      animate={{
        opacity: anyActive && !isActive ? 0.4 : 1,
        scale: anyActive && !isActive ? 0.98 : 1,
      }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      style={{ willChange: "transform, opacity" }}
    >
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-500"
        style={{
          opacity: isHovered && !isActive ? 0.8 : 0,
          background: `radial-gradient(450px circle at ${mousePos.x}px ${mousePos.y}px, rgba(201, 123, 63, 0.12), transparent 60%)`,
        }}
      />

      <div
        className={`relative h-full rounded-2xl border transition-all duration-500 ease-out ${
          isActive
            ? "border-[var(--color-accent)]/25 bg-white shadow-lg shadow-[var(--color-accent)]/5"
            : "border-[var(--color-hairline)] bg-white hover:border-[var(--color-accent)]/15"
        } p-7 md:p-10`}
      >
        <span
          className="absolute top-3 right-6 font-sans font-bold pointer-events-none select-none transition-all duration-700 ease-out"
          style={{
            fontSize: isActive ? "9rem" : "6rem",
            color: "var(--color-accent)",
            opacity: isActive ? 0.07 : 0.04,
            lineHeight: 1,
          }}
        >
          {svc.number}
        </span>

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs tracking-[0.18em] text-[var(--color-accent)]">
              {svc.number}
            </span>
            <div
              className="h-px bg-[var(--color-accent)]/30 origin-left transition-all duration-700 ease-out"
              style={{
                width: isActive ? "3rem" : "0rem",
                opacity: isActive ? 1 : 0,
              }}
            />
          </div>

          <h3
            className="font-sans font-semibold text-[var(--color-heading)] transition-all duration-500 ease-out tracking-[-0.01em]"
            style={{ fontSize: isActive ? "1.75rem" : "1.35rem" }}
          >
            {svc.title}
          </h3>

          <p className="mt-4 font-sans text-[15px] md:text-base leading-[1.65] text-[var(--color-body)] max-w-[60ch]">
            {svc.description}
          </p>

          <AnimatePresence>
            {isActive && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <motion.div
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -5, opacity: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="mt-6 pt-6 border-t border-[var(--color-hairline)]"
                >
                  <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-[var(--color-muted)] mb-3">
                    Includes
                  </div>
                  <ul
                    className={`grid gap-x-6 gap-y-2 ${
                      span
                        ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
                        : "grid-cols-1 sm:grid-cols-2"
                    }`}
                  >
                    {svc.includes.map((item) => (
                      <li
                        key={item}
                        className="font-sans text-sm text-[var(--color-body)] flex items-start gap-2"
                      >
                        <span className="text-[var(--color-accent)] mt-0.5">
                          ·
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div
          className="absolute bottom-5 right-5 w-8 h-8 rounded-full border border-[var(--color-accent)]/20 flex items-center justify-center transition-all duration-500 ease-out"
          style={{
            transform: `rotate(${isActive ? 45 : 0}deg)`,
            borderColor: isActive
              ? "var(--color-accent)"
              : "rgba(201, 123, 63, 0.2)",
          }}
        >
          <span className="text-[var(--color-accent)] text-base leading-none">
            +
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export function StrategyServices() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-28 bg-[var(--color-surface)]">
      <Container size="wide">
        <div className="max-w-[820px] mb-12 md:mb-16">
          <Reveal>
            <Eyebrow className="mb-4">Services</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-sans font-semibold text-3xl md:text-4xl lg:text-5xl tracking-[-0.02em] text-[var(--color-heading)] leading-[1.05]">
              What we offer.
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {SERVICES.map((svc, i) => (
            <ServiceCard
              key={svc.title}
              svc={svc}
              isActive={active === i}
              anyActive={active !== null}
              onSelect={() => setActive(active === i ? null : i)}
              span={i === SERVICES.length - 1}
            />
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="flex flex-wrap gap-x-6 gap-y-3 mt-12 items-center max-w-[1080px]">
            <div className="w-[3px] h-6 bg-[var(--color-accent)] rounded-sm shrink-0" />
            {DIFFERENTIATORS.map((d, i) => (
              <span key={d} className="flex items-center gap-x-6">
                <span className="font-sans text-sm md:text-base text-[var(--color-heading)] font-medium">
                  {d}
                </span>
                {i < DIFFERENTIATORS.length - 1 && (
                  <span className="text-[var(--color-muted)]">·</span>
                )}
              </span>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
