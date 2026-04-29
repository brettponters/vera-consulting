"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Hairline } from "@/components/ui/Hairline";
import { Reveal } from "@/components/ui/Reveal";
import { researchBacked } from "@/content/research-backed";

/**
 * Research-backed section.
 *
 * Reads like the bibliography of a serious essay — credentialing through
 * what we've read, not through claims about ourselves.
 *
 * All entries are clearly-marked placeholders until the founder confirms
 * the reading list. No paper titles, authors, or "why it matters" lines
 * have been invented here.
 */
export function ResearchBacked() {
  const { eyebrow, h2, entries, cta } = researchBacked;

  return (
    <section
      id="research-backed"
      className="py-24 md:py-32 bg-[var(--color-surface)]"
    >
      <Container size="wide">
        <Reveal>
          <Eyebrow className="mb-4">{eyebrow}</Eyebrow>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="font-serif font-normal text-3xl md:text-4xl text-[var(--color-heading)] mb-12 md:mb-16 max-w-xl">
            {h2}
          </h2>
        </Reveal>

        <div className="flex flex-col">
          {entries.map((entry, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div>
                <Hairline />
                <div className="py-6 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-3 md:gap-12 items-baseline">
                  <div className="flex flex-col gap-1">
                    {/* Title — placeholder */}
                    <p className="font-serif font-normal text-lg text-[var(--color-heading)]">
                      {entry.title}
                    </p>
                    {/* Why it matters — placeholder */}
                    <p className="font-sans text-sm text-[var(--color-muted)] leading-relaxed">
                      {entry.whyItMatters}
                    </p>
                  </div>
                  {/* Author + year — placeholder */}
                  <p className="font-sans text-xs text-[var(--color-muted)] whitespace-nowrap">
                    {entry.author}, {entry.year}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
          <Hairline />
        </div>

        <Reveal delay={0.35}>
          <div className="mt-8">
            <Link
              href={cta.href}
              className="font-sans text-sm text-[var(--color-accent)] hover:underline underline-offset-4"
            >
              {cta.label}
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
