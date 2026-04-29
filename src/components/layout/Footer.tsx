import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Hairline } from "@/components/ui/Hairline";

const NAV_LINKS = [
  { href: "/work", label: "Work" },
  { href: "/reading", label: "Reading" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const LEGAL_LINKS = [
  { href: "/charter", label: "Charter" },
  { href: "/benefit-report", label: "Annual benefit report" },
  { href: "/privacy", label: "Privacy" },
];

/**
 * Site footer.
 *
 * Hard-quoted PBC line (from wireframe spec — do not paraphrase):
 * "RAIN is a Public Benefit Corporation. A fixed percentage of net consulting
 *  revenue is committed annually to independent AI safety and alignment research."
 *
 * RAIN is a chosen word. No acronym expansion anywhere in this file.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-surface)]">
      <Hairline variant="full" />
      <Container size="wide">
        <div className="py-12 md:py-16 space-y-8">
          {/* Wordmark + PBC statement */}
          <div className="space-y-3 max-w-[560px]">
            <p className="font-serif text-base text-[var(--color-heading)]">
              RAIN
            </p>
            <p className="font-sans text-sm leading-relaxed text-[var(--color-muted)]">
              RAIN is a Public Benefit Corporation. A fixed percentage of net
              consulting revenue is committed annually to independent AI safety
              and alignment research.
            </p>
          </div>

          {/* Nav + legal row */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {/* Primary nav repeated */}
            <nav aria-label="Footer navigation">
              <ul className="flex flex-wrap gap-x-6 gap-y-2 list-none m-0 p-0">
                {NAV_LINKS.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="font-sans text-sm text-[var(--color-muted)] no-underline transition-colors duration-150 hover:text-[var(--color-body)]"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Legal links */}
            <nav aria-label="Legal navigation">
              <ul className="flex flex-wrap gap-x-5 gap-y-2 list-none m-0 p-0">
                {LEGAL_LINKS.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="font-sans text-xs text-[var(--color-muted)] no-underline transition-colors duration-150 hover:text-[var(--color-body)]"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Copyright */}
          <p className="font-sans text-xs text-[var(--color-muted)]">
            &copy; {year} RAIN
          </p>
        </div>
      </Container>
    </footer>
  );
}
