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
    quote:
      "[Quote about engagement we shipped. Kept anonymous until clients agree to be named.]",
    attribution: "[Name · Role · Company]",
  },
  {
    quote:
      "[Quote about engagement we shipped. Kept anonymous until clients agree to be named. This one runs a little longer so the layout breathes at different heights.]",
    attribution: "[Name · Role · Company]",
  },
  {
    quote:
      "[Quote about engagement we shipped. Kept anonymous until clients agree to be named. A medium-length note.]",
    attribution: "[Name · Role · Company]",
  },
];

export default function Testimonials() {
  return (
    <section
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
            What clients have said about engagements we&rsquo;ve shipped.
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
        rounded-2xl border border-[var(--color-hairline)]
        p-6 md:p-8
        bg-[var(--color-surface)]
      "
      style={{ minHeight: "240px" }}
    >
      <div>
        <span
          aria-hidden="true"
          className="block font-sans leading-none mb-4 text-[var(--color-accent)]"
          style={{ fontSize: "clamp(2rem,4vw,3rem)", lineHeight: 1 }}
        >
          &#8220;
        </span>

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
