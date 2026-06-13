"use client";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const SERVICES = [
  {
    title: "Deal sourcing",
    description:
      "We find off-market deals and rank motivated-seller leads before the rest of the market sees them. The signals run on the smartest AI models in the world, pointed at your buy box.",
  },
  {
    title: "Deal analysis",
    description:
      "Comps, ARV, repairs, and margin run the moment a lead comes in. You know whether to chase a property in seconds, not after a night of spreadsheets.",
  },
  {
    title: "Partnership",
    description:
      "No retainer, no hourly, no paying to try. We make money only when you close. The technology moves every week, and we stay at the frontier so your deals do too.",
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
