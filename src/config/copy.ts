// Site-wide copy — single source of truth for all text content.
// Import BRAND_NAME from brand.ts where typographically natural.

export const HERO = {
  name: "RAIN",
  paragraph1:
    "Business innovation should be backed by research and fundamentals. You have to understand the fundamentals to understand the risks and the rewards. Most teams adopting AI today are moving fast on tools they don\u2019t fully understand \u2014 and that\u2019s the gap RAIN is built to close.",
  paragraph2:
    "We help companies put AI to work capably, honestly, and with the depth to know how it actually behaves. The thing we\u2019re offering is the feeling of being safe in our hands.",
  ctaLabel: "Let\u2019s talk \u2192",
  ctaHref: "/contact",
} as const;

export const ENGAGEMENTS = {
  heading: "What we do",
  subhead:
    "Three ways we work with companies. We size each engagement to what the work actually needs.",
  items: [
    {
      id: "strategy",
      name: "Strategy.",
      body: "A short, focused engagement. We come in, look at what you have, look at what you\u2019re being sold, and tell you what\u2019s real, what\u2019s risky, and what\u2019s worth doing. The output is a written assessment a non-technical executive can act on \u2014 and that often saves you from spending millions on the wrong thing.",
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
  footerLine:
    "Most clients start with Strategy. A subset graduate to Build. A subset of those graduate to Steward.",
} as const;

export const HOW_WE_THINK = {
  heading: "How we think about this work",
  opening: [
    "Business innovation should be backed by research and fundamentals. You have to understand the fundamentals to understand the risks and the rewards. Most teams adopting AI today are moving fast on tools they don\u2019t fully understand \u2014 and that\u2019s the gap RAIN is built to close.",
    "The depth that catches the risks is the same depth that captures the rewards. Reading the research isn\u2019t friction on innovation \u2014 it\u2019s what makes innovation real.",
  ],
  values: [
    {
      id: "responsibly-powerful",
      name: "Responsibly powerful",
      body: "We don\u2019t sell caution. We sell outcomes \u2014 real ones \u2014 delivered by AI systems that are full-strength: capable, autonomous where it makes sense, integrated deeply into your operations. We\u2019re also honest: models hallucinate, agents hit cases their training didn\u2019t prepare them for, tools fail in ways that surprise their builders. We don\u2019t promise AI that doesn\u2019t make mistakes. We promise the discipline that catches the mistakes the moment they happen, contains them, and surfaces them \u2014 so the system fails gracefully, not catastrophically.",
    },
    {
      id: "transparency",
      name: "Transparency",
      body: "We\u2019re open about what we\u2019re building, how it works, and what it can and can\u2019t do. No black-box demos. No mystified architecture diagrams. Our clients understand what they\u2019re getting \u2014 and so do their boards, their auditors, and their customers.",
    },
    {
      id: "data-security",
      name: "Data security",
      body: "What goes into your models, and what comes out, is treated like the sensitive material it is. Least privilege. Audit trails. Clear ownership. We name the risks of training-data leakage, prompt injection, and model exfiltration explicitly, and we engineer against them.",
    },
    {
      id: "research-grounded",
      name: "Research-grounded judgment",
      body: "The AI field moves fast and most of what\u2019s in trade press is wrong. We read the actual papers \u2014 alignment, interpretability, agent design, security, safety \u2014 and our recommendations are grounded in them. The reading list on this site isn\u2019t decoration; it\u2019s how we work.",
    },
  ],
} as const;

export const COAGENT_PREVIEW = {
  heading: "CoAgent \u2014 what it looks like when we build",
  paragraph1:
    "CoAgent is a local-first autonomous AI agent we designed and built end-to-end. It runs entirely on the user\u2019s own machine, integrates with their tools through open standards (MCP), keeps data local, and queues high-stakes decisions for human approval. We built it to demonstrate every value on this page in working code: powerful (autonomous, multi-tool), responsible (human-in-the-loop where it matters), transparent (architecture and memory readable to anyone who looks), and secure by design (your data never leaves your machine).",
  paragraph2:
    "It\u2019s currently deployed in real estate. The architecture is general.",
  ctaLabel: "Read the full case study \u2192",
  ctaHref: "/work/coagent",
} as const;

export const READING_PREVIEW = {
  heading: "What we read",
  paragraph1:
    "The recommendations we make come from somewhere. Below is a small sample of the papers and books our practice is built on. The full list lives at our reading page, updated regularly.",
  tagline: "We don\u2019t make this up.",
  ctaLabel: "Browse the full list \u2192",
  ctaHref: "/reading",
  // PLACEHOLDER \u2014 founder to confirm reading list before these are replaced with real entries
  papers: [
    { id: "p1", title: "Paper title placeholder \u2014 founder to confirm reading list", authors: "Author(s) \u00b7 Year", href: "#" },
    { id: "p2", title: "Paper title placeholder \u2014 founder to confirm reading list", authors: "Author(s) \u00b7 Year", href: "#" },
    { id: "p3", title: "Paper title placeholder \u2014 founder to confirm reading list", authors: "Author(s) \u00b7 Year", href: "#" },
    { id: "p4", title: "Paper title placeholder \u2014 founder to confirm reading list", authors: "Author(s) \u00b7 Year", href: "#" },
    { id: "p5", title: "Paper title placeholder \u2014 founder to confirm reading list", authors: "Author(s) \u00b7 Year", href: "#" },
    { id: "p6", title: "Paper title placeholder \u2014 founder to confirm reading list", authors: "Author(s) \u00b7 Year", href: "#" },
    { id: "p7", title: "Paper title placeholder \u2014 founder to confirm reading list", authors: "Author(s) \u00b7 Year", href: "#" },
    { id: "p8", title: "Paper title placeholder \u2014 founder to confirm reading list", authors: "Author(s) \u00b7 Year", href: "#" },
  ],
} as const;

export const STRUCTURE = {
  heading: "How we\u2019re structured",
  paragraphs: [
    "RAIN is a Public Benefit Corporation. The charter names a specific public benefit purpose \u2014 advancing the responsible development and deployment of AI \u2014 and a fixed percentage of net consulting revenue is committed in writing to independent AI safety and alignment research. Mission lock isn\u2019t a marketing line; it\u2019s part of the legal entity.",
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
      "RAIN is incorporated as a Public Benefit Corporation (PBC) \u2014 a for-profit legal entity whose charter binds the company to a specific public benefit purpose alongside any pursuit of profit. The charter names that purpose explicitly: advancing the responsible development and deployment of AI systems through research-grounded consulting and contribution to independent AI safety and alignment research. Decisions of the company are required to balance profit with that purpose. The mission is part of the legal entity, not a marketing line.",
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
