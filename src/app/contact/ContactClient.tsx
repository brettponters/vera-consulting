"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { HighLevelEmbed } from "@/components/ui/HighLevelEmbed";

export default function ContactClient({ outbound = false }: { outbound?: boolean }) {
  const [tab, setTab] = useState<"call" | "form">("call");
  return (
    <>
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
              <Eyebrow className="mb-5">
                {outbound ? "Outcome-Aligned Partnership" : "Contact"}
              </Eyebrow>
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
                {outbound ? "Let’s talk growth" : "Let’s talk"}
                <span style={{ color: "var(--color-accent)" }}>.</span>
              </motion.span>
            </h1>
          </div>

          {/* Tabs, Book a call first */}
          <Reveal delay={0.3}>
            <div className="flex gap-1 mt-6 bg-[var(--color-surface)] rounded-full p-1 w-fit border border-[var(--color-hairline)]">
              <button
                type="button"
                onClick={() => setTab("call")}
                aria-pressed={tab === "call"}
                className={`rounded-full px-5 py-3 md:py-2 font-sans text-sm font-medium transition-all duration-150 ${
                  tab === "call"
                    ? "bg-white text-[var(--color-heading)] shadow-sm"
                    : "text-[var(--color-muted)] hover:text-[var(--color-body)]"
                }`}
              >
                {outbound ? "Book a growth call" : "Become a Partner"}
              </button>
              <button
                type="button"
                onClick={() => setTab("form")}
                aria-pressed={tab === "form"}
                className={`rounded-full px-5 py-3 md:py-2 font-sans text-sm font-medium transition-all duration-150 ${
                  tab === "form"
                    ? "bg-white text-[var(--color-heading)] shadow-sm"
                    : "text-[var(--color-muted)] hover:text-[var(--color-body)]"
                }`}
              >
                Send a message
              </button>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="pb-16 md:pb-24 bg-[var(--color-bg)]">
        <Container size="wide">
          {/* Keep both widgets mounted so switching tabs preserves entered details. */}
          <div hidden={tab !== "call"}>
            <HighLevelEmbed kind="booking" />
          </div>
          <div hidden={tab !== "form"} className="max-w-[760px] pt-4">
            <HighLevelEmbed kind="inquiry" />
          </div>
        </Container>
      </section>
    </>
  );
}
