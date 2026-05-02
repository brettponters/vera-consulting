"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

/**
 * Site header.
 *
 * - VERA wordmark + acronym expansion
 * - "Book a call" links to /contact
 * - Sticky; backdrop-blur activates on scroll
 * - Bottom hairline in #E6E6EA
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md"
          : "bg-[var(--color-bg)]"
      }`}
    >
      <div className="flex h-14 items-center gap-8 px-6 md:px-16">
        {/* Wordmark + acronym */}
        <Link
          href="/"
          className="font-sans text-sm font-semibold tracking-wide text-[var(--color-heading)] no-underline flex items-center gap-3"
          aria-label="VERA — home"
        >
          <span>VERA</span>
          <span className="hidden md:inline text-[10px] font-medium tracking-[0.08em] uppercase text-[var(--color-muted)]">
            Value-Driven, Ethical, Research-Grounded AI
          </span>
        </Link>

        <div className="flex-1" />

        {/* Book a call */}
        <Link
          href="/contact"
          className="ml-auto inline-flex items-center rounded-full bg-[var(--color-accent)] px-5 py-2.5 font-sans text-sm font-medium text-white no-underline transition-opacity duration-150 hover:opacity-90"
        >
          Book a call
        </Link>
      </div>

      {/* Bottom hairline */}
      <div className="border-b border-[var(--color-hairline)]" />
    </header>
  );
}
