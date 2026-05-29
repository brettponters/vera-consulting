"use client";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const SERVICES = [
  {
    title: "Coaching",
    description:
      "1:1 weekly sessions on your real clients, your real content, your real proposals. You get fluent in AI on your actual work, not toy examples. The fastest path to taking bigger work.",
  },
  {
    title: "Strategy",
    description:
      "We pick the three to five AI workflows that actually move your business. Everything else gets cut so you can ship the ones that matter.",
  },
  {
    title: "Integration",
    description:
      "AI wired into the tools you already run. Notion, HubSpot, ConvertKit, Stripe, Beehiiv, whatever the stack is. Working output in three weeks, not three quarters.",
  },
];

export default function WhatWeDo() {
  return (
    <section
      aria-labelledby="what-we-do-heading"
      className="py-16 md:py-24 bg-[var(--color-bg)]"
    >
      <Container size="wide">
        <h2 id="what-we-do-heading" className="sr-only">
          What we do
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={0.05 + i * 0.05}>
              <div className="p-8 md:p-10 rounded-xl border border-[var(--color-hairline)] bg-[var(--color-surface)] h-full">
                <h3 className="font-sans font-black text-2xl md:text-3xl text-[var(--color-heading)] mb-4 tracking-[-0.02em]">
                  {service.title}
                </h3>
                <p className="font-sans font-medium text-base md:text-lg leading-snug text-[var(--color-body)]">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
