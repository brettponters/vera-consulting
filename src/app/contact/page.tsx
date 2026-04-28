'use client';

import { useState } from 'react';
import { Container } from '@/components/layout/Container';
import { CONTACT_PAGE } from '@/config/copy';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactPage() {
  const [state, setState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState('submitting');
    setErrorMsg('');

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) {
        setErrorMsg(json.error ?? 'Something went wrong. Please try again.');
        setState('error');
      } else {
        setState('success');
      }
    } catch {
      setErrorMsg('Network error. Please try again.');
      setState('error');
    }
  }

  return (
    <main className="bg-bg-base min-h-screen py-24 md:py-32">
      <Container>
        <div className="max-w-xl">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-fg-base mb-4">
            {CONTACT_PAGE.heading}
          </h1>
          <p className="font-sans text-lg leading-relaxed text-fg-muted mb-12">
            {CONTACT_PAGE.body}
          </p>

          {state === 'success' ? (
            <p className="font-sans text-fg-base text-lg">
              {CONTACT_PAGE.formLabels.success}
            </p>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="name"
                  className="font-sans text-sm text-fg-muted"
                >
                  {CONTACT_PAGE.formLabels.name}
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="bg-bg-subtle border border-white/10 rounded-lg px-4 py-3 font-sans text-fg-base placeholder:text-fg-muted/40 focus:outline-none focus:ring-1 focus:ring-accent transition"
                  placeholder="Your name"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="email"
                  className="font-sans text-sm text-fg-muted"
                >
                  {CONTACT_PAGE.formLabels.email}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="bg-bg-subtle border border-white/10 rounded-lg px-4 py-3 font-sans text-fg-base placeholder:text-fg-muted/40 focus:outline-none focus:ring-1 focus:ring-accent transition"
                  placeholder="you@example.com"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="message"
                  className="font-sans text-sm text-fg-muted"
                >
                  {CONTACT_PAGE.formLabels.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="bg-bg-subtle border border-white/10 rounded-lg px-4 py-3 font-sans text-fg-base placeholder:text-fg-muted/40 focus:outline-none focus:ring-1 focus:ring-accent transition resize-none"
                  placeholder="Tell me what you're building…"
                />
              </div>

              {state === 'error' && errorMsg && (
                <p className="font-sans text-sm text-accent" role="alert">
                  {errorMsg}
                </p>
              )}

              <button
                type="submit"
                disabled={state === 'submitting'}
                className="inline-flex items-center justify-center rounded-full bg-accent text-bg-base font-sans font-medium px-8 py-3.5 text-sm tracking-wide transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {state === 'submitting' ? 'Sending…' : CONTACT_PAGE.formLabels.submit}
              </button>
            </form>
          )}
        </div>
      </Container>
    </main>
  );
}
