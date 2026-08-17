export type OutboundRoadmap = {
  company: string;
  recipient: string;
  logoUrl: string;
  logoBackgroundColor: string;
  proof: string;
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
      "500K+ leads generated and more than $100M in reported client revenue gives the campaign a concrete story to lead with.",
    outboundUseCase: "Turn existing case studies into targeted distribution",
    outboundUseCaseNote:
      "Use the industries, services, and results Media Components already knows well. Outbound adds a direct path to similar companies instead of asking the agency to change its market.",
    buyerRoles: "Owners and marketing leaders inside the segments you already serve",
    listFilters:
      "Existing client patterns · service fit · company size · budget signals · decision-maker relevance",
    howOutboundHelps: [
      "Activate the 500K+ lead and $100M+ revenue proof instead of waiting for prospects to discover it through search or referrals.",
      "Use each case study to open conversations with companies that closely resemble the client and problem behind that result.",
      "Test industries and service angles in small batches, then give the team evidence about where outbound creates the most qualified interest.",
    ],
    personalizationSignals: [
      "500K+ leads generated for prospects focused on lead volume and acquisition systems.",
      "$100M+ in reported client revenue for prospects who care about commercial outcomes rather than channel activity.",
      "300+ client engagements for established companies looking for an experienced, multi-service partner.",
    ],
    angle:
      "Lead with the scale of the results, then connect that proof to a specific type of business rather than pitching every service Media Components offers.",
    companyEvidenceUrl: "https://mediacomponents.com/",
  },
};

export async function getOutboundRoadmap(id: string) {
  return roadmapRecords[id] ?? null;
}
