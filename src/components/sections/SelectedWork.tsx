"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Hairline } from "@/components/ui/Hairline";
import { Reveal } from "@/components/ui/Reveal";
import { selectedWork } from "@/content/selected-work";

/**
 * Selected Work section.
 *
 * One named project (CoAgent) treated seriously — like an entry on a
 * doctor's curriculum vitae. A holding line stands in for any future
 * work until clients agree to be named.
 *
 * No stock photos. No logo strips. No invented projects.
 */
export function SelectedWork() {
  const { featured, holdingLine } = selectedWork;

  return (
    <section
      id="selected-work"
      className="py-24 md:py-32 bg-[var(--color-bg)]"
    >
      <Container size="wide">
        <Reveal>
          <Eyebrow className="mb-4">{selectedWork.eyebrow}</Eyebrow>
        </Reveal>

        <Hairline className="mb-12 md:mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Featured project — CoAgent */}
          <Reveal delay={0.05}>
            <div className="flex flex-col gap-5 pr-0 md:pr-16 pb-12 md:pb-0 border-b md:border-b-0 md:border-r border-[var(--color-hairline)]">
              {/* Monochrome sigil — a small typographic mark, no stock imagery */}
              <div
                aria-hidden="true"
                className="w-10 h-10 flex items-center justify-center border border-[var(--color-hairline)] text-[var(--color-muted)] font-sans text-xs font-medium tracking-widest uppercase select-none"
              >
                CA
              </div>

              <h3 className="font-serif font-normal text-2xl md:text-3xl text-[var(--color-heading)]">
                {featured.name}
              </h3>

              <p className="font-sans text-base text-[var(--color-body)] leading-relaxed">
                {featured.description}
              </p>

              <Link
                href={featured.cta.href}
                className="font-sans text-sm text-[var(--color-accent)] hover:underline underline-offset-4 mt-1 self-start"
              >
                {featured.cta.label}
              </Link>
            </div>
          </Reveal>

          {/* Holding tile — honest, no invented projects */}
          <Reveal delay={0.15}>
            <div className="flex items-end pl-0 md:pl-16 pt-12 md:pt-0">
              <p className="font-sans text-sm text-[var(--color-muted)] italic">
                {holdingLine}
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
