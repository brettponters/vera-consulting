// Site-wide copy — single source of truth for all text content.
// Import BRAND_NAME from brand.ts where typographically natural.

export const HERO = {
  name: "RAIN",
  // The acronym, spelled out once. Each word animates in sequence on load.
  acronym: [
    { letter: "R", word: "Responsible" },
    { letter: "A", word: "Artificial" },
    { letter: "I", word: "Intelligence" },
    { letter: "N", word: "Network" },
  ],
  // Display headline — concrete, loss-framed first sentence (was the Premise).
  headlineLines: [
    "The choices companies make about AI in the next eighteen months",
    "will compound for the rest of the decade.",
  ],
  body:
    "Most are being made under pressure, with information shaped by the people selling the technology, and without a clear read on how these systems fail in production.",
  // Micro-commitment, not a meeting ask. The CoAgent case study earns trust before /contact does.
  ctaLabel: "Read the CoAgent case study",
  ctaHref: "/work/coagent",
  // Slow marquee at the bottom edge of the hero. Plain, factual phrases.
  marquee: [
    "Research-grounded",
    "Public Benefit Corporation",
    "5% of net revenue \u2192 AI safety research",
    "Built in the open",
    "Reading the actual papers",
    "Local-first by default",
  ],
} as const;

export const PREMISE = {
  paragraphs: [
    "The choices companies make about AI in the next eighteen months will compound for the rest of the decade. Most are being made under pressure, with information shaped by the people selling the technology, and without a clear read on how these systems fail in production.",
  ],
} as const;

export const ENGAGEMENTS = {
  heading: "What we do",
  subhead:
    "Three ways we work with companies. We size each engagement to what the work actually needs.",
  items: [
    {
      id: "strategy",
      name: "Strategy.",
      body: "A short, focused engagement that pressure-tests an AI decision against the actual research \u2014 agent design, alignment, security, operational risk. The deliverable is a written assessment an executive can act on without becoming an expert, and it often saves clients from spending millions on the wrong thing.",
    },
    {
      id: "build",
      name: "Build.",
      body: "We design and ship custom AI systems \u2014 agents, internal tools, decision-support, document-handling pipelines, whatever the work needs. We write the code. We integrate it. We test it adversarially. We hand it over with documentation a competent in-house team can maintain.",
    },
    {
      id: "steward",
      name: "Steward.",
      body: "Ongoing partnership for clients who want us watching their AI systems over time. Quarterly reviews, incident response, retraining, regulatory adaptation, and the unsexy work of keeping production AI healthy.",
    },
  ],
} as const;

export const HOW_WE_THINK = {
  heading: "How we think about this work",
  opening: [
    "You have to understand the fundamentals to understand the risks and the rewards. Most teams adopting AI today are moving fast on tools they don\u2019t fully understand \u2014 and that\u2019s the gap RAIN is built to close.",
    "The depth that catches the risks is the same depth that captures the rewards. Reading the research isn\u2019t friction on innovation \u2014 it\u2019s what makes innovation real.",
  ],
} as const;

// Numbered, dated, public technical notes. Halo + unity + pratfall surface.
// Reference patterns: Oxide RFDs, Fly.io blog. The artifact corpus is the move.
export const FIELD_NOTES = {
  heading: "Field Notes",
  description:
    "Short technical notes from the studio on questions worth thinking carefully about. Numbered, dated, public.",
  notes: [
    {
      id: "rain-001",
      number: "RAIN-001",
      date: "April 2026",
      title: "On where to draw the autonomy line",
      lede: "Most agent failures aren\u2019t failures of intelligence \u2014 they\u2019re failures of classification. The line between what an agent runs on its own and what it queues for human review should be drawn at consequence, not complexity.",
      href: "/work/coagent",
    },
  ],
  ctaLabel: "All Field Notes \u2192",
  ctaHref: "/notes",
} as const;

