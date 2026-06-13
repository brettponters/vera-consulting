import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const SEGMENTS = [
  {
    eyebrow: "Wholesaling and creative finance",
    title: "Same lists everyone else has. Speed and follow-up are the edge.",
    body:
      "Cold calling solo is the burnout path. Wholesalers pairing AI-scored motivated-seller leads with inbound capture, automated 90-day follow-up, and zero-touch CRM updates are reporting 2 to 3x more closed deals. We source the off-market signals and run them on top of Podio, REsimpli, BatchLeads, or GoHighLevel without ripping out what works.",
    workflows: [
      "Motivated-seller leads scored before you call",
      "Automated 90-day follow-up",
      "Call transcription and CRM auto-fill",
      "Dispo matched to cash buyers",
    ],
  },
  {
    eyebrow: "Fix & flip and buy & hold",
    title: "Off-market deals first. The numbers run before you offer.",
    body:
      "The best deals never hit the MLS, and the ones that do are gone by the time you finish underwriting. We source off-market properties, rank them against your buy box, and run ARV, repairs, and margin the moment a lead lands. You spend your day on the properties worth chasing, not the spreadsheet.",
    workflows: [
      "Off-market properties sourced and ranked daily",
      "ARV, repairs, and margin run on every lead",
      "Comps pulled the moment a deal comes in",
      "Land and new-construction site sourcing",
    ],
  },
  {
    eyebrow: "Agents, teams, and brokers",
    title: "More listings sourced. Fewer seller leads dropped.",
    body:
      "Your edge is getting to the seller first and never letting a lead go cold. We surface listing prospects before they list, work inbound seller leads the minute they come in, and keep follow-up running so a missed message stops costing you the listing. It plugs into the CRM you already run.",
    workflows: [
      "Listing prospects surfaced before they list",
      "Seller leads worked the minute they arrive",
      "Follow-up that runs without you remembering",
      "CRM auto-fill and pipeline updates",
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
            Investors, agents, and teams are all getting hit by AI right now.
            Each one needs a different edge.
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
