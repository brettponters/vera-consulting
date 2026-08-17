export type OutboundRoadmap = {
  company: string;
  recipient: string;
  logoUrl: string;
  logoBackgroundColor: string;
  proof: string;
  websiteFindings: [string, string, string];
  evidenceLinks: [{ label: string; url: string }, { label: string; url: string }, { label: string; url: string }];
  outboundUseCase: string;
  outboundUseCaseNote: string;
  buyerRoles: string;
  listFilters: string;
  howOutboundHelps: [string, string, string];
  personalizationSignals: [string, string, string];
  angle: string;
  companyEvidenceUrl: string;
};

// Temporary local record provider. The page imports only getOutboundRoadmap(),
// so a database can replace this map without changing the roadmap template.
const roadmapRecords: Record<string, OutboundRoadmap> = {
  rm_7k3p9x2m: {
    company: "Media Components",
    recipient: "Denis",
    logoUrl: "https://mediacomponents.com/wp-content/uploads/2024/01/MediaComponentsLogo.svg",
    logoBackgroundColor: "#111827",
    proof:
      "Your PPC case study reports a 52% reduction in acquisition cost, 38% more qualified leads, and a 147% conversion-rate improvement while reducing spend by 23%.",
    websiteFindings: [
      "Affordable Fixes combines a conversion-focused WordPress rebuild with 29 commercial pages, nine informational pages, backlinks, and local directory work.",
      "The Aegis IT project connects website lead capture directly to PipelineAMP CRM so every form and callback request can be tracked for follow-up.",
      "Your newer AI automation offer includes lead scoring, personalized outreach, workflow orchestration, predictive analytics, and measurable success criteria.",
    ],
    evidenceLinks: [
      { label: "PPC case study", url: "https://mediacomponents.com/services/ppc/" },
      { label: "Affordable Fixes", url: "https://mediacomponents.com/our-work/affordable-fixes/" },
      { label: "Aegis IT", url: "https://mediacomponents.com/our-work/aegis-it-solutions/" },
    ],
    outboundUseCase: "Route each case study to the companies most likely to value it",
    outboundUseCaseNote:
      "The PPC result, the Affordable Fixes SEO build, and the Aegis CRM integration each solve a different buying problem. Outbound lets the team match the right proof to the right company instead of leading with a broad service list.",
    buyerRoles: "Owners and marketing leaders inside the segments you already serve",
    listFilters:
      "Existing client patterns · service fit · company size · budget signals · decision-maker relevance",
    howOutboundHelps: [
      "Use the 52% CPA reduction and 38% qualified-lead lift when reaching paid-media buyers focused on efficiency.",
      "Use the Affordable Fixes content footprint when approaching local service companies that need both conversion work and durable search visibility.",
      "Use the Aegis PipelineAMP integration when talking to B2B teams that care about capturing, routing, and following up with every inquiry.",
    ],
    personalizationSignals: [
      "52% lower CPA and 38% more qualified leads for prospects focused on paid-media efficiency.",
      "29 commercial and nine informational pages for local-service companies needing a stronger search footprint.",
      "PipelineAMP-connected lead capture for B2B teams concerned with inquiry tracking and follow-up.",
    ],
    angle:
      "Build three proof lanes—paid-media efficiency, local SEO depth, and CRM-connected conversion—then let response data show which lane creates the strongest qualified interest.",
    companyEvidenceUrl: "https://mediacomponents.com/",
  },
};

export async function getOutboundRoadmap(id: string) {
  return roadmapRecords[id] ?? null;
}
