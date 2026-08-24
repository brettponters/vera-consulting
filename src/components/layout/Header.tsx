"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

/**
 * Site header.
 *
 * - VERA wordmark + acronym expansion
 * - "Book a call" links to /contact
 * - Sticky; backdrop-blur activates on scroll
 * - Bottom hairline in #E6E6EA
 */
export function Header() {
  const pathname = usePathname();
  const isOutbound =
    pathname === "/" || pathname === "/contact" || pathname.startsWith("/outbound");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Hide on landing pages (they have their own header)
  if (pathname === "/get-started") return null;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-[rgba(248,246,241,0.9)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="flex h-14 items-center gap-3 md:gap-8 px-6 md:px-16">
        {/* Wordmark + acronym */}
        <Link
          href="/"
          className="font-sans text-sm font-semibold tracking-wide text-[var(--color-heading)] no-underline flex items-center gap-3"
          aria-label="VERA, home"
        >
          {/* V logo from business card */}
          <svg
            viewBox="0 0 360 540"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-auto shrink-0"
            aria-hidden="true"
          >
            <path
              d="M 0 0 L 180 540 L 360 0"
              stroke="#C97B3F"
              strokeWidth="72"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>VERA</span>
          <span className="hidden md:inline text-[10px] font-medium tracking-[0.08em] uppercase text-[var(--color-muted)]">
            {isOutbound
              ? "Outbound for Growing Agencies"
              : "Value-Driven, Evidence-Based Real Estate AI"}
          </span>
        </Link>

        <div className="flex-1" />

        {/* Nav links + CTA, right side */}
        <nav className="hidden md:flex items-center gap-6">
          {(isOutbound
            ? [
                { label: "What We Do", href: "/#ai-capabilities-heading" },
                { label: "Who We Work With", href: "/#who-we-work-with" },
              ]
            : [
                { label: "Our Strategy", href: "/our-strategy" },
                { label: "AI in Real Estate", href: "/ai-in-real-estate" },
              ]
          ).map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-sans text-sm text-[var(--color-body)] no-underline hover:text-[var(--color-heading)] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="ml-4 inline-flex items-center rounded-full bg-[var(--color-accent)] px-5 py-3 md:py-2.5 font-sans text-sm font-medium text-white no-underline transition-opacity duration-150 hover:opacity-90"
        >
          {isOutbound ? "Book a Call" : "Become a Partner"}
        </Link>
      </div>

      {/* Bottom hairline, only once scrolled so it doesn't cut across the hero */}
      <div
        className={`border-b ${
          scrolled ? "border-[var(--color-hairline)]" : "border-transparent"
        }`}
      />
    </header>
  );
}
