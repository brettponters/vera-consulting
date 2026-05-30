"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

export default function ContactClient() {
  const [tab, setTab] = useState<"call" | "form">("call");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("https://formsubmit.co/ajax/brettponters@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          company: data.company || "-",
          message: data.message,
          _subject: `New VERA contact: ${data.name}`,
          _template: "table",
        }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

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
                Let&rsquo;s talk.
              </motion.span>
            </h1>
          </div>

          {/* Tabs, Book a call first */}
          <Reveal delay={0.3}>
            <div className="flex gap-1 mt-6 bg-[var(--color-surface)] rounded-full p-1 w-fit border border-[var(--color-hairline)]">
              <button
                type="button"
                onClick={() => setTab("call")}
                className={`rounded-full px-5 py-3 md:py-2 font-sans text-sm font-medium transition-all duration-150 ${
                  tab === "call"
                    ? "bg-white text-[var(--color-heading)] shadow-sm"
                    : "text-[var(--color-muted)] hover:text-[var(--color-body)]"
                }`}
              >
                Book a call
              </button>
              <button
                type="button"
                onClick={() => setTab("form")}
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
          {/* Calendly, always in DOM so the script can initialize it */}
          <div style={{ display: tab === "call" ? "block" : "none" }}>
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/brett-veraconsulting/30min?hide_event_type_details=1&hide_gdpr_banner=1"
              style={{ minWidth: "100%", height: "700px" }}
            />
          </div>

          {/* Contact form */}
          <div style={{ display: tab === "form" ? "block" : "none" }}>
            <div className="max-w-[560px] pt-4">
              {submitted ? (
                <div className="py-16 text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-accent)]">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 10l4 4 8-8" />
                    </svg>
                  </div>
                  <h2 className="font-sans font-semibold text-xl text-[var(--color-heading)] mb-2">
                    Got it.
                  </h2>
                  <p className="font-sans text-base text-[var(--color-body)]">
                    We&rsquo;ll be in touch soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <label htmlFor="name" className="font-sans text-sm font-medium text-[var(--color-heading)] mb-1.5 block">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full rounded-lg border border-[var(--color-hairline)] bg-white px-4 py-3 md:py-2.5 font-sans text-base md:text-sm text-[var(--color-body)] outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="font-sans text-sm font-medium text-[var(--color-heading)] mb-1.5 block">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-lg border border-[var(--color-hairline)] bg-white px-4 py-3 md:py-2.5 font-sans text-base md:text-sm text-[var(--color-body)] outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="font-sans text-sm font-medium text-[var(--color-heading)] mb-1.5 block">
                      Company <span className="text-[var(--color-muted)] font-normal">(optional)</span>
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      className="w-full rounded-lg border border-[var(--color-hairline)] bg-white px-4 py-3 md:py-2.5 font-sans text-base md:text-sm text-[var(--color-body)] outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="font-sans text-sm font-medium text-[var(--color-heading)] mb-1.5 block">
                      What are you looking for?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="w-full rounded-lg border border-[var(--color-hairline)] bg-white px-4 py-3 md:py-2.5 font-sans text-base md:text-sm text-[var(--color-body)] outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition-colors resize-none"
                    />
                  </div>

                  {error && (
                    <p className="font-sans text-sm text-red-600">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-fit rounded-full bg-[var(--color-accent)] px-8 py-3 font-sans text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-50"
                  >
                    {submitting ? "Sending..." : "Send message"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
