// Site-wide copy — single source of truth for all text content.
// Import BRAND_NAME from brand.ts where typographically natural.

export const HERO = {
  headline: 'AI agents that ship to production.',
  subheadline:
    'RAIN builds custom agents, handles the safety engineering, and hands off something that stays running. Good work, clearly scoped, no guesswork.',
  ctaLabel: 'Book a call',
  ctaHref: '/contact',
} as const;

export const ANTI_POSITION = {
  line: 'No decks. No buzzwords. The thing gets built.',
} as const;

export const ENGAGEMENTS = [
  {
    id: 'strategy',
    outcomeHeadline: 'An honest map of where AI fits in your stack.',
    durationLabel: '2 weeks',
    description:
      'A focused assessment of where AI fits and where it does not. Ends with a deployment plan, a risk register, and a clear go/no-go — not a slide deck.',
    deliverables: [
      'Deployment plan',
      'Risk register',
      'Opportunity sizing report',
      'Go/no-go recommendation',
      '90-day roadmap',
    ] as const,
  },
  {
    id: 'build',
    outcomeHeadline: 'A production-ready agent, shipped.',
    durationLabel: '6 weeks',
    description:
      'Defined scope, from spec to production. Every build ships with a red-team report, guardrails spec, and monitoring spec — standard, not optional.',
    deliverables: [
      'Production-ready agent',
      'Red-team report',
      'Deployment guardrails spec',
      'Monitoring spec',
      'Handoff documentation',
    ] as const,
  },
  {
    id: 'embedded',
    outcomeHeadline: 'AI engineering embedded in your team.',
    durationLabel: 'Ongoing',
    description:
      'One to two days a week, inside the team. RAIN owns the AI roadmap, reviews architecture, and keeps what ships running.',
    deliverables: [
      'Weekly cadence + technical leadership',
      'Architecture review',
      'Vendor diligence',
      'On-call agent ops',
    ] as const,
  },
] as const;

export const HOW_RAIN_WORKS = {
  eyebrow: 'How RAIN works',
  sectionTitle: 'Built for production. Designed to last.',
  parts: [
    {
      id: 'what-rain-is',
      title: 'What RAIN is',
      body: 'RAIN is a small studio that builds AI agents and ships them to production. The work is technical, hands-on, and scoped tightly — no sprawling teams, no handoffs to junior staff. Clients come with real operational problems: repetitive decisions, high-volume workflows, tasks that eat time without adding judgment. RAIN turns those into agents that run reliably after the engagement ends. The studio takes on a limited number of projects at a time, because the quality of the work depends on staying close to it.',
    },
    {
      id: 'what-we-believe',
      title: 'What we believe',
      body: 'Software built for appearances breaks quickly. RAIN believes the only thing worth shipping is something that keeps working once the builder has left. That means scope defined upfront, honest assessments of where AI actually helps, and a refusal to build things that should not be built. The best AI implementations are often invisible — they do their job, stay out of the way, and let people focus on the work that requires them. Slide decks full of potential are easy to produce. RAIN would rather produce the thing.',
    },
    {
      id: 'responsible-ai',
      title: 'Responsible AI, defined',
      body: 'Responsible AI is not a values statement — it is an engineering posture. Every agent RAIN ships is built with tested refusal patterns: defined inputs the system will decline to act on, documented and verified before launch. Spending caps are configured so agents cannot run up unbounded costs in the event of a loop or unexpected usage spike. Audit trails are a standard deliverable, not a premium add-on — every consequential action the agent takes is logged in a queryable format. Failure modes are tested adversarially before anything goes live: edge cases, prompt injection attempts, off-label inputs, and graceful degradation paths. The goal is an agent the client can operate confidently, explain to stakeholders, and hand to an auditor without scrambling.',
    },
    {
      id: 'what-agents-are',
      title: 'What agents are',
      body: 'An AI agent is a system that takes a goal, breaks it into steps, uses tools to act on those steps, and decides when the goal has been met. That is meaningfully different from a chatbot, which responds to messages but does not plan or take action. It is also different from traditional automation, which follows a fixed script and cannot adapt when conditions change. A real-world example: an agent that handles inbound sales inquiries might read the email, look up the sender in a CRM, check product availability, draft a personalized reply, and flag anything it is not confident about for human review — all without a fixed script. Another example: an agent that monitors a data pipeline, detects anomalies, files a ticket with the relevant context, and pages the on-call engineer only when the issue crosses a severity threshold. The value is in the judgment layer — the ability to handle variation and make reasonable decisions within defined boundaries.',
    },
    {
      id: 'how-a-build-runs',
      title: 'How a Build engagement runs',
      body: 'Every Build engagement runs from spec to production in six weeks. Scope is defined before work starts — no scope creep, no shifting requirements mid-build. The agent is built, tested, and handed off with documentation the client\'s team can actually use. Three deliverables ship with every build, standard:',
      deliverables: [
        {
          title: 'Red-team report',
          description:
            'Adversarial probing of the deployed agent — prompt injection, jailbreaks, edge-case failures — with severity ratings and remediation steps.',
        },
        {
          title: 'Guardrails spec',
          description:
            'A technical document defining input/output filters, refusal patterns, toxicity thresholds, PII handling, and cost caps before anything goes live.',
        },
        {
          title: 'Monitoring spec',
          description:
            'Drift detection, latency budgets, false-alarm-rate ceilings, and alert routing — so the agent stays reliable after launch, not just on demo day.',
        },
      ],
    },
  ],
} as const;

