/**
 * Vertical landing pages.
 *
 * Each entry powers a /for/[slug] page and the homepage marquee link.
 * Slugs are immutable once shipped (URLs, sitemap, inbound links). Old agent
 * slugs are 301-redirected to these in next.config.ts.
 *
 * Voice rules:
 * - No em-dashes. Use commas, periods, line breaks.
 * - No AI slop ("leverage", "unlock", "supercharge", "transform",
 *   "harness", "elevate", "empower", "robust", "seamless", verb-form
 *   "scale" without an object).
 * - No filler intros ("In today's fast-paced world", "Whether you're a").
 * - Direct, opinionated, short sentences. Specific tools and times of day.
 *
 * Content shape per vertical:
 * - intro: 1-2 sentence lede that earns the read.
 * - openingEssay: 3-4 editorial paragraphs that set the scene.
 * - painPoints: 4-6 things that actually eat the week.
 * - whatChanges: 3-4 before/after vignettes.
 * - workflows: 6-8 cards. Specific, named, narrow.
 * - howWeWork: 2-3 paragraphs explaining the partnership.
 * - whatThisIsNot: one sharp paragraph of refusal.
 * - anecdote: optional 3-part scenario block.
 * - faq: 4-6 of the questions buyers actually ask.
 * - primaryKeyword + secondaryKeywords: SEO targets.
 */

export interface Vertical {
  slug: string;
  marqueeLabel: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  painPoints: string[];
  workflows: { title: string; body: string }[];
  faq: { q: string; a: string }[];

  openingEssay: string[];
  whatChanges: { heading: string; body: string }[];
  howWeWork: string[];
  whatThisIsNot: string;
  anecdote?: { setup: string; turn: string; line: string };
  primaryKeyword: string;
  secondaryKeywords: string[];
}

