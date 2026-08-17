export type OutboundRoadmap = {
  company: string;
  recipient: string;
  logoUrl: string;
  logoBackgroundColor: string;
  proof: string;
  audience: string;
  audienceNote: string;
  decisionMakers: string;
  listFilters: string;
  whyThisAudience: [string, string, string];
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
    audience: "Regional healthcare groups",
    audienceNote:
      "Start with established specialty-care groups where patient value supports a multi-channel engagement across search, paid media, web, reputation, and lead follow-up.",
    decisionMakers: "CMO, VP Marketing, or Growth Director",
    listFilters:
      "Southeast U.S. · 5–50 locations · 50–500 employees · active patient acquisition",
    whyThisAudience: [
      "Media Components already presents HIPAA awareness alongside lead generation, web, SEO, paid media, and video capabilities.",
      "A multi-location practice can buy several of those services together instead of treating the agency as a single-channel vendor.",
      "The $100M+ revenue and 500K+ lead figures make a stronger introduction when the buyer already thinks in patient value and location-level growth.",
    ],
    angle:
      "Lead with the scale of the results, then connect that proof to a specific type of business rather than pitching every service Media Components offers.",
    companyEvidenceUrl: "https://mediacomponents.com/",
  },
};

export async function getOutboundRoadmap(id: string) {
  return roadmapRecords[id] ?? null;
}
