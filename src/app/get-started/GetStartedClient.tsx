"use client";

import { HighLevelEmbed } from "@/components/ui/HighLevelEmbed";
import Link from "next/link";
import { motion } from "framer-motion";

export default function GetStartedClient() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      {/* Minimal header, logo only, no nav distractions */}
      <header className="flex h-14 items-center px-6 md:px-16 border-b border-[var(--color-hairline)]">
        <Link
          href="/"
          className="font-sans text-sm font-semibold tracking-wide text-[var(--color-heading)] no-underline flex items-center gap-3"
        >
          <svg
            viewBox="0 0 360 540"
            fill="none"
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
        </Link>
      </header>

      <main className="mx-auto max-w-[1100px] px-6 md:px-10 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-start">
          {/* Left, pitch */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="font-sans font-bold text-[var(--color-heading)] leading-[1.08] tracking-[-0.02em] mb-6"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
            >
Get the deals before the crowd does.
            </motion.h1>

            <p className="font-sans text-base md:text-lg leading-relaxed text-[var(--color-body)] mb-8">
              Tell us what you&rsquo;re working on and we&rsquo;ll reach out
              within 24 hours.
            </p>

            <ul className="flex flex-col gap-4 mb-10">
              {[
                "Off-market deals and motivated seller leads, sourced for you",
                "Markets and numbers read fast, before the crowd moves",
                "Performance-based: we earn only when you close",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--color-accent)] shrink-0" />
                  <span className="font-sans text-base text-[var(--color-body)]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

          </div>

          {/* Right, form */}
          <div className="rounded-2xl border border-[var(--color-hairline)] bg-[var(--color-surface)] p-6 md:p-8">
            <HighLevelEmbed kind="inquiry" />
          </div>
        </div>
      </main>
    </div>
  );
}
