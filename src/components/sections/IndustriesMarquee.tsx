import { Container } from "@/components/ui/Container";
import { Marquee } from "@/components/ui/Marquee";

/**
 * IndustriesMarquee — thin strip directly below Hero.
 *
 * Layout: hairlines top and bottom. Left-pinned "We work with" eyebrow
 * alongside an infinite scrolling list of regulated industries.
 *
 * Uses the Marquee primitive for seamless looping.
 */
export default function IndustriesMarquee() {
  return (
    <div
      className="py-10 border-t border-b border-[var(--color-hairline)]"
      aria-label="Industries we work with"
    >
      <Container size="wide">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-8">
          {/* Left label — does not scroll */}
          <p
            className="font-sans font-medium text-xs uppercase tracking-[0.12em] text-[var(--color-muted)] shrink-0"
            aria-hidden="true"
          >
            Solutions
          </p>

          {/* Scrolling strip */}
          <Marquee duration={60} pauseOnHover className="flex-1 min-w-0">
            <span className="font-sans font-medium text-base md:text-lg text-[var(--color-body)] whitespace-nowrap px-4 md:px-6">
              AI Training
              <span className="mx-3 md:mx-4 text-[var(--color-muted)]">·</span>
              AI Agents
              <span className="mx-3 md:mx-4 text-[var(--color-muted)]">·</span>
              Compliance
              <span className="mx-3 md:mx-4 text-[var(--color-muted)]">·</span>
              Risk
              <span className="mx-3 md:mx-4 text-[var(--color-muted)]">·</span>
              Safety Evaluation
              <span className="mx-3 md:mx-4 text-[var(--color-muted)]">·</span>
            </span>
          </Marquee>
        </div>
      </Container>
    </div>
  );
}
