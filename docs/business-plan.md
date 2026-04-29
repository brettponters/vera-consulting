# RAIN — Business Plan (v0.1)

> A working draft. Plain English. Read it through, then tell me line-by-line what's right, what's wrong, and what's missing. The website is downstream of this document. Nothing on the site goes live that this document doesn't already say.

---

## 1. What RAIN is

RAIN is a mission-locked AI consulting studio.

We help companies put AI to work — capably, honestly, and with the depth to know how it actually behaves. The deliverables are strategy, custom builds, and ongoing stewardship. The thing we're actually selling is the result those systems produce, and the discipline that makes the result hold up.

Our clients hire us because they want to do AI seriously, they want the upside it can deliver, and they want a partner who has actually done the reading.

What we are actually offering is the feeling of being **safe in our hands.** Not a guarantee the technology won't ever stumble — nobody can give you that. The feeling that, whatever happens, you're working with someone who knows what they're doing, will tell you the truth, will keep the worst outcomes away from you, and will not leave you stranded. The way you want to feel about your surgeon, your lawyer, your structural engineer. That's the relationship RAIN is built to have with the companies that hire us.

The structure isn't a marketing posture — it's a legal commitment. RAIN is incorporated as a Public Benefit Corporation, with a public charter that names AI safety and responsible deployment as legally protected operating purposes. A fixed percentage of net revenue is committed in writing to independent AI safety and alignment research. The commitment is published, the allocation is reported annually, and it's part of the charter — not a marketing line that can be quietly dropped when the quarter goes sideways.

---

## 2. What we believe

Business innovation should be backed by research and fundamentals.

You have to understand the fundamentals to understand the risks and the rewards. Most teams adopting AI today are moving fast on tools they don't fully understand — and that's the gap RAIN is built to close. Without the fundamentals, the failure modes are invisible until they aren't, and the upside gets measured by demo instead of by outcome.

The depth that catches the risks is the same depth that captures the rewards. Reading the research isn't friction on innovation — it's what makes innovation real. RAIN does that work for our clients. We read the papers. We test what we ship. We know the difference between a model that performs well on a benchmark and a system that holds up in the real world.

That depth is the product.

---

## 3. Who we serve

**Phase 1 (now → next 18 months):** Mid-market and enterprise companies in *scrutiny-heavy* environments — finance, healthcare, legal, insurance, real estate, regulated B2B SaaS — where leadership is being pressured to adopt AI but is acutely aware that getting it wrong is expensive. The buyer is typically a Director / VP / Chief of Staff / CTO who has been burned by hype-driven vendors and wants a grown-up partner.

These buyers care about:
- Not embarrassing themselves at the next board meeting.
- Not losing customer data.
- Not signing off on a system whose behavior they can't explain.
- Building something that's still useful in three years, not three months.

**Phase 2 (longer arc):** Public-sector and civic clients — government, healthcare systems, education, foundations, peer non-profits — where the responsibility/safety angle isn't a nice-to-have, it's a requirement. The PBC structure and the public benefit charter make these engagements credible from day one; the deeper procurement relationships will get earned over time through the work. We pursue these engagements deliberately and selectively, with reduced or pro-bono pricing where appropriate, because they advance the mission directly.

We do not pursue: AI hype shops, crypto-adjacent ventures, surveillance applications, applications designed to deceive end-users, or "growth hacking" engagements.

---

## 4. What we sell

Three engagement shapes. We don't price them publicly. We don't tier them. We size them to the client.

**Strategy.**
A short, focused engagement. We come in, look at what you have, look at what you're being sold, and tell you what's real, what's risky, and what's worth doing. Output is a written assessment a non-technical executive can act on.

**Build.**
We design and ship custom AI systems — agents, internal tools, decision-support, document-handling pipelines, whatever the work needs. We write the code. We integrate it. We test it adversarially. We hand it over with documentation a competent in-house team can maintain.

**Steward.**
Ongoing partnership for clients who want us watching their AI systems over time. Quarterly reviews, incident response, retraining, regulatory adaptation, and the unsexy work of keeping production AI healthy.

Most clients start with Strategy and graduate to Build. A subset graduate to Steward.

