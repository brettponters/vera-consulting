"use client";

import { Container } from "@/components/ui/Container";
import { Marquee } from "@/components/ui/Marquee";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Testimonials — horizontal marquee of quote cards.
 *
 * Cards scroll continuously left-to-right like the industries strip,
 * but full-height quote cards instead of text. Pauses on hover.
 */

interface CardData {
  quote: string;
  attribution: string;
}

const CARDS: CardData[] = [
  {
    quote: "Coming soon.",
    attribution: "Client notes will publish here as engagements complete.",
  },
  {
    quote: "Coming soon.",
    attribution: "Anonymized recaps from active engagements — Q3 2026.",
  },
  {
    quote: "Coming soon.",
    attribution: "Quotes shared with client permission only.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="Client testimonials"
      className="py-16 md:py-24 bg-[var(--color-bg)]"
    >
      <Container size="wide">
        <Reveal>
          <h2 className="font-sans font-semibold text-[clamp(1.75rem,3vw,2.5rem)] leading-tight tracking-[-0.02em] text-[var(--color-heading)] mb-2">
            Notes from the work.
          </h2>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="font-sans text-base text-[var(--color-muted)] mt-3">
            Client recaps will publish here as engagements complete.
          </p>
        </Reveal>
      </Container>

      {/* Mobile: swipeable cards */}
      <div className="mt-10 md:hidden overflow-x-auto scrollbar-hide">
        <div className="flex w-max gap-4 px-6">
          {CARDS.map((card, i) => (
            <TestimonialCard key={i} card={card} />
          ))}
        </div>
      </div>

      {/* Desktop: animated marquee */}
      <div className="mt-12 hidden md:block">
        <Marquee duration={45} pauseOnHover>
          {CARDS.map((card, i) => (
            <div key={i} className="px-3 shrink-0">
              <TestimonialCard card={card} />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}

// ─── Card ──────────────────────────────────────────────────────────────────────

function TestimonialCard({ card }: { card: CardData }) {
  return (
    <article
      className="
        flex flex-col justify-between
        w-[min(90vw,420px)]
        rounded-2xl
        p-6 md:p-8
        bg-[var(--color-surface)]
      "
      style={{
        minHeight: "240px",
        border: "1px dashed var(--color-hairline)",
      }}
    >
      <div>
        <span
          aria-hidden="true"
          className="block font-sans leading-none mb-4 text-[var(--color-accent)]"
          style={{ fontSize: "clamp(2rem,4vw,3rem)", lineHeight: 1, opacity: 0.35 }}
        >
          &#8220;
        </span>

        <div
          className="inline-block font-sans font-semibold mb-3"
          style={{
            fontSize: "0.6875rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--color-accent)",
          }}
        >
          Coming soon
        </div>

        <blockquote className="font-sans font-medium text-lg leading-relaxed text-[var(--color-body)]">
          {card.quote}
        </blockquote>
      </div>

      <footer className="mt-8 pt-6 border-t border-[var(--color-hairline)]">
        <p className="font-sans text-sm text-[var(--color-muted)]">
          {card.attribution}
        </p>
      </footer>
    </article>
  );
}
