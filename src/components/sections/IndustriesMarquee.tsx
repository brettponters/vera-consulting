import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Marquee } from "@/components/ui/Marquee";
import { SOLUTIONS } from "@/app/solutions/_data";

/**
 * IndustriesMarquee, thin strip directly below Hero.
 * Mobile: swipeable. Desktop: animated marquee.
 *
 * Each solution is now a clickable link to its dedicated /solutions/[slug]
 * landing page. Drives SEO via topic-level surface area.
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
          <Marquee duration={70} pauseOnHover className="min-w-0">
            <span className="flex items-center whitespace-nowrap px-4 md:px-6">
              {SOLUTIONS.map((s, i) => (
                <span key={s.slug} className="flex items-center">
                  <Link
                    href={
                      s.slug === "strategy"
                        ? "/our-strategy"
                        : `/solutions/${s.slug}`
                    }
                    className="font-sans font-medium text-base md:text-lg text-[var(--color-body)] hover:text-[var(--color-accent)] transition-colors no-underline"
                  >
                    {s.label}
                  </Link>
                  <span
                    className="mx-3 md:mx-4 text-[var(--color-muted)]"
                    aria-hidden="true"
                  >
                    ·
                  </span>
                  {i === SOLUTIONS.length - 1 && (
                    <span className="sr-only">end of solutions list</span>
                  )}
                </span>
              ))}
            </span>
          </Marquee>
        </div>
      </Container>
    </section>
  );
}
