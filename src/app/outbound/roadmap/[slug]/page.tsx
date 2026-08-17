import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getOutboundRoadmap } from "@/lib/outbound-roadmaps";
import { CompanyLogo } from "@/components/outbound/CompanyLogo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const roadmap = await getOutboundRoadmap(slug);
  if (!roadmap) return {};

  return {
    title: `Outbound roadmap for ${roadmap.company}`,
    description: `A personalized outbound opportunity map prepared for ${roadmap.company}.`,
    robots: { index: false, follow: false },
  };
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-[#8b5a32]">
      {children}
    </p>
  );
}

export default async function RoadmapPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const roadmap = await getOutboundRoadmap(slug);
  if (!roadmap) notFound();

  return (
    <div className="bg-[#f8f6f1] text-black">
      <section className="border-b border-black/10 px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 flex items-start">
            <div className="flex items-center gap-5">
              <CompanyLogo
                company={roadmap.company}
                logoUrl={roadmap.logoUrl}
                backgroundColor={roadmap.logoBackgroundColor}
              />
              <div>
                <p className="text-sm font-semibold">Prepared for {roadmap.company}</p>
                <p className="text-sm text-black/55">By VERA Solutions</p>
              </div>
            </div>
          </div>

          <p className="mb-5 text-xs font-bold uppercase tracking-[0.16em] text-[#8b5a32]">
            Science-backed client acquisition plan
          </p>
          <h1 className="max-w-5xl font-sans text-[clamp(3rem,7vw,6.8rem)] font-black leading-[0.94] tracking-[-0.055em]">
            A client acquisition plan for {roadmap.company}.
          </h1>
          <p className="mt-9 max-w-2xl text-lg leading-relaxed text-black/65 md:text-xl">
            {roadmap.recipient}, this uses the proof already on your site to show how outbound could extend what your team already does well through a measurable first test.
          </p>
        </div>
      </section>

      <section className="px-6 py-10 md:px-12 md:py-16">
        <div className="mx-auto max-w-6xl rounded-3xl border border-black/10 bg-white p-8 md:p-12">
          <SectionLabel>Built for {roadmap.company}</SectionLabel>
          <div className="divide-y divide-black/10">
            <article className="grid gap-4 py-7 first:pt-0 md:grid-cols-[0.32fr_0.68fr]">
              <h2 className="text-xl font-semibold">What stood out</h2>
              <div>
                <p className="text-lg leading-relaxed text-black/70">{roadmap.proof}</p>
                <ul className="mt-6 divide-y divide-black/10 border-y border-black/10">
                  {roadmap.websiteFindings.map((finding) => (
                    <li key={finding} className="py-4 leading-relaxed text-black/60">{finding}</li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-4 text-xs text-black/45">
                  {roadmap.evidenceLinks.map((link) => (
                    <a key={link.url} href={link.url} target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-black">
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </article>
            <article className="grid gap-4 py-7 md:grid-cols-[0.32fr_0.68fr]">
              <h2 className="text-xl font-semibold">Outbound use case</h2>
              <div>
                <h3 className="text-2xl font-semibold">{roadmap.outboundUseCase}</h3>
                <p className="mt-3 leading-relaxed text-black/65">{roadmap.outboundUseCaseNote}</p>
                <dl className="mt-6 grid gap-5 text-sm sm:grid-cols-2">
              <div>
                <dt className="font-semibold text-black">Who to reach</dt>
                <dd className="mt-1 text-black/55">{roadmap.buyerRoles}</dd>
              </div>
              <div>
                <dt className="font-semibold text-black">How to segment</dt>
                <dd className="mt-1 text-black/55">{roadmap.listFilters}</dd>
              </div>
                </dl>
              </div>
            </article>
            <article className="grid gap-4 py-7 last:pb-0 md:grid-cols-[0.32fr_0.68fr]">
              <h2 className="text-xl font-semibold">Campaign angle</h2>
              <p className="leading-relaxed text-black/65">{roadmap.angle}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="px-6 pb-10 md:px-12 md:pb-16">
        <div className="mx-auto max-w-6xl rounded-3xl border border-black/10 bg-[#efe8dc] p-8 md:p-12">
          <div>
            <SectionLabel>The science-backed approach</SectionLabel>
            <h2 className="max-w-3xl text-3xl font-semibold leading-tight md:text-4xl">
              Treat outbound like an experiment, not a guessing game.
            </h2>
            <p className="mt-5 max-w-3xl text-black/60">
              Start with a clear hypothesis about the audience, proof, and offer. Hold the other variables steady, test one meaningful change at a time, and judge it using positive replies and qualified meetings. Once the evidence identifies a winner, controlled scale turns a small improvement into substantially more opportunities for the team.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-4">
              {[
                ["01", "Hypothesis", "Define what should work and why."],
                ["02", "Control", "Change one meaningful variable at a time."],
                ["03", "Evidence", "Measure positive replies and qualified meetings."],
                ["04", "Scale", "Increase volume only after the result repeats."],
              ].map(([number, title, description]) => (
                <div key={title} className="border-t border-black/15 pt-4">
                  <p className="text-xs font-bold text-[#c97b3f]">{number}</p>
                  <p className="mt-3 font-semibold">{title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-black/50">{description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-9 divide-y divide-black/10 border-y border-black/10">
            {[
              ["150 / 150", "Test the offer", "Split the first batch evenly so two offer or proof hypotheses receive the same opportunity."],
              ["3% = 9", "Create a baseline", "At a 3% positive-reply rate, 300 delivered emails would create nine interested conversations."],
              ["+1% = +30", "See the leverage", "Moving from 3% to 4% adds three conversations per 300, or thirty across 3,000 delivered emails."],
              ["Scale the winner", "Compound the lift", "Increase volume only after the stronger combination also produces more qualified meetings."],
            ].map(([value, label, description]) => (
              <div key={label} className="grid gap-3 py-5 md:grid-cols-[9rem_12rem_1fr] md:items-baseline">
                <p className="text-2xl font-semibold tracking-tight">{value}</p>
                <p className="font-semibold">{label}</p>
                <p className="text-sm leading-relaxed text-black/55">{description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-2xl bg-white p-7 md:p-9">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-sm font-semibold">The effect of a one-point lift</p>
                <p className="mt-1 text-sm text-black/50">Positive replies per 3,000 delivered emails</p>
              </div>
              <p className="text-xs text-black/45">Illustrative scenario, not a forecast</p>
            </div>
            <div className="mt-8 space-y-5">
              {[
                ["3% baseline", "90 conversations", "75%"],
                ["4% improved", "120 conversations", "100%"],
              ].map(([label, value, width], index) => (
                <div key={label} className="grid gap-2 md:grid-cols-[8rem_1fr_10rem] md:items-center">
                  <p className="text-sm font-semibold">{label}</p>
                  <div className="h-4 overflow-hidden rounded-full bg-black/5">
                    <div
                      className={`h-full rounded-full ${index === 0 ? "bg-black/30" : "bg-[#c97b3f]"}`}
                      style={{ width }}
                    />
                  </div>
                  <p className="text-sm text-black/60 md:text-right">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-10 md:px-12 md:pb-16">
        <div className="mx-auto max-w-6xl rounded-3xl border border-black/10 bg-[#efe8dc] p-8 md:p-12">
          <div>
            <SectionLabel>The email framework</SectionLabel>
            <h2 className="max-w-3xl text-3xl font-semibold leading-tight md:text-5xl">
              Four jobs. One short message.
            </h2>
            <p className="mt-5 max-w-2xl text-black/60">
              The framework stays fixed. Research changes the substance inside each part, so the campaign remains consistent without sounding mass-produced.
            </p>
          </div>
          <div className="mt-10 overflow-hidden rounded-2xl border border-black/10 bg-white">
            <div className="border-b border-black/10 bg-[#f8f6f1] px-7 py-5 text-sm text-black/50 md:px-10">
              <p><span className="inline-block w-16">To</span>{`{{firstName}}`} at {`{{companyName}}`}</p>
              <p className="mt-2"><span className="inline-block w-16">Subject</span>{`{{personalSubject}}`}</p>
            </div>
            <div className="p-7 md:p-10">
              <p className="text-base text-black/65">Hey {`{{firstName}}`},</p>
              <div className="mt-7 space-y-7">
              {[
                ["Personal", "{{personalizedOpening}}"],
                ["What you do", "{{clearOutcome}}"],
                ["Proof", "{{relevantProof}}"],
                ["Offer", "{{irresistibleOffer}}"],
              ].map(([title, line], index) => (
                <div key={title}>
                  <p className="mb-2 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-[#c97b3f]">0{index + 1} · {title}</p>
                  <p className="text-lg leading-relaxed text-black/70">{line}</p>
                </div>
              ))}
              </div>
              <p className="mt-8 text-base text-black/55">{`{{signature}}`}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-10 md:px-12 md:pb-16">
        <div className="mx-auto grid max-w-6xl gap-10 rounded-3xl border border-black/10 bg-white p-8 md:grid-cols-[0.72fr_1.28fr] md:p-12">
          <div>
            <SectionLabel>AI personalization</SectionLabel>
            <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
              Personalize where it changes relevance.
            </h2>
            <p className="mt-5 text-black/60">
              For {roadmap.company}, the system should choose the proof that best matches each prospect instead of repeating the same credential to everyone.
            </p>
          </div>
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.12em] text-[#8b5a32]">Proof statements the campaign can use</p>
            <ol className="divide-y divide-black/10 rounded-2xl bg-[#f8f6f1] px-6">
              {roadmap.personalizationSignals.map((item, index) => (
                <li key={item} className="flex gap-5 py-5">
                  <span className="font-semibold text-[#c97b3f]">0{index + 1}</span>
                  <p className="leading-relaxed text-black/70">{item}</p>
                </li>
              ))}
            </ol>
            <p className="mt-5 text-sm leading-relaxed text-black/50">
              AI chooses the statement that best supports the conversation, then adapts the opener around the prospect’s real context. It never changes the numbers, exaggerates the claim, or invents a result.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 md:px-12 md:pb-28">
        <div className="mx-auto max-w-6xl border-t border-black/15 pt-12">
          <div>
            <SectionLabel>The roadmap</SectionLabel>
            <h2 className="mb-10 max-w-2xl text-3xl font-semibold md:text-4xl">
              Learn, then scale.
            </h2>
            <ol className="divide-y divide-black/10 border-y border-black/10">
              {[
                ["Define", "Choose one audience hypothesis, the decision-makers, and what counts as a qualified opportunity."],
                ["Test", "Build a 150-account sample and contact up to two relevant people per company."],
                ["Measure", "Hold the offer steady while comparing proof points, titles, and positive replies."],
                ["Scale", "Expand only the segment and message that beat the campaign baseline."],
              ].map((item, index) => (
                <li key={item[0]} className="grid gap-3 py-7 md:grid-cols-[10rem_1fr]">
                  <div className="flex items-baseline gap-4">
                    <span className="text-sm font-semibold text-[#c97b3f]">0{index + 1}</span>
                    <h3 className="text-xl font-semibold">{item[0]}</h3>
                  </div>
                  <p className="text-lg leading-relaxed text-black/65">{item[1]}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="border-t border-black/10 bg-[#efe8dc] px-6 py-10 md:px-12 md:py-12">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-black/50">
            <a className="underline underline-offset-4 hover:text-black" href={roadmap.companyEvidenceUrl} target="_blank" rel="noreferrer">
              Company evidence: {roadmap.company}
            </a>
            <a className="underline underline-offset-4 hover:text-black" href="https://www.gong.io/resources/guides/how-to-master-cold-email-get-the-data-backed-guide-based-on-85-million-emails" target="_blank" rel="noreferrer">
              Research: Gong’s 85M-email analysis
            </a>
            <a className="underline underline-offset-4 hover:text-black" href="https://www.gong.io/blog/do-execs-really-reply-to-cold-email-here-s-what-the-data-says" target="_blank" rel="noreferrer">
              Research: executive reply behavior
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
