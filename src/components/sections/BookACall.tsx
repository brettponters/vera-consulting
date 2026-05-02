"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Book a Call — the most prominent CTA on the page.
 *
 * Full-width surface tint background. Generous breathing room.
 * id="book-a-call" — anchored by Hero secondary CTA and Header link.
 */
export default function BookACall() {
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
              Book a call.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="font-sans text-[var(--color-body)] text-lg leading-relaxed max-w-prose">
              Calls are 30 minutes. We talk about what you&rsquo;re trying to do, what you&rsquo;ve
              tried, and what would actually help. No deck, no pitch. If we&rsquo;re not the right
              fit, we&rsquo;ll say so.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex flex-col items-center gap-4">
              {/* founder to confirm — replace #schedule with real calendar URL */}
              <Button
                href="#schedule"
                variant="filled"
                size="lg"
                arrow
                className="px-7 py-3.5 text-base"
              >
                {/* founder to confirm */}
                Schedule a call with [Founder Name]
              </Button>

              {/* founder to confirm email address before converting to mailto */}
              <p className="font-sans text-sm text-[var(--color-muted)]">
                Or send a note:{" "}
                <span className="text-[var(--color-body)]">founder@rain.studio</span>
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
