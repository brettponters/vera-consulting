// Site-wide copy — single source of truth for all text content.
// Import BRAND_NAME from brand.ts where typographically natural.

export const HERO = {
  headline: 'I build AI agents that ship. My latest: CoAgent.',
  subheadline:
    'Solo AI consultancy. Strategy, custom agent builds, and the safety engineering most firms skip.',
  ctaLabel: 'Book a call',
  ctaHref: '/contact',
} as const;

export const ANTI_POSITION = {
  line: 'No decks. No buzzwords. I build the thing.',
} as const;

export const ENGAGEMENTS = [
  {
    id: 'sprint',
    name: 'AI Strategy Sprint',
    priceLabel: '$X\u2013$Y',
    durationLabel: '2 weeks',
    description:
      'A focused assessment of where AI fits in your stack and where it doesn\u2019t. You get a deployment plan, a risk register, and a clear go/no-go.',
    deliverables: [
      'AI deployment plan',
      'Risk register',
      'Opportunity sizing report',
      'Go/no-go recommendation',
    ],
  },
  {
    id: 'build',
    name: 'Agent Build',
    priceLabel: '$X\u2013$Y',
    durationLabel: '6 weeks',
    description:
      'A defined-scope project from spec to production. Every build ships with a red-team report, guardrails spec, and monitoring spec\u2014not as extras, as standard.',
    deliverables: [
      'Production-ready AI agent',
      'Red-team report',
      'Deployment guardrails spec',
      'Monitoring spec',
      'Handoff documentation',
    ],
  },
  {
    id: 'fractional',
    name: 'Fractional AI Lead',
    priceLabel: 'Let\u2019s talk',
    durationLabel: 'Ongoing',
    description:
      'Embedded in your team 1\u20132 days a week. I own the AI roadmap, review architecture, and make sure what ships stays running.',
    deliverables: [
      'AI roadmap ownership',
      'Architecture review',
      'Vendor diligence',
      'Team upskilling',
    ],
  },
] as const;

export const METHODOLOGY = {
  sectionTitle: 'How I work',
  sectionSubtitle:
    'Every agent build ships with three safety deliverables. Not optional. Not an upsell.',
  items: [
    {
      title: 'Red-team report',
      description:
        'Adversarial probing of the deployed agent\u2014prompt injection, jailbreaks, edge-case failures\u2014with severity ratings and remediation steps.',
    },
    {
      title: 'Guardrails spec',
      description:
        'A technical document defining input/output filters, refusal patterns, toxicity thresholds, PII handling, and cost caps before anything goes live.',
    },
    {
      title: 'Monitoring spec',
      description:
        'Drift detection, latency budgets, false-alarm-rate ceilings, and alert routing\u2014so the agent stays reliable after launch, not just on demo day.',
    },
  ],
} as const;

export const COAGENT = {
  eyebrow: 'Case study',
  headline: 'CoAgent',
  body: 'A multi-agent platform for real estate operations. Automates lead qualification, property analysis, and client communication\u2014built with the same safety deliverables every client engagement gets.',
  metrics: [
    { label: 'Agents deployed', value: 'X+' },
    { label: 'Tasks automated weekly', value: 'X,XXX+' },
  ],
  ctaLabel: 'Read the case study',
  ctaHref: '/work/coagent',
} as const;

export const ABOUT = {
  heading: 'About',
  body: 'I\u2019m a solo AI engineer who got tired of watching consultancies deliver slide decks instead of working software. I build agents, ship them to production, and make sure they stay there. CoAgent is my own product\u2014same standards I bring to every client engagement.',
} as const;

export const CONTACT_CTA = {
  heading: 'Have a problem that needs an agent, not a deck?',
  ctaLabel: 'Book a call',
  ctaHref: '/contact',
} as const;

export const CONTACT_PAGE = {
  heading: 'Get in touch',
  body: 'Tell me what you\u2019re building and where AI fits. If I can help, I\u2019ll say so. If I can\u2019t, I\u2019ll tell you that too.',
  formLabels: {
    name: 'Name',
    email: 'Email',
    message: 'What are you working on?',
    submit: 'Send',
    success: 'Sent. I\u2019ll be in touch within 24 hours.',
  },
} as const;
