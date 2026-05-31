/**
 * Local service-area data for /locations/[slug] pages and the homepage
 * South Florida section. One entry per city. Content is written for VERA's
 * ICP, solo entrepreneurs whose business runs on trust (coaches, consultants,
 * marketing pros, agency owners, fractional execs), specializing in agentic AI.
 *
 * Keep whyHere, nearby, and faqExtra unique per city so these are real local
 * pages, not near duplicates. Pillars, use cases, and the base FAQ are shared
 * by design and the city name is woven in where it reads naturally.
 */

export interface Location {
  slug: string;
  city: string;
  /** County or region, used in copy and schema areaServed. */
  region: string;
  state: string;
  postalCode: string;
  geo: { lat: number; lng: number };
  /** One sentence for the homepage card and the /locations index. */
  blurb: string;
  /** Hero subhead on the city page. */
  heroIntro: string;
  /** Three unique paragraphs of local context. Carries the page's unique weight. */
  whyHere: string[];
  /** Neighborhoods and nearby areas served, for local relevance signals. */
  nearby: string[];
  /** City-specific FAQ appended to the shared base FAQ. Long-tail keyword coverage. */
  faqExtra: { q: string; a: string }[];
}

export const LOCATIONS: Location[] = [
  {
    slug: "boca-raton",
    city: "Boca Raton",
    region: "Palm Beach County",
    state: "FL",
    postalCode: "33431",
    geo: { lat: 26.3683, lng: -80.1289 },
    blurb:
      "Home base. 1:1 agentic AI coaching for Boca Raton coaches, consultants, and solo experts, in person or over Google Meet.",
    heroIntro:
      "VERA is based in Boca Raton. We help local coaches, consultants, marketing pros, and solo experts put agentic AI to work on the parts of the week that eat their time, without losing the trust their business runs on.",
    whyHere: [
      "Boca runs on independent expertise. Walk through Mizner Park or the offices along the Glades Road corridor and you find coaches, fractional execs, brand strategists, and consultants whose whole business is what they personally deliver. AI is being sold to all of them, and most of it is the same generic demo. The point of working with a Boca Raton AI consultant who is actually local is that we build around how you run your practice, not a template you have to bend yourself around.",
      "Agentic AI is the part worth understanding. An assistant answers one question at a time; an agent takes a goal and works through the steps. For a solo expert in Boca Raton that is the difference between a tool you babysit and a workflow that drafts the proposal, pulls the research, and writes the follow-up while you do the work only you can do. That is what VERA coaches and builds, applied to your real week.",
      "Because we are in town, the first working session and the messy parts can happen in person, the ones where being in the same room is just faster. The weekly cadence then runs over Google Meet, so distance is never the reason something stalls. You get a real person who answers between sessions, not a course you watch alone.",
    ],
    nearby: ["Downtown Boca Raton", "Mizner Park", "Boca West", "Highland Beach"],
    faqExtra: [
      {
        q: "Do you offer in-person AI coaching in Boca Raton?",
        a: "Yes. Since VERA is based in Boca Raton, we can meet in person around Mizner Park, downtown, or the Glades Road corridor for the first working session and the parts that go faster face to face. The weekly sessions then run over Google Meet.",
      },
      {
        q: "What agentic AI workflows do you build for Boca Raton consultants and coaches?",
        a: "Proposals and scoping docs, client follow-ups, content and marketing drafts, meeting recaps, research briefs, and scheduling, the repetitive work that fills a solo practice's week. We build the one or two worth automating first, with guardrails, and hand them off so they are yours.",
      },
    ],
  },
  {
    slug: "delray-beach",
    city: "Delray Beach",
    region: "Palm Beach County",
    state: "FL",
    postalCode: "33444",
    geo: { lat: 26.4615, lng: -80.0728 },
    blurb:
      "Agentic AI coaching for the Delray Beach coaches, consultants, and creative solo pros working off Atlantic Avenue and beyond.",
    heroIntro:
      "VERA works with Delray Beach coaches, consultants, marketing pros, and solo experts who want agentic AI built around their practice, with the trust their clients expect kept intact.",
    whyHere: [
      "Delray's Atlantic Avenue scene is full of independent professionals in the real sense: solo consultants, agency-of-one owners, creative pros, and coaches running everything themselves. The work that scales badly, proposals, follow-ups, briefs, recaps, is exactly where agentic AI earns its place, and exactly where a careless setup quietly leaks the client trust a Delray Beach practice is built on.",
      "Most AI coaching you find online is a generic curriculum. A Delray Beach AI consultant who works with you 1:1 is different: we look at your actual week, find the one or two workflows worth building, and set them up with guardrails so you can explain to any client how their information is handled. Agentic AI means the workflow can run multiple steps on its own, drafting, checking, and finishing, instead of you prompting a chatbot line by line.",
      "We meet Delray clients in person when it helps, around Pineapple Grove or downtown, and run the weekly sessions over Google Meet the rest of the time. The build is shaped to your practice, and you keep it. No dependency on us, no black box.",
    ],
    nearby: ["Atlantic Avenue", "Pineapple Grove", "Lake Ida", "Gulf Stream"],
    faqExtra: [
      {
        q: "Do you work with coaches and creative pros near Atlantic Avenue in Delray Beach?",
        a: "Yes, that is most of who we work with in Delray: coaches, consultants, marketing and brand pros, and agency-of-one owners around Atlantic Avenue, Pineapple Grove, and downtown. The agentic AI workflows are built around how your specific practice runs.",
      },
      {
        q: "Is the AI coaching in Delray Beach remote or in person?",
        a: "Both. We can meet in person locally for the first session and the parts that go faster face to face, then run the weekly cadence over Google Meet. Fully remote works too if you prefer.",
      },
    ],
  },
  {
    slug: "boynton-beach",
    city: "Boynton Beach",
    region: "Palm Beach County",
    state: "FL",
    postalCode: "33435",
    geo: { lat: 26.5318, lng: -80.0905 },
    blurb:
      "Practical agentic AI coaching for Boynton Beach solo consultants, coaches, and small practice owners.",
    heroIntro:
      "VERA helps Boynton Beach coaches, consultants, and solo experts adopt agentic AI on the work they already do, carefully, so the trust their business depends on stays intact.",
    whyHere: [
      "Boynton Beach has a fast-growing base of small practices and solo professionals, the kind of business where one person wears every hat. That is the situation agentic AI helps most, because the hours lost to repetitive admin are hours you are not spending with clients. Done right, it gives you back the week. Done carelessly, it puts client information where it should not be, which is the last thing a trust-based Boynton Beach practice can afford.",
      "Agentic AI is worth understanding before you adopt it. A plain chatbot answers one prompt at a time. An agent takes a goal, like turning your call notes into a follow-up and a scoped proposal, and works through the steps on its own. As a Boynton Beach AI consultant, VERA coaches you to use that well and builds the workflows so they run reliably, not as a demo that breaks the second week.",
      "We keep it grounded: pick the one or two workflows actually worth building, set them up with guardrails and documentation, and make sure you can run them yourself. In person locally when useful, and over Google Meet for the weekly working sessions, so being a few towns over never slows anything down.",
    ],
    nearby: ["Downtown Boynton Beach", "Renaissance Commons", "Ocean Ridge", "Lantana"],
    faqExtra: [
      {
        q: "Do you serve small practice owners and solo consultants in Boynton Beach?",
        a: "Yes. Boynton Beach is full of one-person businesses and small practices, which is exactly who VERA works with. We build agentic AI into the workflows that eat your week so you get time back without adding headcount.",
      },
      {
        q: "What does agentic AI mean for a solo business in Boynton Beach?",
        a: "It means AI that completes multi-step work, not just answers questions. Instead of prompting a chatbot over and over, you set a goal and the agent drafts, checks, and finishes, like turning a discovery call into notes, a follow-up, and a proposal. We coach you to use it and build it with guardrails so it is reliable.",
      },
    ],
  },
  {
    slug: "deerfield-beach",
    city: "Deerfield Beach",
    region: "Broward County",
    state: "FL",
    postalCode: "33441",
    geo: { lat: 26.3184, lng: -80.0998 },
    blurb:
      "Agentic AI coaching for Deerfield Beach consultants, coaches, and independent professionals, remote-friendly via Google Meet.",
    heroIntro:
      "VERA works with Deerfield Beach coaches, consultants, marketing pros, and solo experts who want agentic AI fitted to their practice without putting client trust at risk.",
    whyHere: [
      "Deerfield Beach sits right on the line between Palm Beach and Broward, with a mix of independent consultants, service pros, and small agency owners who run lean. When you are the whole business, the bottleneck is your own time, and that is precisely what agentic AI can give back when it is built around your real workflows instead of a generic playbook bought off a webinar.",
      "Hiring a Deerfield Beach AI consultant who works 1:1 means the build matches your practice. We find the one or two workflows worth automating, proposals, follow-ups, content, recaps, set them up with guardrails, and coach you until you can run and adjust them yourself. Agentic AI is the engine: it carries a task through several steps on its own rather than waiting on you for each one.",
      "We are close enough to meet in person when it speeds things up, and we run the weekly sessions over Google Meet otherwise. You end up with AI workflows you understand and own, set up with the guardrails a trust-based practice needs, whether your clients are in Broward, Palm Beach, or anywhere else.",
    ],
    nearby: ["The Cove", "Hillsboro", "Lighthouse Point", "Pompano Beach"],
    faqExtra: [
      {
        q: "Do you offer AI coaching and consulting in Deerfield Beach?",
        a: "Yes. VERA works with Deerfield Beach coaches, consultants, and solo professionals, building agentic AI into the day-to-day work that fills your week. In person locally when it helps, and over Google Meet for the weekly cadence.",
      },
      {
        q: "Do you cover both Broward and Palm Beach County from Deerfield Beach?",
        a: "Yes. Deerfield Beach straddles the county line, and we work across both, plus fully remote over Google Meet for clients further out. Where you sit on the map does not change the work.",
      },
    ],
  },
  {
    slug: "fort-lauderdale",
    city: "Fort Lauderdale",
    region: "Broward County",
    state: "FL",
    postalCode: "33301",
    geo: { lat: 26.1224, lng: -80.1373 },
    blurb:
      "Agentic AI coaching for Fort Lauderdale's freelance, agency, and consulting scene, in person or over Google Meet.",
    heroIntro:
      "VERA helps Fort Lauderdale consultants, marketing pros, agency owners, and solo experts adopt agentic AI on the work they already do, with the trust their clients count on kept front and center.",
    whyHere: [
      "Fort Lauderdale's Flagler Village and Las Olas corridors hold one of the densest freelance and small-agency scenes in South Florida: marketing pros, brand strategists, social media managers, and independent consultants. The repetitive work that fills their week, briefs, drafts, reporting, client updates, is exactly where agentic AI pays off, and exactly where a careless rollout risks the client relationships that pay the bills.",
      "A Fort Lauderdale AI consultant who works with you 1:1 builds around your real work rather than handing you a course. We find the one or two workflows worth automating and set them up properly, with guardrails, evaluation, and documentation. Agentic AI is what makes it worth doing: the workflow runs several steps on its own, so a campaign brief, a content draft, and a client update get done while you focus on the work clients actually pay you for.",
      "We meet locally when it helps, around downtown, Flagler Village, or Las Olas, and run the weekly cadence over Google Meet the rest of the time. The build is specific to how you work, you keep it, and it is set up so you can answer honestly when a client asks how their information is handled.",
    ],
    nearby: ["Flagler Village", "Las Olas", "Victoria Park", "Wilton Manors"],
    faqExtra: [
      {
        q: "Do you work with agencies and freelancers in Fort Lauderdale?",
        a: "Yes. Fort Lauderdale's freelance and small-agency scene around Flagler Village and Las Olas is a core part of who we work with: marketing pros, brand strategists, social media managers, and independent consultants. We build agentic AI into the briefs, drafts, reporting, and client updates that eat the week.",
      },
      {
        q: "Where in Fort Lauderdale do you meet for AI coaching?",
        a: "For in-person sessions we meet around downtown, Flagler Village, or Las Olas. The weekly working sessions run over Google Meet, and fully remote is always an option.",
      },
    ],
  },
];

