// Site-wide copy — single source of truth for all text content.
// Import BRAND_NAME from brand.ts where typographically natural.

export const HERO = {
  headline: 'AI agents that ship to production.',
  subheadline:
    'RAIN builds custom agents, handles the safety engineering, and hands off something that stays running. Good work, clearly scoped, no guesswork.',
  ctaLabel: 'Book a call',
  ctaHref: '/contact',
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
// All images sourced from Unsplash (free commercial license, no attribution required).
export const IMAGERY = {
  hero: {
    src: 'https://images.unsplash.com/photo-1765370847579-70d5d83401d2?w=1920&q=80',
    alt: 'A square of warm light cast on a textured plaster wall',
    credit: 'Asse Slotendijk / Unsplash',
  },
  about: {
    src: 'https://images.unsplash.com/photo-1742046335792-060080d72460?w=1920&q=80',
    alt: 'A dark office workspace lit by warm amber desk lamp and soft ambient light',
    credit: 'okeykat / Unsplash',
  },
  howRainWorks: {
    src: 'https://images.unsplash.com/photo-1542621334-a254cf47733d?w=1920&q=80',
    alt: 'Brown pencil resting on white architectural floor plan paper',
    credit: 'Sven Mieke / Unsplash',
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