export const VERTICALS: Vertical[] = [
{
  "slug": "wholesalers",
  "marqueeLabel": "Wholesalers",
  "h1": "AI for Wholesalers.",
  "metaTitle": "AI for Wholesalers | VERA",
  "metaDescription": "AI for wholesalers that finds motivated seller leads and off-market deals, scores lists, drafts outreach in your name, and prices ARV fast. Partner, not a tool.",
  "intro": "Wholesaling is a sourcing game. VERA finds the motivated sellers and off-market deals other wholesalers never see, scores the list, and gets your outreach out before the competition dials.",
  "painPoints": [
    "Your list is the same list every other wholesaler in the market bought, and you are all door-knocking the same tired absentee owners",
    "Skip tracing and scoring ten thousand records by hand means most of the list never gets worked, and the good leads age out before you reach them",
    "Cold outreach goes out as a generic blast, so motivated sellers tunnel right past it and your reply rate stays in the basement",
    "A lead finally calls back and you are guessing at ARV and repair costs on the phone, then watching the spread vanish when a real comp shows up",
    "Your cash buyer list is thin and stale, so you lock a contract and scramble to assign it before the inspection period burns down",
    "Dead leads pile up in the CRM with no follow-up sequence, and the seller who was not ready in March sells to someone else in July"
  ],
  "workflows": [
    {
      "title": "Off-market lead sourcing",
      "body": "We find motivated sellers across the data most wholesalers never combine: absentee owners, high equity, pre-foreclosure, probate, tired landlords, code violations, long ownership. The result is a list specific to your market and your criteria, not a generic county pull everyone else already has."
    },
    {
      "title": "Motivated-seller scoring",
      "body": "Every record on the list gets ranked by likelihood to sell, blending equity, distress signals, ownership length, and life events into one score. You work the top of the list first and stop wasting calls on owners who will never deal."
    },
    {
      "title": "Skip trace and outreach in your name",
      "body": "We skip trace the scored list and draft a first touch written to each property and owner, sent across call, text, and mail in your name. Ten thousand cold records become a few hundred warm, personalized outreaches in a day, not a month."
    },
    {
      "title": "ARV and rehab modeling",
      "body": "Address in, numbers out: pulled comps, ARV, a repair estimate by scope, and the max allowable offer for your spread. Fast enough to price a deal while the seller is still on the phone, accurate enough that the number holds at closing."
    },
    {
      "title": "Cash buyer matching",
      "body": "Your buyer list mapped to each deal the moment it is under contract. We match by box, price range, area, and buy history, then route the property to the buyers most likely to take it, so the assignment closes inside the inspection window."
    },
    {
      "title": "Cold lead reactivation",
      "body": "The sellers who said not yet are not dead, they are early. We surface re-engagement timing across your old lists and CRM and draft follow-up that references their specific property, so the owner who passed in spring hears from you again right when they are ready."
    },
    {
      "title": "Comp and offer analysis",
      "body": "Two or three deals side by side on the numbers that decide which one you chase: spread, ARV confidence, repair risk, days to assign, and a plain-language read on which one is the cleaner contract."
    },
    {
      "title": "Market and neighborhood reads",
      "body": "Where the motivated-seller density is rising, which zips your cash buyers are hungry for right now, and where spreads are widening before the rest of the market notices. The edge is knowing where to point the list next month, not last month."
    }
  ],
  "faq": [
    {
      "q": "How does the deal-source fee work? What does it cost to start?",
      "a": "There is no cost to start: no retainer, no hourly, no fee to try it. VERA makes money only when you assign a contract and get paid. If a deal we sourced and scored closes, we share in your fee. If nothing closes, you owe nothing."
    },
    {
      "q": "Where do the leads come from, and how are they different from a list service?",
      "a": "We combine the data most wholesalers never put together: absentee owners, high equity, pre-foreclosure, probate, tired landlords, code violations, long ownership. Then we score every record by real motivation signals so you call the top doors first. A raw county pull is the same data every wholesaler in your market already bought; this is a list built to your market and your criteria."
    },
    {
      "q": "Is my territory exclusive, or are you working the same deals with other wholesalers nearby?",
      "a": "Talk to us about your market before you assume the worst. We will be straight with you about how we handle overlap in your area, because sending the same scored lead to competing partners would undercut the close rate we both get paid on. Our incentive is your contract closing, not flooding a zip code."
    },
    {
      "q": "What happens if no deal closes? Am I still on the hook for anything?",
      "a": "Nothing. The arrangement is performance-based: if you do not assign a contract, we do not get paid. No retainer, no monthly bill, no minimums. We only win when you close, which is why we will not waste your time with marginal leads or lists already worked to death."
    },
    {
      "q": "Do I own the leads, the data, and the seller relationships, or do you?",
      "a": "You do. The outreach goes out in your name, the seller who calls back is calling you, and the relationship is yours. We put the scored lists, the personalized first touch, and the deal math into your pipeline; the contacts and the contracts stay with your business."
    }
  ],
  "openingEssay": [
    "Wholesaling lives and dies on one number: how many real off-market leads you can put in front of a motivated seller before the next investor does. The contract, the assignment, the fee, none of it happens without deal flow at the top. Most wholesalers spend their week fighting that top of the funnel by hand, and it shows in the close rate.",
    "The list is the problem, then it is the speed, then it is the pricing. A raw pull from a list service is ten thousand absentee owners with no signal on who is actually ready to sell. Skip tracing, scoring, and personalizing outreach across that volume is days of work, so most of it never gets done. The leads that do get worked get a generic blast that motivated sellers ignore. Then a deal comes back and you guess at ARV and repairs, and the spread you thought you had disappears at the closing table.",
    "A tool will not fix this. The list services and dialers you already pay for are the same ones every wholesaler in your market pays for, so you are all working the same data the same way. A consultant will not fix it either, because by the time anyone writes down a playbook, the models that source and score have already moved. The thing that compounds is a partner who stays at the frontier of what AI can do and points it straight at your deal flow, every week, as the technology changes underneath it.",
    "That is what VERA is. We run the smartest models in the world against the boring, brutal work that decides whether you close: finding the sellers with real motivation, scoring the list so you call the right doors first, writing outreach that sounds like you sent it, and pricing the deal fast enough to lock it before someone else does. We make money when you assign the contract, not before."
  ],
  "whatChanges": [
    {
      "heading": "The list that calls the right doors first",
      "body": "You used to work a ten thousand record pull top to bottom and burn a week on doors that were never going to sell. Now the list comes back scored by real motivation signals, equity, distress, ownership length, life events, and you call the top two hundred first. Same list, the deals surface in days instead of months."
    },
    {
      "heading": "Outreach that does not read like a blast",
      "body": "A pull of absentee owners used to get one generic text and a 1 percent reply rate. Now each top lead gets a first touch written to that property and that owner, sent in your name across the channels you already use. The sellers who were ignoring you start replying because it no longer sounds like the seventh wholesaler this week."
    },
    {
      "heading": "ARV and repairs before you hang up",
      "body": "A seller calls back at 4 PM and you used to stall, run comps that night, and call back tomorrow when they had already talked to two other buyers. Now the comps, the ARV, and a repair estimate are in front of you while you are still on the phone. You make the offer live and lock the contract that afternoon."
    },
    {
      "heading": "The assignment that is already lined up",
      "body": "You used to lock a deal and then start texting buyers, sweating the inspection clock. Now your cash buyer list is matched to the deal the moment it is under contract, the right buyers get the property mapped to their box, and the assignment closes inside the window instead of at the edge of it."
    }
  ],
  "howWeWork": [
    "VERA is a partnership, not a purchase. There is no retainer, no hourly, no fee to try it. We bring the deal flow and the edge, we put the intelligence into your sourcing, and we make money only when you assign a contract and get paid. If you do not close, neither do we. That is the whole arrangement.",
    "We do this because the technology will not sit still. The models that source, score, and price are better every week, and a tool you bought last quarter or a playbook a consultant handed you is already behind. We stay at the frontier full time and keep pointing whatever is newest and sharpest straight at your deal flow, so the edge compounds instead of decaying.",
    "Behind it is a small operations team running the smartest AI in the world against the unglamorous work that decides your fee. You do not manage software or learn a system. You get the scored lists, the outreach in your name, the deal math, and the buyer matches, and we are aligned with you on the only outcome that matters, which is the contract closing."
  ],
  "whatThisIsNot": "This is not a course, and there is nothing to learn before it works. It is not a list you buy once and burn through. It is not a consultant who hands you a playbook and invoices you whether or not a deal closes. It is not software you log into and run yourself. It is a performance-based partner that sources the deals, scores the leads, and prices the numbers, and gets paid only when you assign the contract.",
  "anecdote": {
    "setup": "A wholesaler in a competitive metro was buying the same absentee-owner list as every other investor in town and texting it with one generic blast. He was pulling maybe one contract a month and could not tell you why those sellers said yes when a hundred others ignored him.",
    "turn": "We rescored his existing list against motivation signals he was not combining, equity, ownership length, code violations, and probate, then drafted a first touch written per property and sent in his name. The top two hundred leads went out warm in a day. ARV and repair numbers were ready on every callback, so he was making offers live instead of calling back the next morning.",
    "line": "Same list he already owned. The deals were always in there. He just had not been calling the right doors first."
  },
  "primaryKeyword": "ai for wholesalers",
  "secondaryKeywords": [
    "motivated seller leads",
    "off-market real estate deals",
    "wholesale real estate leads",
    "real estate deal sourcing",
    "find off-market properties",
    "ai for real estate investors",
    "real estate lead generation"
  ]
},
{
  "slug": "fix-and-flip",
  "marqueeLabel": "Fix & flip",
  "h1": "AI for Fix and Flip Investors.",
  "metaTitle": "Fix and Flip Deal Analysis with AI | VERA",
  "metaDescription": "Fix and flip deal analysis and off-market sourcing, run by an AI partner. VERA finds the deals, models ARV and rehab, and only gets paid when you close.",
  "intro": "The flip you want is not on the MLS. It is a tired house owned by someone who has not decided to sell yet. VERA finds it first, runs the numbers before the crowd, and brings it to you as a partner who only wins when you close.",
  "painPoints": [
    "The on-market deals are picked over and priced for a retail buyer, so the spread is gone before you make an offer",
    "Your last seller list went cold because the skip-trace data was stale and the outreach sounded like every other postcard in the mailbox",
    "Pulling and adjusting comps for ARV eats an evening per property, and a soft comp can turn a green deal red after you already bought",
    "Rehab estimates swing by twenty thousand depending on who walks it, and you find the real number after demo starts",
    "You see a promising address and lose a day deciding whether it pencils while a cash buyer two zip codes over already has it under contract",
    "Good wholesalers send you their leftovers, and the A-deals get assigned to the buyer they called first"
  ],
  "workflows": [
    {
      "title": "Off-market deal sourcing",
      "body": "We hunt the houses that never hit the MLS: absentee owners, tired landlords, pre-foreclosures, inherited and code-violation properties in your target zips. Scored against your exact buy box and price band, so what reaches you already fits the kind of flip you actually do."
    },
    {
      "title": "Motivated-seller signal scoring",
      "body": "Not every distressed property has a motivated owner. We read the signals, equity position, time held, tax status, occupancy, life events in the public record, and rank the list by who is most likely to sell at a number that works for a flip. You work the top of the list, not the whole haystack."
    },
    {
      "title": "Skip-trace and outreach in your name",
      "body": "We trace owners to real, current contact info and run the first-touch outreach in your name and your voice across call, text, and mail. The seller who calls back is calling you, with the property already qualified, so you spend your time talking to people who want to deal."
    },
    {
      "title": "ARV and comp analysis",
      "body": "Defensible after-repair value on any address in minutes. Recent comparable sales adjusted for condition, size, and location, with weak comps flagged and a confidence range, so your offer is anchored to reality and you can defend the number to a lender or a partner."
    },
    {
      "title": "Rehab scope and cost modeling",
      "body": "A line-item rehab estimate from photos, property age, and your scope, priced to your local crew and material costs. The number you need to know whether the deal still pencils, before you commit, not after the dumpster shows up."
    },
    {
      "title": "Deal underwriting in minutes",
      "body": "Purchase price, rehab, holding and selling costs, and ARV run into max allowable offer, projected spread, and return on cash. A one-page read on whether to make the offer and at what number, fast enough to beat the cash buyer who is also looking at it."
    },
    {
      "title": "Buyer and exit matching",
      "body": "We match the finished product, or the wholesale assignment, to the end buyer most likely to take it and at what price. Retail flip, landlord, or another investor. You know the exit before you commit to the entry."
    },
    {
      "title": "Market and timing reads",
      "body": "Where days-on-market, price cuts, and inventory are moving in your submarkets, so you flip into demand instead of into a stalling market. The read that tells you which zip to push on this quarter and which one to wait out."
    }
  ],
  "faq": [
    {
      "q": "How does VERA get paid on a flip?",
      "a": "We get paid only when you close a flip, with no retainer, no hourly, and no monthly fee. Our cut comes out of the spread on a deal we sourced and underwrote and you closed. If we never put a deal in front of you that you close, we never get paid."
    },
    {
      "q": "Where do the off-market deals come from?",
      "a": "We hunt the houses that never hit the MLS: absentee owners, tired landlords, pre-foreclosures, inherited and code-violation properties in your target zips. We score owners by motivation using equity, time held, tax status, occupancy, and life events in the public record, then trace them to current contact info and run first-touch outreach in your name. The seller who calls back is calling you, with the property already qualified."
    },
    {
      "q": "Who carries the risk if the ARV or rehab number is off?",
      "a": "You make the buy decision and you own the deal, so the acquisition risk is yours. Our job is to give you a defensible ARV with weak comps flagged and a confidence range, plus a line-item rehab estimate priced to your local crew costs, before you commit. We surface the numbers so you can walk away from a deal that does not pencil, rather than finding out after demo starts."
    },
    {
      "q": "How accurate are the comps and rehab estimates?",
      "a": "The ARV is built from recent comparable sales adjusted for condition, size, and location, with soft comps flagged so you do not anchor to a sale that does not apply, and it comes with a confidence range rather than a single hopeful number. Rehab is a line-item range from photos, property age, and your scope, priced to your local costs instead of a national average. These are inputs you can defend to a lender or a partner, and you confirm them on your own walkthrough before you sign."
    },
    {
      "q": "What happens if a deal falls through?",
      "a": "If it does not close, we do not get paid for it, so a dead deal costs you nothing in fees. We keep sourcing against your buy box and bring you the next qualified address. Because our incentive is your spread, we are not going to waste your time with marginal deals just to fill a pipeline."
    }
  ],
  "openingEssay": [
    "Fix and flip lives and dies on two numbers and a clock. The number you buy at, the number you sell at, and how fast you can be certain of both before the deal moves to someone else. Get the buy wrong by fifteen thousand and the flip that looked like a forty-thousand-dollar spread is a part-time job that pays minimum wage. Most flippers are not losing on the rehab. They are losing on the deals they never saw and the comps they trusted too late.",
    "The MLS is the wrong place to win. By the time a flip-worthy property is listed, an agent has run the comps, three other investors have it in a spreadsheet, and the price already reflects what it is worth. The money is in the houses that are not listed: the inherited property two states away from the heir, the landlord who is done with one bad tenant, the pre-foreclosure where the owner still has equity and no plan. Finding those at volume, then knowing in minutes which ones actually pencil, is the whole game.",
    "A tool will not get you there, and a consultant will not either. The data sources, the models that read a property and a market, the outreach that gets a tired seller to call back, all of it moves every single week. The skip-trace stack that worked in January is mid-tier by summer. A piece of software you buy is frozen the day it ships. Someone you pay to advise you is one step removed from the deal. The only thing that compounds is a partner who stays at the frontier of what this technology can do and points it directly at your next acquisition.",
    "That is what VERA is. Not a course, not a list, not a login. A partner that sources off-market opportunities, surfaces motivated sellers, models ARV and rehab before you walk the property, and runs on the smartest AI in the world behind the curtain. We make money when you close a flip and at no other time. Our incentive is your spread, which means we are not selling you access. We are finding you deals."
  ],
  "whatChanges": [
    {
      "heading": "The deal that was never listed",
      "body": "Instead of refreshing the MLS for scraps, you wake up to three off-market addresses that fit your buy box, each with the owner's situation, an equity estimate, and an ARV range already attached. You are not the tenth call. The owner has not talked to anyone else yet."
    },
    {
      "heading": "The comp set you can actually trust",
      "body": "A property comes in and you have a defensible ARV in minutes, not after an evening in the MLS. Recent sales, adjusted for condition and footprint, with the soft comps flagged so you do not anchor your offer to a sale that does not really apply. You make the offer the same day, with conviction."
    },
    {
      "heading": "The rehab number before you swing a hammer",
      "body": "Photos, age, and the scope you describe turn into a line-item rehab range tied to your local crew costs, not a national average. You know whether the spread survives a kitchen, a roof, and a surprise before you ever sign, so demo-day surprises do not eat the profit."
    },
    {
      "heading": "The exit lined up at acquisition",
      "body": "Before you close the buy, you already know who the likely end buyer is and at what number. The retail flip price, or the buy-and-hold investor whose criteria this hits, with their offer range. You are not hoping it sells in ninety days. You bought it knowing where it lands."
    }
  ],
  "howWeWork": [
    "We are a partner, not a vendor. We bring you the deals, the seller leads, the ARV, the rehab number, and the exit. We make money only when you close a flip. No retainer, no hourly, no monthly fee, no paying to try. If we do not put a deal in front of you that you close, we do not get paid. That is the entire arrangement, and it is on purpose.",
    "It works because our incentive is your spread. A consultant gets paid whether your deal is good or not. A software subscription charges you whether you ever close. We only win when you win, which means we are not going to waste your time with marginal addresses or seller lists that have already been worked to death. The deals we bring you are the ones we would want a share of.",
    "Behind it is an operations team running the strongest AI in the world, pointed at sourcing and underwriting all day. The technology moves every week and we move with it, so the edge you get this quarter is sharper than the one you had last quarter. You do not manage any of that. You get the deals, the numbers, and the exit, and you decide what to buy."
  ],
  "whatThisIsNot": "This is not a course on how to flip houses, and nobody here is going to teach you a system you already know. It is not a list of leads you buy once and work until it goes cold. It is not a consultant who hands you a strategy deck and an invoice. It is not software you log into and operate yourself. It is a partner that does the sourcing and the analysis, brings you deals that pencil, and gets paid only when you close one.",
  "anecdote": {
    "setup": "A flipper doing six houses a year was sourcing entirely off the MLS and the occasional wholesaler assignment. The on-market spreads had compressed to where two of his last four flips barely cleared their costs, and the good wholesale deals were going to buyers who got the call before he did.",
    "turn": "We turned on off-market sourcing in his three target zips, scored the owners by motivation, and ran skip-trace outreach in his name. Every qualified callback came with an ARV range and a rehab estimate already attached, and he was underwriting same-day instead of losing a property to a faster buyer.",
    "line": "He closed four off-market flips in the next five months, each one at a spread the MLS had not offered him in over a year, and VERA was paid only on the ones that closed."
  },
  "primaryKeyword": "fix and flip deal analysis",
  "secondaryKeywords": [
    "off-market real estate deals",
    "ai for real estate investors",
    "motivated seller leads",
    "real estate deal sourcing",
    "find off-market properties",
    "arv calculator ai",
    "fix and flip leads",
    "real estate lead generation"
  ]
},
{
  "slug": "buy-and-hold",
  "marqueeLabel": "Buy & hold",
  "h1": "AI for Buy and Hold Investors.",
  "metaTitle": "AI for Buy and Hold Investors | VERA",
  "metaDescription": "Off-market real estate deals and motivated seller leads for buy and hold investors. VERA sources rentals, runs the numbers, and only gets paid when you close.",
  "intro": "Buy and hold is won on acquisition. The rentals that cash flow are bought right, before the listing goes live and the bidding starts. VERA finds those deals and brings them to you.",
  "painPoints": [
    "Deal flow has dried up. The on-market inventory that pencils as a rental is gone, and what is left does not cash flow at today's rates.",
    "Every property worth owning has eight offers on it within a day, and you are bidding against people who will accept a worse return than you will.",
    "Your seller lists are stale. The same skip-traced numbers everyone bought, dialed by everyone, answered by no one.",
    "Underwriting a deal takes you a full evening of pulling rent comps, estimating turn costs, and modeling the hold, so half of them are gone before you finish.",
    "Rent comps and ARV pulled from a portal are wrong often enough that one bad number turns a buy into a should not have.",
    "Equity sits dead in seasoned properties that should be refinanced or 1031'd, but finding the next acquisition to roll into is the bottleneck."
  ],
  "workflows": [
    {
      "title": "Off-market rental sourcing",
      "body": "VERA scans for owners likely to sell, absentee landlords, long-tenured owners, equity-rich properties, distressed notes, and matches them against your buy box: market, unit count, price band, and target return. Deals reach you before they list."
    },
    {
      "title": "Motivated-seller lead scoring",
      "body": "Instead of a raw list, you get owners ranked by real signals: tax delinquency, code violations, vacancy, out-of-state ownership, recent life events. The names that surface first are the ones most likely to take a call."
    },
    {
      "title": "Skip-trace and outreach in your name",
      "body": "VERA enriches owner contact data and runs the first-touch outreach as you, across text, mail, and voicemail, so qualified seller conversations land in your pipeline instead of dying in a spreadsheet."
    },
    {
      "title": "Rent comp and cash flow modeling",
      "body": "For any address, VERA pulls true rent comps for the unit mix, builds the rent roll, and models cash-on-cash, cap rate, and DSCR at your financing terms. You see whether it holds up before you offer."
    },
    {
      "title": "Turn and CapEx estimation",
      "body": "VERA reads the condition signals and estimates make-ready and deferred-maintenance cost, so the rehab line in your hold model is grounded in the property, not a guess that wrecks year one."
    },
    {
      "title": "Refinance and 1031 timing",
      "body": "VERA tracks equity and seasoning across your portfolio and flags when a cash-out refi or 1031 exchange makes sense, then sources the off-market property to redeploy into within the exchange window."
    },
    {
      "title": "Market and submarket reads",
      "body": "Rent growth, vacancy trend, permit activity, and buyer competition by submarket, so you concentrate capital where rents are climbing and pull back before a market softens."
    },
    {
      "title": "Owner financing and creative structuring",
      "body": "When a seller has equity and no urgency for cash, VERA surfaces it and frames the seller-finance or subject-to terms that make the deal cash flow when a straight purchase will not."
    }
  ],
  "faq": [
    {
      "q": "How does the fee actually work?",
      "a": "There is no retainer, no hourly, and nothing to pay while we look. VERA sources off-market rentals, runs the numbers, and earns only when you close on a deal we brought you. If a property never makes it to closing, you owe nothing."
    },
    {
      "q": "Where do the off-market deals come from?",
      "a": "VERA scans for owners who are likely to sell but have not listed: absentee landlords, long-tenured and equity-rich owners, properties with tax delinquency, code violations, or vacancy. We match those against your buy box (market, unit count, price band, target return) and run the first-touch outreach in your name, so the deals reach you before they hit the MLS and draw a bidding war."
    },
    {
      "q": "How accurate are the rent comps and cash-flow numbers?",
      "a": "For any address, VERA pulls true rent comps for the actual unit mix, builds the rent roll, and models cash-on-cash, cap rate, and DSCR at your financing terms. Turn and CapEx are estimated from the property's condition signals, not a flat guess, so the rehab line is grounded in that specific deal. You see whether it holds before you offer, and you underwrite every number yourself before you commit."
    },
    {
      "q": "Do I get exclusivity or a protected territory?",
      "a": "When VERA sources a deal that fits your buy box, it goes to you, not shopped to a list of competing buyers. We work this as a partnership in your market, not a lead service reselling the same names to everyone. If you want the specifics of how that works for your area, that is a direct conversation before we start."
    },
    {
      "q": "What happens if nothing closes?",
      "a": "You pay nothing. The arrangement only works if we keep bringing you deals worth closing, so the risk of a dry stretch sits with us, not you. That is the whole point of getting paid on the close instead of a retainer: our incentive is to find rentals that actually pencil and get you into them."
    }
  ],
  "openingEssay": [
    "The best rental you will buy this year is owned by someone who has not decided to sell yet. A tired landlord with three vacancies. An out-of-state heir sitting on a paid-off duplex. An owner two payments behind who would rather take a clean offer than a foreclosure on their record. None of them are on the MLS.",
    "By the time those properties do list, you are competing with every other buyer in the county, and the cash flow you needed is already priced out of the deal. Winning buy and hold is not about analyzing harder than the next investor. It is about seeing the deal first and knowing fast whether it holds.",
    "A tool that finds off-market owners is dated the week after you buy it, because the data sources and the models shift constantly. A consultant who teaches you a sourcing system has no stake in whether the next deal closes. Neither one keeps pace with how quickly this is moving.",
    "VERA is built the other way. We stay at the frontier, point it at sourcing rentals that cash flow, and bring the deals straight to you. We earn when you close, not before. That is the only arrangement that keeps compounding as the technology keeps changing."
  ],
  "whatChanges": [
    {
      "heading": "Before: waiting on the MLS",
      "body": "You refreshed listing alerts and offered on whatever showed up, losing most and overpaying on the rest. Now off-market duplexes and small multifamily matching your buy box land in your inbox before they list, with the rent roll and a hold model already attached."
    },
    {
      "heading": "Before: a seller list that goes nowhere",
      "body": "You bought a list, blasted it, and got crickets. Now VERA surfaces owners with real motivation, tired landlords, absentee owners, equity-rich and behind, then runs skip-trace and outreach in your name so the conversations that start are with people actually open to selling."
    },
    {
      "heading": "Before: an evening per underwrite",
      "body": "Pulling comps, estimating CapEx, and modeling cash-on-cash by hand meant you only ran the deals you already liked. Now the numbers come back in minutes, rent comps, turn budget, hold returns, and refinance math, so you can say no fast and yes faster."
    },
    {
      "heading": "Before: dead equity, no next move",
      "body": "Equity piled up in seasoned properties while your next acquisition stalled. Now VERA flags refinance and 1031 windows and lines up the off-market replacement property to roll into before the clock runs."
    }
  ],
  "howWeWork": [
    "VERA is a partner, not a vendor. We bring you off-market deals, motivated seller leads, and the numbers behind them, and we make money only when you close. No retainer, no hourly, no paying to find out if it works.",
    "That structure is the point. The technology that finds these deals changes every week. A tool you buy is dated the day it ships, and a consultant you hire has no stake in whether the deal closes. A partner who stays at the frontier and feeds what they find straight into your acquisitions is the only arrangement that keeps paying off as the tools keep moving.",
    "Behind it is an operations team running the sharpest AI models available, pointed at one job: getting you into the right rentals before the crowd does. You see the deals and the edge. We carry the engine."
  ],
  "whatThisIsNot": "This is not a course on rental investing, not a list of leads you buy by the thousand, not a consultant billing you to talk strategy, and not software you log into and operate yourself. It is a partnership. VERA sources the deals, runs the numbers, and earns only when you close.",
  "anecdote": {
    "setup": "A buy and hold investor in a Sunbelt metro had not closed an acquisition in five months. On-market duplexes were drawing six offers and penciling at a 4 percent cash-on-cash, below his floor.",
    "turn": "VERA surfaced an absentee owner with two side-by-side fourplexes, paid off, one unit vacant, taxes a year behind. The owner had never listed. VERA ran the outreach in his name and had the rent roll and hold model back to him the same week.",
    "line": "He bought both off-market at a price that listed would have drawn a bidding war, and the portfolio cash flowed from month one."
  },
  "primaryKeyword": "AI for real estate investors",
  "secondaryKeywords": [
    "off-market real estate deals",
    "motivated seller leads",
    "real estate deal sourcing",
    "buy and hold rental properties",
    "find off-market properties",
    "real estate lead generation",
    "rental property cash flow analysis"
  ]
},
{
  "slug": "land-and-development",
  "marqueeLabel": "Land & development",
  "h1": "AI for Land and New Construction Investors.",
  "metaTitle": "AI for Land & New Construction Investors | VERA",
  "metaDescription": "Find off-market land and development deals before the crowd. VERA sources motivated-seller leads, reads parcels, and runs feasibility fast, as a performance-based partner.",
  "intro": "The best land deals close before they ever hit a listing. VERA finds the parcels, the motivated sellers, and the numbers that work, so you are first to the table instead of bidding against ten other builders.",
  "painPoints": [
    "Deal flow is thin and getting thinner. The good infill lots and assemblage plays are picked over before you hear about them, and brokers send you the same tired listings everyone else is chasing.",
    "You are bidding against builders and land bankers on anything that hits the MLS, which means you are competing on price for the deals with the least margin left.",
    "Seller lists go stale fast. The owner of that 12-acre parcel moved, died, transferred it to an LLC, or already sold, and you find out after you have mailed them three times.",
    "Feasibility takes days you do not have. Zoning, setbacks, utility access, impact fees, and density math have to line up before you can even price an offer, and by then the parcel is gone.",
    "Comps for finished product are a guess. New construction and land have thin comp sets, so your ARV and your exit number are built on three sales that barely match the lot you are actually building on.",
    "You are doing all of this alone or with a part-time VA, so the research that actually finds off-market deals always loses to the fire of the week."
  ],
  "workflows": [
    {
      "title": "Off-market parcel sourcing",
      "body": "We hunt your target submarkets for buildable land and teardown opportunities that fit your criteria, vacant lots, underutilized parcels, assemblage candidates, and surface them before they list."
    },
    {
      "title": "Motivated-seller signal scoring",
      "body": "Tax delinquency, out-of-state and absentee owners, long holds, estate and probate transfers, code violations. We score every parcel by how likely the owner is to actually sell, so you call the right doors first."
    },
    {
      "title": "Skip-trace and outreach in your name",
      "body": "We find current contact info for parcel owners hiding behind LLCs and trusts, then run the outreach, mail, text, and calls, branded as you, so replies land in your pipeline, not ours."
    },
    {
      "title": "Zoning and entitlement feasibility",
      "body": "For any parcel, a fast read on allowable use, density, setbacks, utility access, and the likely entitlement path, so you know what you can build before you make an offer."
    },
    {
      "title": "Buildable comp and ARV modeling",
      "body": "We assemble the thin comp sets land and new construction live on, finished-product sales, lot values, absorption, and model an exit number you can underwrite against, not guess at."
    },
    {
      "title": "Rehab and build cost modeling",
      "body": "For teardown and new construction plays, a grounded estimate of hard and soft costs, impact fees, and timeline, mapped against the exit, so the deal pencils before you commit capital."
    },
    {
      "title": "Assemblage opportunity mapping",
      "body": "We identify adjacent parcels under separate ownership that combine into a developable site, and the ownership signals that say which neighbors might sell, so you build the assemblage the market hasn't spotted."
    },
    {
      "title": "Buyer and builder matching",
      "body": "When you wholesale or flip the lot, we match it to the builders, developers, and land buyers actively buying that product in that submarket, so the disposition is as fast as the acquisition."
    }
  ],
  "faq": [
    {
      "q": "How does the fee actually work? What do I pay?",
      "a": "Nothing up front. There is no retainer, no hourly, no monthly software fee. We source the parcels, score the sellers, run the feasibility and comps, and put it all into your pipeline. If a deal we sourced and analyzed turns into a closing, we share in it. If nothing closes, you owe nothing."
    },
    {
      "q": "How do you find off-market parcels and motivated sellers?",
      "a": "We hunt your target submarkets for buildable land, teardowns, vacant lots, and assemblage candidates before they list. Then we score every parcel by how likely the owner is to sell, using signals like tax delinquency, out-of-state and absentee ownership, long holds, estate and probate transfers, and code violations. We skip-trace current contact behind LLCs and trusts and run the outreach in your name, so replies land in your pipeline, not ours."
    },
    {
      "q": "Can you really price a parcel without me doing days of zoning and feasibility work?",
      "a": "Yes. For any parcel we give you a fast read on allowable use, density, setbacks, utility access, and the likely entitlement path, usually the same morning the lead comes in. We pair it with a buildable comp set and an exit number you can underwrite against. The point is to put a number you can offer with confidence in front of you before the parcel is gone, not to replace your own diligence before you close."
    },
    {
      "q": "Do I get exclusivity in my territory?",
      "a": "We work each deal into one partner's pipeline, not a shared list that ten builders are calling off of. When we source and score a parcel for you and run outreach in your name, that lead is yours. Tell us your submarkets and buildable criteria up front so we are hunting the right ground for you specifically."
    },
    {
      "q": "What happens if nothing closes? And do I own the deals and data?",
      "a": "If nothing closes, you owe nothing, that is the whole point of the structure and why our incentive matches yours. The parcels, seller contacts, feasibility reads, and comps go into your pipeline and are yours to act on, evaluate, and offer on. You build; we only get paid when a deal we sourced and analyzed funds."
    }
  ],
  "openingEssay": [
    "Land and new construction is a research game disguised as a real estate game. The deal is won by whoever understands the parcel first: zoning, entitlements, utilities, flood and soil, what the comps say a finished product clears, and whether the seller will actually move. Most investors do that work one parcel at a time, by hand, after the property is already on someone's radar.",
    "A tool promises to speed that up. But the tool you buy this quarter is built on what was true last quarter, and land intelligence moves faster than that: new parcel data, new zoning changes, new permit filings, new ways to read a market. By the time a platform ships a feature, the edge it captured is already common. A consultant has the same problem, plus a retainer that bills whether or not you close.",
    "VERA is the other thing. We are a partner that sits at the frontier of what AI can do with property, parcel, and seller data, and we put that directly into your pipeline. When a better model or a better data source shows up, you get it inside your deals, not in a slide deck six months later. The edge keeps compounding because we keep moving.",
    "And we only make money when you close. No retainer, no hourly, no paying to find out if it works. We bring the deals and the analysis. You build."
  ],
  "whatChanges": [
    {
      "heading": "Monday, instead of refreshing the MLS",
      "body": "A list is waiting: 40 parcels in your target submarkets that fit your buildable criteria, ranked by how likely the owner is to sell and how clean the entitlement path looks. None of them are listed. You spend the morning calling, not searching."
    },
    {
      "heading": "The 9-acre parcel, priced in an hour",
      "body": "Instead of three days of zoning lookups and napkin math, the feasibility read is in front of you the same morning the lead comes in: allowable density, setback and utility constraints, an as-built comp set, and a number you can actually offer with confidence."
    },
    {
      "heading": "The seller who never lists",
      "body": "An out-of-state owner inherited a parcel they have paid taxes on for nine years and never thought to sell. VERA surfaced the ownership signal, skip-traced current contact, and reached out in your name. You are the only buyer at the table."
    },
    {
      "heading": "A pipeline you can see",
      "body": "Instead of a shoebox of half-finished leads, you have a live view of every parcel in motion, where each seller stands, and which deals are worth your next call. The week runs on signal, not on whatever is loudest."
    }
  ],
  "howWeWork": [
    "We work as a partner, not a vendor. VERA brings the deals and the intelligence, off-market parcels, scored seller leads, feasibility, comps, the numbers, and puts them straight into your pipeline. You evaluate, you offer, you build. There is no platform to log into and no course to finish.",
    "We make money only when you close. No retainer, no hourly, no monthly software fee, no paying to try. If a deal we sourced and analyzed turns into a closing, we share in it. If it doesn't, you owe nothing. Our incentive is the same as yours: real deals that actually fund.",
    "That structure is the whole point. The technology underneath this moves every week, and we stay at the frontier of it so you don't have to track it. When a sharper model or a better data source shows up, it shows up in your deals, not in a future product update. You get the edge while it's still an edge."
  ],
  "whatThisIsNot": "This is not a course on land investing, and it is not a list you buy once and watch go stale. It is not a consultant billing you to explain the market, and it is not another piece of software you log into and operate yourself. VERA is a partner that sources the deals, runs the numbers, and only gets paid when you close.",
  "anecdote": {
    "setup": "A builder doing four spec homes a year was stuck. Every buildable lot in his county was either listed and overbid or owned by someone who wouldn't return a call. His pipeline was three weak leads and a lot of driving for dollars.",
    "turn": "We ran his submarket for absentee and long-hold owners of vacant residential parcels, scored them, skip-traced the top tier, and reached out in his name. Inside three weeks he was talking to an out-of-state owner of two adjacent lots who had no idea they were buildable together.",
    "line": "He closed the assemblage off-market, at his number, with no other builder ever knowing it was for sale."
  },
  "primaryKeyword": "AI for real estate investors",
  "secondaryKeywords": [
    "off-market land deals",
    "off-market real estate deals",
    "motivated seller leads",
    "real estate deal sourcing",
    "find off-market properties",
    "land development deal analysis",
    "new construction deal analysis",
    "real estate lead generation"
  ]
},
{
  "slug": "real-estate-agents",
  "marqueeLabel": "Agents & teams",
  "h1": "AI for Real Estate Agents and Teams.",
  "metaTitle": "AI for Real Estate Agents and Teams | VERA",
  "metaDescription": "AI for real estate agents and teams that sources off-market deals, surfaces motivated seller leads, and runs comps fast. A partner that earns only when you close.",
  "intro": "The agents winning right now are not working harder lists. They are getting to the seller before the sign goes up. VERA finds those owners, those streets, and those deals before they hit the MLS, and hands them to you.",
  "painPoints": [
    "Your lead sources have gone flat. Portals, referrals, and farm postcards bring in the same buyers and sellers every other agent in your zip code is already chasing.",
    "You find out a house is for sale when the sign goes in the yard, the same day as everyone else, instead of three weeks earlier when the owner first started thinking about it.",
    "Your old prospect and expired-listing lists are dead. You are dialing numbers that no longer work and homeowners who sold two years ago.",
    "Pricing a listing or advising a buyer means hand-pulling comps, and half of them do not hold up when the appraiser or the other side pushes back.",
    "A buyer asks what a property is really worth and you are stuck eyeballing it, because running a defensible number takes an hour you do not have on a showing day.",
    "Your team is drowning in follow-up. The leads that would convert with one more well-timed touch go cold because nobody got to them in time."
  ],
  "workflows": [
    {
      "title": "Off-market seller sourcing",
      "body": "VERA reads ownership tenure, life events, financial signals, and neighborhood turnover to surface the owners in your farm most likely to sell soon, by name and address, before they ever list."
    },
    {
      "title": "Motivated seller scoring",
      "body": "Not every owner is ready. VERA ranks your area and your existing leads by genuine likelihood to sell, so your hours go to the conversations that actually become listings."
    },
    {
      "title": "Defensible comps and valuation",
      "body": "Pull a list price or a buyer-side number in minutes, with a comp set and reasoning built to survive an appraiser, a lender, and the agent across the table."
    },
    {
      "title": "Listing-appointment intelligence",
      "body": "Before you knock, VERA briefs you on the property, the owner, the neighborhood trend, and the price story, so you walk in as the agent who already did the homework."
    },
    {
      "title": "Database revival and skip-trace",
      "body": "VERA cleans your dead and aging contacts, restores current phone and contact detail, re-scores who is worth a touch now, and tells you why."
    },
    {
      "title": "Outreach in your name",
      "body": "VERA drafts the call script, text, and email for each lead, tuned to their situation and your voice, so the follow-up sounds like you and lands at the right moment."
    },
    {
      "title": "Buyer-to-listing matching",
      "body": "VERA connects the buyers in your book to the off-market and soon-to-list properties that actually fit them, so both sides of the deal come from your pipeline."
    },
    {
      "title": "Market read for your farm",
      "body": "VERA tracks which streets are turning over, where inventory is tightening, and where pricing is moving, so you target the blocks about to break instead of the ones already picked over."
    }
  ],
  "faq": [
    {
      "q": "How does VERA get paid, and how is that different from my commission split?",
      "a": "There is no retainer, no hourly, and no software fee. VERA earns only when a deal we sourced closes, so it never touches your existing brokerage split or comes out of your pocket up front. If a lead we surface never crosses the table, it costs you nothing."
    },
    {
      "q": "Where do the off-market seller leads come from?",
      "a": "We read ownership tenure, life events, financial signals, and neighborhood turnover to find the owners in your farm most likely to sell in the next few months, before they list. Every name gets scored by genuine likelihood to sell, so what reaches you is a real lead with a reason it is worth a call, not a raw list. You get the name, the address, and why now."
    },
    {
      "q": "Do I get an exclusive territory, or will you hand the same leads to other agents in my market?",
      "a": "A lead we surface for you is yours to work. We are tied to your closing, so feeding the same owner to a competing agent would work against the only way we get paid. Reach out about your specific market and we will confirm what we can commit to before you start."
    },
    {
      "q": "Does this replace my CRM and the tools I already use?",
      "a": "No. VERA delivers the lead, the comp, and the timing into the way you already work, so you keep your CRM, your dialer, and your brand. There is no platform to log into and no system to learn. The work stays behind the curtain and you get the result."
    },
    {
      "q": "Whose name is the outreach in, and how does that stay compliant with Fair Housing?",
      "a": "Outreach goes out in your name and your voice, and you stay the agent and publisher of record on everything that reaches a consumer. You review and approve what goes out, so you keep full control of your compliance, including Fair Housing. We hand you the draft and the reasoning; the final call is yours."
    }
  ],
  "openingEssay": [
    "Your market is the same set of properties everyone else is staring at. The difference between a flat year and a record one is who reaches the motivated owner first, and who can tell a real deal from a tire-kicker in the time it takes to pull a comp. That is an intelligence problem, not an effort problem. Adding hours to a process built on stale lists and public data does not move the number.",
    "Most agents and teams try to close the gap by buying a tool or hiring someone to teach them a system. Both are behind the moment they arrive. The models that read a market, score a seller's likelihood to list, and value a property change almost every week. A platform you log into ships an update once a quarter, if that. The edge it sold you last year is the floor everyone stands on this year.",
    "VERA is built differently. We are a partner that lives at the frontier of these models and puts what we find directly into your pipeline: the owners about to sell, the streets turning over, the listings priced wrong, the comps that hold up under a lender's eye. The work stays behind the curtain. What reaches you is the lead, the number, and the reason it is worth your time.",
    "And we only get paid when you close. No retainer, no monthly software bill, no course to buy first. We make money the same way you do, on the deal that actually crosses the table. That alignment is the whole point: a partner whose incentive is your next closing, staying current so you do not have to."
  ],
  "whatChanges": [
    {
      "heading": "From waiting on the sign to knowing first",
      "body": "Before: you learn a property is listing when it is already on the MLS, competing with every agent who got the same alert. After: VERA flags the owners in your area most likely to sell in the next few months, by name and address, so you are the conversation they remember when they decide it is time."
    },
    {
      "heading": "From guessing the number to defending it",
      "body": "Before: you eyeball a list price or a buyer's offer, then scramble when the appraisal or the counter challenges it. After: VERA hands you a valuation and a comp set built to hold up, with the reasoning attached, so you walk into the listing appointment or the negotiation already right."
    },
    {
      "heading": "From dead lists to live conversations",
      "body": "Before: your database is full of disconnected numbers and people who already moved. After: VERA cleans, enriches, and re-scores your contacts, then surfaces the handful worth a call this week, with current phone, situation, and why now."
    },
    {
      "heading": "From follow-up chaos to the right touch at the right time",
      "body": "Before: leads slip through because your team cannot get to all of them. After: VERA watches the pipeline and tells you which lead to reach, on which channel, with what to say, before it goes cold."
    }
  ],
  "howWeWork": [
    "The arrangement is simple. VERA brings the intelligence and the edge: the off-market sellers, the scored leads, the comps that hold, the timing on who to reach and when. You bring the relationships and close the deals. We do not charge a retainer, an hourly rate, or a software fee. There is nothing to buy before you see what we find.",
    "We get paid only when you close. That is the entire structure. If a lead we surface never becomes a deal, it costs you nothing. It means we are not selling you access and walking away. We are tied to the same outcome you are, which is why we keep pushing to find the next deal instead of collecting a subscription.",
    "Behind that is a team running the smartest models in the world and staying current as they change, week over week. You never have to learn a platform, manage a tool, or keep up with what shifted in the technology. You get the result: the lead, the number, the reason it is worth your time, delivered into the way you already work."
  ],
  "whatThisIsNot": "This is not a course, and nobody is going to teach you a system. It is not a lead list you buy by the thousand and burn through in a week. It is not a consultant who bills you to write a strategy you then have to run yourself. And it is not another piece of software to log into, learn, and maintain. It is a partner that finds the deals, hands them to you, and only makes money when you close.",
  "anecdote": {
    "setup": "A team in a tight suburban market had farmed the same three neighborhoods for years. Their lead flow had flattened, and every listing they chased had four other agents on it.",
    "turn": "VERA scored the owners across those neighborhoods and flagged a handful showing early sell signals: long tenure, a recent estate event, a refinance that had aged out. One was an owner who had not listed and was not on anyone's radar yet.",
    "line": "The agent reached out with a script VERA had drafted for that exact situation, had the listing conversation two weeks before the owner would have called anyone, and signed it off-market. No sign, no competing offers, no portal."
  },
  "primaryKeyword": "AI for real estate agents",
  "secondaryKeywords": [
    "AI for real estate",
    "real estate lead generation",
    "motivated seller leads",
    "off-market real estate deals",
    "real estate deal sourcing",
    "find off-market properties",
    "AI for real estate teams"
  ]
}
];

export function getVerticalBySlug(slug: string): Vertical | undefined {
  return VERTICALS.find((v) => v.slug === slug);
}

export function getAllSlugs(): string[] {
  return VERTICALS.map((v) => v.slug);
}
