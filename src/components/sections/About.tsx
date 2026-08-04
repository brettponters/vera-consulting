"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Hairline } from "@/components/ui/Hairline";
import { Reveal } from "@/components/ui/Reveal";

/**
 * About, founder-forward section on the home page.
 *
 * NOT the /about route. A short section that makes the page become a person.
 * Layout: wide container, md+ photo col (2fr) + text col (3fr).
 */
export default function About() {
  return (
    <section
      id="about"
      aria-label="About VERA"
      className="py-16 md:py-24"
    >
      <Container size="wide">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-12 md:gap-20 items-start">
          {/* ── Founder photo ──────────────────────────────────────────── */}
          <Reveal delay={0} className="mx-auto md:mx-0 w-full max-w-[320px] md:max-w-none">
            <div className="relative w-full aspect-[4/5] overflow-hidden bg-[var(--color-surface)] border border-[var(--color-body)]">
              <Image
                src="/founder.jpg"
                alt="Brett Ponters, founder of VERA"
                fill
                sizes="(min-width: 768px) 40vw, 320px"
                className="object-cover"
                style={{ objectPosition: "50% 25%" }}
              />
            </div>
          </Reveal>

          {/* ── Text column ────────────────────────────────────────────── */}
          <div className="flex flex-col gap-8">
            <Reveal delay={0.1}>
              <div className="flex flex-col gap-4">
                <Eyebrow>About</Eyebrow>
                <h2 className="font-sans font-semibold text-[var(--color-heading)] text-3xl md:text-4xl tracking-[-0.02em] leading-tight">
                  VERA is a partner that wins when you close.
                </h2>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              {/* founder to confirm */}
              <p className="font-sans font-medium text-[var(--color-body)] text-lg leading-relaxed">
                {/* founder to confirm */}
                I&rsquo;m Brett Ponters. I started VERA because real estate
                investors and agents don&rsquo;t need another tool that ages
                out in months. They need a partner who stays at the frontier
                and puts what they find into real deals. VERA finds the edge:
                off-market deals, motivated seller leads, and the read on a
                market before the crowd has it. We run as a performance-based
                partnership. No retainer, no hourly, no paying to try. We make
                money only when our partners close.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="flex flex-col gap-6">
                <Hairline />
                <Link
                  href="/about"
                  className="font-sans text-sm font-medium text-[var(--color-accent)] hover:opacity-75 transition-opacity duration-150 w-fit"
                >
                  More about VERA &rarr;
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
