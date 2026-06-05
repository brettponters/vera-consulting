import { Container } from "@/components/ui/Container";
import { Marquee } from "@/components/ui/Marquee";

/**
 * IndustriesMarquee, thin strip directly below Hero.
 * Mobile: swipeable. Desktop: animated marquee.
 *
 * Plain sector labels (no links) naming the professional-services firms we
 * work with. Kept as a lightweight strip so the homepage layout is unchanged.
 */
const SECTORS = [
  "Law firms",
  "Accounting & tax",
  "Consulting",
  "Financial advisory",
  "Wealth management",
  "Agencies",
  "Architecture & engineering",
  "Recruiting",
];

export default function IndustriesMarquee() {
  return (
    <section
      className="mt-4 md:mt-10 py-6 md:py-10 border-t border-b border-[var(--color-hairline)]"
      aria-label="Who we work with"
    >
      <Container size="wide">
        <p className="font-sans font-medium text-xs uppercase tracking-[0.12em] text-[var(--color-muted)] mb-4 md:hidden">
          Who we work with →
        </p>
        <div className="flex items-center gap-4 md:gap-8">
          <p
            className="font-sans font-medium text-xs uppercase tracking-[0.12em] text-[var(--color-muted)] shrink-0 hidden md:block"
            aria-hidden="true"
          >
            Who we work with →
          </p>
          <Marquee duration={140} pauseOnHover reverse className="min-w-0">
            <span className="flex items-center whitespace-nowrap px-4 md:px-6">
              {SECTORS.map((sector) => (
                <span key={sector} className="flex items-center">
                  <span className="font-sans font-medium text-base md:text-lg text-[var(--color-body)]">
                    {sector}
                  </span>
                  <span
                    className="mx-3 md:mx-4 text-[var(--color-accent)]"
                    aria-hidden="true"
                  >
                    ·
                  </span>
                </span>
              ))}
            </span>
          </Marquee>
        </div>
      </Container>
    </section>
  );
}
