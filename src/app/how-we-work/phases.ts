/**
 * The four phases of a VERA engagement. Shared by the client UI and the
 * server page's HowTo JSON-LD, so it lives in a plain (non-"use client")
 * module both can import.
 */
export const PHASES = [
  {
    number: "01",
    title: "Discover",
    description:
      "We spend time with your team, engineers, ops, compliance, and learn how your business actually runs. We look at your data, your infrastructure, your regulatory situation, what you've tried before. We ask a lot of questions. By the end, we put together an honest assessment of what's feasible and what isn't.",
    deliverables: [
      "Technical and operational assessment",
      "Stakeholder interviews",
      "Risk and compliance landscape review",
      "Feasibility analysis with honest recommendations",
    ],
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "We write the plan, architecture, evaluation criteria, foundation, timeline. We define what success looks like together and scope everything to what your team can maintain long-term. You review it, we revise it, and nothing moves forward until we're both confident in it.",
    deliverables: [
      "AI strategy document",
      "Architecture and system design",
      "Evaluation and success criteria",
      "Foundation and compliance framework",
    ],
  },
  {
    number: "03",
    title: "Integrate",
    description:
      "We join your team, same codebase, same standups, same channels. We write the code together, set up guardrails and monitoring together, and document everything as we go. Your engineers are part of the entire integration.",
    deliverables: [
      "Production-ready AI systems",
      "Testing and evaluation pipelines",
      "Integration with existing infrastructure",
      "Full technical documentation",
    ],
  },
  {
    number: "04",
    title: "Operate",
    description:
      "After launch, we stay on. We monitor performance, watch for model drift and data shifts, and make adjustments over time. We check in quarterly to review how things are running and flag anything that needs attention.",
    deliverables: [
      "Performance monitoring dashboards",
      "Drift detection and alerting",
      "Quarterly reviews and optimization",
      "Team training and knowledge transfer",
    ],
  },
];
