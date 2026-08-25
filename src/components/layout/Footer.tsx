"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Hairline } from "@/components/ui/Hairline";

const NAV_LINKS = [
  { href: "/how-we-work", label: "How we work" },
  { href: "/reading", label: "Reading" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const LEGAL_LINKS = [
  { href: "/privacy", label: "Privacy" },
];

/**
 * Site footer.
 */
export function Footer() {
  const pathname = usePathname();
  const year = new Date().getFullYear();
  const isOutbound =
    pathname === "/" || pathname === "/contact" || pathname.startsWith("/outbound");
  const navLinks = isOutbound
    ? [
        { href: "/#how-it-works", label: "How it works" },
        { href: "/#ai-capabilities-heading", label: "What we do" },
        { href: "/#who-we-work-with", label: "Who we work with" },
        { href: "/contact", label: "Contact" },
      ]
    : NAV_LINKS;

  // Hide on landing pages
  if (pathname === "/get-started") return null;

  return (
    <footer className="bg-[var(--color-surface)]">
      <Hairline variant="full" />
      <Container size="wide">
        <div className="py-12 md:py-16 space-y-8">
          {/* Wordmark */}
          <div className="space-y-3 max-w-[560px]">
            <p className="font-sans text-sm font-semibold text-[var(--color-heading)]">
              VERA
            </p>
          </div>

          {/* Nav + legal row */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {/* Primary nav repeated */}
            <nav aria-label="Footer navigation">
              <ul className="flex flex-wrap gap-x-6 gap-y-2 list-none m-0 p-0">
                {navLinks.map(({ href, label }) => (
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
            &copy; {year} VERA
          </p>
        </div>
      </Container>
    </footer>
  );
}