export const COAGENT = {
  eyebrow: 'Selected work',
  headline: 'CoAgent',
  body: 'CoAgent is a multi-agent platform built for real estate operations teams. It handles lead qualification, property analysis, and client communication across a high-volume workflow — the kind of work that is repetitive enough to automate but variable enough to break rigid scripts. Built by RAIN with the same safety deliverables that ship with every engagement: red-team report, guardrails spec, monitoring spec.',
  metrics: [
    { label: 'Agents deployed', value: 'X+' },
    { label: 'Tasks automated weekly', value: 'X,XXX+' },
  ],
  ctaLabel: 'Read the case study',
  ctaHref: '/work/coagent',
} as const;

export const SELECTED_WORK: readonly {
  id: string;
  name: string;
  blurb: string;
  href: string;
  status: 'live' | 'in-progress';
}[] = [
  {
    id: 'coagent',
    name: 'CoAgent',
    blurb: 'Multi-agent platform for real estate operations. Automates lead qualification, property analysis, and client communication.',
    href: '/work/coagent',
    status: 'live',
  },
] as const;

export const ABOUT = {
  heading: 'About RAIN',
  paragraphs: [
    'RAIN is a studio that builds AI agents and ships them to production. The work is technical and direct — no discovery theater, no month-long strategy phases before a line of code is written. Clients come with real problems, and RAIN builds the thing that solves them.',
    'The studio keeps its project load small on purpose. Every engagement gets close attention, defined scope, and an honest answer about what AI can and cannot do for a given problem. Speculative builds, slide-only deliverables, and projects where "AI" is mostly a rebrand of existing software get declined.',
    'Safety engineering is not a checkbox at the end of a build — it is part of the build. Every agent that ships includes tested refusal patterns, spending caps, audit logging, and a monitoring spec. That is what makes the handoff real: the client gets something they can operate, explain, and trust.',
  ],
  // Legacy single-body field kept for any components not yet migrated to paragraphs[]
  body: 'A small studio that builds AI agents and ships them to production. RAIN takes on a limited number of engagements at a time — no sprawling teams, no handoffs to juniors. Speculative builds, slide-only deliverables, and vanity AI projects get declined. Work runs transparently: scope is defined upfront, safety is standard, and the handoff is real.',
} as const;

// IMAGERY — central registry of image references.
// src values are placeholders; researcher-imagery (task #38) will populate them.
// TODO: replace src: '' values once research/v3-imagery.md lands.
export const IMAGERY = {
  hero: {
    src: '',
    alt: 'Abstract visualization of interconnected nodes representing an agent reasoning through steps',
    credit: '',
  },
  about: {
    src: '',
    alt: 'A quiet, focused workspace — the kind of environment where careful technical work gets done',
    credit: '',
  },
  howRainWorks: {
    src: '',
    alt: 'Diagram or photograph illustrating a structured, step-by-step process',
    credit: '',
  },
  selectedWorkCoAgent: {
    src: '',
    alt: 'CoAgent platform interface showing a multi-agent workflow for real estate operations',
    credit: '',
  },
} as const;

export const CONTACT_CTA = {
  heading: 'Have a problem that needs an agent, not a deck?',
  ctaLabel: 'Book a call',
  ctaHref: '/contact',
} as const;

export const CONTACT_PAGE = {
  heading: 'Get in touch',
  body: 'Describe what you are building and where AI fits. If RAIN can help, the answer will be straightforward. If not, that will be clear too.',
  formLabels: {
    name: 'Name',
    email: 'Email',
    message: 'What are you working on?',
    submit: 'Send',
    success: 'Sent. Expect a reply within 24 hours.',
  },
} as const;
