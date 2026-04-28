// Site-wide copy — single source of truth for all text content.
// Import BRAND_NAME from brand.ts where typographically natural.

export const HERO = {
  headline: 'AI agents that ship to production.',
  subheadline:
    'RAIN builds custom agents, handles the safety engineering, and hands off something that stays running.',
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

export const METHODOLOGY = {
  sectionTitle: 'How RAIN works',
  sectionSubtitle:
    'Every agent build ships with three safety deliverables. Not optional. Not an upsell.',
  items: [
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
} as const;

export const COAGENT = {
  eyebrow: 'Selected work',
  headline: 'CoAgent',
  body: 'A multi-agent platform for real estate operations. Automates lead qualification, property analysis, and client communication — built by RAIN with the same safety deliverables every engagement gets.',
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
  body: 'A small studio that builds AI agents and ships them to production. RAIN takes on a limited number of engagements at a time — no sprawling teams, no handoffs to juniors. Speculative builds, slide-only deliverables, and vanity AI projects get declined. Work runs transparently: scope is defined upfront, safety is standard, and the handoff is real.',
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
