"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function GetStarted() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

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
          company: data.company || "—",
          message: data.message,
          _subject: `New VERA lead: ${data.name}`,
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
    <div className="min-h-screen bg-[var(--color-bg)]">
      {/* Minimal header — logo only, no nav distractions */}
      <header className="flex h-14 items-center px-6 md:px-16 border-b border-[var(--color-hairline)]">
        <Link
          href="/"
          className="font-sans text-sm font-semibold tracking-wide text-[var(--color-heading)] no-underline flex items-center gap-3"
        >
          <svg
            viewBox="0 0 360 540"
            fill="none"
            className="h-6 w-auto shrink-0"
            aria-hidden="true"
          >
            <path
              d="M 0 0 L 180 540 L 360 0"
              stroke="#C97B3F"
              strokeWidth="72"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>VERA</span>
        </Link>
      </header>

      <main className="mx-auto max-w-[1100px] px-6 md:px-10 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-start">
          {/* Left — pitch */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="font-sans font-bold text-[var(--color-heading)] leading-[1.08] tracking-[-0.02em] mb-6"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
            >
              Get AI working for your business — the right way.
            </motion.h1>

            <p className="font-sans text-base md:text-lg leading-relaxed text-[var(--color-body)] mb-8">
              Tell us what you&rsquo;re working on and we&rsquo;ll reach out
              within 24 hours.
            </p>

            <ul className="flex flex-col gap-4 mb-10">
              {[
                "Strategy and implementation grounded in real research",
                "Systems with guardrails, evaluation, and documentation",
                "A team that stays until it works in production",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--color-accent)] shrink-0" />
                  <span className="font-sans text-base text-[var(--color-body)]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3 pt-6 border-t border-[var(--color-hairline)]">
              <span className="font-sans font-semibold text-xs uppercase tracking-[0.12em] text-[var(--color-accent)]">
                Public Benefit Corporation
              </span>
              <span className="text-[var(--color-hairline)]">·</span>
              <span className="font-sans text-xs text-[var(--color-muted)]">
                A percentage of every engagement funds independent AI safety research
              </span>
            </div>
          </div>

          {/* Right — form */}
          <div className="rounded-2xl border border-[var(--color-hairline)] bg-[var(--color-surface)] p-6 md:p-8">
            {submitted ? (
              <div className="py-12 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-accent)]">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 10l4 4 8-8" />
                  </svg>
                </div>
                <h2 className="font-sans font-semibold text-xl text-[var(--color-heading)] mb-2">
                  We got it.
                </h2>
                <p className="font-sans text-base text-[var(--color-body)]">
                  We&rsquo;ll be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <h2 className="font-sans font-semibold text-lg text-[var(--color-heading)] mb-2">
                  Tell us about your project
                </h2>

                <div>
                  <label htmlFor="name" className="font-sans text-sm font-medium text-[var(--color-heading)] mb-1 block">
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
                  <label htmlFor="email" className="font-sans text-sm font-medium text-[var(--color-heading)] mb-1 block">
                    Work email
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
                  <label htmlFor="company" className="font-sans text-sm font-medium text-[var(--color-heading)] mb-1 block">
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    className="w-full rounded-lg border border-[var(--color-hairline)] bg-white px-4 py-3 md:py-2.5 font-sans text-base md:text-sm text-[var(--color-body)] outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="font-sans text-sm font-medium text-[var(--color-heading)] mb-1 block">
                    What are you looking for?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
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
                  className="mt-2 w-full rounded-full bg-[var(--color-accent)] px-6 py-3 font-sans text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-50"
                >
                  {submitting ? "Sending..." : "Get in touch"}
                </button>

                <p className="font-sans text-xs text-[var(--color-muted)] text-center mt-1">
                  No spam. We&rsquo;ll only reach out about your project.
                </p>
              </form>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
