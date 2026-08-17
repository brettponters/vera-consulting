import n8nRoadmaps from "@/data/n8n-roadmaps.json";

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
  ...Object.fromEntries(
    n8nRoadmaps.map((roadmap) => [
      roadmap.id,
      {
        company: roadmap.company,
        recipient: roadmap.recipient,
        logoUrl: "",
        logoBackgroundColor: "transparent",
        proof: roadmap.proof,
        websiteFindings: roadmap.websiteFindings as [string, string, string],
        evidenceLinks: [
          { label: `${roadmap.company} website`, url: roadmap.website },
          { label: "Website research", url: roadmap.website },
          { label: "Source evidence", url: roadmap.website },
        ],
        outboundUseCase: roadmap.outboundUseCase,
        outboundUseCaseNote: roadmap.outboundUseCaseNote,
        buyerRoles: roadmap.buyerRoles,
        listFilters: roadmap.listFilters,
        howOutboundHelps: roadmap.howOutboundHelps as [string, string, string],
        personalizationSignals: roadmap.personalizationSignals as [string, string, string],
        angle: roadmap.angle,
        companyEvidenceUrl: roadmap.website,
      } satisfies OutboundRoadmap,
    ]),
  ),
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
      "We’ve helped 300+ clients generate more than 500K leads and $100M+ in reported revenue.",
      "In one paid-media engagement, we lowered acquisition costs by 52% while increasing qualified leads by 38%.",
      "For Aegis IT, we connected every form and callback request directly to PipelineAMP so its team could track and follow up with each opportunity.",
    ],
    angle:
      "Build three proof lanes—paid-media efficiency, local SEO depth, and CRM-connected conversion—then let response data show which lane creates the strongest qualified interest.",
    companyEvidenceUrl: "https://mediacomponents.com/",
  },
  rm_dr_4f8k2: {
    company: "Digital Resource",
    recipient: "Anny",
    logoUrl: "https://cdn.prod.website-files.com/5d9df710f28632786a98f21a/5dd837010422d34e2b071e31_Digital-Resource-logo.webp",
    logoBackgroundColor: "#ffffff",
    proof:
      "Digital Resource reports 1,637 leads and $109,542 in revenue for Stretch Zone Manhasset in 10 months, plus $87,806 in revenue for Georgetown Sedation Dentistry in 60 days.",
    websiteFindings: [
      "Stretch Zone Manhasset generated 1,637 leads and $109,542 in revenue through a Facebook Ads campaign.",
      "Georgetown Sedation Dentistry generated $87,806 in revenue, 532 clicks, and 124 conversions in 60 days.",
      "The case-study library spans franchise, dental, home-service, e-commerce, technology, and local-business work.",
    ],
    evidenceLinks: [
      { label: "Stretch Zone case study", url: "https://www.yourdigitalresource.com/case-studies/stretch-zone-manhasset" },
      { label: "Georgetown case study", url: "https://www.yourdigitalresource.com/case-studies/georgetown-sedation-dentistry" },
      { label: "Case-study library", url: "https://www.yourdigitalresource.com/case-studies" },
    ],
    outboundUseCase: "Lead with the case study that most closely matches each prospect",
    outboundUseCaseNote:
      "The franchise, dental, and home-service results give Digital Resource multiple credible ways into a conversation. The first message can use one relevant result instead of presenting the entire service list.",
    buyerRoles: "Franchise owners, marketing directors, practice owners, and local-business operators",
    listFilters: "Franchise, dental, and home-service companies · active paid media · local or multi-location footprint",
    howOutboundHelps: [
      "Match the Stretch Zone result to franchise and wellness operators.",
      "Match the Georgetown result to dental and specialty-care practices.",
      "Use the broader case-study library to build additional evidence-led segments.",
    ],
    personalizationSignals: [
      "We helped Stretch Zone Manhasset generate 1,637 leads and $109,542 in revenue in 10 months.",
      "We helped Georgetown Sedation Dentistry generate $87,806 in revenue in 60 days.",
      "We have documented results across franchises, dental practices, home services, and e-commerce.",
    ],
    angle:
      "Turn Digital Resource’s strongest vertical-specific results into separate campaigns, then measure which proof and buyer group creates the most qualified conversations.",
    companyEvidenceUrl: "https://www.yourdigitalresource.com/",
  },
  rm_ne_9q2v7: {
    company: "NetElixir",
    recipient: "Arijeet",
    logoUrl: "https://cdn.prod.website-files.com/686d19b33da2afe91661213f/6874ce770a55f445b52bb951_netelixir-logo-dark.svg",
    logoBackgroundColor: "#ffffff",
    proof:
      "NetElixir reports a 243% increase in amika’s Amazon ad sales and 250% market-share growth for its hero product, while Rochester 100 achieved 350% year-over-year revenue growth.",
    websiteFindings: [
      "The amika engagement produced 243% Amazon ad-sales growth, a 250% market-share increase, and a number-one category position.",
      "Rochester 100 achieved 350% year-over-year revenue growth, 213% unit growth, and 182% order-volume growth.",
      "NetElixir’s case studies cover paid search, paid social, Amazon Marketplace, SEO, analytics, and web development for e-commerce brands.",
    ],
    evidenceLinks: [
      { label: "amika case study", url: "https://www.netelixir.com/case-study/amika" },
      { label: "Rochester 100", url: "https://www.netelixir.com/case-study/rochester-100" },
      { label: "Growth stories", url: "https://www.netelixir.com/case-study" },
    ],
    outboundUseCase: "Turn category-winning e-commerce results into focused prospect conversations",
    outboundUseCaseNote:
      "The amika result supports an Amazon-marketplace conversation, while Rochester 100 supports a broader multi-channel growth story. Each can anchor a separate test without changing NetElixir’s market.",
    buyerRoles: "VPs of e-commerce, digital-marketing directors, and heads of growth",
    listFilters: "Mid-sized e-commerce brands · active Amazon presence · paid-search or marketplace investment",
    howOutboundHelps: [
      "Use the amika proof with brands competing for Amazon category share.",
      "Use Rochester 100 with brands balancing marketplace and direct-channel growth.",
      "Test Amazon-specific proof against broader multi-channel proof.",
    ],
    personalizationSignals: [
      "We helped amika increase Amazon ad sales by 243% and reach the number-one position in its category.",
      "We helped Rochester 100 grow year-over-year revenue by 350%.",
      "We helped amika increase market share for its hero product by 250%.",
    ],
    angle:
      "Use NetElixir’s most specific marketplace and revenue outcomes to identify which e-commerce growth story produces the clearest qualified interest.",
    companyEvidenceUrl: "https://www.netelixir.com/",
  },
  rm_bt_6m3c8: {
    company: "Block & Tam",
    recipient: "Kellie",
    logoUrl: "https://images.squarespace-cdn.com/content/v1/68f3e83107159829b76ff2bc/20c9fada-8dcf-4594-a744-a06ca7b725b4/Blockandtam_mainlogo.png",
    logoBackgroundColor: "#ffffff",
    proof:
      "Block & Tam reports 73% revenue growth, a 29% ROAS increase, a 49% CPM reduction, and a 93% CVM improvement for Veronica Beard.",
    websiteFindings: [
      "The Veronica Beard engagement combined structured creative testing with weekly learning cycles across Meta and TikTok.",
      "The case-study library also reports 82% click growth, a 5x improvement in incremental efficiency, and 26% organic revenue uplift.",
      "Another case study reports 216% influencer-driven revenue growth after sourcing and creative optimization were rebuilt.",
    ],
    evidenceLinks: [
      { label: "Veronica Beard", url: "https://www.blockandtam.com/veronica-beard" },
      { label: "Case studies", url: "https://www.blockandtam.com/case-studies" },
      { label: "Block & Tam", url: "https://www.blockandtam.com/" },
    ],
    outboundUseCase: "Use luxury and fashion results as proof of a repeatable testing system",
    outboundUseCaseNote:
      "The Veronica Beard story is more than a topline result. It shows the creative-testing and learning process behind the outcome, giving Block & Tam a specific narrative for fashion and lifestyle brands already investing in paid social.",
    buyerRoles: "CMOs, VPs of growth, performance-marketing leaders, and e-commerce directors",
    listFilters: "Fashion, luxury, apparel, and lifestyle brands · active Meta or TikTok programs · established e-commerce operation",
    howOutboundHelps: [
      "Lead with the 73% revenue and 29% ROAS result for paid-social buyers.",
      "Use the creative-testing system when reaching teams dealing with creative fatigue.",
      "Test paid-social proof against influencer and incrementality proof.",
    ],
    personalizationSignals: [
      "We helped Veronica Beard increase revenue by 73% while improving ROAS by 29%.",
      "We drove 82% click growth during a high-stakes Mother’s Day period.",
      "We delivered 216% influencer-driven revenue growth for a fashion brand.",
    ],
    angle:
      "Pair Block & Tam’s strongest fashion result with the testing system behind it, then measure whether revenue proof, creative proof, or influencer proof produces the best conversations.",
    companyEvidenceUrl: "https://www.blockandtam.com/",
  },
  rm_ph_3w8n5: {
    company: "PHUELED",
    recipient: "Adrien",
    logoUrl: "https://framerusercontent.com/images/KVxDrIXB4zzDqcYuATXgVwMVtY.png",
    logoBackgroundColor: "#ffffff",
    proof:
      "PHUELED reports 35% year-over-year impression growth for Coachella, an 83% CPC reduction in 41 days for Netflix’s Tudum, and 49% new-customer revenue growth in 76 days for a jewelry engagement.",
    websiteFindings: [
      "The Coachella engagement produced 35% year-over-year impression growth.",
      "The Netflix Tudum engagement reduced cost per click by 83% in 41 days.",
      "PHUELED positions its work around Google Ads, incrementality, and new-customer acquisition for e-commerce and service brands.",
    ],
    evidenceLinks: [
      { label: "Client results", url: "https://phueled.com/" },
      { label: "Marketing science", url: "https://phueled.com/marketing-science" },
      { label: "PHUELED", url: "https://phueled.com/" },
    ],
    outboundUseCase: "Match rapid, measurable performance results to brands with similar acquisition goals",
    outboundUseCaseNote:
      "PHUELED has distinct proof for entertainment reach, paid-search efficiency, and new-customer revenue. Those results can support separate outbound hypotheses without compressing the work into one generic growth claim.",
    buyerRoles: "VPs of growth, performance-marketing leaders, and digital-marketing directors",
    listFilters: "E-commerce, entertainment, jewelry, and service brands · active Google Ads · measurable customer-acquisition goals",
    howOutboundHelps: [
      "Use Coachella proof for entertainment and event-led brands.",
      "Use the Tudum CPC result for teams focused on paid-search efficiency.",
      "Use the jewelry result for e-commerce brands focused on new-customer revenue.",
    ],
    personalizationSignals: [
      "We helped Coachella increase impressions by 35% year over year.",
      "We reduced Netflix Tudum’s cost per click by 83% in 41 days.",
      "We drove 49% new-customer revenue growth for a jewelry brand in 76 days.",
    ],
    angle:
      "Build separate evidence lanes around reach, efficiency, and new-customer revenue, then use campaign response data to identify the strongest entry point.",
    companyEvidenceUrl: "https://phueled.com/",
  },
  rm_cd_8r5t1: {
    company: "Conduit Digital",
    recipient: "Alexandra",
    logoUrl: "https://static.wixstatic.com/media/8f47dc_c2ee872171ea4eefb0a238631fd80651~mv2.png",
    logoBackgroundColor: "#ffffff",
    proof:
      "Conduit Digital reports a 157% year-over-year decrease in cost per employee application and a 35x increase in time on site through programmatic display.",
    websiteFindings: [
      "Conduit operates as a white-label partner for agencies across North America.",
      "The performance library publishes measurable outcomes while keeping many end-client names confidential.",
      "Its services span search, social, programmatic, streaming and video, SEO, email marketing, and reporting.",
    ],
    evidenceLinks: [
      { label: "Performance library", url: "https://www.conduitdigital.us/performance" },
      { label: "Why Conduit", url: "https://www.conduitdigital.us/why-conduit" },
      { label: "Conduit Digital", url: "https://www.conduitdigital.us/" },
    ],
    outboundUseCase: "Turn confidential white-label results into credible agency-partner conversations",
    outboundUseCaseNote:
      "Conduit can preserve client confidentiality while still leading with measurable proof. Outbound gives the team a direct way to reach agencies that may need delivery capacity without adding permanent headcount.",
    buyerRoles: "Agency owners, managing directors, media leaders, and heads of client services",
    listFilters: "Independent North American agencies · paid-media or digital-service offering · potential need for white-label capacity",
    howOutboundHelps: [
      "Lead with the 157% cost-per-application improvement for recruitment-related work.",
      "Use the 35x time-on-site result when programmatic display is relevant.",
      "Frame white-label delivery as added capability without added permanent headcount.",
    ],
    personalizationSignals: [
      "We helped an agency partner reduce cost per employee application by 157% year over year.",
      "We drove a 35x increase in time on site through programmatic display.",
      "We provide white-label execution across search, social, programmatic, video, SEO, and email.",
    ],
    angle:
      "Use Conduit’s confidential but measurable performance stories to show agencies what added delivery capacity can accomplish while they retain the client relationship.",
    companyEvidenceUrl: "https://www.conduitdigital.us/",
  },
};

export async function getOutboundRoadmap(id: string) {
  return roadmapRecords[id] ?? null;
}