const REMOTE_FAQ = {
  q: "What if I'm not local, or prefer to meet remotely?",
  a: "That works. Most of the engagement runs over Google Meet on a weekly cadence no matter where you are, so distance is never the constraint. For nearby clients we can meet in person for the first working session and the parts that go faster in the same room, but it is never required. Plenty of clients are fully remote start to finish.",
};

const BASE_FAQ = [
  {
    q: "Who do you work with?",
    a: "Solo experts whose business runs on trust: coaches, consultants, marketing pros, SEO consultants, brand strategists, social media managers, independent agency owners, and fractional execs. If your business is built on what you personally deliver, that is who this is for.",
  },
  REMOTE_FAQ,
  {
    q: "How long does it take?",
    a: "Coaching runs on a weekly cadence over an initial three months, then ongoing if it is working. Strategy and integration work is scoped to deliverables, usually a few weeks to a few months depending on what we are building. We scope an honest first phase rather than sell a long retainer up front.",
  },
  {
    q: "What does it cost?",
    a: "It depends on whether we are coaching, building, or both. You get a clear number and the deliverables in writing after a short intro call. No hourly meter, no surprise change orders.",
  },
];

/** Shared pillars; the city name is injected by the page template. */
export const LOCATION_PILLARS = [
  {
    title: "Coaching",
    body:
      "Private weekly 1:1 sessions built around how you actually run your practice. By the end you can evaluate tools, write better prompts, and run agentic AI workflows yourself, with no dependency on anyone else.",
  },
  {
    title: "Strategy",
    body:
      "We find the one or two workflows genuinely worth building, the ones eating your week, and skip the ten that only look good in a slide. You leave with a plan you can act on, not a wish list.",
  },
  {
    title: "Integration",
    body:
      "Plans do not save time, systems do. We build the agentic AI workflows into how you work, with the guardrails, evaluation, and documentation a trust-based practice needs, then hand them off so they are yours.",
  },
];

