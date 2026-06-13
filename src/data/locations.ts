/**
 * Local service-area data for /locations/[slug] pages and the homepage
 * South Florida section. One entry per city. Content is written for VERA's
 * ICP: real estate investors and agents who want a partner sourcing
 * off-market deals and motivated seller leads, on a performance-based
 * partnership where VERA earns only when its partners close.
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
      "Home base. A deal-sourcing partner for Boca Raton real estate investors and agents, finding off-market deals and motivated seller leads.",
    heroIntro:
      "VERA is based in Boca Raton. We partner with local investors and agents to source off-market deals, surface motivated seller leads, read the market, and run the numbers fast. No retainer. VERA makes money only when you close.",
    whyHere: [
      "Boca Raton real estate is competitive and moves fast. Walk the Mizner Park corridor or talk to the investors and teams clustered along Glades Road and you find people fighting over the same on-market inventory. The edge is not in the listings everyone can see. It is in the off-market deal sourced before it hits the MLS and the motivated seller reached before the postcard mailers arrive. That is the part VERA works on in Boca Raton.",
      "Sourcing deals is a research problem before it is a phone problem. Reading which Boca Raton owners are likely to sell, pulling comparable sales, and running the numbers fast is the difference between chasing every lead and going hard at the few worth it. VERA finds that edge and puts it into your pipeline, so you spend your time on the deals that pencil out instead of the ones that never did.",
      "Because we are in town, the first working session and the messy parts can happen in person, the ones where being in the same room is just faster. The rest runs remotely, so distance is never the reason a deal slips. The partnership is performance-based. VERA earns only when you close.",
    ],
    nearby: ["Downtown Boca Raton", "Mizner Park", "Boca West", "Highland Beach"],
    faqExtra: [
      {
        q: "How do you source off-market deals for investors in Boca Raton?",
        a: "VERA reads which Boca Raton owners are likely to sell, surfaces motivated seller leads, and runs the numbers fast so you see deals before they hit the MLS. Since we are based here, we can meet in person around Mizner Park, downtown, or the Glades Road corridor, and run the rest remotely.",
      },
      {
        q: "What does the partnership cost in Boca Raton?",
        a: "Nothing up front. VERA is a performance-based partnership, not a retainer or an hourly fee. We make money only when you close a deal we helped source. That keeps the focus where it belongs: finding off-market deals and motivated seller leads that actually pencil out.",
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
      "Off-market deal sourcing and motivated seller leads for Delray Beach investors and agents working the Atlantic Avenue corridor and beyond.",
    heroIntro:
      "VERA partners with Delray Beach real estate investors and agents to source off-market deals and motivated seller leads, read the market, and run the numbers fast. No retainer. VERA earns only when you close.",
    whyHere: [
      "Delray Beach has one of the most active markets on the coast: walkable neighborhoods, strong demand, and properties that trade quickly once they list. By the time a deal is on the MLS, the margin is already gone. The edge sits earlier, in the off-market property and the owner who is ready to sell before they have called an agent. That is the gap VERA works in Delray.",
      "Finding those deals is a research problem. Reading which Atlantic Avenue or Pineapple Grove owners are likely to sell, surfacing motivated seller leads, pulling comps, and running the numbers fast is what separates a real pipeline from a stack of dead-end addresses. VERA finds that edge and puts it into your deals, so wholesalers, flippers, landlords, and the agents who serve them spend time on what pencils out.",
      "We meet Delray partners in person when it helps, around Pineapple Grove or downtown, and run the rest remotely. The partnership is performance-based: VERA makes money only when you close, so the incentive is always to find deals that close, not to bill hours.",
    ],
    nearby: ["Atlantic Avenue", "Pineapple Grove", "Lake Ida", "Gulf Stream"],
    faqExtra: [
      {
        q: "Do you source off-market deals near Atlantic Avenue in Delray Beach?",
        a: "Yes. Atlantic Avenue, Pineapple Grove, and downtown Delray are core territory. VERA surfaces motivated seller leads and off-market properties in those neighborhoods, runs the comps and numbers, and puts the deals that pencil out in front of you.",
      },
      {
        q: "Is the Delray Beach partnership remote or in person?",
        a: "Both. We can meet in person locally to start and for the parts that go faster face to face, then run the rest remotely. Fully remote works too. Either way the partnership is performance-based, so VERA earns only when you close.",
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
      "Practical off-market deal sourcing and motivated seller leads for Boynton Beach investors, wholesalers, and agents.",
    heroIntro:
      "VERA partners with Boynton Beach real estate investors and agents to find off-market deals and motivated seller leads, carefully and fast, so you spend your time on the deals that actually close.",
    whyHere: [
      "Boynton Beach has a fast-growing buyer pool and a steady supply of properties that never make it to a public listing: tired landlords, inherited homes, owners ready to move before they have called an agent. From Renaissance Commons to the barrier island, the deals worth having are the ones found early. That is exactly where VERA helps most, because the edge is in reaching the motivated seller before anyone else does.",
      "Finding those deals is a research problem before it is a phone problem. Reading which Boynton Beach owners are likely to sell, surfacing motivated seller leads, pulling comps, and running the numbers fast is what turns a scattered list of addresses into a real pipeline. VERA finds that edge and puts it into your deals, so wholesalers, flippers, and landlords go hard at the few worth chasing instead of dialing through dead ends.",
      "We keep it grounded: source the deals that pencil out, run the numbers honestly, and put them in front of you ready to act on. In person locally when useful, and remote the rest of the time, so being a few towns over never slows anything down. The partnership is performance-based, so VERA earns only when you close.",
    ],
    nearby: ["Downtown Boynton Beach", "Renaissance Commons", "Ocean Ridge", "Lantana"],
    faqExtra: [
      {
        q: "Do you find off-market deals for investors in Boynton Beach?",
        a: "Yes. Boynton Beach investors, wholesalers, and the agents who serve them are exactly who VERA partners with. We surface motivated seller leads and off-market properties, run the comps and numbers, and hand you the deals that pencil out, all on a performance-based partnership.",
      },
      {
        q: "How does the Boynton Beach partnership make money?",
        a: "Only when you close. VERA is a performance-based partnership, not a retainer or an hourly fee. We source off-market deals and motivated seller leads and read the numbers fast, and we earn only when a deal we helped source closes. That keeps both sides pointed at deals that actually work.",
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
      "Off-market deal sourcing and motivated seller leads for Deerfield Beach investors and agents working both sides of the county line, remote-friendly.",
    heroIntro:
      "VERA partners with Deerfield Beach real estate investors and agents to source off-market deals and motivated seller leads across the county line, read the market, and run the numbers fast. VERA earns only when you close.",
    whyHere: [
      "Deerfield Beach sits right on the line between Palm Beach and Broward, which means the investors and agents here work both markets. That doubles the territory and doubles the off-market opportunity, properties and motivated sellers on each side of the line that never surface in a public listing. The edge is in reading both markets at once and reaching those sellers first. That is the part VERA works in Deerfield.",
      "Finding deals across two counties is a research problem at scale. Reading which owners are likely to sell, surfacing motivated seller leads, pulling comps, and running the numbers fast across both Broward and Palm Beach is what turns dual-county activity from twice the noise into twice the opportunity. VERA finds that edge and puts it into your pipeline, so the deals that pencil out get your attention and the rest do not.",
      "We are close enough to meet in person when it speeds things up, and we run the rest remotely. You end up with a steady flow of off-market deals and motivated seller leads, sourced whether the property is in Broward, Palm Beach, or both. The partnership is performance-based, so VERA earns only when you close.",
    ],
    nearby: ["The Cove", "Hillsboro", "Lighthouse Point", "Pompano Beach", "Fort Lauderdale"],
    faqExtra: [
      {
        q: "Do you source off-market deals for investors in Deerfield Beach?",
        a: "Yes. VERA partners with Deerfield Beach investors and agents to surface motivated seller leads and off-market properties, run the comps and numbers, and hand over the deals that pencil out. In person locally when it helps, and remote otherwise, on a performance-based partnership.",
      },
      {
        q: "Do you cover both Broward and Palm Beach County from Deerfield Beach?",
        a: "Yes. Deerfield Beach straddles the county line, and we source deals on both sides, plus fully remote for partners further out. Working two markets at once is an advantage here: more off-market properties and more motivated sellers to reach first.",
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
      "Off-market deal sourcing and motivated seller leads for Fort Lauderdale investors, flippers, landlords, and the agents who serve them.",
    heroIntro:
      "VERA partners with Fort Lauderdale real estate investors and agents to source off-market deals and motivated seller leads, read the market, and run the numbers fast across waterfront, residential, and investment property. VERA earns only when you close.",
    whyHere: [
      "Fort Lauderdale's market runs the full range: waterfront luxury along Las Olas, dense residential turnover in Flagler Village, and a deep investor and commercial layer underneath. The on-market inventory is picked over and priced for it. The real opportunity is the off-market property and the motivated seller reached before the deal goes public. In a market this fast, the partner who finds those first is the one who wins them.",
      "Sourcing deals here is a research problem before it is a phone problem. Reading which Fort Lauderdale owners are likely to sell, surfacing motivated seller leads, pulling comps across very different submarkets, and running the numbers fast on a flip or a hold is what separates a real pipeline from a stack of zip codes. VERA finds that edge and puts it into your deals, so flippers, landlords, wholesalers, and the agents who serve them go hard at what pencils out.",
      "We meet locally when it helps, around downtown, Flagler Village, or Las Olas, and run the rest remotely. The partnership is performance-based, specific to the deals you are trying to do. VERA makes money only when you close.",
    ],
    nearby: ["Flagler Village", "Las Olas", "Victoria Park", "Wilton Manors"],
    faqExtra: [
      {
        q: "Do you source deals for investors and flippers in Fort Lauderdale?",
        a: "Yes. Fort Lauderdale's mix of waterfront, residential turnover, and investment property is core territory. VERA surfaces off-market deals and motivated seller leads, pulls comps across the submarkets, and runs the numbers on flips and holds, then hands you the deals that pencil out, on a performance-based partnership.",
      },
      {
        q: "Where in Fort Lauderdale do you meet, and what does it cost?",
        a: "In person we meet around downtown, Flagler Village, or Las Olas, and the rest runs remotely. There is nothing up front: the partnership is performance-based, so VERA earns only when a deal we helped source closes.",
      },
    ],
  },
];

const REMOTE_FAQ = {
  q: "What if I'm not local, or prefer to work remotely?",
  a: "That works. The partnership runs remotely no matter where you are, so distance is never the constraint. For nearby partners we can meet in person to start and for the parts that go faster in the same room, but it is never required. Plenty of partners are fully remote start to finish.",
};

const BASE_FAQ = [
  {
    q: "Who do you partner with?",
    a: "Real estate investors and agents who want an edge on deal flow. That includes wholesalers, fix and flip investors, buy and hold landlords, land and new construction buyers, plus the agents, teams, and brokers who serve them. If you want a partner sourcing off-market deals and motivated seller leads, that is who this is for.",
  },
  REMOTE_FAQ,
  {
    q: "Why a partner instead of a tool or a consultant?",
    a: "The technology moves every week. A tool you buy or a consultant you hire is behind the day it arrives. A partner who stays at the frontier and puts what they find into your deals is the only thing that keeps compounding. That is why VERA operates as a partnership, not a product or an engagement you pay for up front.",
  },
  {
    q: "What does it cost?",
    a: "Nothing up front. VERA is a performance-based partnership, not a retainer or an hourly fee. We make money only when you close a deal we helped source. No retainer, no hourly, no paying to try.",
  },
];

/** Shared pillars; the city name is injected by the page template. */
export const LOCATION_PILLARS = [
  {
    title: "Deal sourcing",
    body:
      "We find off-market deals and motivated seller leads before they hit the MLS, reading which owners are likely to sell and surfacing the properties worth your time. Your pipeline fills with deals you would not have seen on your own.",
  },
  {
    title: "Market and property reads",
    body:
      "We read the market and the property before the crowd does, so you know which submarkets are moving and which deals pencil out. You get the analysis early, while there is still room to act on it.",
  },
  {
    title: "Numbers, fast",
    body:
      "Comps, ARV, rehab estimates, rent and cash-flow projections, run fast so you can move on a deal before someone else does. The work compounds because the partnership stays at the frontier and puts what it finds into your deals.",
  },
];

/** Shared use cases; introduced with a city-specific lead in the template. */
export const LOCATION_USE_CASES = [
  {
    title: "Off-market deal sourcing",
    body: "Properties surfaced before they list, matched to what you buy, so your pipeline fills with deals the rest of the market has not seen yet.",
  },
  {
    title: "Motivated seller leads",
    body: "Owners likely to sell soon, identified and prioritized from the signals in the data, so outreach lands on the people actually ready to move.",
  },
  {
    title: "Comps and ARV",
    body: "Comparable sales pulled and organized into a clean read on value and after-repair value, ready before you make an offer, not the night after.",
  },
  {
    title: "Deal analysis",
    body: "Rehab estimates, rent and cash-flow projections, and flip or hold math run fast, so you know whether a deal pencils out before someone else moves on it.",
  },
  {
    title: "Lead intake and routing",
    body: "Incoming seller inquiries qualified, logged, and routed with an immediate response, so no motivated seller goes cold while you are tied up elsewhere.",
  },
  {
    title: "Market reads",
    body: "Submarkets and property types tracked and summarized into where demand is moving, so you act on the trend while there is still room in it.",
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
