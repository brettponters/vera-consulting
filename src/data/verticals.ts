/**
 * Vertical landing pages for the homepage marquee.
 * Each entry powers a programmatic /for/[slug] page and the
 * marquee link to it. Treat the slug as immutable once shipped
 * (it's in the URL and the sitemap).
 *
 * Content goals per vertical:
 * - H1 targets a real high-intent SEO query ("AI for X consultants")
 * - Pain statement names what eats their week
 * - 6 workflow bullets are vertical-specific examples
 * - FAQ answers the top three buying questions
 *
 * Voice rules: no em-dashes, no AI slop, short direct sentences.
 */

export interface Vertical {
  slug: string;
  marqueeLabel: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  painPoints: string[];
  workflows: { title: string; body: string }[];
  faq: { q: string; a: string }[];
}

export const VERTICALS: Vertical[] = [
  {
    slug: "executive-coaches",
    marqueeLabel: "Executive coaches",
    h1: "AI Consulting for Executive Coaches.",
    metaTitle: "AI Consulting for Executive Coaches | VERA",
    metaDescription:
      "AI coaching for executive coaches who want to scale their practice without losing the depth of their work. Session prep, follow-ups, content, and IP capture.",
    intro:
      "Your edge is the quality of the room you create. AI is the quiet operator that handles the prep, the recap, the follow-up, and the content engine around it, so your hours stay where the value is.",
    painPoints: [
      "Session prep eats the morning you could spend with the next client",
      "Recaps and accountability lists pile up after every block",
      "Marketing and thought leadership keep getting pushed to next week",
      "Client IP and frameworks live in your head, not in a system",
    ],
    workflows: [
      {
        title: "Pre-session briefs",
        body: "Last session, current goals, themes to watch. Ready before your coffee.",
      },
      {
        title: "Live session capture",
        body: "Transcripts to themes, commitments, and a recap your client actually reads.",
      },
      {
        title: "Accountability sequences",
        body: "Mid-week check-ins in your tone. The follow-through that used to slip through.",
      },
      {
        title: "Thought leadership engine",
        body: "Your frameworks, in your voice, drafted into LinkedIn, newsletters, and keynotes.",
      },
      {
        title: "Custom client playbooks",
        body: "Your methodology turned into a per-client playbook you can run at scale.",
      },
      {
        title: "Discovery call prep",
        body: "Prospect research, qualification scoring, and the questions that close.",
      },
    ],
    faq: [
      {
        q: "Will AI replace the coaching itself?",
        a: "No. The work in the room is yours. AI handles the work outside the room so you can be all in during sessions.",
      },
      {
        q: "Does it learn my voice?",
        a: "Yes. We train a voice model on your past work so drafts read like you, not like AI. You edit on the margin instead of writing from scratch.",
      },
      {
        q: "What does an engagement look like?",
        a: "Weekly 1:1 coaching on your real clients and your real content. We build workflows together, not lectures. You leave running AI yourself.",
      },
    ],
  },
  {
    slug: "leadership-coaches",
    marqueeLabel: "Leadership coaches",
    h1: "AI Consulting for Leadership Coaches.",
    metaTitle: "AI Consulting for Leadership Coaches | VERA",
    metaDescription:
      "AI coaching for leadership coaches building team-level practices. Frameworks, group session prep, 360 synthesis, and content that scales.",
    intro:
      "Leadership work moves between the individual and the team. AI keeps both threads warm: per-person notes, group themes, and the frameworks you write once and use forever.",
    painPoints: [
      "360 feedback synthesis takes a week and reads like a survey report",
      "Team session prep doubles the work of an individual session",
      "Frameworks get reinvented every time because they live in scattered docs",
      "Sales calls happen between session blocks with no time to prep",
    ],
    workflows: [
      {
        title: "360 synthesis",
        body: "Interview transcripts and surveys into a single, plain-English brief.",
      },
      {
        title: "Team session prep",
        body: "Per-person notes plus team-level themes, ready in one document.",
      },
      {
        title: "Framework library",
        body: "Your IP in a queryable form. Plug into any client's context in seconds.",
      },
      {
        title: "Sponsor reporting",
        body: "Quarterly reports to HR and the sponsor in your tone.",
      },
      {
        title: "Content amplification",
        body: "Sessions, talks, and frameworks into LinkedIn, newsletter, and a course.",
      },
      {
        title: "Pitch and renewal",
        body: "Custom proposals and renewal docs built from your last twenty wins.",
      },
    ],
    faq: [
      {
        q: "Can AI handle sensitive feedback safely?",
        a: "Yes, with the right setup. We work in your tenant with zero retention so client transcripts never train a public model.",
      },
      {
        q: "How does this fit with my existing platform?",
        a: "We integrate with Coach Accountable, BetterUp, or whatever you run. We don't ask you to switch tools.",
      },
      {
        q: "What is the typical engagement cadence?",
        a: "Weekly working sessions over 8 to 12 weeks. By week three you have a real workflow shipping. By week eight your team or your VA can run it.",
      },
    ],
  },
  {
    slug: "life-coaches",
    marqueeLabel: "Life coaches",
    h1: "AI Consulting for Life Coaches.",
    metaTitle: "AI Consulting for Life Coaches | VERA",
    metaDescription:
      "AI tools for life coaches who want to spend more time coaching and less time on admin, content, and the work between sessions.",
    intro:
      "The hardest part of running a coaching practice is everything that isn't coaching. AI handles the rest. Notes, follow-up, content, and the work that keeps your week from running you.",
    painPoints: [
      "Session notes and follow-up eat the time you should be with clients",
      "Content for your audience never gets shipped consistently",
      "Onboarding new clients is the same checklist done by hand every time",
      "Sales calls happen in the cracks with no prep time",
    ],
    workflows: [
      {
        title: "Session notes and recaps",
        body: "Transcripts to themes, breakthroughs, and a recap your client will actually read.",
      },
      {
        title: "Weekly check-ins",
        body: "Mid-week accountability messages in your voice. Hot replies route to you.",
      },
      {
        title: "Content engine",
        body: "Your client wins and frameworks into Instagram, LinkedIn, and your newsletter.",
      },
      {
        title: "Onboarding flow",
        body: "Discovery, intake, contract, and welcome handled before the first session.",
      },
      {
        title: "Program design",
        body: "Your methodology into a structured program with frameworks and homework.",
      },
      {
        title: "Sales follow-up",
        body: "Discovery call recap, custom proposal, and the cadence that closes.",
      },
    ],
    faq: [
      {
        q: "I'm not technical. Will this work for me?",
        a: "Yes. The coaching engagement is built around the tools you already use. We meet you where you are.",
      },
      {
        q: "How is this different from hiring a VA?",
        a: "A VA works on what you assign. AI handles the work that you haven't gotten around to assigning yet. Together they are very strong. Alone, AI is faster and cheaper to start.",
      },
      {
        q: "What does this cost?",
        a: "Coaching engagements start at four-figure monthly retainers and scale with the depth of integration you want. We scope it on the first call.",
      },
    ],
  },
  {
    slug: "business-coaches",
    marqueeLabel: "Business coaches",
    h1: "AI Consulting for Business Coaches.",
    metaTitle: "AI Consulting for Business Coaches | VERA",
    metaDescription:
      "AI workflows for business coaches working with founders and operators. Discovery prep, financial reviews, accountability, and IP scaling.",
    intro:
      "Your clients are operators. You move fast between strategy, finance, and team. AI keeps every thread current so you can stay in the work that pays.",
    painPoints: [
      "Reviewing client financials before every session takes an hour you do not have",
      "Action items between sessions get lost across email, text, and Slack",
      "Sales decks and proposals look the same as everyone else's",
      "Group programs and masterminds need more content than you can ship",
    ],
    workflows: [
      {
        title: "P&L and KPI digests",
        body: "Client books and dashboards into a one-page brief before every session.",
      },
      {
        title: "Action item tracker",
        body: "What got committed, what got done, what slipped. Across every client.",
      },
      {
        title: "Custom playbooks",
        body: "Your operating frameworks into per-client playbooks that update with their data.",
      },
      {
        title: "Mastermind content",
        body: "Hot seats and group calls into shareable recaps and lesson docs.",
      },
      {
        title: "Sales engine",
        body: "Discovery prep, custom proposals, and follow-up that closes warm leads.",
      },
      {
        title: "Course and IP scaling",
        body: "Your methodology into a structured program or course you can sell asynchronously.",
      },
    ],
    faq: [
      {
        q: "Will this work with QuickBooks or Xero?",
        a: "Yes. We pull from QuickBooks, Xero, and most accounting platforms. We never touch the books we just read them.",
      },
      {
        q: "How do you handle client confidentiality?",
        a: "Each engagement runs under NDA. Client data sits in your tenant or a dedicated isolated environment and does not train third-party models.",
      },
      {
        q: "Can this scale to a team of coaches?",
        a: "Yes. The playbooks and frameworks we build with you become the operating system for your team. Newer coaches ramp faster on it.",
      },
    ],
  },
  {
    slug: "sales-coaches",
    marqueeLabel: "Sales coaches",
    h1: "AI Consulting for Sales Coaches.",
    metaTitle: "AI Consulting for Sales Coaches | VERA",
    metaDescription:
      "AI tools for sales coaches. Call analysis, objection libraries, deal review prep, and the content engine that makes you visible.",
    intro:
      "You teach reps to find the win. AI hears every call you do not, surfaces the patterns you would have caught live, and turns your IP into a content machine.",
    painPoints: [
      "Reviewing call recordings is where the gold is, and nobody has the hours",
      "Objection libraries get out of date the second you stop maintaining them",
      "Deal review prep takes longer than the review itself",
      "Sales coaching content lives in your head, not in your pipeline",
    ],
    workflows: [
      {
        title: "Call analysis",
        body: "Gong, Chorus, or raw recordings into a coach-ready brief per rep.",
      },
      {
        title: "Objection libraries",
        body: "Live calls into an updated objection-handling doc your team can search.",
      },
      {
        title: "Deal review prep",
        body: "Pipeline data into the questions you would ask, ready before the meeting.",
      },
      {
        title: "Personalized coaching plans",
        body: "Per-rep development plans built from their actual call patterns.",
      },
      {
        title: "Content amplification",
        body: "Your talk tracks into LinkedIn carousels, newsletters, and a flagship course.",
      },
      {
        title: "Renewal and expansion",
        body: "Custom proposals built from the wins you got their team last quarter.",
      },
    ],
    faq: [
      {
        q: "Do you integrate with Gong and Chorus?",
        a: "Yes. We pull from both, plus Salesforce, HubSpot, and any CRM you use. We don't replace the platform, we amplify it.",
      },
      {
        q: "Can a single rep use this, or only the coach?",
        a: "Both. Reps get personal AI coaching after calls. You get a fleet view across the team. Same workflows, different surfaces.",
      },
      {
        q: "What is the ROI?",
        a: "Most engagements pay back in the first quarter through increased win rate or recovered prep time. We size it on the discovery call.",
      },
    ],
  },
  {
    slug: "marketing-consultants",
    marqueeLabel: "Marketing consultants",
    h1: "AI Consulting for Marketing Consultants.",
    metaTitle: "AI Consulting for Marketing Consultants | VERA",
    metaDescription:
      "AI tools for independent marketing consultants. Strategy decks, content production, reporting, and the systems that let you take more clients without hiring.",
    intro:
      "Independent marketing is leverage work. Your edge is the strategy. AI handles the production, the reporting, and the rinse-and-repeat that used to need an account manager.",
    painPoints: [
      "Strategy decks take days to build and look the same every time",
      "Content production is the bottleneck on every engagement",
      "Monthly reporting eats the last week of every month",
      "Onboarding a new client is the same set of docs done by hand",
    ],
    workflows: [
      {
        title: "Strategy decks",
        body: "Client brief into a custom deck with your frameworks and visual system.",
      },
      {
        title: "Content engine",
        body: "Your strategy into a 90-day content calendar, written in the brand voice.",
      },
      {
        title: "Reporting automation",
        body: "Google Analytics, HubSpot, paid ads into a monthly client report drafted by AI.",
      },
      {
        title: "Onboarding flow",
        body: "Brand audit, brief intake, and kickoff deck handled in a single workflow.",
      },
      {
        title: "Custom playbooks",
        body: "Your methodology into per-client playbooks that update with their data.",
      },
      {
        title: "Pitch and proposal",
        body: "Custom proposals from the brief, your standards, and your last twenty wins.",
      },
    ],
    faq: [
      {
        q: "Does this work with HubSpot, ConvertKit, or Beehiiv?",
        a: "Yes. We integrate with most marketing platforms. We don't ask you to migrate tools.",
      },
      {
        q: "Can my clients tell that AI wrote it?",
        a: "Not if we train a voice model on the brand. Your edits land in the brand voice, not in AI voice.",
      },
      {
        q: "How many clients can I take with this?",
        a: "Most consultants take an extra 2 to 4 retainers without adding hours. The leverage is real.",
      },
    ],
  },
  {
    slug: "seo-consultants",
    marqueeLabel: "SEO consultants",
    h1: "AI Consulting for SEO Consultants.",
    metaTitle: "AI Consulting for SEO Consultants | VERA",
    metaDescription:
      "AI workflows for independent SEO consultants. Keyword research, content briefs, audits, and the reporting layer that wins renewals.",
    intro:
      "SEO is a research-heavy practice. AI does the digging, structures the briefs, and drafts the reports. You stay focused on the strategy that closes the deal.",
    painPoints: [
      "Keyword research at scale is where the wins are, but the time is brutal",
      "Content briefs eat the day, and the writers still miss the intent",
      "Audits take a week to produce and a day to read",
      "Monthly reporting reads like a vendor receipt, not a client win",
    ],
    workflows: [
      {
        title: "Keyword research engine",
        body: "Seed list to scored opportunities. SERP intent, difficulty, and the right page type per query.",
      },
      {
        title: "Programmatic content briefs",
        body: "Per-query briefs with H tags, internal links, and the exact gap to close.",
      },
      {
        title: "Audit automation",
        body: "Screaming Frog, Ahrefs, Search Console into a client-ready audit report.",
      },
      {
        title: "AI-search readiness",
        body: "Structured data, llms.txt, and the on-page moves that get cited in AI answers.",
      },
      {
        title: "Reporting that wins renewals",
        body: "GSC and Ahrefs data into a monthly story your client's CEO will read.",
      },
      {
        title: "Custom playbooks",
        body: "Your operating system as a per-client playbook that scales with the engagement.",
      },
    ],
    faq: [
      {
        q: "Will AI replace SEO consultants?",
        a: "No. AI changes how SEO gets done. Strategy and judgment are still yours. The grind is what gets automated.",
      },
      {
        q: "Does this work with Ahrefs, Semrush, and GSC?",
        a: "Yes. We integrate with all three, plus Search Console, Looker Studio, and most BI tools you already use.",
      },
      {
        q: "How does this help with AI-search visibility?",
        a: "We install the structured data, FAQ schema, llms.txt, and on-page moves that get cited in ChatGPT, Perplexity, and Google AI Overviews. Same engagement, broader reach.",
      },
    ],
  },
  {
    slug: "social-media-managers",
    marqueeLabel: "Social media managers",
    h1: "AI Consulting for Social Media Managers.",
    metaTitle: "AI Consulting for Social Media Managers | VERA",
    metaDescription:
      "AI tools for social media managers. Content production in brand voice, scheduling, reporting, and the workflows that let you handle more clients.",
    intro:
      "Social media is volume work in a voice that has to be exactly right. AI carries the volume. The voice stays yours and the strategy stays in your control.",
    painPoints: [
      "Writing in five client voices a day burns you out by Thursday",
      "Visual production is bottlenecked by your design hand",
      "Community management takes the hours you needed for strategy",
      "Reporting reads like a screenshot dump, not a client win",
    ],
    workflows: [
      {
        title: "Multi-brand content engine",
        body: "Per-client voice models. Captions, hooks, and stories in each brand's exact tone.",
      },
      {
        title: "Visual production",
        body: "Templates plus AI image work into scroll-stopping carousels in your client's visual system.",
      },
      {
        title: "Community management",
        body: "DMs, comments, and lead replies drafted in voice. You approve, AI sends.",
      },
      {
        title: "Reporting that wins renewals",
        body: "Native analytics into a monthly client report that reads like a story.",
      },
      {
        title: "Sales engine",
        body: "Discovery calls into custom proposals with the client's own brand all over them.",
      },
      {
        title: "Content calendar automation",
        body: "Strategy into a 30-day calendar, scheduled, with all assets attached.",
      },
    ],
    faq: [
      {
        q: "Will my clients catch that AI is writing?",
        a: "Not if we train each brand voice properly. Your edits land in the brand voice, not AI voice.",
      },
      {
        q: "Does this work with Later, Hootsuite, or Buffer?",
        a: "Yes. We integrate with most schedulers. We don't ask you to switch tools.",
      },
      {
        q: "Can I really manage more clients?",
        a: "Most operators add 2 to 5 retainers with the same hours after the engagement. The leverage is significant.",
      },
    ],
  },
  {
    slug: "brand-consultants",
    marqueeLabel: "Brand consultants",
    h1: "AI Consulting for Brand Consultants.",
    metaTitle: "AI Consulting for Brand Consultants | VERA",
    metaDescription:
      "AI tools for brand consultants and strategists. Research, brand voice systems, naming, and the deliverables that justify the fee.",
    intro:
      "Brand is research, articulation, and a system the client can run after you leave. AI handles the research depth and the production while you keep the strategic call.",
    painPoints: [
      "Brand research takes two weeks before the first slide is built",
      "Naming, taglines, and copy iterations eat the back half of every engagement",
      "Brand guidelines docs never get used by the client's team",
      "Voice and tone drift the second you hand off",
    ],
    workflows: [
      {
        title: "Research synthesis",
        body: "Competitor scans, customer interviews, and category research into a strategic brief.",
      },
      {
        title: "Naming and tagline engine",
        body: "Brief to 100 candidates to a defensible shortlist with the rationale built in.",
      },
      {
        title: "Brand voice system",
        body: "Trained voice model from the founder's own work. Client team writes in voice from day one.",
      },
      {
        title: "Living brand guidelines",
        body: "Notion or Frontify deliverable that updates as the brand evolves.",
      },
      {
        title: "Visual identity briefs",
        body: "Strategy to a brief your design partner can execute without a round of revisions.",
      },
      {
        title: "Pitch and renewal",
        body: "Custom proposals built from the brief and your last twenty wins.",
      },
    ],
    faq: [
      {
        q: "Will AI replace brand strategy?",
        a: "No. The strategy and the judgment are yours. AI handles the production depth that used to take a team.",
      },
      {
        q: "What about the client's voice and IP?",
        a: "We train voice models per client and host them in environments where data does not train public models.",
      },
      {
        q: "Can this work with Figma and Notion?",
        a: "Yes. The deliverables ship to Figma, Notion, or wherever your client's team lives.",
      },
    ],
  },
  {
    slug: "strategy-consultants",
    marqueeLabel: "Strategy consultants",
    h1: "AI Consulting for Strategy Consultants.",
    metaTitle: "AI Consulting for Strategy Consultants | VERA",
    metaDescription:
      "AI workflows for independent strategy consultants. Market research, financial modeling, deck building, and the systems that scale a one-person practice.",
    intro:
      "Strategy is research, framing, and recommendation. AI compresses the research timeline and drafts the deliverable. You keep the strategic call, and your week.",
    painPoints: [
      "Market research and competitor scans eat two weeks of every engagement",
      "Financial modeling is the same template done by hand every time",
      "Deck production is the slowest part of the work",
      "Sales decks and proposals look the same as everyone else's",
    ],
    workflows: [
      {
        title: "Research synthesis",
        body: "Industry data, competitor moves, and customer interviews into a strategic brief.",
      },
      {
        title: "Financial modeling",
        body: "Your standard template, populated from data, with sensitivity tables and assumptions you can defend.",
      },
      {
        title: "Recommendation decks",
        body: "Brief to a clean draft deck with your structure and your visual language.",
      },
      {
        title: "Custom playbooks",
        body: "Your methodology into a per-engagement playbook the client can run after you leave.",
      },
      {
        title: "Proposal engine",
        body: "Custom proposals from the brief, your standards, and your last twenty wins.",
      },
      {
        title: "Sales follow-up",
        body: "Discovery, qualification scoring, and the cadence that closes warm leads.",
      },
    ],
    faq: [
      {
        q: "Is this for boutique firms or solo strategy consultants?",
        a: "Both. The leverage is biggest for solo and small-team practices where every hour matters.",
      },
      {
        q: "How does this handle confidential client data?",
        a: "Engagements run under NDA. We work in your tenant or an isolated environment where data does not train public models.",
      },
      {
        q: "Will AI commoditize strategy work?",
        a: "It will compete on the work that is already commoditized. The strategic call is still scarce. We help you stay on the scarce side.",
      },
    ],
  },
  {
    slug: "content-creators",
    marqueeLabel: "Content creators",
    h1: "AI Consulting for Content Creators.",
    metaTitle: "AI Consulting for Content Creators | VERA",
    metaDescription:
      "AI tools for solo creators running newsletters, podcasts, and content businesses. Voice systems, production engines, and the workflows that let you scale.",
    intro:
      "You are the brand. Your voice is the asset. AI carries the volume of production without diluting the voice that built your audience.",
    painPoints: [
      "Newsletter and podcast production eats every week",
      "Sponsorship prep and reporting takes hours that should go to content",
      "Idea capture is messy across Notion, Apple Notes, and voice memos",
      "Repurposing into clips, threads, and shorts never happens consistently",
    ],
    workflows: [
      {
        title: "Voice-trained drafting",
        body: "Trained voice model from your past work. Drafts that read like you on the first pass.",
      },
      {
        title: "Idea engine",
        body: "Voice memos, notes, and reads into a queryable idea bank ready when you sit down.",
      },
      {
        title: "Multi-channel repurposing",
        body: "One long piece into newsletter, thread, podcast notes, and clip prompts in your tone.",
      },
      {
        title: "Sponsorship workflow",
        body: "Brief intake, asset pull, draft scripts, and reporting in one pipeline.",
      },
      {
        title: "Audience comms",
        body: "Reply drafts, DM triage, and welcome sequences that sound like you.",
      },
      {
        title: "Product launches",
        body: "Course, book, or product launch sequences in your voice across email and social.",
      },
    ],
    faq: [
      {
        q: "Will AI flatten my voice?",
        a: "Only if you skip the voice training step. Done right, the drafts hold your cadence and your opinions, and you edit on the margin.",
      },
      {
        q: "Can sponsors tell?",
        a: "No, when the brand voice is trained well and you stay in the editorial seat.",
      },
      {
        q: "What does this cost?",
        a: "Engagements start at four-figure monthly retainers and scale with depth. We scope on the first call.",
      },
    ],
  },
  {
    slug: "course-creators",
    marqueeLabel: "Course creators",
    h1: "AI Consulting for Course Creators.",
    metaTitle: "AI Consulting for Course Creators | VERA",
    metaDescription:
      "AI workflows for course creators and online educators. Curriculum design, student support, launch sequences, and the engine that runs your business.",
    intro:
      "Selling knowledge at scale is a content engine plus a student support engine plus a launch engine. AI runs all three so the business does not depend on you being everywhere.",
    painPoints: [
      "Curriculum design takes months and lives in your head",
      "Student questions and support drown the founder",
      "Launches are intense one-week sprints that eat the next month",
      "Repurposing course material into new offers never happens",
    ],
    workflows: [
      {
        title: "Curriculum design engine",
        body: "Your methodology into modules, lessons, assessments, and homework. Editable, not generated to discard.",
      },
      {
        title: "Student support layer",
        body: "FAQ knowledge base trained on your course. Most questions answered before you see them.",
      },
      {
        title: "Launch sequences",
        body: "Email, social, and sales pages in your voice for every launch window.",
      },
      {
        title: "Sales engine",
        body: "Discovery, application review, and enrollment calls handled by a system, not by you.",
      },
      {
        title: "Content repurposing",
        body: "Course modules into a book, podcast, and free funnel without rewriting from scratch.",
      },
      {
        title: "Cohort operations",
        body: "Live cohort prep, session notes, and accountability check-ins handled in workflow.",
      },
    ],
    faq: [
      {
        q: "Does this work with Kajabi, Teachable, or Thinkific?",
        a: "Yes. We integrate with most course platforms. The workflow runs around your existing setup.",
      },
      {
        q: "Can AI handle student support without losing the personal touch?",
        a: "Yes, if it is trained on your real answers. We set up routing so the personal questions still come to you and the FAQ load disappears.",
      },
      {
        q: "Will my students feel like they are getting AI?",
        a: "No, if the system is set up right. They feel like they have access to a course that responds faster than the founder ever could alone.",
      },
    ],
  },
  {
    slug: "independent-agencies",
    marqueeLabel: "Independent agencies",
    h1: "AI Consulting for Independent Agencies.",
    metaTitle: "AI Consulting for Independent Agencies | VERA",
    metaDescription:
      "AI workflows for small independent agencies. Production, reporting, client communications, and the operating system that lets you grow without doubling headcount.",
    intro:
      "Small agencies live or die by the gap between what you can deliver and what you can sell. AI closes the gap. The same team takes on the next two clients without breaking.",
    painPoints: [
      "Production capacity is the cap on how many clients you take",
      "Reporting eats the back half of every month",
      "Onboarding new clients takes weeks of meetings and slack threads",
      "Pitch and proposal work falls on the founder",
    ],
    workflows: [
      {
        title: "Production engine",
        body: "Briefs into first-draft assets in brand voice. The team edits and ships.",
      },
      {
        title: "Reporting automation",
        body: "GA, HubSpot, ads platforms into a monthly client report drafted by AI.",
      },
      {
        title: "Onboarding flow",
        body: "Brand audit, brief intake, asset pull, and kickoff deck in one workflow.",
      },
      {
        title: "Pitch and proposal engine",
        body: "Custom proposals from the brief and your last twenty wins. Drafted before the discovery call cools.",
      },
      {
        title: "Client comms",
        body: "Status updates, weekly recaps, and escalations in workflow.",
      },
      {
        title: "Internal SOPs",
        body: "Your operating system written down once, queryable forever.",
      },
    ],
    faq: [
      {
        q: "Does this require a tech-heavy team?",
        a: "No. The engagement is built to be run by the team you have. We are coaching you, not handing off a system.",
      },
      {
        q: "How does this change the team size?",
        a: "Most agencies add 30 to 60 percent capacity without hiring. Some choose to grow instead. Either choice is yours.",
      },
      {
        q: "What about client confidentiality?",
        a: "We work in your tenant under NDA. Client data does not train third-party models.",
      },
    ],
  },
  {
    slug: "fractional-executives",
    marqueeLabel: "Fractional executives",
    h1: "AI Consulting for Fractional Executives.",
    metaTitle: "AI Consulting for Fractional CMOs, CFOs & COOs | VERA",
    metaDescription:
      "AI workflows for fractional CMOs, CFOs, and COOs. Cross-client briefs, dashboards, board prep, and the systems that let you serve more companies at once.",
    intro:
      "Fractional work is about leverage. AI keeps four companies' contexts current, drafts every board pack, and runs the operating cadence so you can stay strategic.",
    painPoints: [
      "Context switching across four companies eats the morning",
      "Board pack prep is the same template done by hand every quarter",
      "Cross-company patterns are hard to see when each lives in its own slack",
      "Every new client needs the same onboarding done from scratch",
    ],
    workflows: [
      {
        title: "Cross-client brief engine",
        body: "Per-company morning brief from email, slack, and dashboards. Before your first call.",
      },
      {
        title: "Board pack automation",
        body: "Quarterly metrics, narrative, and the appendix drafted from the company's own data.",
      },
      {
        title: "Operating cadence",
        body: "Weekly leadership rituals running on autopilot. You join when the question matters.",
      },
      {
        title: "Pattern recognition",
        body: "What is working across your portfolio. The questions you would not have asked yourself.",
      },
      {
        title: "Sales and renewal",
        body: "New engagement proposals built from your standards and your last twenty wins.",
      },
      {
        title: "Personal IP",
        body: "Your operating system written down once, available to every company you serve.",
      },
    ],
    faq: [
      {
        q: "Can this scale to 4 or 5 fractional engagements?",
        a: "Yes. Most fractionals can add 1 to 2 retainers without burning out after the engagement.",
      },
      {
        q: "Does this work across QuickBooks, Stripe, HubSpot, and Salesforce?",
        a: "Yes. We integrate across most operating stacks. The brief travels with you, the data stays with each company.",
      },
      {
        q: "What does an engagement look like?",
        a: "8 to 12 weeks of weekly coaching while we build the workflow on your real clients. By the end, you run it.",
      },
    ],
  },
  {
    slug: "speaking-coaches",
    marqueeLabel: "Speaking coaches",
    h1: "AI Consulting for Speaking Coaches.",
    metaTitle: "AI Consulting for Speaking Coaches | VERA",
    metaDescription:
      "AI tools for speaking coaches and keynote speakers. Talk development, audience research, sales workflows, and the content engine that fills the calendar.",
    intro:
      "Great speakers run two businesses at once: the craft and the sales pipeline that fills the calendar. AI runs the sales side and supports the craft side so you can focus on the stage.",
    painPoints: [
      "Audience research before every keynote eats the prep window",
      "Talk development is rebuilt from scratch every time",
      "Bureaus and inbound inquiries pile up with no time to qualify",
      "Content for the audience never gets shipped consistently",
    ],
    workflows: [
      {
        title: "Audience research",
        body: "Per-event brief on the audience, the host, and the moment. Ready before the prep call.",
      },
      {
        title: "Talk development",
        body: "Your IP library to a custom talk outline. Stories, frameworks, and the through-line.",
      },
      {
        title: "Bureau and inbound triage",
        body: "Inquiries scored, qualified, and routed. Custom proposals drafted before they cool.",
      },
      {
        title: "Content engine",
        body: "Talks into clips, threads, newsletters, and a flagship course over time.",
      },
      {
        title: "Client follow-up",
        body: "Thank-you, deliverables, and the next-step pitch in your voice within 24 hours of the keynote.",
      },
      {
        title: "Book and product",
        body: "Talk material into book chapters, courses, and a coaching offer that scales.",
      },
    ],
    faq: [
      {
        q: "Will AI write my keynote for me?",
        a: "No. The craft is yours. AI handles the prep, the research, and the post-event sales work so you have time for craft.",
      },
      {
        q: "Does this fit with bureaus?",
        a: "Yes. We integrate with bureau workflows. The system gets the inquiry into a ready-to-send custom proposal before your competition has read the email.",
      },
      {
        q: "What does this cost?",
        a: "Engagements start at four-figure monthly retainers and scale with depth. We scope on the first call.",
      },
    ],
  },
];

export function getVerticalBySlug(slug: string): Vertical | undefined {
  return VERTICALS.find((v) => v.slug === slug);
}

export function getAllSlugs(): string[] {
  return VERTICALS.map((v) => v.slug);
}
