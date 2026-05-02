"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

export default function Contact() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

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
              <Eyebrow className="mb-5">Contact</Eyebrow>
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
                Book a call with us.
              </motion.span>
            </h1>

            <Reveal delay={0.4}>
              <p className="font-sans text-lg md:text-xl leading-relaxed text-[var(--color-body)] max-w-[560px]">
                Pick a time that works for you. No pressure, no pitch. We&rsquo;ll just talk through what you&rsquo;re looking for and see if we can help.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="pb-16 md:pb-24 bg-[var(--color-bg)]">
        <Container size="wide">
          <Reveal delay={0.5}>
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/brettponters/vera-learn-more?hide_event_type_details=1&hide_gdpr_banner=1"
              style={{ minWidth: "320px", height: "700px" }}
            />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