**Pricing posture.** Commercial clients pay market rates for high-quality consulting work. Mission-aligned clients (public sector, civic, peer non-profits, education) pay on a reduced scale or pro bono where appropriate. Clients who pay full freight know a fixed percentage of every engagement fee is committed to AI safety research, and that the studio is structurally constrained from drifting into anything else. They're buying outcomes for themselves *and* contributing to that larger commitment, transparently.

**Revenue streams.** RAIN operates on two:
1. Consulting fees from commercial clients (the core).
2. Reduced-fee or pro-bono engagements with mission-aligned clients (selectively, when the impact justifies it).

---

## 5. What we care about

Four values run through every engagement. We don't lecture about them — they show up in the work.

**Responsibly powerful.**
We don't sell caution. We sell outcomes — real ones, measurable ones — delivered by AI systems that are full-strength: capable, autonomous where it makes sense, integrated deeply into our clients' operations.

We're also honest about what these systems are. Models hallucinate. Agents hit cases their training didn't prepare them for. Tools fail in ways that surprise their builders. We don't promise AI that doesn't make mistakes — nobody can. What we promise is the discipline that catches the mistakes: explicit guardrails, observable behavior, bounded failure modes, and a way for a human to intervene where the stakes are high. We treat alignment, oversight, and harm prevention as engineering disciplines, not philosophy. The result is AI that moves the business *and* fails gracefully when it fails — surfaced quickly, contained, recoverable, and traceable. We refuse engagements where the use case requires us to compromise this.

**Transparency.**
We're open about what we're building, how it works, and what it can and can't do. No black-box demos. No mystified architecture diagrams. Our clients understand what they're getting — and so do their boards, their auditors, and their customers. The same posture extends to our own work: CoAgent's architecture is public, our reasoning is public, and our reading list is public.

**Data security.**
What goes into our clients' models — and what comes out — is treated like the sensitive material it is. We design for least privilege, audit trails, and clear ownership of data. We name the risks of training-data leakage, prompt injection, and model exfiltration explicitly, and we engineer against them.

**Research-grounded judgment.**
The AI field moves fast and most of what's published in trade press is wrong. We read the actual research — alignment, interpretability, agent design, security, safety — and our recommendations are grounded in it. The "What we read" section of our site isn't decoration; it's how we work.

**Commitment (structural).** A fixed percentage of net consulting revenue — encoded in RAIN's PBC charter, not in marketing copy — is committed annually to independent AI safety and alignment research. This is not a discretionary donation; it's an operating obligation of the studio. The percentage and the recipient orgs are reviewed and disclosed publicly each year in RAIN's annual benefit report. (Initial percentage placeholder: **5% of net consulting revenue** — to be finalized by founder. Candidate recipient orgs: MIRI, ARC, Redwood Research, AI Safety Institute ecosystem, AI Alignment Forum infrastructure, others to be vetted.)

---

## 6. Proof

We don't ask clients to take our word for any of this. The site shows the work.

**CoAgent.**
A local-first autonomous AI agent we designed and built end-to-end. It runs entirely on the user's own machine — no cloud database, no third-party data pipeline — and uses the open Model Context Protocol (MCP) to integrate with the user's tools (email, calendar, contracts, document storage, market data, custom skills). Claude is the reasoning core; modular MCP servers are the hands. CoAgent wakes on heartbeats, webhooks, or direct chat; it remembers context as plain markdown files plus a local vector index; routine tasks run autonomously while high-stakes work (contracts, offers, financial analysis) is queued for human approval.

