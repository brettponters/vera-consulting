"use client";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const SERVICES = [
  {
    title: "Strategy",
    description:
      "Figure out where AI fits in your business — and where it doesn't. Grounded in research, scoped to what your team can maintain.",
  },
  {
    title: "Integration",
    description:
      "We work alongside your engineers to get AI systems into production. Guardrails, monitoring, and documentation included.",
  },
  {
    title: "Governance",
    description:
      "Compliance, risk assessment, safety evaluation, and policy documentation. Built for the regulations coming, not just the ones here now.",
  },
];

export default function WhatWeDo() {
  return (
    <section className="py-16 md:py-24 bg-[var(--color-bg)]">
      <Container size="wide">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={0.05 + i * 0.05}>
              <div className="p-6 md:p-8 rounded-xl border border-[var(--color-hairline)] bg-[var(--color-surface)] h-full">
                <h3 className="font-sans font-semibold text-lg text-[var(--color-heading)] mb-3">
                  {service.title}
                </h3>
                <p className="font-sans text-sm leading-relaxed text-[var(--color-body)]">
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
