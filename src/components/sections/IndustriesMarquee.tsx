import { Container } from "@/components/ui/Container";
import { Marquee } from "@/components/ui/Marquee";

/**
 * IndustriesMarquee — thin strip directly below Hero.
 * Mobile: swipeable. Desktop: animated marquee.
 */
export default function IndustriesMarquee() {
  return (
    <section
      className="py-6 md:py-10 border-t border-b border-[var(--color-hairline)]"
      aria-label="Solutions we offer"
    >
      <Container size="wide">
        <p className="font-sans font-medium text-xs uppercase tracking-[0.12em] text-[var(--color-muted)] mb-4 md:hidden">
          Solutions
        </p>
        <div className="flex items-center gap-4 md:gap-8">
          <p
            className="font-sans font-medium text-xs uppercase tracking-[0.12em] text-[var(--color-muted)] shrink-0 hidden md:block"
            aria-hidden="true"
          >
            Solutions
          </p>
          <Marquee duration={60} pauseOnHover className="min-w-0">
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
    </section>
  );
}
