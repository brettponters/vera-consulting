/**
 * Vertical landing pages.
 *
 * Each entry powers a /for/[slug] page and the homepage marquee link.
 * Slugs are immutable once shipped (URLs, sitemap, inbound links).
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
 * - howWeWork: 2-3 paragraphs explaining the engagement.
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
    slug: "listing-agents",
    marqueeLabel: "Listing agents",
    h1: "AI for Listing Agents.",
    metaTitle: "AI for Listing Agents | VERA",
    metaDescription:
      "AI for listing agents who want to win more listings, launch faster, and keep sellers informed without burning Friday night on follow-up.",
    intro:
      "Winning the listing is only the start. The work that follows, the copy, the coordination, the seller updates, the showing feedback, the next FSBO outreach, is what decides whether you can carry twelve listings without dropping one.",
    painPoints: [
      "Writing listing descriptions for every property eats the evening before launch",
      "CMA prep and pricing narratives for seller presentations take ninety minutes that could be a showing",
      "Seller update calls pile up all week and the communication gaps show in the reviews",
      "Showing feedback arrives in drips across ShowingTime, text, and email and never gets synthesized before Sunday",
      "FSBO and expired outreach sequences are always almost built but never actually running",
      "Coordinating photographers, stagers, and sign installers is a scheduling job that falls entirely on you",
    ],
    workflows: [
      {
        title: "Listing description drafts",
        body: "Property notes and MLS data in, a clean draft in your voice ready to edit in minutes. Output goes through your review before MLS input, keeping Fair Housing compliance where it belongs: with you.",
      },
      {
        title: "CMA narrative and pricing story",
        body: "Comparable sales, list-to-sale ratios, and days-on-market pulled into a seller-ready pricing narrative before the appointment. The conversation leads with evidence, not instinct.",
      },
      {
        title: "Weekly seller reports",
        body: "Showing traffic, online views, market context, and your commentary in a branded email that goes out every Monday morning. Sellers stop calling to ask what is happening.",
      },
      {
        title: "Showing feedback synthesis",
        body: "Feedback from ShowingTime, email, and text collapsed into a single summary you can forward to the seller or use in a price-reduction conversation. Done by Thursday, not Sunday.",
      },
      {
        title: "FSBO and expired outreach sequences",
        body: "Multi-touch sequences in your voice, timed and personalized to the property and the owner's situation. Built once, running against your farm list every week.",
      },
      {
        title: "Listing appointment packet",
        body: "Your marketing plan, pricing story, bio, and testimonials assembled into a polished leave-behind specific to the address and the seller's situation. No more printing the generic version.",
      },
      {
        title: "Launch coordination checklist",
        body: "Photographer, stager, sign installer, MLS input, Zillow syndication, social media, and showing availability in one tracked workflow per listing. Nothing falls through.",
      },
      {
        title: "Follow-up and referral engine",
        body: "Post-closing follow-up sequence and anniversary touches drafted in your voice and queued in Follow Up Boss or kvCORE. The referral conversation starts before they forget your name.",
      },
    ],
    faq: [
      {
        q: "How can AI help listing agents?",
        a: "The highest-impact uses are the ones that recur on every listing: description drafts, CMA narratives, seller update emails, and showing feedback summaries. Each one takes thirty to ninety minutes by hand. With a trained workflow, each one takes five to fifteen minutes to review and approve. Across a twelve-listing inventory that is a real workweek recovered.",
      },
      {
        q: "Does AI-drafted listing copy create Fair Housing risk?",
        a: "Only if you skip the review step, which you should never skip regardless of how the copy was produced. We train output on language you have already approved, and the final copy goes through you before MLS submission. The agent is the publisher of record. AI speeds up the draft. The compliance review stays human.",
      },
      {
        q: "Is my client data and MLS data kept private?",
        a: "Everything runs in your tenant with zero-retention configuration. MLS data, seller contact details, and property information do not train public models and do not leave a shared environment. We work under NDA and treat the data as if the brokerage compliance officer is reading the audit log.",
      },
      {
        q: "Do I own the workflows and content, or is it locked into VERA?",
        a: "You own everything. The sequences live in your Follow Up Boss, kvCORE, or BoldTrail account. The templates live in your Google Docs or Notion. The voice model is trained on your writing. At the end of the engagement you have a documented operating system your team or TC can run without us.",
      },
      {
        q: "What does the engagement actually look like?",
        a: "Weekly working sessions on your real listings and your real farm. Not a course, not a sandbox. We build the description workflow on the listing you are launching next week. Seller reports go live on your current inventory within the first three weeks. Eight to twelve weeks and you are running it without us.",
      },
      {
        q: "What if I have a transaction coordinator or buyer's agent on my team?",
        a: "The workflows integrate naturally. Your TC gets the launch checklist. Your buyer's agent can use a version of the outreach sequences for sphere follow-up. We document everything so the whole team can run it, not just you.",
      },
    ],
    openingEssay: [
      "Most listing agents we talk to are running a production machine that depends on one person holding every thread. The photographer is scheduled, the stager has a walk-through, ShowingTime is live, the seller wants an update, and there are three expired listings in the farm who have not heard from you in two weeks. None of that is slow work. All of it is work that only you can drop.",
      "The honest picture of where AI fits in a listing practice is not glamorous. It is not some breakthrough in property valuation or a replacement for your market knowledge. It is the part of the week that lives between appointments. The listing description draft that takes you thirty-five minutes to write because you want it to be right. The CMA narrative for the seller presentation that takes ninety minutes to pull together. The showing feedback summary you mean to send by Friday but it is now Sunday. The expired outreach sequence that would absolutely work if you ever had two hours to build it.",
      "Listing descriptions deserve a specific word. AI-drafted copy for a listing requires the same review you would give any other marketing piece, because generic language about 'spacious,' 'light-filled,' and 'perfect for entertaining' is exactly what Fair Housing attorneys read looking for substituted code. VERA trains on descriptions you have already approved and reviewed, produces output you edit before it publishes, and flags language patterns worth scrutiny. The draft is faster. The liability discipline stays with you. That is the right division of labor.",
      "The agents who close more listings in the next two years are not the ones with the most charm or the biggest ad spend. They are the ones who can service the listings they already have at a level that generates referrals, respond to FSBOs and expireds before a competitor does, and show up to every listing appointment with a pricing narrative and a marketing plan that does not look like every other agent's packet. AI is how you do all three without adding hours to the week.",
      "There is also a seller communication problem worth naming. Sellers are anxious. The market moved while their home has been listed. Showing traffic dropped. They are reading Zillow every morning and wondering why you have not called. Most listing agents are not bad at client communication. They are busy. The agent who sends a weekly showing traffic summary and a market-context note every Monday at 9 AM, without writing it every Monday at 9 AM, is the agent whose sellers stay calm and whose reviews mention responsiveness. That is a solvable problem.",
    ],
    whatChanges: [
      {
        heading: "The day before launch",
        body: "You used to spend the evening writing the listing description, pulling comps for the MLS notes, and building the social post from scratch. Now you open a draft at 6:30 PM that has the copy, the key features pulled from your showing notes, and the Instagram caption ready to edit. You are done by 7:15.",
      },
      {
        heading: "The seller update call you were dreading",
        body: "Showing traffic is down. The seller is reading Zillow at 11 PM and your voicemail is full. Instead of a reactive call, she already has your Monday morning email: showing count, feedback summary, active comparable movement, and your read on what it means. The call becomes a strategy conversation instead of damage control.",
      },
      {
        heading: "The listing appointment on Thursday",
        body: "You used to arrive with the same printed CMA packet every other agent brings. Now you arrive with a pricing narrative tied to this specific property and this specific seller's timeline, a marketing plan with the actual channels and approximate timelines named, and a leave-behind that has your recent sold data for this zip code. The appointment goes differently.",
      },
      {
        heading: "The expired follow-up that finally runs",
        body: "There are fourteen expireds in your farm from the last six months. You know them by address. You have never reached all of them in a week. The sequence is now drafted, personalized to their original list price and days on market, and running in Follow Up Boss. Three replied this month.",
      },
      {
        heading: "The Sunday night catch-up that disappeared",
        body: "Showing feedback from the week was scattered across ShowingTime notifications, two text messages, and a voicemail. Summarizing it for the seller used to be Sunday evening. Now it is Thursday afternoon, in your inbox as a draft, ready to send or forward with one edit.",
      },
    ],
    howWeWork: [
      "We start with the workflow that runs on every listing, which for most listing agents is the description draft and the weekly seller report. We build both on a listing you have active right now, not a hypothetical property. By the end of week two you have seen the output on real copy and real seller data.",
      "Weeks three through six add the CMA narrative, the showing feedback synthesis, and the FSBO and expired outreach sequences. We wire these into the tools you already use. Follow Up Boss, kvCORE, BoldTrail, ShowingTime, your MLS, Canva, BombBomb. We do not ask you to migrate to a new platform. The AI sits in the gaps in your current stack.",
      "By week ten you have a documented operating system your transaction coordinator or buyers agent can run. The workflows live in your accounts. The voice model is trained on your writing. At the end of the engagement you are running it and we are not the bottleneck.",
    ],
    whatThisIsNot: "This is not an IDX lead generation platform. We are not running ads for you. We are not replacing your MLS or your CRM. We do not write offers, negotiate contracts, or provide legal or compliance advice. If you want a virtual assistant service that manages your calendar and answers calls, this is not it. What we build is the operating layer for the listing side of your business, the copy, the communication, the outreach, the prep, so the agent in front of the seller is the best version of you.",
    primaryKeyword: "ai for listing agents",
    secondaryKeywords: [
      "ai listing description writer for realtors",
      "listing agent automation",
      "seller update email automation real estate",
      "cma narrative ai real estate",
      "fsbo expired outreach ai",
      "showing feedback summary tool",
      "listing agent workflow tools",
      "real estate listing marketing ai",
    ],
  },

{
    slug: "buyers-agents",
    marqueeLabel: "Buyer's agents",
    h1: "AI for Buyer's Agents.",
    metaTitle: "AI for Buyer's Agents | VERA",
    metaDescription:
      "AI for buyer's agents who want to win more offers and lose fewer leads. Speed-to-lead, tour sheets, buyer education, and offer prep.",
    intro:
      "The lead that goes unanswered for two hours is already talking to someone else. AI closes that gap, writes the property summaries, builds the tour sheets, and keeps not-ready-yet buyers warm for months. You stay on the deals.",
    openingEssay: [
      "Buyer representation is a timing game at the top and a patience game at the bottom. At the top you have the active buyer who needs a showing scheduled today, a tour sheet by tomorrow, and an offer drafted before the weekend. At the bottom you have the buyer who is six months out, still deciding on the neighborhood, still getting pre-approved, still not ready. Both buyers need you. Only one of them urgently. The week breaks when you try to run both at the same cadence.",
      "The speed-to-lead problem in buyer's agent work is real and it is not about being lazy. It is about the math. You are on a listing tour when a Zillow Premier Agent lead comes in at 11:15 on a Tuesday. By the time you are back in the car, it is 12:45. The national average response time for real estate leads is somewhere above an hour. The conversion advantage for agents who respond in five minutes versus thirty is documented everywhere. The gap is not effort, it is capacity. You are not sitting at a desk with an inbox.",
      "Matching buyers to inventory is the other side of the coin. Most buyer's agents we talk to carry twenty to thirty active searches at any given point. Some of those buyers have been in your database since February. They want a three-bed in a specific school zone, under $620K, and they want to know when something hits before the Zillow alert. That matchmaking work, pulling new MLS listings each morning, running them against the buyer's criteria, and writing a property summary the buyer can actually read, is forty-five minutes to an hour of daily work that compounds across a roster. AI does that between 6:00 and 7:00 AM so when you open your coffee you are sending matches, not building them.",
      "The offer-writing season is where the real pressure lives. You have a buyer who wants to move. The market is moving. The listing went active on Thursday. You need a comparative market analysis pulled, a net sheet drafted, the offer terms researched, and a decision framework ready for your buyer's call at 5:30 PM. That sequence used to take the whole afternoon. With the right workflows in Follow Up Boss and your MLS, it takes ninety minutes and you are still in front of it before dinner.",
      "The buyers who are not ready yet are the ones most agents handle worst, not because they do not care but because the drip infrastructure is built for volume and not for actual follow-through. A buyer who said six months ago that they need a good school and a garage gets a market update email the same week as every other person in the database. What they should be getting is a message that says a house with a rated elementary school and a two-car garage just came on at $585K, and here is why the seller's days on market might mean you have a negotiating window. That is the message that converts. AI writes it. You send it.",
    ],
    painPoints: [
      "Leads from Zillow Premier Agent and kvCORE go cold in under an hour when you are in a showing",
      "Matching twenty-plus active buyers to new MLS inventory every morning takes the first hour of every day",
      "Tour sheets and property summaries are built by hand before every showing appointment",
      "Not-ready-yet buyers get generic drip and fall out of the pipeline before they are ready to act",
      "Offer-writing prep, pulling comps, drafting a net sheet, researching the seller, takes most of the afternoon before a competitive deadline",
      "Post-close follow-up and referral asks get skipped because there is always an active deal that is louder",
    ],
    workflows: [
      {
        title: "Speed-to-lead response",
        body: "New lead hits from Zillow Premier Agent, Sierra Interactive, or kvCORE. An AI-drafted initial message goes out in under two minutes in your voice with a specific property reference. You see the hot reply. Silence gets a follow-up the next morning.",
      },
      {
        title: "Daily buyer-to-inventory matching",
        body: "New MLS actives pulled each morning against every buyer's saved criteria. Property summaries written in plain language with the details that matter for that buyer's specific situation. In your Follow Up Boss inbox by 6:30 AM, ready to send.",
      },
      {
        title: "Tour sheet builder",
        body: "Showing appointments confirmed. Property notes, neighborhood comps, school ratings, HOA details, and the three questions to ask during the walkthrough pulled into a single PDF per property. Ready before you leave the driveway.",
      },
      {
        title: "Offer prep package",
        body: "Listing history, recent solds within a half-mile, days on market, seller disclosure notes, and a draft net sheet organized before the 5:30 PM buyer call. The decision conversation starts with data, not with you scrambling to pull it.",
      },
      {
        title: "Not-ready-yet buyer nurture",
        body: "Buyers who are six to twelve months out get specific, personalized market updates in your voice when something relevant hits. Not a generic newsletter. A message that says this property matches three of your four criteria and here is why this week matters.",
      },
      {
        title: "Buyer education sequence",
        body: "Pre-approval, inspection, appraisal, title, closing costs, all of it explained in a sequence timed to where the buyer is in the process. Written in your voice. Reduces the three AM anxiety text and the repeat questions that eat your Thursday afternoon.",
      },
      {
        title: "Lender and title follow-up",
        body: "Conditions outstanding, appraisal ordered, clear to close pending, tracked and nudged without you being the relay. DocuSign links chased, Dotloop packages organized, the closing coordinator cc'd on the right thread at the right time.",
      },
      {
        title: "Post-close and referral cadence",
        body: "Thirty-day, ninety-day, and one-year check-ins drafted in your voice and scheduled before the keys hand off. The referral ask goes out at the moment the client is most likely to give you one, not when you remember to send it.",
      },
    ],
    faq: [
      {
        q: "How can AI help buyer's agents specifically?",
        a: "The highest-value applications are speed-to-lead response, daily MLS matching and property summaries, tour sheet preparation, and offer-writing prep. Those four workflows cover the parts of the week where buyer's agents lose the most time and miss the most conversions. AI does not replace your judgment on the offer strategy or your relationship with the buyer. It does the structural work that eats the hours around those things.",
      },
      {
        q: "Can AI actually respond to leads fast enough to make a difference?",
        a: "Yes. A workflow wired to your CRM, whether that is Follow Up Boss, kvCORE, or Sierra Interactive, can get a personalized first message out in under two minutes. The message references the specific property the lead inquired about and is drafted in your voice. You see the hot reply and handle the conversation. The leads that go cold are the ones nobody answers in the first thirty minutes. That window is now covered.",
      },
      {
        q: "What happens to client data when AI is involved?",
        a: "We work inside your tenant with zero-retention configurations on the underlying models. Buyer criteria, contact information, and transaction details do not train public AI systems. We sign NDAs and the data architecture is designed to match what a real estate brokerage would need to show a compliance review. If your brokerage has a specific data handling policy, we configure to it.",
      },
      {
        q: "What does an engagement cost and who owns the workflows?",
        a: "Engagements are monthly retainers scoped on the discovery call. You own every workflow we build. The automations live in your CRM, your MLS connection, and your existing tools. If you stop working with us, the system keeps running. We document everything so you or a transaction coordinator can maintain it without us.",
      },
      {
        q: "What if I am already using BombBomb video or a drip campaign in kvCORE?",
        a: "We integrate with what you have. BombBomb stays for the relationship touches that benefit from video. The AI layer handles the written follow-up, the property matching, and the off-hours response. The drip campaigns in kvCORE get replaced or augmented with personalized triggers instead of time-based generic sequences. The tool stays. The logic gets smarter.",
      },
      {
        q: "Does this work for a solo buyer's agent or only a team?",
        a: "It works for both, but solo agents usually see the fastest relief because the cap on their business is entirely their personal time. The workflows that cover speed-to-lead and daily MLS matching tend to pay back inside the first month on time savings alone. Teams get additional leverage when the buyer intake, education sequences, and post-close cadence are standardized across agents.",
      },
    ],
    whatChanges: [
      {
        heading: "Tuesday at 11:15 AM",
        body: "A new Zillow Premier Agent lead comes in while you are walking through a property with another buyer. By 11:17, the lead has a message from you referencing the specific listing they asked about and asking when they want to see it. You read the reply at 12:45. The lead did not go to voicemail.",
      },
      {
        heading: "Wednesday morning at 6:30",
        body: "You open Follow Up Boss and there are eleven buyer-match messages ready to send. Each one names a specific new listing against that buyer's saved criteria, with a two-paragraph property summary and a note about why this one fits better or worse than the last thing you showed them. You review, edit two of them, and send all eleven before your first coffee is cold.",
      },
      {
        heading: "Thursday before the offer deadline",
        body: "Your buyer wants to move on the listing that went active Monday. You open the offer prep package at 3:00 PM. Comps from the last ninety days within a half-mile. Seller's original list price, price reductions, days on market. A draft net sheet. The questions worth asking your buyer at 5:30. You are ready. The offer goes in by 7:00 PM.",
      },
      {
        heading: "The buyer from February",
        body: "She said she was not ready until fall. Generic drip would have kept her on a list she ignores. Instead, when a three-bed with a rated school comes on in her target zip at $608K on a slow week, she gets a message in your voice explaining why this week might be the one to move. She calls you. You have a showing scheduled before noon.",
      },
      {
        heading: "Thirty days after closing",
        body: "The Garcias moved in three weeks ago. You have not thought about a follow-up yet because you have two offers pending and a new buyer consultation tomorrow. At 9:00 AM the thirty-day check-in sends itself. They reply with three names of people from their office who are looking. You did not remember to ask. The system did.",
      },
    ],
    howWeWork: [
      "We start with the workflow that is bleeding the most time, which for most buyer's agents is either speed-to-lead coverage or daily MLS matching. We build the first workflow against your actual CRM, your actual incoming leads, and your actual active buyers. Not a demo environment. The first week you see it run on real leads.",
      "By week four you have the lead response and the morning match reports running. Weeks five through eight wire the tour sheet builder and the offer prep package. The buyer education sequence and the post-close cadence ship in weeks nine through twelve. You leave the engagement with a documented operating system your TC or buyer's specialist can run.",
      "Tooling stays where it is. Follow Up Boss, kvCORE, BoldTrail, Sierra Interactive, your MLS connection, DocuSign, Dotloop. We integrate against what you already pay for. We do not ask you to migrate your database or learn a new platform. The AI layer wraps around the tools your brokerage already supports.",
    ],
    whatThisIsNot:
      "This is not a lead generation service. We do not buy you leads. We do not run your ads. We do not coach you on negotiation or help you script a listing presentation. If you want a dialer, an ISA, or a coaching program, this is not it. What we build is the operational layer that stops the leads you are already paying for from going cold, and stops the hours between showings from being eaten by work a well-designed system can do for you.",
    primaryKeyword: "ai for buyer's agents",
    secondaryKeywords: [
      "ai tools for buyer's agents",
      "real estate lead follow-up automation",
      "mls buyer matching ai",
      "buyer agent tour sheet automation",
      "real estate offer prep ai",
      "buyer nurture sequence real estate",
      "follow up boss ai integration",
      "kvcore ai workflow buyer agent",
    ],
  },

{
    slug: "luxury-agents",
    marqueeLabel: "Luxury agents",
    h1: "AI for Luxury Real Estate Agents.",
    metaTitle: "AI for Luxury Real Estate Agents | VERA",
    metaDescription:
      "AI for luxury real estate agents who protect client relationships while running a high-touch practice. Back office, not a client-facing replacement.",
    intro:
      "Your clients expect white-glove service and absolute discretion. AI is the back office that makes both possible at the cadence your portfolio demands, without turning you into an administrator.",
    openingEssay: [
      "Luxury real estate is a relationship business that runs on trust, timing, and a reputation you have spent years earning. The clients you serve are sophisticated. They have options. They chose you because you know the market, you know the right people, and you handle everything without making them feel like a transaction. None of that changes when you add AI to the back office. What changes is how much of your week is left over to be the agent they hired.",
      "The structural problem in a high-end residential practice is that the service standard is higher, but the operational support is often the same as any other agent. You are writing bespoke listing narratives for properties that deserve them. You are preparing market briefs sophisticated enough that a CEO will actually read them. You are coordinating private showings with discretion, managing a sphere of HNW contacts who expect personalized touchpoints, and following up after every interaction in a way that feels personal because it is. All of that done by hand, across a roster of active clients, is a week that disappears before Thursday.",
      "Where AI fits in luxury is not where it fits in volume real estate. The pitch about automating client communication is the wrong framing here. Your clients are not getting a templated email sequence. AI is for the work they never see: the listing brief drafted before you present it, the comp analysis formatted to match the level of your buyer, the pre-showing memo so you walk in prepared, the sphere follow-up queued and personalized to each relationship, the property narrative polished before it goes to the marketing team.",
      "The agents who win the next five years in luxury are not the ones who use AI to replace the white-glove experience. They are the ones who use it to extend their capacity without diluting it. The tenth sphere touchpoint of the week lands because there was infrastructure to support it. The listing narrative is better because you had the preparation time to edit it instead of writing it from scratch at midnight. The showing goes well because your prep doc was waiting for you at 7:30 AM.",
      "The hard part is building the right system. A generic CRM workflow will not do it. ChatGPT with a prompt will not do it. The work is to take your specific practice, your sphere, your voice, your markets, and your workflow, and wire AI into the exact seams where it relieves pressure without touching the client relationship itself. That is what we build.",
    ],
    painPoints: [
      "Listing narratives for high-end properties take hours to write well and every property deserves a different one",
      "Sphere maintenance for HNW relationships slips when transactions get busy, and slippage costs referrals",
      "Market and comp briefs for sophisticated buyers take research time that competes with showing schedules",
      "Pre-showing prep is either rushed or nonexistent because the day filled up",
      "Coordinating private showings, NDA exchanges, and discretion logistics is manual and scattered across email and text",
      "Thought-leadership content and personal brand posts keep getting pushed because active listings come first",
    ],
    whatChanges: [
      {
        heading: "The listing narrative",
        body: "New listing goes live Friday. You used to spend Wednesday evening writing the property story from scratch, pulling adjectives out of thin air at 10 PM. Now you open a draft at 8 AM Thursday that captures the architectural provenance, the lifestyle angle, and the neighborhood context, all in your voice. You spend an hour editing. The narrative goes to the marketing team by noon.",
      },
      {
        heading: "The sphere touchpoint",
        body: "There are fourteen people in your top-tier sphere who have not heard from you in six weeks because two listings consumed the month. On Sunday morning you review a queue of personalized touchpoint drafts, each one tied to something specific about that relationship, a market move they would care about, an off-market they might know someone for, a follow-up on the conversation you had in March. You approve, edit lightly, and send. Done before the weekend is over.",
      },
      {
        heading: "The buyer brief",
        body: "Sophisticated buyer flying in from New York for Tuesday showings. The comp analysis and neighborhood brief used to take a Sunday to assemble. Now you open a formatted brief Monday morning, review it for accuracy, add your own read on the one comp that needs context, and send it before lunch. The buyer arrives prepared. The Tuesday goes better.",
      },
      {
        heading: "Pre-showing prep",
        body: "Showing at a 12-million-dollar property at 11:00 AM. You used to walk in with notes in your head and hope nothing slipped. Now there is a one-page prep document on your phone at 10:15: property history, seller situation, the three questions the buyer asked last week, and one thing worth pointing out that is not on the listing sheet. The showing is sharper.",
      },
      {
        heading: "The personal brand post",
        body: "You have market opinions worth sharing and a following that has been quiet for two months. A transaction insight from the week becomes a polished LinkedIn post on Thursday morning, drafted from your notes in your voice, ready to publish with five minutes of editing. You do not have to choose between being present for clients and being visible in the market.",
      },
    ],
    workflows: [
      {
        title: "Listing narrative drafts",
        body: "Property details, architectural notes, and your past listing copy feed a draft narrative for each new listing. In your voice, specific to the property, ready to edit, not to write from scratch.",
      },
      {
        title: "Sphere touchpoint queue",
        body: "Your Follow Up Boss or kvCORE contacts, their history, and recent market activity feed a weekly queue of personalized outreach drafts. You review, approve, and send. The relationship stays warm without the Sunday morning scramble.",
      },
      {
        title: "Buyer market and comp briefs",
        body: "MLS data, recent sales, and neighborhood context into a formatted brief your most sophisticated buyers will read. Styled to match the level of the conversation.",
      },
      {
        title: "Pre-showing prep documents",
        body: "Property history, seller notes, buyer questions from the CRM, and one or two talking points assembled into a one-page brief the morning of the showing. Ready on your phone before you leave.",
      },
      {
        title: "Private showing coordination",
        body: "Scheduling, NDA logistics, and discretion notes organized in one thread. No more piecing together who confirmed what across three email chains and a text thread.",
      },
      {
        title: "Thought-leadership content",
        body: "Your market read, your recent transactions, and your opinions on what is moving drafted into LinkedIn posts, newsletter pieces, and event talking points. Voice-trained on your past writing so it reads like you, not like AI.",
      },
      {
        title: "Referral source follow-up",
        body: "Attorneys, financial advisors, concierge firms, and past clients who send referrals get consistent, personalized follow-up after every transaction close. The relationship that drives your next deal gets the attention it earns.",
      },
      {
        title: "Listing presentation prep",
        body: "Seller profile, property context, recent comps, and your positioning pulled into a presentation brief before the listing appointment. You walk in prepared to earn the listing, not to read slides.",
      },
    ],
    faq: [
      {
        q: "How can AI help luxury real estate agents?",
        a: "AI handles the back office, not the client relationship. Listing narratives, market briefs, showing prep, sphere touchpoints, and content all take preparation time that competes with your showing schedule. AI drafts the preparation work so you arrive ready, follow up consistently, and publish content you have been putting off, without delegating the judgment or the voice.",
      },
      {
        q: "Does this make me sound like a robot to high-end clients?",
        a: "Only if the voice training is skipped. We train models on your past listing copy, emails, and posts. The drafts land in your cadence and your specifics. You stay in the editing seat. Nothing goes to a client unreviewed. The agents we work with consistently say the communication feels more like them, not less, because the volume of thoughtful outreach actually increases.",
      },
      {
        q: "My clients expect discretion. How do you handle confidentiality?",
        a: "We work in your tenant with zero-retention configurations. Client data, property details, and relationship notes do not train public models. We sign NDAs and configure every workflow as if the data is under strict privacy rules, because in luxury real estate it is. No client information touches a shared environment.",
      },
      {
        q: "What does an engagement cost and who owns the workflows?",
        a: "Engagements are retainer-based, scoped on the discovery call. There are no per-seat surprises and no subscription that keeps running after we are done. Everything we build sits in your stack, in your Follow Up Boss or kvCORE account, in your Notion, in your email tool. You own it. If you end the engagement, the workflows keep working because they live in your tenant, not ours.",
      },
      {
        q: "I already have a transaction coordinator. How does this fit?",
        a: "AI and a TC solve different problems. Your TC handles the transaction pipeline. AI handles the relationship and marketing layer that happens before and after the transaction: sphere maintenance, content, listing narratives, comp briefs, showing prep. Most agents find the two complement each other well, and some TCs become the second pair of hands running the AI workflows.",
      },
      {
        q: "Which CRMs and tools does this work with?",
        a: "We integrate with Follow Up Boss, kvCORE, and most high-end CRM platforms. We work with the MLS export formats you already pull, DocuSign for transaction coordination, and your existing email and calendar stack. We do not ask you to migrate anything.",
      },
    ],
    howWeWork: [
      "Engagements start with a working session on your actual listings and your actual sphere, not a demo environment. We pick the workflow where you feel the most friction, which for most luxury agents is either listing narrative prep or sphere maintenance, and build it against your real data in the first two weeks.",
      "The first four to six weeks typically ship a listing narrative workflow, a sphere touchpoint queue, and a buyer brief template. Weeks seven through twelve move into showing prep, content, and referral source follow-up, depending on what the practice needs. By week twelve you are running the system with your TC or assistant, and there is a documented playbook for them to maintain it without us.",
      "Everything stays in your stack. Follow Up Boss or kvCORE for the sphere layer, your MLS access for comp briefs, your existing email client, Canva or your design workflow for listing marketing. We wire AI into the seams of what you already pay for. No new platform to learn, no migration to execute.",
    ],
    whatThisIsNot: "This is not a client communication bot and it is not a replacement for the white-glove experience your clients are paying for. We do not send emails on your behalf without your review. We do not auto-respond to HNW clients. We do not run your showing schedule or your transaction pipeline. If you want a chatbot that talks to prospects on your website, that is a different product and a different conversation. What we build is the preparation and relationship infrastructure that lets you keep delivering the level of service you are known for, at a volume that would otherwise require a full team behind you.",
    primaryKeyword: "ai for luxury real estate agents",
    secondaryKeywords: [
      "luxury real estate agent ai tools",
      "ai listing narrative real estate",
      "high-end real estate agent automation",
      "sphere of influence ai real estate",
      "luxury agent market brief ai",
      "hnw client relationship management ai",
      "real estate personal brand ai content",
      "luxury real estate showing prep ai",
    ],
  },

{
    slug: "commercial-agents",
    marqueeLabel: "Commercial agents",
    h1: "AI for Commercial Real Estate Agents.",
    metaTitle: "AI for Commercial Real Estate Agents | VERA",
    metaDescription:
      "AI for commercial real estate agents who want faster deal analysis, deeper prospect research, and pipelines that actually close. Built for CRE.",
    intro:
      "Commercial real estate runs on analysis, research, and long-cycle nurture. AI compresses the prep, drafts the documents, and keeps every prospect warm while you are closing the deal in front of you.",
    openingEssay: [
      "The CRE week has a structural problem. The work that wins deals, tenant research, comp analysis, cap rate modeling, submarket reports, takes the same hours as the deals themselves. By the time you have analyzed the rent roll on the industrial flex you are trying to sell and drafted the offering memorandum, the three warm prospects you should have called on Tuesday are cold. The math does not improve by working later. It improves by changing which parts of the prep you do by hand.",
      "Most of what a commercial agent does before a pitch is research and synthesis. CoStar pull, LoopNet cross-reference, Crexi comp check, Excel model for the NOI summary, draft of the LOI, market narrative for the submarket. A good analyst can do all of that in four hours for a single deal. An experienced broker does it in two. With a well-built AI workflow, the first pass of every piece of that is on your screen in thirty minutes and you spend the next hour making it sharp. The strategic calls, the relationship calls, the calls that move a deal, are what fill the rest of the day.",
      "The pipeline problem is the one most CRE brokers feel the most and fix the least. Commercial sales cycles run six to eighteen months. A prospect you qualify in January may not be ready to transact until Q3. Staying present across a sixty-name pipeline without spamming and without going silent is the craft. Most brokers do it on instinct, which means the ones who got a call this week stayed warm and the twenty who did not are quietly moving toward a competitor. AI makes it possible to run a disciplined outreach cadence across every name in the pipeline without spending the morning writing emails.",
      "The document problem is quieter but it eats real hours. Offering memorandums, LOIs, proposals, market reports. These are documents that need to be specific, accurate, and well-written. They also follow predictable structures and are built from information you already have. The broker who can turn a full OM around in a day instead of three days has a real competitive edge on deals where the seller wants to move fast. The broker who consistently delivers submarket reports that read like they were written by a research analyst, not pulled from a CoStar PDF, is the one who gets called first on off-market listings.",
      "The honest version of AI for commercial real estate is not that it replaces the judgment. Cap rate interpretation, reading a market cycle, knowing when a tenant credit is shakier than the rent roll shows, that is yours. What AI replaces is the hours of structured work between the judgment calls. The research pull. The first draft. The email that needed to go out yesterday. The pipeline follow-up that slipped to next week. Get those right and your week looks different.",
    ],
    painPoints: [
      "Pulling CoStar comps, modeling NOI, and building the financial narrative for a single deal takes half a day",
      "Offering memoranda and proposals take three days to produce and the first draft is still half-wrong",
      "Pipeline nurture across long-cycle prospects falls apart because there is no time to write sixty personalized touchpoints",
      "Tenant and buyer prospect research before a pitch is always shallower than it should be",
      "Submarket reports read like CoStar exports because there is no time to turn the data into a narrative",
      "LOIs and lease summaries get drafted on Friday night because the week ran out",
    ],
    workflows: [
      {
        title: "Financial analysis briefs",
        body: "Cap rate, NOI, rent roll summary, and the key risk flags for a deal, drafted from the inputs you already have in Excel or Argus. The first pass is ready before the client meeting.",
      },
      {
        title: "Offering memorandum drafts",
        body: "Property description, financial summary, market narrative, and tenant overview into a structured OM draft. You spend the time editing the details, not building the scaffold.",
      },
      {
        title: "LOI and proposal drafts",
        body: "Deal terms and context into a first-draft LOI or proposal in your format. Reviewed and sent the same day the deal conversation happens.",
      },
      {
        title: "Submarket and market reports",
        body: "CoStar and LoopNet data pulled into a narrative market report your client will actually read. Vacancy trends, absorption, notable transactions, and the outlook in your voice.",
      },
      {
        title: "Prospect research briefs",
        body: "Tenant or buyer background, business profile, likely real estate needs, and the three things worth knowing before the first call. Ready before you pick up the phone.",
      },
      {
        title: "Pipeline nurture cadence",
        body: "Sixty-name pipeline with a personalized outreach sequence per contact. Market updates, deal alerts, and check-ins drafted in your voice and timed to the prospect's cycle stage.",
      },
      {
        title: "Comp summaries",
        body: "CoStar, LoopNet, and Crexi searches synthesized into a clean comp summary with the relevant data points flagged. The spreadsheet your client asks for is ready, not in progress.",
      },
      {
        title: "Deal timeline and follow-up tracker",
        body: "Open deals, next steps, and follow-up timing across your active book. Drafted from your CRM notes so nothing slips between the site tour and the LOI.",
      },
    ],
    faq: [
      {
        q: "How can AI help commercial real estate agents?",
        a: "The highest-value areas are financial analysis prep, document drafting, prospect research, and pipeline nurture. AI compresses the structured work between judgment calls. You still read the deal and know the market. AI does the rent roll summary, the OM draft, the comp synthesis, and the outreach email that needed to go out Tuesday. Most CRE brokers get four to eight hours a week back in the first month.",
      },
      {
        q: "Will AI make my cap rate and NOI analysis less accurate?",
        a: "The inputs determine the accuracy, not the AI layer. We build the workflow against your actual numbers from Excel or Argus. The AI structures and narrates the analysis; it does not source the figures. You review every output before it goes to a client. The risk of error goes down, not up, because the workflow makes it harder to transpose a number or miss a line item in the summary.",
      },
      {
        q: "How is client and deal data handled?",
        a: "Your data stays in your environment. We work in your tenant with zero-retention configurations. Deal financials, tenant information, and prospect data do not train public models and do not leave the tools you already control. We sign NDAs and treat every engagement as if the audit is next week.",
      },
      {
        q: "What does this cost and who owns the workflows we build?",
        a: "Engagements are monthly retainers scoped on the discovery call. Everything we build runs in your stack, your CoStar account, your CRM, your cloud storage. When the engagement ends, the workflows are yours. There is no proprietary platform, no per-seat license, no lock-in. You own the operating system.",
      },
      {
        q: "Does this work with CoStar, LoopNet, and my CRM?",
        a: "Yes. We build against CoStar exports, LoopNet data pulls, and Crexi outputs. We integrate with the CRM you use, whether that is Salesforce, HubSpot, ClientLook, or a custom setup. We do not ask you to migrate or replace tools you already pay for.",
      },
      {
        q: "I work on long sales cycles. How does AI help with a deal that takes twelve months to close?",
        a: "Long cycles are where the pipeline nurture workflow matters most. We build a contact cadence that keeps every prospect in your pipeline touched at the right interval with something specific, a submarket update, a relevant comp, a deal alert, not a generic check-in. The broker who stays present across the full cycle wins the deal when the tenant finally moves. AI makes it possible to stay present across sixty names without writing sixty emails by hand every month.",
      },
    ],
    whatChanges: [
      {
        heading: "Tuesday morning before the pitch",
        body: "You have a meeting at 10:00 with a prospect who owns two office buildings and might list one. You open the brief at 8:30. Building address, recent comps in the submarket, estimated cap rate range, tenant credit summary, and the three things worth knowing about the owner's portfolio. You wrote none of it. You read it in fifteen minutes and walked in sharp.",
      },
      {
        heading: "The offering memorandum",
        body: "Industrial flex listing signs Thursday. The seller wants the OM out Monday. Used to mean a weekend. Now it means Friday afternoon drafting the property narrative and financial summary into the workflow, Saturday morning reviewing the output, Monday morning sending a polished document. The weekend is still mostly yours.",
      },
      {
        heading: "The pipeline that stayed warm",
        body: "You have forty-three prospects in various stages of a six-to-eighteen-month cycle. Most of them have not heard from you since last quarter. The workflow runs a monthly outreach cadence against each one with a market note or a comp that is actually relevant to their asset class. Three of them respond in the next thirty days. One schedules a call.",
      },
      {
        heading: "The submarket report your client forwarded",
        body: "You sent a quarterly industrial submarket report last month. Two paragraphs of narrative, absorption data, three notable transactions, and an outlook paragraph in your voice. Your client forwarded it to two colleagues. One of them called you the following week about a building they need to sell.",
      },
      {
        heading: "The LOI that closed the site tour",
        body: "Site tour on Wednesday. Tenant says they want to move forward. You draft the LOI on the drive back, review it over dinner, send it Thursday morning. The competing broker sent theirs Friday afternoon. You had the deal in hand before the weekend.",
      },
    ],
    howWeWork: [
      "Engagements start with the workflow that is costing you the most hours right now. For most CRE brokers that is either the financial analysis brief or the offering memorandum, because those are the documents that determine whether you win the listing. We build the workflow on a real deal in your active book, with your CoStar data and your deal terms. Not a sandbox. Not a template exercise. You see it work on something live before we build anything else.",
      "By week four you have a financial analysis brief workflow and an OM draft workflow running on real listings. Weeks five through eight wire the prospect research brief and the pipeline nurture cadence against your CRM. By week twelve you have a documented operating system that runs on CoStar, your CRM, your cloud drive, and your email client. Nothing requires a new platform. Your existing stack gets smarter.",
      "We work with your tools. CoStar exports, LoopNet pulls, Crexi data, Excel and Argus models, Salesforce or HubSpot or ClientLook, DocuSign for the signature workflow. The AI layer sits between the data you already pull and the documents you already deliver. If you have a specific tool your market uses that is not on that list, bring it to the discovery call and we will tell you within a week whether we can wire to it.",
    ],
    whatThisIsNot: "This is not a CoStar replacement, a valuation tool, or a transaction management platform. We do not underwrite deals for you, give legal advice, or review contracts. We do not run your business while you golf. If you want a managed-services shop that sends emails under your name without your involvement, this is not it. The brokers we work with are serious practitioners who want to stay close to every deal and every client relationship. What we build is the structural support that lets you stay in those relationships without the prep work eating the week.",
    primaryKeyword: "ai for commercial real estate agents",
    secondaryKeywords: [
      "ai for commercial real estate brokers",
      "commercial real estate agent automation",
      "cre offering memorandum ai",
      "ai for cap rate and noi analysis",
      "commercial real estate pipeline management",
      "ai lease and financial analysis cre",
      "commercial real estate prospect research ai",
      "costar ai workflow for brokers",
    ],
  },

{
  slug: "investment-agents",
  marqueeLabel: "Investment agents",
  h1: "AI for Investment Property Agents.",
  metaTitle: "AI for Investment Property Agents | VERA",
  metaDescription:
    "AI for investment property agents who need fast deal math, off-market sourcing, and a CRM that keeps investor clients buying.",
  intro:
    "Your investors move fast and disappear if the numbers are slow. AI is the analyst seat you do not have to hire: cap rates, pro formas, rent comps, and investor follow-up running while you are at the property.",
  painPoints: [
    "Running cap rates and cash-on-cash manually for every deal eats the morning you need for showings",
    "Off-market leads from PropStream and DealMachine pile up unworked because there is no time to sort and personalize outreach",
    "Pro forma builds take an hour each and investors want them before they will take a call",
    "Investor clients go cold in Follow Up Boss because the re-engagement sequences are generic or nonexistent",
    "Neighborhood and rent comp research is inconsistent across markets and takes time you do not bill for",
    "Deal comparison reports that actually close a buyer have to be built fresh every time",
  ],
  workflows: [
    {
      title: "Cap rate and cash-on-cash analysis",
      body: "Address in. Purchase price, estimated rents from Rentometer, expenses, NOI, cap rate, and cash-on-cash return out. Formatted as a one-page summary your investor can read before the 8 AM call.",
    },
    {
      title: "Pro forma builder",
      body: "Rehab estimate plus rent projection into a five-year pro forma with year-one cash flow, annualized return, and a refi scenario if the numbers support it. Built in minutes, not an hour.",
    },
    {
      title: "Off-market lead scoring and outreach",
      body: "PropStream or DealMachine pulls scored against a specific investor's buy box, then a personalized first-touch drafted per property. Two hundred leads to twenty warm outreaches in under an hour.",
    },
    {
      title: "Rent comp briefs",
      body: "Rentometer pull plus MLS rent history for the zip, formatted into a one-page comp sheet that answers the question your investor actually asks: what will this rent for in ninety days.",
    },
    {
      title: "Deal comparison reports",
      body: "Two to four properties side by side on the metrics that matter: cap rate, cash-on-cash, price per unit, gross rent multiplier, and a plain-language take on which one wins for the investor's stated criteria.",
    },
    {
      title: "Investor CRM re-engagement",
      body: "Dormant contacts in Follow Up Boss surfaced by last close date and deal history. Re-engagement messages drafted in your voice, not a broadcast template. The investor who bought a duplex two years ago hears something that references that deal.",
    },
    {
      title: "Neighborhood market briefs",
      body: "Days on market, price per square foot, rental vacancy, and crime trend for any submarket, pulled and formatted before the client call. You walk in with the answer instead of pulling up Zillow on your phone.",
    },
    {
      title: "Listing and offer package prep",
      body: "Investment property listings and offer packages prepped with the investor narrative front and center: income history, current rents, expense ratio, and the upside thesis. Buyers and their lenders read it faster.",
    },
  ],
  faq: [
    {
      q: "How can AI help agents who work with investors?",
      a: "The biggest wins are speed and throughput. AI runs deal math in minutes instead of forty, scores lead lists before you work them, and keeps investor relationships warm in the CRM with messages that sound personal. Agents who have it in place can respond to a deal same-day and carry a deeper roster of active investor clients without burning out.",
    },
    {
      q: "How accurate is the deal math AI produces?",
      a: "As accurate as the inputs you give it. The model runs the formulas correctly every time. The variable is the rent estimate and the expense assumption you feed it. We build the workflow to pull from Rentometer and the MLS for rent comps, and we flag when the inputs are thin so you can verify before you send. You are still the one who signs off on the numbers. AI does the arithmetic and the formatting, not the judgment call.",
    },
    {
      q: "Is my client data and deal data safe?",
      a: "We work in your tenant with zero-retention configurations. Your investor contacts, deal history, and CRM data do not train public models. We sign NDAs and run everything as if the compliance audit is tomorrow. Follow Up Boss data stays in your Follow Up Boss account.",
    },
    {
      q: "What does an engagement cost and who owns the workflows at the end?",
      a: "Engagements are flat monthly retainers scoped on the discovery call. You own everything we build. The workflows live in your stack, your API keys, your tenant. When the engagement ends you have a documented playbook and nothing has been locked behind a VERA-proprietary platform.",
    },
    {
      q: "Does this work if I operate in multiple markets?",
      a: "Yes. We configure the rent comp and neighborhood brief workflows per market. Deal scoring for your investor clients is set up against their individual buy boxes, not a generic national filter. Most agents we work with who operate in two or three markets say the multi-market research time is where they see the biggest relief.",
    },
    {
      q: "I already use Follow Up Boss and DocuSign. Do I have to change tools?",
      a: "No. We wire into Follow Up Boss for the CRM re-engagement layer and DocuSign sits where it already sits. We do not ask you to migrate. The tools you already pay for do more.",
    },
  ],
  openingEssay: [
    "Investment agents live in a different rhythm than residential agents. A buyer-side residential client takes six months to close one deal. A serious investor expects you to have three viable options in their inbox by Thursday, with an opinion on each one. The math has to be right, the comps have to be current, and the story has to be tight enough that they trust you before a competitor gets the call. Most agents who work with investors are doing all of that manually, in spreadsheets, on their phone, between showings.",
    "The bottleneck is not intelligence. Every investment-focused agent we talk to knows how to run a cap rate. The bottleneck is time. It takes forty minutes to pull comps from the MLS, run a cash-on-cash, check Rentometer, and format it into something a busy investor can read at 6 AM. Multiply that by five deals a week and you are spending four hours doing analysis that a model can do in four minutes with the right setup. That is not a small efficiency. That is the difference between responding to a hot deal same-day and responding the next morning after someone else already has it under contract.",
    "The sourcing problem is equally real. Off-market leads from DealMachine or PropStream arrive as raw data: addresses, equity estimates, ownership info. They do not arrive as a coherent outreach strategy. The agents who close off-market deals are the ones who can take a pull of two hundred leads, score them by fit for a specific investor's criteria, and get a personalized first-touch email out within the hour. That workflow does not happen manually at scale. It happens when there is an AI layer between the data and the CRM.",
    "Follow Up Boss is only as good as the sequences running inside it. Most agents have a CRM full of investor contacts who went cold because the follow-up got inconsistent. An investor who bought one duplex two years ago is probably ready to buy again. They are not calling you because you have not given them a reason to. AI is what keeps the long tail of investor relationships warm, surfaces the re-engagement timing, and drafts the message that feels personal instead of broadcast.",
    "The agents who win the next five years in the investment space are not the ones who know the most about deal math. They are the ones who can deliver deal math faster than anyone else in the market. Speed is the product. AI is what makes the speed possible without burning out.",
  ],
  whatChanges: [
    {
      heading: "The 7 AM deal drop",
      body: "A deal hits the MLS at 6:45. By 7:10 you have a one-page analysis in your investor's inbox: cap rate, cash-on-cash, rent comp pulled from Rentometer, and a plain-English take. You were not the second agent to call. You were the first one with numbers.",
    },
    {
      heading: "The PropStream pull that actually gets worked",
      body: "Two hundred absentee-owner leads used to sit in a spreadsheet for two weeks. Now you score them against your investor's buy box in twenty minutes, and the top forty have a personalized first-touch drafted and queued in Follow Up Boss before lunch.",
    },
    {
      heading: "The investor call on Wednesday",
      body: "Your client asks about a submarket they heard about at a meetup. You walk in with a neighborhood brief already on your screen: days on market, median rent, cap rate range, and what inventory looks like. The conversation moves to a specific property in the first five minutes instead of the last five.",
    },
    {
      heading: "The dormant client who bought again",
      body: "An investor who closed two years ago and went quiet gets a message that references their duplex by address and notes that similar product in that zip is moving at a better cap rate than when they bought. They reply within the day. The relationship did not go cold. You just had not given it fuel.",
    },
    {
      heading: "The pro forma that closed the deal",
      body: "Your investor was sitting between two properties. A side-by-side comparison with a five-year pro forma on each, a refi scenario, and a one-line recommendation landed in their inbox at 9 PM. They signed the offer by morning. The other agent sent a PDF of the listing sheet.",
    },
  ],
  howWeWork: [
    "We start with the workflow that costs you the most deals, which for investment agents is almost always the deal analysis turnaround. We build the cap rate and cash-on-cash workflow on a real deal you have in front of you right now, not a hypothetical. You see whether it shaves forty minutes down to four before we build anything else.",
    "Weeks two through five add the pro forma builder, rent comp briefs, and the off-market scoring layer wired to your PropStream or DealMachine account. By week six we move into the Follow Up Boss re-engagement sequences, because that is usually where the most money is sitting dormant. By week ten you have a documented operating system and your assistant or a TC can run the research layer without you in the room.",
    "Everything stays in your stack. Follow Up Boss for the CRM layer, DocuSign where it already lives, the MLS for comps, PropStream or DealMachine for off-market, Rentometer for the rent data. We do not ask you to learn a new platform. We wire AI into the seams of the tools you already pay for.",
  ],
  whatThisIsNot:
    "This is not a deal-finding service. We do not source deals for you or your clients. We do not give investment advice and nothing we build constitutes a recommendation to buy any specific property. We do not replace your judgment on deal underwriting, we compress the time it takes to get the numbers in front of the right people so your judgment can do its job faster. If you want a fully managed transaction coordination service or a lead-generation platform, this is not it.",
  anecdote: {
    setup:
      "An investment-focused agent working with twelve active investor clients was running every deal analysis by hand in a Google Sheet. It took him forty-five minutes per deal and he was missing same-day response windows on deals that were going under contract before he could call his buyers.",
    turn:
      "We built the cap rate and pro forma workflow in week one on a real fourplex his client was considering. By week three he had the off-market scoring layer running on his PropStream pulls and a re-engagement sequence live in Follow Up Boss for his dormant list.",
    line:
      "He closed three deals in the next sixty days that he would have been too slow to reach. Two of them came from the dormant list.",
  },
  primaryKeyword: "ai for real estate investors",
  secondaryKeywords: [
    "ai for investor agents",
    "ai deal analysis real estate",
    "investment property agent ai",
    "real estate pro forma automation",
    "ai cap rate analysis real estate",
    "off market lead scoring ai",
    "investor crm automation real estate",
    "ai tools for real estate investment agents",
  ],
},

];

export function getVerticalBySlug(slug: string): Vertical | undefined {
  return VERTICALS.find((v) => v.slug === slug);
}

export function getAllSlugs(): string[] {
  return VERTICALS.map((v) => v.slug);
}