// Two-sided argument. Refutational messages out-persuade one-sided ones with sophisticated audiences
// (Allen 1991 meta-analysis; O'Keefe 1999). Naming refusals earns disproportionate trust.
export const WHAT_WE_DONT_DO = {
  heading: "What we don\u2019t do",
  items: [
    "Roadmap decks. The deliverable is a written assessment with citations, not a slide carousel.",
    "Engagements where the honest answer is don\u2019t. If the research says the work shouldn\u2019t happen, the engagement ends there.",
    "Subcontracted technical work. The person you talk to is the person writing the code.",
  ],
} as const;

export const FOOTER = {
  colophon:
    "RAIN is a Public Benefit Corporation. 5% of net consulting revenue is committed to independent AI safety research. This site has no analytics and no cookies. Set in Cabinet Grotesk and Satoshi.",
  links: [
    { label: "Work", href: "/work/coagent" },
    { label: "Reading", href: "/reading" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  signature: "\u2014 Brett Ponters, founder",
} as const;

export const COAGENT_PREVIEW = {
  heading: "CoAgent \u2014 what it looks like when we build",
  paragraph1:
    "CoAgent is a local-first autonomous AI agent we designed and built end-to-end. It runs entirely on the user\u2019s own machine, integrates with their tools through open standards (MCP), keeps data local, and queues high-stakes decisions for human approval. We built it to demonstrate every value on this page in working code: powerful (autonomous, multi-tool), responsible (human-in-the-loop where it matters), transparent (architecture and memory readable to anyone who looks), and secure by design (your data never leaves your machine).",
  ctaLabel: "Read the full case study \u2192",
  ctaHref: "/work/coagent",
} as const;

export const READING_PREVIEW = {
  heading: "Research Backed",
  paragraph1:
    "The recommendations we make come from somewhere. Below is a small sample of the papers and books our practice is built on. The full list lives at our reading page, updated regularly.",
  ctaLabel: "Browse the full list \u2192",
  ctaHref: "/reading",
  // Curated to land with business readers (productivity, governance, deployment) while keeping one technical anchor
  papers: [
    { id: "p1", title: "Generative AI at Work", authors: "Brynjolfsson, E. et al. \u00b7 2023", href: "https://arxiv.org/abs/2304.11771" },
    { id: "p2", title: "GPTs are GPTs: An Early Look at the Labor Market Impact Potential of Large Language Models", authors: "Eloundou, T. et al. \u00b7 2023", href: "https://arxiv.org/abs/2303.10130" },
    { id: "p3", title: "Navigating the Jagged Technological Frontier: Field Experimental Evidence of the Effects of Artificial Intelligence on Knowledge Worker Productivity and Quality", authors: "Dell\u2019Acqua, F. et al. \u00b7 2023", href: "https://www.hbs.edu/ris/Publication%20Files/24-013_d9b45b68-9e74-42d6-a1c6-c72fb70c7282.pdf" },
    { id: "p4", title: "Artificial Intelligence Risk Management Framework (AI RMF 1.0)", authors: "NIST \u00b7 2023", href: "https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf" },
    { id: "p5", title: "Frontier AI Regulation: Managing Emerging Risks to Public Safety", authors: "Anderljung, M. et al. \u00b7 2023", href: "https://arxiv.org/abs/2307.03718" },
    { id: "p6", title: "Attention Is All You Need", authors: "Vaswani, A. et al. \u00b7 2017", href: "https://arxiv.org/abs/1706.03762" },
    { id: "p7", title: "Artificial Intelligence Index Report 2025", authors: "Stanford HAI \u00b7 2025", href: "https://hai.stanford.edu/ai-index/2025-ai-index-report" },
  ],
} as const;

export const STRUCTURE = {
  heading: "How we\u2019re structured",
  paragraphs: [
    "RAIN is a Public Benefit Corporation. The charter names a specific public benefit purpose \u2014 advancing the responsible development and deployment of AI \u2014 and a fixed percentage of net consulting revenue is committed in writing to independent AI safety and alignment research.",
    "What you get when you hire us is a partner whose incentives can\u2019t quietly drift: do the work well, tell the truth, and contribute, transparently, to the safety research the field still needs.",
  ],
  ctaLabel: "More on how we\u2019re structured \u2192",
  ctaHref: "/about",
} as const;

export const CONTACT_CTA = {
  heading: "Working on something serious?",
  body: "Tell us about it. We read every message ourselves and reply within two business days.",
  ctaLabel: "Start a conversation \u2192",
  ctaHref: "/contact",
} as const;

// TODO: founder to write personal bio paragraph here
export const ABOUT_PAGE = {
  studio: {
    eyebrow: "Studio",
    heading: "RAIN",
    // Holding copy — founder to replace with personal bio paragraph
    body: "Studio bio \u2014 coming. RAIN today is a studio of one.",
  },
  structure: {
    eyebrow: "Structure",
    heading: "How RAIN is structured",
    paragraphs: [
      "RAIN is incorporated as a Public Benefit Corporation (PBC) \u2014 a for-profit legal entity whose charter binds the company to a specific public benefit purpose alongside any pursuit of profit. The charter names that purpose explicitly: advancing the responsible development and deployment of AI systems through research-grounded consulting and contribution to independent AI safety and alignment research. Decisions of the company are required to balance profit with that purpose.",
      "Mission lock is real. Removing or materially weakening the benefit purpose requires a two-thirds stockholder vote \u2014 which today means the founder, but binds any future investor or acquirer. The structure is solo-ownable and capable of taking commercial engagements at market rates. It is not a non-profit. Clients do not receive tax deductions for fees paid to RAIN; they are paying for consulting services. What they get, in addition to the work, is a partner whose incentives cannot quietly drift.",
      "Each year RAIN produces an annual benefit report covering how the public benefit purpose was advanced, how shareholder and benefit interests were balanced, the safety-research grant allocation for the year, and any failures against the commitments in the charter. That report is published on this site. It is the public record of what was actually done, not what was intended.",
    ],
  },
  commitment: {
    eyebrow: "The commitment",
    heading: "Safety research, in writing",
    body: "A fixed percentage of net consulting revenue \u2014 currently 5%, reviewed annually \u2014 is committed to independent AI safety and alignment research. The commitment is named in RAIN\u2019s charter, executed via grants to recipient organisations, and reported in the annual benefit report. The recipient organisations will be named in the first annual benefit report. This is not a discretionary donation; it is an operating obligation of the studio.",
  },
  advisors: {
    eyebrow: "Advisors",
    heading: "Advisory board",
    body: "Advisors will be named here as RAIN brings them on. We are not listing names that aren\u2019t yet real.",
  },
  contact: {
    eyebrow: "Contact",
    heading: "Working on something serious?",
    body: "Tell us about it.",
    ctaLabel: "Start a conversation \u2192",
    ctaHref: "/contact",
  },
} as const;

// ── CoAgent case study page — single source of truth ──────────────────────
// Sections map 1:1 to design doc §3 order.
export const COAGENT_CASE_STUDY = {
  meta: {
    title: "CoAgent \u2014 RAIN",
    description:
      "How RAIN built CoAgent: a local-first autonomous AI agent for real estate. Architecture, autonomy design, what broke, and what it taught us.",
  },

  // §3.1 Hero
  hero: {
    eyebrow: "Case study",
    headline: "CoAgent",
    body: "A local-first autonomous AI agent for real estate \u2014 designed and built end-to-end by RAIN. Claude is the reasoning core. MCP servers are the hands. Every piece of sensitive data stays on the user\u2019s machine.",
  },

  // §3.2 What it is
  whatItIs: {
    heading: "What it is",
    paragraphs: [
      "CoAgent runs entirely on the user\u2019s own computer. It connects to email, calendar, contracts, property data, and document storage through MCP (Model Context Protocol) \u2014 an open standard that gives Claude versioned, tool-shaped access to each integration without a centralised cloud backend.",
      "Claude is the reasoning core. When something happens \u2014 an email arrives, a scheduled heartbeat fires, or the user sends a message \u2014 Claude reads the relevant context from memory, decides what to do, and either acts or queues the decision for human approval. Everything it learns is written back as plain markdown files, so the memory is readable, auditable, and portable.",
      "It is currently deployed in real estate, handling email triage, showing coordination, follow-up, listing research, and contract preparation. The underlying architecture is general.",
    ],
  },

  // §3.3 Architecture (walkthrough text \u2014 diagram is the SVG component)
  architecture: {
    heading: "Architecture",
    walkthrough:
      "The agent runtime is a monorepo of purpose-built packages. Claude orchestrates tool calls through a custom MCP manager that enforces per-tool timeouts and structured error handling. A scheduler handles periodic triggers \u2014 incoming email, calendar events, new messages \u2014 without holding the process open unnecessarily between events. Memory lives in two layers: plain markdown files for narrative context, and a local LanceDB vector index for semantic retrieval. Nothing in the memory layer leaves the machine.",
    stackHeading: "Stack at a glance",
    stack: [
      { layer: "Primary LLM", tech: "Anthropic Claude (Sonnet / Opus)" },
      { layer: "Fallback LLMs", tech: "OpenAI GPT-4o, Moonshot Kimi K2.6" },
      { layer: "Embeddings", tech: "Voyage AI" },
      { layer: "Vector store", tech: "LanceDB (local)" },
      { layer: "Structured store", tech: "SQLite (better-sqlite3)" },
      { layer: "Tool protocol", tech: "Model Context Protocol v1.0" },
      { layer: "Desktop UI", tech: "React + TypeScript (Tauri)" },
      { layer: "Mobile sync", tech: "React Native + WebSocket relay" },
      { layer: "Scheduling", tech: "node-cron" },
      { layer: "Logging", tech: "Pino (structured JSON)" },
    ],
  },

  // §3.4 Autonomy split
  autonomySplit: {
    heading: "The autonomy split",
    intro:
      "The first design decision was where to draw the automation boundary. Rather than letting the agent act freely, CoAgent classifies every pending action by risk level and holds anything consequential for a one-tap human decision.",
    autoLabel: "Runs automatically",
    autoItems: [
      "Follow-up emails and reminders",
      "Showing confirmations",
      "Contact notes and filing",
      "Morning briefing summaries",
      "Deadline alerts",
    ],
    queueLabel: "Queues for approval",
    queueItems: [
      "Contracts and offers",
      "Financial analysis and underwriting",
      "Any outbound message that commits a position",
      "DocuSign preparation and dispatch",
    ],
    rationale:
      "The line is drawn at consequence, not complexity. A routine follow-up is low-stakes even if the drafting is non-trivial. A contract preparation is high-stakes even if the fields are straightforward. Users consistently report trusting the agent with more volume once they have seen that high-stakes decisions surface for review rather than executing silently.",
  },

  // §3.5 What we got right
  whatWeGotRight: {
    heading: "What we got right",
    items: [
      {
        title: "Local-first data architecture",
        body: "Keeping raw data on the user\u2019s machine removed an entire class of data-custody questions, made the system auditable without a dashboard, and meant the agent could keep working without a network connection for most tasks.",
      },
      {
        title: "MCP as the tool interface",
        body: "Building each integration as an independent MCP server made the system composable from day one. Gmail, Calendar, DocuSign, and Rentcast are each testable and replaceable in isolation. When the DocuSign integration needed a breaking change, nothing else in the agent core was affected.",
      },
      {
        title: "Markdown memory",
        body: "Plain markdown files as the memory format survive schema migrations trivially. The user can read their own agent\u2019s memory in any text editor. It is easy to inspect when debugging \u2014 which proved valuable repeatedly in production.",
      },
      {
        title: "Explicit approval queue",
        body: "The queue is not a fallback for uncertainty \u2014 it is a first-class interface. The agent routes high-stakes work to a human not reluctantly, but as the expected path. This framing made it easier to explain to users and easier to trust.",
      },
    ],
  },

  // §3.6 What broke \u2014 MOST IMPORTANT SECTION per design doc §3
  // TODO: founder to add specific failure cases here before launch.
  // Do not invent failure modes \u2014 ship real incidents or leave this placeholder.
  whatBroke: {
    heading: "What broke",
    intro:
      "Most case studies skip this section. We don\u2019t. The failures are where the real architecture decisions live.",
    // Placeholder \u2014 replace with real items when founder provides specifics:
    // items: [
    //   { title: "Failure name", body: "What happened and what was done about it." },
    // ],
  },

  // §3.7 What it taught us
  whatItTaughtUs: {
    heading: "What it taught us",
    items: [
      {
        title: "Autonomy is earned, not granted",
        body: "Users need to see the approval queue work correctly before they trust the autonomous path. Ship the queue first, earn trust with it, then expand autonomous scope based on what users actually approve consistently.",
      },
      {
        title: "Memory design is product design",
        body: "How an agent stores and retrieves context shapes everything else: what it notices, what it forgets, how it handles contradictions. Memory architecture deserves as much attention as the LLM choice.",
      },
      {
        title: "Local-first is a constraint worth accepting early",
        body: "The constraint forces better data discipline from the start. Every integration has to be honest about what leaves the machine and why. That discipline prevents a category of architectural drift that is very hard to reverse later.",
      },
      {
        title: "The failure modes that matter are classification failures",
        body: "The agent rarely fails to act. It occasionally acts on a misclassification \u2014 treating a high-stakes decision as routine, or surfacing something trivial for approval. The monitoring work is mostly about catching those classification boundaries.",
      },
    ],
  },

  // §3.8 CTA
  cta: {
    heading: "Want to see something like this for your business?",
    body: "Tell us what you\u2019re trying to automate. We\u2019ll tell you what\u2019s realistic.",
    label: "Start a conversation \u2192",
    href: "/contact",
  },
} as const;

// Legacy exports preserved for components not yet migrated (coagent page, contact page)

export const COAGENT = {
  eyebrow: "Selected work",
  headline: "CoAgent",
  body: "CoAgent is a multi-agent platform built for real estate operations teams. It handles lead qualification, property analysis, and client communication across a high-volume workflow \u2014 the kind of work that is repetitive enough to automate but variable enough to break rigid scripts. Built by RAIN with the same safety deliverables that ship with every engagement: red-team report, guardrails spec, monitoring spec.",
  metrics: [
    { label: "Agents deployed", value: "X+" },
    { label: "Tasks automated weekly", value: "X,XXX+" },
  ],
  ctaLabel: "Read the case study",
  ctaHref: "/work/coagent",
} as const;

export const SELECTED_WORK: readonly {
  id: string;
  name: string;
  blurb: string;
  href: string;
  status: "live" | "in-progress";
}[] = [
  {
    id: "coagent",
    name: "CoAgent",
    blurb: "Multi-agent platform for real estate operations. Automates lead qualification, property analysis, and client communication.",
    href: "/work/coagent",
    status: "live",
  },
] as const;


// IMAGERY \u2014 central registry of image references.
// All images sourced from Unsplash (free commercial license, no attribution required).
export const IMAGERY = {
  hero: {
    src: "https://images.unsplash.com/photo-1765370847579-70d5d83401d2?w=1920&q=80",
    alt: "A square of warm light cast on a textured plaster wall",
    credit: "Asse Slotendijk / Unsplash",
  },
  about: {
    src: "https://images.unsplash.com/photo-1742046335792-060080d72460?w=1920&q=80",
    alt: "A dark office workspace lit by warm amber desk lamp and soft ambient light",
    credit: "okeykat / Unsplash",
  },
  howRainWorks: {
    src: "https://images.unsplash.com/photo-1542621334-a254cf47733d?w=1920&q=80",
    alt: "Brown pencil resting on white architectural floor plan paper",
    credit: "Sven Mieke / Unsplash",
  },
  selectedWorkCoAgent: {
    src: "",
    alt: "CoAgent platform interface showing a multi-agent workflow for real estate operations",
    credit: "",
  },
} as const;

export const CONTACT_PAGE = {
  heading: "Tell us what you're working on.",
  body: "Every message gets read by a real person. We reply within two business days. There's no sales funnel — the next thing that happens is a real conversation.",
  formLabels: {
    name: "Name",
    email: "Email",
    message: "What are you working on?",
    submit: "Send",
    success: "Sent. We'll read it and reply within two business days.",
  },
  fallbackEmail: "founder-email-placeholder@example.com", // TODO: founder to confirm public email
} as const;
