"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function BookACall({ outbound = false }: { outbound?: boolean }) {
  return (
    <section
      id="book-a-call"
      aria-label="Become a Partner"
      className="bg-[var(--color-surface)] py-20 md:py-28"
    >
      <Container size="prose">
        <div className="flex flex-col items-center text-center gap-8">
          <Reveal delay={0}>
            <h2
              className="font-sans font-semibold text-[var(--color-heading)] tracking-[-0.02em] leading-tight"
              style={{ fontSize: "clamp(2.25rem, 5vw, 3.5rem)" }}
            >
              Want to talk?
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="font-sans text-[var(--color-body)] text-lg leading-relaxed max-w-prose">
              {outbound
                ? "30 minutes. We’ll talk about the clients you want, what makes a meeting worth taking, and whether the model fits. No deck, no pressure."
                : "30 minutes. We’ll talk about the deals you’re chasing and whether we can find you an edge. No deck, no pitch."}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <Button href={outbound ? "/outbound/contact" : "/contact"} variant="filled" size="lg" arrow>
              {outbound ? "Explore a Pilot" : "Become a Partner"}
            </Button>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
