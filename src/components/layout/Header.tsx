import Link from "next/link";
import { Container } from "@/components/ui/Container";

const NAV_LINKS = [
  { href: "/work", label: "Work" },
  { href: "/reading", label: "Reading" },
  { href: "/about", label: "About" },
];

/**
 * Site header.
 *
 * - RAIN wordmark (text-only, no acronym expansion anywhere)
 * - Nav: Work · Reading · About
 * - "Book a call" — always visible, terracotta underline treatment, not a button
 * - Sticky; no shrink/morph on scroll
 * - Bottom hairline in #E2D8C6
 */
export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[var(--color-bg)]">
      <Container size="wide">
        <div className="flex h-14 items-center justify-between gap-8">
          {/* Wordmark */}
          <Link
            href="/"
            className="font-serif text-base font-normal tracking-wide text-[var(--color-heading)] no-underline"
            aria-label="RAIN — home"
          >
            RAIN
          </Link>

          {/* Primary nav */}
          <nav aria-label="Primary navigation">
            <ul className="flex items-center gap-7 list-none m-0 p-0">
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

          {/* Book a call — restrained accent link, never a filled button */}
          <Link
            href="/contact"
            className="font-sans text-sm text-[var(--color-body)] underline underline-offset-4 decoration-[var(--color-accent)] decoration-[1.5px] transition-colors duration-150 hover:text-[var(--color-accent)]"
          >
            Book a call
          </Link>
        </div>
      </Container>

      {/* Bottom hairline */}
      <div className="border-b border-[var(--color-hairline)]" />
    </header>
  );
}
