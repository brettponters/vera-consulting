import { Container } from "@/components/ui/Container";
import { Marquee } from "@/components/ui/Marquee";

/**
 * IndustriesMarquee — thin strip directly below Hero.
 *
 * Mobile: "Solutions" label on top, full-width swipeable strip below.
 * Desktop: side-by-side label + infinite scroll animation.
 */

const ITEMS = (
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
);

export default function IndustriesMarquee() {
  return (
    <div
      className="border-t border-b border-[var(--color-hairline)]"
      aria-label="Solutions we offer"
    >
      {/* Mobile: label + full-width swipeable strip */}
      <div className="md:hidden py-6">
        <p className="font-sans font-medium text-xs uppercase tracking-[0.12em] text-[var(--color-muted)] px-6 mb-4">
          Solutions
        </p>
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex w-max px-6">
            {ITEMS}
          </div>
        </div>
      </div>

      {/* Desktop: label + animated marquee */}
      <div className="hidden md:block py-10">
        <Container size="wide">
          <div className="flex items-center gap-8">
            <p
              className="font-sans font-medium text-xs uppercase tracking-[0.12em] text-[var(--color-muted)] shrink-0"
              aria-hidden="true"
            >
              Solutions
            </p>
            <Marquee duration={60} pauseOnHover className="min-w-0">
              {ITEMS}
            </Marquee>
          </div>
        </Container>
      </div>
    </div>
  );
}
