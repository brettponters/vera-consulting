"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";

const NAV_LINKS = [
  { href: "/how-we-work", label: "How we work" },
  { href: "/reading", label: "Reading" },
  { href: "/about", label: "About" },
  { href: "/locations", label: "Service areas" },
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
 * Hard-quoted PBC line (do not paraphrase):
 * "VERA is a Public Benefit Corporation. A fixed percentage of net consulting
 *  revenue is committed annually to independent AI safety and alignment research."
 */
export function Footer() {
  const pathname = usePathname();
  const year = new Date().getFullYear();

  // Hide on landing pages
  if (pathname === "/get-started") return null;

  return (
    <footer style={{ backgroundColor: "var(--color-navy)" }}>
      <Container size="wide">
        <div className="py-12 md:py-16 space-y-8">
          {/* Wordmark + PBC statement */}
          <div className="space-y-3 max-w-[560px]">
            <p
              className="font-sans text-sm font-semibold"
              style={{ color: "#F5EFE4" }}
            >
              VERA
            </p>
            <p
              className="font-sans text-sm leading-relaxed"
              style={{ color: "#8B9BB4" }}
            >
              VERA is a Public Benefit Corporation. A fixed percentage of net
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
                      className="font-sans text-sm no-underline transition-colors duration-150 hover:opacity-100"
                      style={{ color: "#DCD5C6" }}
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
                      className="font-sans text-xs no-underline transition-colors duration-150"
                      style={{ color: "#8B9BB4" }}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Copyright */}
          <p className="font-sans text-xs" style={{ color: "#8B9BB4" }}>
            &copy; {year} VERA
          </p>
        </div>
      </Container>
    </footer>
  );
}
