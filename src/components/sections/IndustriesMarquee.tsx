import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Marquee } from "@/components/ui/Marquee";
import { VERTICALS } from "@/data/verticals";

/**
 * IndustriesMarquee, thin strip directly below Hero.
 * Mobile: swipeable. Desktop: animated marquee.
 *
 * Each item links to its vertical landing page at /for/[slug]
 * for the programmatic SEO play.
 */
export default function IndustriesMarquee() {
  return (
    <section
      className="py-6 md:py-10 border-t border-b border-[var(--color-hairline)]"
      aria-label="Who we work with"
    >
      <Container size="wide">
        <p className="font-sans font-medium text-xs uppercase tracking-[0.12em] text-[var(--color-muted)] mb-4 md:hidden">
          Built for
        </p>
        <div className="flex items-center gap-4 md:gap-8">
          <p
            className="font-sans font-medium text-xs uppercase tracking-[0.12em] text-[var(--color-muted)] shrink-0 hidden md:block"
            aria-hidden="true"
          >
            Built for
          </p>
          <Marquee duration={140} pauseOnHover className="min-w-0">
            <span className="flex items-center whitespace-nowrap px-4 md:px-6">
              {VERTICALS.map((v) => (
                <span key={v.slug} className="flex items-center">
                  <Link
                    href={`/for/${v.slug}`}
                    className="font-sans font-medium text-base md:text-lg text-[var(--color-body)] hover:text-[var(--color-accent)] transition-colors no-underline"
                  >
                    {v.marqueeLabel}
                  </Link>
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