/** Shared use cases; introduced with a city-specific lead in the template. */
export const LOCATION_USE_CASES = [
  {
    title: "Proposals and scoping",
    body: "Turn a discovery call into a clean, scoped proposal in minutes instead of an evening, in your voice and format.",
  },
  {
    title: "Client follow-ups",
    body: "Notes, recaps, and next steps written and sent the same hour, personalized to what each client actually asked about.",
  },
  {
    title: "Content and marketing",
    body: "First drafts of posts, newsletters, and briefs that sound like you, so editing replaces staring at a blank page.",
  },
  {
    title: "Research and briefs",
    body: "A question becomes a tidy brief with sources, fast, whether it is a market read, a competitor scan, or prep for a call.",
  },
  {
    title: "Meeting notes",
    body: "Calls captured, summarized, and turned into action items and a follow-up without you typing through the conversation.",
  },
  {
    title: "Scheduling and intake",
    body: "Intake, routing, and the back-and-forth of booking handled by a workflow so the busywork stops landing on you.",
  },
];

export function getLocationFaq(loc: Location): { q: string; a: string }[] {
  return [...BASE_FAQ, ...loc.faqExtra];
}

export function getLocationBySlug(slug: string): Location | undefined {
  return LOCATIONS.find((l) => l.slug === slug);
}

export function getAllLocationSlugs(): string[] {
  return LOCATIONS.map((l) => l.slug);
}