CoAgent is our reference implementation of the values in §5: **powerful** (autonomous, multi-tool, multi-context), **responsible** (human-in-the-loop on consequential actions), **transparent** (markdown memory readable by the user, MCP architecture readable by anyone), **secure by architecture** (data stays on the user's machine; no third-party data custody). It's currently deployed in real estate; the architecture is general.

CoAgent gets its own dedicated page on the site — a real technical deep-dive, written for engineers and the executives who employ them. We're open about the architecture, the design choices, the trade-offs, and the failure modes we hit and fixed.

**What we read.**
A curated, regularly-updated list of papers and books our practice is built on, each with a plain-English summary of what it says and why it matters. This is the most credible thing on the site. It's also the section that's hardest to fake.

**Testimonials.**
Real quotes from real clients, named where they let us name them. This is the section we earn by doing the work — not by writing it ourselves. Until we have engagements closed and clients who have agreed to be quoted, this section stays empty rather than getting filled with fictional or anonymized placeholder copy. Once it's populated, testimonials live alongside the case studies as direct, named proof: "Here's what we did, here's what it produced, and here's the person whose business it produced it for, saying so in their own words."

---

## 7. Anti-positioning

Things RAIN explicitly is not, and should never feel like:

- Not "AI tech bros." No hype. No buzzwords. No "supercharge" / "harness" / "leverage" / "transform."
- Not a productized SaaS company in disguise.
- Not a cheap-prototype shop. We don't compete on speed-to-demo.
- Not preachy about safety. We act on it; we don't sermonize.
- Not anonymous. The work has names attached. Real humans, real reputations.
- Not a values statement pretending to be a structure. Our values are in our PBC charter and our annual benefit report — not just on our homepage.

Voice: plain English, calm, confident, welcoming. The way a senior engineer or a trusted family doctor speaks — knowledgeable without performing knowledge. The reader should finish a paragraph and feel: *I'm safe in their hands.* That's the test for every line of copy on the site. If a sentence makes the reader feel pitched, hyped, or sold to, it gets cut.

---

## 8. Structure & governance

RAIN is incorporated as a **Public Benefit Corporation (PBC)** — a for-profit legal entity whose charter binds the company to a specific public benefit purpose alongside any pursuit of profit. The structure makes the mission legally enforceable and survives changes in leadership, ownership, or business pressure.

**Why PBC and not a 501(c)(3):**

A 501(c)(3) public charity requires a board of unrelated directors, no individual ownership, and ongoing governance overhead that doesn't fit a solo studio at this stage. A standard LLC or C-corp gives no structural protection for the mission — values can be quietly retired the moment they become inconvenient. The PBC is the credible middle path: solo-ownable, capable of taking commercial engagements at market rates, and legally bound to the benefit purpose written into the charter.

**What this means in practice:**

- **Public benefit charter.** RAIN's certificate of incorporation names a specific public benefit purpose: *advancing the responsible development and deployment of AI systems through research-grounded consulting and contribution to independent AI safety and alignment research.* Decisions of the company are required to balance shareholder interests with this purpose.
- **Solo-ownable.** Founder is sole shareholder, CEO, and director at incorporation. The PBC structure does not require an independent board (Delaware law requires at least one director; that can be the founder). Advisory board can be added over time.
- **Mission-lock.** The benefit purpose is part of the charter. Removing or materially weakening it requires a 2/3 stockholder vote (which today is the founder's, but binds any future investor or acquirer). Acquirers, future shareholders, and any successor cannot quietly delete the mission to chase margin.
- **Annual benefit report.** Delaware PBCs are required to produce a benefit report to shareholders at least biennially. RAIN will produce one annually and **publish it on the site** — covering: how the public benefit was advanced, how shareholder and benefit interests were balanced, the safety-research grant allocation for the year, and any failures against the commitments below. This is the public record that replaces a Form 990.
- **Donation commitment, in writing.** A fixed percentage of net consulting revenue (placeholder: **5%**, to be finalized) is committed annually to independent AI safety and alignment research. The commitment is named in the charter, executed via grants from RAIN to recipient orgs, and reported in the annual benefit report. Recipients are vetted yearly.
- **Tax treatment.** Standard for-profit C-corp / PBC tax treatment. Donations to recipient orgs are deductible to RAIN as charitable contributions (subject to corporate limits). Clients do *not* receive tax deductions for fees paid to RAIN — they pay for consulting services, full stop.
- **Optional B Corp certification later.** B Corp is third-party certification (B Lab) that complements PBC status with audited evidence of social/environmental performance. Worth pursuing once RAIN has 12 months of operating history. Not required at launch.
- **Compensation philosophy, public.** Founder and (eventual) staff compensation is set against comparable consulting benchmarks. The benefit report discloses founder compensation as a feature, not as something to hide.
- **The trade, named honestly.** Founder accepts a charter that legally constrains the company (mission lock, public benefit balancing duty, annual reporting, donation commitment). In exchange, the credibility is structural rather than promotional, the studio cannot drift, and clients hiring RAIN can verify in writing what they're paying into.

**Launch path:**

1. **Now → ~30 days:** Incorporate Delaware PBC. Draft charter language (benefit purpose + donation commitment). Engage a startup-friendly attorney for incorporation and charter review (estimate: $1,500–3,500 all-in including filing fees and operating agreement).
2. **30–60 days:** Set up business banking, accounting, contract templates. First commercial engagements begin.
3. **First fiscal year close:** Publish first annual benefit report. Make first safety-research grant disbursement. Begin B Corp application if pursuing certification.
4. **Year 2+ (optional):** Add an advisory board (no fiduciary duty, but provides outside perspective). Consider 501(c)(3) sister entity if the safety-research and grantmaking work scales to where a separate non-profit makes sense — that's a future move, not a launch move.

---

## 9. Brand fundamentals

- **Name:** RAIN. Treat it as a name, not an acronym. Don't force "R-A-I-N stands for…" anywhere on the site. If we ever need to expand it for SEO or formal contexts, we can — but the site doesn't open with it.
- **Palette:** Warm cream / off-black / a single muted orange accent. Light, welcoming, professional. Already wired in the codebase.
- **Typography:** Cabinet Grotesk (display) + Satoshi (body). Already in place.
- **Imagery:** Editorial / atmospheric photography. No stock-people. No "diverse team in conference room" shots. No AI-generated images.
- **Motion:** Restrained. Reveals on scroll. One quiet carousel for the "What we read" section. No marquees, no dot-cursors, no parallax theatrics.

---

## 10. Site structure

*Deferred. Site structure follows in a separate document once §1–§9 are settled. The site is a translation of this plan; we're not designing it until the plan is right.*

---

## 11. Open questions and immediate next steps

**Open questions (for the founder):**

1. **Founder visibility.** RAIN at launch is a studio of one. Is the About page founder-forward (named, photographed, in your own voice) or studio-forward (RAIN is the subject, founder is named but not centered)?
2. **Phase-1 vertical.** "Scrutiny-heavy industries" is broad. Is there one industry where the founder has the strongest network or strongest credibility? (e.g., real estate, given the CoAgent case study.) That becomes the beachhead.
3. **Safety-research percentage.** Final number to encode in the charter. Placeholder is **5% of net consulting revenue**; needs to be high enough to be real, low enough to be sustainable in a lean year. Recommendation: confirm 5% for v1, revisit in year 2 once revenue is established.
4. **Initial recipient orgs for the safety-research grants.** A short list (2–4 orgs) gets named in the first annual benefit report. Candidate set: MIRI, ARC, Redwood Research, AI Safety Institute ecosystem, AI Alignment Forum infrastructure. Founder selects.
5. **Geography.** Remote-first? US-only? International? Affects contract structure and which regulations we'll need to engineer for.
6. **B Corp certification — pursue or defer?** Recommendation: defer to year 2 (need operating history for the assessment anyway). PBC charter alone is enough at launch.

**Immediate next steps (to incorporate and operate):**

1. **Engage a startup-friendly attorney.** Confirm Delaware PBC fit, draft charter language (public benefit purpose + donation commitment clause), prepare incorporation docs. Estimate: $1,500–3,500 all-in including filing fees.
2. **File Delaware Certificate of Incorporation as a PBC.** Standard filing with the public benefit purpose included. Filing fee: ~$200 + franchise tax.
3. **Draft and adopt bylaws.** Single-director provisions, founder as sole stockholder/CEO/director, donation-commitment language consistent with charter.
4. **Register foreign entity in operating state(s).** If founder operates outside Delaware, register as foreign entity where business is actually conducted. Filing fees vary.
5. **Set up business banking, accounting, EIN.** Standard for-profit setup. Choose accounting software with non-profit-grant tracking capability for the safety-research disbursements.
6. **Draft master services agreement and SOW templates.** Lawyer review on the first one; reuse from there.
7. **Schedule first benefit report cadence.** Publish at end of first fiscal year, regardless of revenue level — the report itself is the credibility, even at $0 the first year.

*(Acronym for RAIN: deferred — RAIN is RAIN for now, expansion can come later.)*

---

*End of v0.1. Mark this up. Strike anything that's wrong. Add anything that's missing. The site doesn't move until this document is right.*
