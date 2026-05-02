"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Hairline } from "@/components/ui/Hairline";
import { Reveal } from "@/components/ui/Reveal";

/**
 * About — founder-forward section on the home page.
 *
 * NOT the /about route. A short section that makes the page become a person.
 * Layout: wide container, md+ photo col (2fr) + text col (3fr).
 */
export default function About() {
  return (
    <section
      id="about"
      aria-label="About RAIN"
      className="py-16 md:py-24"
    >
      <Container size="wide">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-12 md:gap-20 items-start">
          {/* ── Founder photo placeholder ──────────────────────────────── */}
          <Reveal delay={0} className="mx-auto md:mx-0 w-full max-w-[320px] md:max-w-none">
            <div
              className="w-full aspect-[4/5] bg-[var(--color-surface)] border border-[var(--color-body)] flex items-center justify-center"
              aria-label="Founder photo placeholder"
            >
              <span className="font-sans text-xs text-[var(--color-muted)]">
                founder photo placeholder
              </span>
            </div>
          </Reveal>

          {/* ── Text column ────────────────────────────────────────────── */}
          <div className="flex flex-col gap-8">
            <Reveal delay={0.1}>
              <div className="flex flex-col gap-4">
                <Eyebrow>About</Eyebrow>
                <h2 className="font-sans font-semibold text-[var(--color-heading)] text-3xl md:text-4xl tracking-[-0.02em] leading-tight">
                  RAIN is a small practice with a specific bet.
                </h2>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              {/* founder to confirm */}
              <p className="font-sans font-medium text-[var(--color-body)] text-lg leading-relaxed">
                {/* founder to confirm */}
                I&rsquo;m [Founder Name]. I started RAIN because the companies integrate I want to work with
                (banks, hospitals, law firms, regulated SaaS) are about to deploy AI
                that will run their core operations for the next decade, and most of them don&rsquo;t
                have anyone in the building who has read the papers and shipped the systems. RAIN is
                the practice that does. I take a small number of engagements each year. The work is
                hands-on: I write the strategy, I integrate the systems, I stay long enough to watch them
                run in production. The bet is that depth matters more than scale, and that the firms
                who plan this on purpose will own the next decade.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="flex flex-col gap-6">
                <Hairline />
                <p className="font-sans text-[var(--color-muted)] text-base leading-relaxed">
                  RAIN is incorporated as a Public Benefit Corporation. A fixed percentage of net
                  consulting revenue is committed annually to independent AI safety research, in our
                  charter.
                </p>
                <Link
                  href="/about"
                  className="font-sans text-sm font-medium text-[var(--color-accent)] hover:opacity-75 transition-opacity duration-150 w-fit"
                >
                  More about RAIN &rarr;
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
