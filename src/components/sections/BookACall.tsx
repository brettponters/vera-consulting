"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function BookACall() {
  return (
    <section
      id="book-a-call"
      aria-label="Book a call"
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
              30 minutes. We&rsquo;ll talk about what you&rsquo;re trying to do
              and whether we can help. No deck, no pitch.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <Button href="/contact" variant="filled" size="lg" arrow>
              Book a call
            </Button>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
