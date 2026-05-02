"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Hairline } from "@/components/ui/Hairline";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export default function About() {
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
              className="font-sans font-bold text-[var(--color-heading)] leading-[1.05] tracking-[-0.02em] mb-8"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.75rem)" }}
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
                A small practice with a specific bet.
              </motion.span>
            </h1>

            <Reveal delay={0.4}>
              <p className="font-sans text-lg md:text-xl leading-relaxed text-[var(--color-body)] max-w-[640px]">
                VERA exists because the companies integrate doing serious work with AI
                need people in the room who have read the papers and shipped the
                systems. That&rsquo;s what we do.
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
                [Founder Name]
              </h2>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="font-sans text-base leading-relaxed text-[var(--color-body)] mb-6">
                I started VERA because the companies I want to work with
                don&rsquo;t need another vendor. They need someone who
                understands the research, has built the systems, and will tell
                them the truth about what AI can and can&rsquo;t do for their
                business right now.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <p className="font-sans text-base leading-relaxed text-[var(--color-body)] mb-6">
                Before VERA, I [brief background]. I saw the same pattern
                over and over: companies spending on AI without understanding
                what they were buying, consultants selling strategies they
                couldn&rsquo;t implement, and teams left holding systems nobody
                documented.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <p className="font-sans text-base leading-relaxed text-[var(--color-body)]">
                So I built a practice that works differently. Small, senior,
                research-first. We do the strategy and the implementation,
                because separating those two is how projects fail.
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
                not just on them. We build AI for a living. Funding the people
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
                Book a call
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
