import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Hairline } from "@/components/ui/Hairline";

const LOCATIONS = [
  { slug: "boca-raton", label: "Boca Raton" },
  { slug: "delray-beach", label: "Delray Beach" },
  { slug: "boynton-beach", label: "Boynton Beach" },
  { slug: "deerfield-beach", label: "Deerfield Beach" },
  { slug: "fort-lauderdale", label: "Fort Lauderdale" },
];

export function SouthFlorida() {
  return (
    <section
      aria-label="South Florida service area"
      className="bg-[var(--color-bg)] py-16 md:py-20"
    >
      <Hairline variant="full" />
      <Container size="wide">
        <div className="pt-16 md:pt-20 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[720px] space-y-5">
            <p className="font-sans text-xs uppercase tracking-[0.14em] text-[var(--color-accent)]">
              South Florida
            </p>
            <h2
              className="font-sans font-semibold text-[var(--color-heading)] tracking-[-0.02em] leading-tight"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
            >
              Built here. Working with companies across the region.
            </h2>
            <p className="font-sans text-[var(--color-muted)] text-base leading-relaxed">
              VERA works with companies throughout South Florida.
            </p>
            <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-1 list-none m-0 p-0">
              {LOCATIONS.map((loc, i) => (
                <li
                  key={loc.slug}
                  className="flex items-center font-sans text-sm"
                >
                  <Link
                    href={`/locations/${loc.slug}`}
                    className="text-[var(--color-heading)] hover:text-[var(--color-accent)] transition-colors no-underline"
                  >
                    {loc.label}
                  </Link>
                  {i < LOCATIONS.length - 1 && (
                    <span
                      className="ml-5 text-[var(--color-navy)]"
                      aria-hidden="true"
                    >
                      ·
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <Link
            href="/locations"
            className="font-sans text-sm font-medium text-[var(--color-accent)] no-underline hover:underline self-start md:self-end"
          >
            Service areas →
          </Link>
        </div>
      </Container>
    </section>
  );
}
