/**
 * Local service-area data for /locations/[slug] pages and the homepage
 * South Florida section. One entry per city. Content is written for VERA's
 * ICP, solo entrepreneurs whose business runs on trust (coaches, consultants,
 * marketing pros, agency owners, fractional execs), specializing in agentic AI.
 *
 * Keep whyHere unique per city so these are real local pages, not near
 * duplicates. Pillars and base FAQ are shared by design and the city name is
 * woven in where it reads naturally.
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
  /** Two unique paragraphs of local context. Carries the page's unique weight. */
  whyHere: string[];
  /** Optional city-specific FAQ appended to the shared base FAQ. */
  faqExtra?: { q: string; a: string }[];
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
      "Boca runs on independent expertise. Walk through Mizner Park or the offices off Glades Road and you find coaches, fractional execs, brand strategists, and consultants whose whole business is what they personally deliver. AI is being sold to all of them, and most of it is the same generic demo. The point of working with someone local is that we build around how you actually run your practice, not a template.",
      "Because we are in town, we can meet in person for the first working session and the messy parts, the ones where being in the same room is faster. The rest happens over Google Meet on a weekly cadence, so distance is never the reason something stalls. You get a real person who answers between sessions, not a course you watch alone.",
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
      "Delray's Atlantic Avenue scene is full of independent operators in the real sense of the word: solo consultants, agency-of-one owners, creative pros, and coaches running everything themselves. The work that scales badly, proposals, follow-ups, briefs, recaps, is exactly where agentic AI earns its place, and exactly where a bad setup quietly leaks client trust.",
      "We meet Delray clients in person when it helps and run the weekly sessions over Google Meet the rest of the time. The build is shaped to your actual week, and you keep it. No dependency on us, no black box you cannot explain to a client who asks how their information is handled.",
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
      "Boynton Beach has a fast-growing base of small practices and solo professionals, the kind of business where one person wears every hat. That is the situation agentic AI helps most, because the hours lost to repetitive admin are hours you are not spending with clients. Done right, it gives you back the week. Done carelessly, it puts client information where it should not be.",
      "We keep it grounded: pick the one or two workflows actually worth building, set them up with guardrails, and make sure you can run them yourself. In person locally when useful, and over Google Meet for the weekly working sessions, so being a few towns over never slows anything down.",
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
      "Deerfield Beach sits at the line between Palm Beach and Broward, with a mix of independent consultants, service pros, and small agency owners who run lean. When you are the whole business, the bottleneck is your own time, and that is precisely what agentic AI can give back when it is built around your real workflows instead of a generic playbook.",
      "We are close enough to meet in person when it speeds things up, and we run the weekly sessions over Google Meet otherwise. You end up with AI workflows you understand and own, set up with the guardrails a trust-based practice needs.",
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
      "We meet locally when it helps and run the weekly cadence over Google Meet the rest of the time. The build is specific to how you work, you keep it, and it is set up so you can answer honestly when a client asks how their information is handled.",
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

export function getLocationFaq(loc: Location): { q: string; a: string }[] {
  return [...BASE_FAQ, ...(loc.faqExtra ?? [])];
}

export function getLocationBySlug(slug: string): Location | undefined {
  return LOCATIONS.find((l) => l.slug === slug);
}

export function getAllLocationSlugs(): string[] {
  return LOCATIONS.map((l) => l.slug);
}
