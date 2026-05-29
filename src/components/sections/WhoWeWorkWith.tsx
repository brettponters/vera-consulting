import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const SEGMENTS = [
  {
    eyebrow: "Short-term rental",
    title: "5 to 50 doors. RevPAR is the only number that matters.",
    body:
      "Dynamic pricing is now table stakes. The 2026 industry outlook calls it the line between professional hosts and casual ones. We help you pick between PriceLabs, Wheelhouse, and Beyond, wire your PMS in cleanly, and build the AI layer on top: guest screening, review response, no-show recovery, listing copy that doesn't sound like a bot wrote it.",
    workflows: [
      "Dynamic pricing setup and audit",
      "PMS + channel manager integration",
      "AI guest comms and review triage",
      "Owner reporting",
    ],
  },
  {
    eyebrow: "Wholesaling and creative finance",
    title: "Same lists everyone else has. Speed and follow-up are the edge.",
    body:
      "Cold calling solo is the burnout path. Wholesalers pairing list-pulling with AI inbound capture, automated 90-day follow-up, and zero-touch CRM updates are reporting 2 to 3x more closed deals. We help you choose the right stack on top of Podio, REsimpli, BatchLeads, or GoHighLevel without ripping out what works.",
    workflows: [
      "AI voice agents for inbound seller calls",
      "Automated 90-day follow-up",
      "Call transcription and CRM auto-fill",
      "TCPA-aware campaign design",
    ],
  },
  {
    eyebrow: "Multifamily, 50 to 500 units",
    title:
      "Not institutional. Not single-property. The hardest segment to staff.",
    body:
      "94% of multifamily owners are implementing or planning AI in 2026. Most are stuck between PMS-native tools that only do chat and front-office layers that need a real integration plan. We pick the workflows worth building: leasing intake, after-hours coverage, delinquency outreach, value-add underwriting. And we draw a hard line around fair housing risk so your screening and pricing stack doesn't become the next disparate-impact case study.",
    workflows: [
      "Leasing AI selection and rollout",
      "Value-add and OM screening",
      "Yardi or RealPage data layer for portfolio reporting",
      "Fair housing audit on screening and pricing tools",
    ],
  },
];

export function WhoWeWorkWith() {
  return (
    <section
      aria-labelledby="who-we-work-with-heading"
      className="py-20 md:py-28 bg-[var(--color-bg)]"
    >
      <Container size="wide">
        <div className="max-w-[820px] mb-12 md:mb-16">
          <p className="font-sans font-medium text-xs uppercase tracking-[0.14em] text-[var(--color-accent)] mb-3">
            Who we work with
          </p>
          <h2
            id="who-we-work-with-heading"
            className="font-sans font-black text-[var(--color-heading)] tracking-[-0.03em] leading-[1.05]"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Three kinds of real estate investors are getting hit by AI right
            now. Each one needs a different stack.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SEGMENTS.map((s, i) => (
            <Reveal key={s.eyebrow} delay={0.05 + i * 0.05}>
              <div className="h-full p-7 md:p-9 rounded-2xl border border-[var(--color-hairline)] bg-[var(--color-surface)] flex flex-col gap-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] font-semibold text-[var(--color-navy)]">
                  {s.eyebrow}
                </p>
                <h3 className="font-sans font-black text-xl md:text-2xl text-[var(--color-heading)] tracking-[-0.02em] leading-tight">
                  {s.title}
                </h3>
                <p className="font-sans font-medium text-base leading-snug text-[var(--color-body)]">
                  {s.body}
                </p>
                <ul className="mt-auto space-y-2 list-none m-0 p-0">
                  {s.workflows.map((w) => (
                    <li
                      key={w}
                      className="font-sans text-sm text-[var(--color-body)] flex items-start gap-2"
                    >
                      <span className="text-[var(--color-accent)] mt-1 shrink-0">
                        ·
                      </span>
                      <span>{w}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
