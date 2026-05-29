"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Hairline } from "@/components/ui/Hairline";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

/* ─── Case Studies ─── */

const CASE_STUDIES = [
  {
    tag: "AI Agent · Full Product Build",
    title: "CoAgent",
    subtitle: "An AI assistant that actually keeps your data private.",
    problem:
      "Professionals in real estate, legal, and finance were stuck. They wanted AI to handle the busywork, email triage, scheduling, follow-ups, but every tool on the market required sending sensitive client data to someone else's servers. That's not an option when you're handling contracts, medical records, or deal flow.",
    solution:
      "We built an AI agent that runs entirely on the user's machine. It connects to their email, calendar, Slack, and CRM, monitors everything in real-time, handles routine tasks automatically, and asks for permission before doing anything high-stakes. No cloud database. No third-party data pipeline. Their data never leaves their device.",
    details: [
      "Multi-LLM architecture, routes to the best model for each task",
      "9 live integrations via Model Context Protocol",
      "Desktop + mobile with team sync",
      "Human-in-the-loop approval for sensitive actions",
      "In production, actively used, cross-platform",
    ],
  },
];

export default function OurWorkClient() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-14 pb-8 md:pt-20 md:pb-12 overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, #FFFFFF 0%, #F5F4F1 25%, #F5F4F1 75%, #FFFFFF 100%)",
        }}
      >
        <Container size="wide" className="relative z-10">
          <div className="max-w-[760px]">
            <Reveal>
              <Eyebrow className="mb-5">Our work</Eyebrow>
            </Reveal>

            <h1
              className="font-sans font-black text-[var(--color-heading)] leading-[1.02] tracking-[-0.03em] mb-8"
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
                Things we&rsquo;ve built.
              </motion.span>
            </h1>

          </div>
        </Container>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-[var(--color-bg)]">
        <Container size="wide">
          {CASE_STUDIES.map((study, i) => (
            <Reveal key={study.title} delay={0.05 + i * 0.05}>
              <article className="mb-16 last:mb-0">
                <Hairline className="mb-10" />

                {/* Tag */}
                <p className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-accent)] mb-4">
                  {study.tag}
                </p>

                {/* Title + subtitle */}
                <h2 className="font-sans font-bold text-3xl md:text-4xl tracking-[-0.02em] text-[var(--color-heading)] mb-2">
                  {study.title}
                </h2>
                <p className="font-sans text-lg text-[var(--color-muted)] mb-10">
                  {study.subtitle}
                </p>

                {/* Two-column: Problem + Solution */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mb-10">
                  <div>
                    <p className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-muted)] mb-3">
                      The problem
                    </p>
                    <p className="font-sans text-base leading-relaxed text-[var(--color-body)]">
                      {study.problem}
                    </p>
                  </div>
                  <div>
                    <p className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-muted)] mb-3">
                      What we did
                    </p>
                    <p className="font-sans text-base leading-relaxed text-[var(--color-body)]">
                      {study.solution}
                    </p>
                  </div>
                </div>

                {/* Details */}
                <div className="max-w-[640px]">
                  <p className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-muted)] mb-3">
                    The details
                  </p>
                  <div className="flex flex-col gap-2">
                    {study.details.map((item) => (
                      <p key={item} className="font-sans text-sm text-[var(--color-body)] flex items-start gap-2">
                        <span className="text-[var(--color-accent)] mt-0.5 shrink-0">&bull;</span>
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}

          {/* More coming */}
          <Reveal delay={0.2}>
            <Hairline className="mb-10" />
            <p className="font-sans text-base text-[var(--color-muted)] italic">
              More case studies coming as engagements complete and clients agree to be named.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-[var(--color-surface)]">
        <Container size="wide">
          <div className="text-center max-w-[560px] mx-auto">
            <Reveal>
              <h2 className="font-sans font-semibold text-2xl md:text-3xl tracking-[-0.02em] text-[var(--color-heading)] mb-4">
                Want to be next?
              </h2>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="font-sans text-base leading-relaxed text-[var(--color-body)] mb-8">
                Tell us what you&rsquo;re working on. We&rsquo;ll tell you if we can help.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <Button href="/contact" variant="filled" size="lg" arrow>
                Book a call
              </Button>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
