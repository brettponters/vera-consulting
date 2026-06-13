"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Hairline } from "@/components/ui/Hairline";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export default function AboutClient() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-14 pb-16 md:pt-20 md:pb-24 overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, #FFFFFF 0%, #F5F4F1 25%, #F5F4F1 75%, #FFFFFF 100%)",
        }}
      >
        <Container size="wide" className="relative z-10">
          <div className="max-w-[760px]">
            <Reveal>
              <Eyebrow className="mb-5">About</Eyebrow>
            </Reveal>

            <h1
              className="font-sans font-black text-[var(--color-heading)] leading-[1.02] tracking-[-0.03em] mb-10"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              <motion.span
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.55,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                A partner that wins when you close.
              </motion.span>
            </h1>

            <Reveal delay={0.4}>
              <p className="font-sans text-lg md:text-xl leading-relaxed text-[var(--color-body)] max-w-[640px]">
                VERA exists to find the edge in real estate. Off-market deals,
                motivated seller leads, and the read on a market before the
                crowd has it. We put it into your deals and only get paid when
                you close.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Founder */}
      <section className="py-16 md:py-24 bg-[var(--color-bg)]">
        <Container size="wide">
          <div className="max-w-[760px]">
            <Reveal>
              <Eyebrow className="mb-4">The founder</Eyebrow>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="font-sans font-semibold text-2xl md:text-3xl tracking-[-0.02em] text-[var(--color-heading)] leading-tight mb-8">
                Why I built a partner, not a tool.
              </h2>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="font-sans text-base leading-relaxed text-[var(--color-body)] mb-6">
                I started VERA because real estate investors and agents
                don&rsquo;t need another tool. A tool you buy is behind the day
                it ships. They need a partner who stays at the frontier and
                puts what they find into real deals, week after week.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <p className="font-sans text-base leading-relaxed text-[var(--color-body)] mb-6">
                Before VERA, I spent years inside engineering and product teams
                shipping AI into production. I watched the same pattern in real
                estate: investors and agents paying for tools and subscriptions
                that aged out in months, while the people running the sharpest
                models found the deals first.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <p className="font-sans text-base leading-relaxed text-[var(--color-body)]">
                So I built VERA to work differently. It runs as a
                performance-based partnership. No retainer, no hourly, no
                paying to try. We bring the deals and the edges, and we make
                money only when our partners close.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* PBC */}
      <section className="py-16 md:py-24 bg-[var(--color-surface)]">
        <Container size="wide">
          <div className="max-w-[760px]">
            <Reveal>
              <Eyebrow className="mb-4">Public Benefit Corporation</Eyebrow>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="font-sans font-semibold text-2xl md:text-3xl tracking-[-0.02em] text-[var(--color-heading)] leading-tight mb-8">
                Why we structured it this way.
              </h2>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="font-sans text-base leading-relaxed text-[var(--color-body)] mb-6">
                VERA is incorporated as a Public Benefit Corporation. A fixed
                percentage of every dollar we earn goes to independent AI safety
                research. That&rsquo;s in our charter, not a marketing page.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <p className="font-sans text-base leading-relaxed text-[var(--color-body)] mb-6">
                We made that commitment because this technology is powerful,
                and someone should be making sure it keeps working for people,
                not just on them. We integrate AI for a living. Funding the people
                who study its risks felt like the obvious thing to do.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <Hairline className="my-8" />
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/charter" variant="ghost" size="md" arrow>
                  Read our charter
                </Button>
                <Button href="/benefit-report" variant="ghost" size="md" arrow>
                  Annual benefit report
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-[var(--color-bg)]">
        <Container size="wide">
          <Reveal>
            <div className="max-w-[560px]">
              <h2 className="font-sans font-semibold text-2xl md:text-3xl tracking-[-0.02em] text-[var(--color-heading)] mb-4">
                Want to work together?
              </h2>
              <p className="font-sans text-base leading-relaxed text-[var(--color-body)] mb-8">
                We&rsquo;re always happy to talk, even if it&rsquo;s just to
                figure out whether we&rsquo;re the right fit.
              </p>
              <Button href="/contact" variant="filled" size="lg" arrow>
                Become a partner
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
