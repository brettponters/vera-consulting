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
          <div className="mb-14 flex flex-wrap items-start justify-between gap-6">
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
            <p className="rounded-full border border-black/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em]">
              Private working draft
            </p>
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
              <h2 className="text-xl font-semibold">Your proof</h2>
              <p className="leading-relaxed text-black/65">{roadmap.proof}</p>
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
        <div className="mx-auto max-w-6xl rounded-3xl border border-black/10 bg-white p-8 md:p-12">
          <SectionLabel>Why outbound</SectionLabel>
          <h2 className="max-w-3xl text-3xl font-semibold leading-tight md:text-5xl">
            It turns existing proof into a measurable way to create new conversations.
          </h2>
          <div className="mt-10 grid gap-x-12 gap-y-0 md:grid-cols-2">
            {[
              ["Precise", "Choose the exact account, company size, market, and decision-maker before spending money."],
              ["Owned", "Build a repeatable acquisition channel that does not depend entirely on referrals or ad auctions."],
              ["Measurable", "Track which market, title, proof point, and message actually creates positive replies."],
              ["Learnable", "Use each batch to improve the next one instead of committing to a large campaign on assumptions."],
            ].map(([title, description]) => (
              <article key={title} className="border-t border-black/10 py-6">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-black/60">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-10 md:px-12 md:pb-16">
        <div className="mx-auto max-w-6xl rounded-3xl border border-black/10 bg-[#efe8dc] p-8 md:p-12">
          <div>
            <SectionLabel>The statistics</SectionLabel>
            <h2 className="max-w-3xl text-3xl font-semibold leading-tight md:text-4xl">
              Turn the first batch into usable evidence.
            </h2>
            <p className="mt-5 max-w-2xl text-black/60">
              Split 300 contacts evenly between two hypotheses. Compare positive replies and qualified meetings, not opens, then use the stronger result to shape the next batch.
            </p>
          </div>
          <div className="mt-9 divide-y divide-black/10 border-y border-black/10">
            {[
              ["150 / 150", "Equal test groups", "Give each hypothesis the same opportunity to produce a signal."],
              ["3% = 9", "Positive-reply scenario", "At a 3% positive-reply rate, 300 delivered emails would create nine interested conversations."],
              ["5% = 15", "Upside scenario", "At 5%, the same batch would create fifteen. These are scenarios, not promised outcomes."],
              ["Scale the winner", "Decision rule", "Expand only when one segment beats the baseline on positive replies and qualified meetings."],
            ].map(([value, label, description]) => (
              <div key={label} className="grid gap-3 py-5 md:grid-cols-[9rem_12rem_1fr] md:items-baseline">
                <p className="text-2xl font-semibold tracking-tight">{value}</p>
                <p className="font-semibold">{label}</p>
                <p className="text-sm leading-relaxed text-black/55">{description}</p>
              </div>
            ))}
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
          <div className="mt-10 rounded-2xl border border-black/10 bg-white p-7 md:p-10">
            <p className="mb-7 text-base text-black/55">Hey {`{{firstName}}`},</p>
            <div className="space-y-7">
              {[
                ["Personal", "{{One verified observation that makes the message relevant to this person and company.}}"],
                ["What you do", "{{One plain-English sentence describing the useful outcome you create.}}"],
                ["Proof", "{{One credible result, case study, customer, or operating signal supporting that outcome.}}"],
                ["Offer", "{{One valuable, low-risk reason for the recipient to continue the conversation.}}"],
              ].map(([title, line], index) => (
                <div key={title} className="grid gap-2 md:grid-cols-[8rem_1fr]">
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#c97b3f]">0{index + 1} · {title}</p>
                  <p className="text-lg leading-relaxed text-black/70">{line}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-base text-black/55">{`{{Signature}}`}</p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-10 md:px-12 md:pb-16">
        <div className="mx-auto grid max-w-6xl gap-10 rounded-3xl border border-black/10 bg-white p-8 md:grid-cols-[0.72fr_1.28fr] md:p-12">
          <div>
            <SectionLabel>AI personalization</SectionLabel>
            <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
              Automate the research work, not the relationship.
            </h2>
          </div>
          <ol className="space-y-4">
            {[
              "Collect factual signals from each company’s website, case studies, services, and public positioning.",
              "Choose one relevant signal and connect it to the campaign hypothesis without inventing familiarity.",
              "Generate a short opener and subject while the offer, structure, and claims remain controlled.",
              "Keep a human-readable evidence trail so every personalized line can be checked before launch.",
            ].map((item, index) => (
              <li key={item} className="flex gap-5 rounded-2xl bg-[#f8f6f1] p-5">
                <span className="font-semibold text-[#c97b3f]">0{index + 1}</span>
                <p className="leading-relaxed text-black/70">{item}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-6 pb-10 md:px-12 md:pb-16">
        <div className="mx-auto grid max-w-6xl gap-10 rounded-3xl border border-black/10 bg-white p-8 md:grid-cols-[0.72fr_1.28fr] md:p-12">
          <div>
            <SectionLabel>How to use outbound</SectionLabel>
            <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
              Extend what already works.
            </h2>
          </div>
          <ul className="divide-y divide-black/10">
            {roadmap.howOutboundHelps.map((reason, index) => (
              <li key={reason} className="flex gap-5 py-5 first:pt-0 last:pb-0">
                <span className="mt-1 font-semibold text-[#c97b3f]">0{index + 1}</span>
                <p className="text-lg leading-relaxed text-black/70">{reason}</p>
              </li>
            ))}
          </ul>
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
          <p className="mt-12 max-w-2xl text-lg leading-relaxed text-black/60">
            This is a starting hypothesis, not a promise dressed up as a plan. The first 150 accounts create the evidence needed to refine the market, message, and offer intelligently.
          </p>
        </div>
      </section>

      <section className="px-6 pb-20 md:px-12 md:pb-28">
        <div className="mx-auto max-w-6xl rounded-3xl border border-black/10 bg-white p-8 md:p-12">
          <SectionLabel>What we measure</SectionLabel>
          <div className="grid gap-10 md:grid-cols-[0.72fr_1.28fr]">
            <div>
              <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
                Use statistics to decide what to do next.
              </h2>
              <p className="mt-5 text-black/60">
                The goal is not more reporting. It is giving your team clear evidence about which markets and messages deserve more time.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                ["Delivery", "Is the list clean enough to reach the market safely?"],
                ["Positive replies", "Which audience and message creates genuine interest?"],
                ["Meetings", "Does that interest convert into qualified conversations?"],
                ["Segment lift", "Which title, size, and niche beats the campaign baseline?"],
              ].map(([title, description]) => (
                <article key={title} className="rounded-2xl bg-[#f8f6f1] p-6">
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-black/60">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-black/10 bg-[#efe8dc] px-6 py-14 md:px-12 md:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionLabel>The data</SectionLabel>
          <div className="grid gap-px overflow-hidden rounded-3xl border border-black/10 bg-black/10 md:grid-cols-3">
            <article className="bg-[#f8f6f1] p-8">
              <p className="text-5xl font-semibold tracking-tight">85M</p>
              <p className="mt-4 leading-relaxed text-black/65">
                cold emails were analyzed in Gong’s research. The strongest guidance favors short, relevant messages over long explanations.
              </p>
            </article>
            <article className="bg-[#f8f6f1] p-8">
              <p className="text-5xl font-semibold tracking-tight">30.2%</p>
              <p className="mt-4 leading-relaxed text-black/65">
                lower reply likelihood for C-level executives than non-executives. That is why the list includes owners and marketing leaders instead of relying only on CEOs.
              </p>
            </article>
            <article className="bg-[#f8f6f1] p-8">
              <p className="text-5xl font-semibold tracking-tight">&lt;4</p>
              <p className="mt-4 leading-relaxed text-black/65">
                words is Gong’s subject-line recommendation. Short internal-looking subjects give the message more room to feel personal instead of promotional.
              </p>
            </article>
          </div>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs text-black/50">
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
