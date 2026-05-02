export interface ReadingEntry {
  title: string;
  author: string;
  year: string;
  whyItMatters: string;
  summary: string;
}

export const researchBacked = {
  eyebrow: "Research-backed",
  h2: "The research our practice is built on.",
  cta: {
    label: "See the full reading list →",
    href: "/reading",
  },

  entries: [
    {
      title: "Towards a Science of AI Agent Reliability",
      author: "Rabanser, Kapoor, Narayanan et al.",
      year: "2026",
      whyItMatters: "Benchmarks don't tell you if an AI agent is reliable. This paper proposes real metrics for consistency, robustness, and predictability that actually matter when you're running AI in production.",
      summary: "This paper argues that compressing agent performance into a single success metric obscures critical operational flaws, explaining the gap between rising benchmark scores and persistent real-world failures. Grounded in safety-critical engineering, the authors propose twelve concrete metrics that decompose agent reliability along four dimensions: consistency, robustness, predictability, and safety. They evaluate these metrics across multiple models and benchmarks and provide an interactive dashboard and reproducible code for practitioners.",
    },
    {
      title: "A Practical Guide for Designing, Developing, and Deploying Production-Grade Agentic AI Workflows",
      author: "Bandara, Gore, Foytik et al.",
      year: "2025",
      whyItMatters: "The engineering playbook for shipping AI agents that work. Covers multi-agent design patterns, tool integration, and orchestration with a focus on making systems maintainable and observable.",
      summary: "Presents nine core best practices for engineering production-grade agentic AI systems, including tool-first design over MCP, single-responsibility agents, externalized prompt management, and containerized deployment. Demonstrates these principles through a case study of a multimodal news-analysis and media-generation workflow. The overall emphasis is on keeping agentic architectures simple, modular, and aligned with responsible AI principles.",
    },
    {
      title: "Measuring Agents in Production",
      author: "Pan, Arabzadeh, Cogo et al.",
      year: "2025",
      whyItMatters: "Studies how AI agents actually perform in real deployments across industries, not in lab conditions. Shows that production agents use simpler approaches than you'd expect, and reliability is the main bottleneck.",
      summary: "The first systematic study of how agents are measured in production, drawing on 20 in-depth case-study interviews and a survey of 306 practitioners across 26 domains. Key findings: 68% of production agents execute at most 10 steps before requiring human intervention, 70% rely on prompting off-the-shelf models rather than fine-tuning, and 74% depend primarily on human evaluation. Reliability remains the top development challenge, driven by difficulties in ensuring and evaluating agent correctness.",
    },
    {
      title: "Engineering AI Agents for Clinical Workflows",
      author: "Lopes, Pitta, Belém et al.",
      year: "2026",
      whyItMatters: "A real example of what proactive AI governance looks like in healthcare. Covers clean architecture, event-driven design, MLOps lifecycles, and human-in-the-loop oversight for clinical AI systems.",
      summary: "Presents an industry case study of a production-grade AI platform in primary healthcare, arguing that trustworthy clinical AI requires the integration of four foundational engineering pillars. The architecture combines Clean Architecture for maintainability with event-driven design for resilience and auditability, treating the agent as the primary unit of modularity, each with its own autonomous MLOps lifecycle. Addresses the \"responsibility vacuum\" that arises when prototype-derived architectures are deployed in clinical settings without systemic oversight.",
    },
    {
      title: "EnterpriseOps-Gym: Environments and Evaluations for Stateful Agentic Planning in Enterprise Settings",
      author: "Malay, Nayak, Sethumadhavan et al.",
      year: "2026",
      whyItMatters: "The most comprehensive benchmark for testing AI agents in enterprise environments. Evaluates how agents handle stateful planning and tool use in the kinds of systems our clients actually run.",
      summary: "A benchmark from ServiceNow Research evaluating AI agents on 1,150 expert-curated tasks across eight enterprise verticals (Customer Service, HR, IT, etc.) using a containerized sandbox with 164 database tables and 512 functional tools. The top-performing model achieves only 37.4% success, and providing oracle human plans improves performance by 14-35 percentage points, identifying strategic reasoning as the primary bottleneck. Agents also frequently fail to refuse infeasible tasks, with the best model achieving only 53.9% refusal accuracy.",
    },
    {
      title: "Agent Drift: Quantifying Behavioral Degradation in Multi-Agent LLM Systems Over Extended Interactions",
      author: "Rath",
      year: "2026",
      whyItMatters: "AI systems degrade over time in ways most teams don't monitor for. This paper quantifies how and why multi-agent systems lose coherence, and what to do about it before it becomes a problem.",
      summary: "Introduces the concept of \"agent drift\" \u2014 the progressive degradation of agent behavior, decision quality, and inter-agent coherence over extended interaction sequences. Identifies three manifestations (semantic drift, coordination drift, and behavioral drift) and proposes the Agent Stability Index, a composite metric across twelve dimensions including response consistency, tool usage patterns, and inter-agent agreement rates. The most severe observed impact is a 42% reduction in task success rate.",
    },
    {
      title: "Real-World Gaps in AI Governance Research",
      author: "Strauss, Moure, O'Reilly et al.",
      year: "2025",
      whyItMatters: "Shows that most AI safety research focuses on pre-deployment testing while ignoring what happens after launch, especially in healthcare and finance. This is exactly the gap we exist to fill.",
      summary: "Analyzes 1,178 safety and reliability papers drawn from 9,439 generative AI papers published between January 2020 and March 2025, comparing research outputs from leading AI companies integrate and universities. The central finding is that corporate AI research increasingly concentrates on pre-deployment areas (model alignment, testing, and evaluation) while attention to deployment-stage issues such as model bias has waned. Identifies significant research gaps in high-risk deployment domains including healthcare, finance, misinformation, and hallucinations.",
    },
    {
      title: "A Safety and Security Framework for Real-World Agentic Systems",
      author: "Ghosh, Simkin, Shiarlis et al.",
      year: "2025",
      whyItMatters: "A practical framework for securing AI agents in enterprise settings. Covers tool misuse, cascading action chains, and risk management with human oversight built in from the start.",
      summary: "Introduces a dynamic framework for securing agentic AI systems in enterprise deployment, arguing that safety and security are emergent properties arising from interactions among models, orchestrators, tools, and data \u2014 not fixed attributes of individual models. Operationalizes contextual risk management by using auxiliary AI models and agents, with human oversight, to assist in risk discovery, evaluation, and mitigation. Includes a detailed case study and releases a dataset of over 10,000 realistic attack and defense execution traces.",
    },
  ] satisfies ReadingEntry[],
} as const;
