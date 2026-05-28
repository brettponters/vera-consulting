"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Era = "early" | "winter" | "revival" | "deep" | "transformer" | "frontier";

type TimelineEvent = {
  year: string;
  title: string;
  blurb: string;
  era: Era;
  major?: boolean;
};

const EVENTS: TimelineEvent[] = [
  {
    year: "1956",
    title: "Dartmouth Workshop",
    era: "early",
    major: true,
    blurb:
      "A two-month summer workshop organized by John McCarthy, Marvin Minsky, Claude Shannon, and Nathaniel Rochester. The proposal coined the term artificial intelligence. The conjecture they wrote down, that any feature of intelligence can in principle be precisely described and simulated by a machine, is still the working hypothesis.",
  },
  {
    year: "1957",
    title: "The Perceptron",
    era: "early",
    blurb:
      "Frank Rosenblatt at Cornell built the first artificial neuron that could actually learn from examples. The hardware version, the Mark I, recognized simple visual patterns. Every neural network in use today descends from it.",
  },
  {
    year: "1966",
    title: "ELIZA",
    era: "early",
    blurb:
      "Joseph Weizenbaum at MIT wrote a pattern-matching program that imitated a psychotherapist. People talked to it like it understood them, including Weizenbaum's own secretary. The Eliza effect, the human tendency to read understanding into mechanical responses, is still a useful caution today.",
  },
  {
    year: "1969",
    title: "Perceptrons critique",
    era: "winter",
    blurb:
      "Minsky and Papert published a book proving that a single-layer perceptron could not learn even simple problems like XOR. Funding for neural network research collapsed and a long winter began. Multi-layer networks could solve the problem, but no one had a practical way to train them yet.",
  },
  {
    year: "1986",
    title: "Backpropagation",
    era: "winter",
    blurb:
      "Rumelhart, Hinton, and Williams published an efficient way to train multi-layer networks. The technique had been described before, but their paper made it practical. Neural networks came back into serious research.",
  },
  {
    year: "1987",
    title: "Second AI winter",
    era: "winter",
    blurb:
      "Expert systems, the dominant commercial AI of the 1980s, were brittle and expensive to maintain. The specialized Lisp Machine hardware market collapsed when general-purpose workstations caught up on price and performance. Over 300 AI companies folded by 1993.",
  },
  {
    year: "1997",
    title: "Deep Blue beats Kasparov",
    era: "revival",
    major: true,
    blurb:
      "IBM's chess computer defeated the reigning world champion in a six-game match. It searched 200 million positions per second, brute force rather than understanding. Symbolically it marked the moment machines crossed a threshold humans had treated as theirs alone.",
  },
  {
    year: "2006",
    title: "Deep belief networks",
    era: "revival",
    blurb:
      "Hinton, Osindero, and Teh showed that deep neural networks could actually be trained efficiently using layer-wise pre-training, solving a problem that had blocked the field for decades. This paper is the spark that revived deep learning.",
  },
  {
    year: "2012",
    title: "AlexNet",
    era: "deep",
    major: true,
    blurb:
      "Krizhevsky, Sutskever, and Hinton's neural network won the ImageNet competition by a huge margin, cutting error rates nearly in half. They trained it on GPUs, not CPUs. After AlexNet, computer vision moved to deep learning across the board.",
  },
  {
    year: "2013",
    title: "Word2Vec",
    era: "deep",
    blurb:
      "Mikolov and colleagues at Google published a way to turn words into vectors such that meaning showed up as geometry. King minus man plus woman landed near queen. Embeddings became a foundational tool for everything downstream.",
  },
  {
    year: "2014",
    title: "GANs and seq2seq",
    era: "deep",
    blurb:
      "Ian Goodfellow's generative adversarial networks introduced a way to train models to produce realistic images, audio, and text. The same year, sequence-to-sequence models showed neural networks could translate between languages end-to-end. Generative AI as a category starts here.",
  },
  {
    year: "2017",
    title: "Attention Is All You Need",
    era: "transformer",
    major: true,
    blurb:
      "Eight Google researchers published the transformer architecture, replacing recurrence with self-attention. Transformers were faster to train, scaled better, and worked across modalities. Every modern frontier model descends from this paper.",
  },
  {
    year: "2018",
    title: "BERT and GPT-1",
    era: "transformer",
    blurb:
      "Google's BERT and OpenAI's GPT-1 demonstrated that a single transformer, pretrained on huge text corpora, could be fine-tuned to beat task-specific models on most language benchmarks. The pretraining-then-fine-tuning recipe became standard.",
  },
  {
    year: "2020",
    title: "GPT-3 and scaling laws",
    era: "transformer",
    major: true,
    blurb:
      "OpenAI's 175-billion-parameter model showed that very large language models could learn new tasks from just a few examples in the prompt. Jared Kaplan and colleagues published the scaling laws paper the same year, giving the theoretical backbone for why bigger plus more data plus more compute keeps working.",
  },
  {
    year: "2022",
    title: "ChatGPT and Chinchilla",
    era: "frontier",
    major: true,
    blurb:
      "ChatGPT launched in November and hit 100 million users in two months, the fastest consumer product growth ever recorded. Earlier that year, DeepMind's Chinchilla paper showed that GPT-3 had been undertrained, and that data and parameters should scale together. Mainstream attention and the research field both accelerated.",
  },
  {
    year: "2023",
    title: "GPT-4, Claude, Gemini",
    era: "frontier",
    blurb:
      "OpenAI released GPT-4, Anthropic released Claude, Google launched Bard and later Gemini. Reasoning, coding, and multi-step problem solving crossed a threshold where serious work could be delegated to a model. The frontier model market became a multi-company race.",
  },
  {
    year: "2024",
    title: "Multimodal, long context",
    era: "frontier",
    blurb:
      "Frontier models added native vision, audio, and context windows in the hundreds of thousands of tokens. The same model could read a codebase, look at a screenshot, and produce a plan. The unit of work expanded.",
  },
  {
    year: "2025",
    title: "Agents become real",
    era: "frontier",
    major: true,
    blurb:
      "Coding agents like Claude Code, Devin, Cursor, and Replit Agent moved from demo to production. Instead of one turn at a time, you give the system a goal and it plans, acts, observes, and iterates. The shape of the work changed.",
  },
  {
    year: "2026",
    title: "Today's frontier",
    era: "frontier",
    major: true,
    blurb:
      "Current models combine long context, native multimodality, agentic loops, and reasoning over hours of compute. Benchmarks designed two years ago are saturating. The open question is no longer what the model can do, it is what the agent built on top of the model can do.",
  },
];

const ERA_LABELS: Record<Era, string> = {
  early: "Early days",
  winter: "Winters",
  revival: "Revival",
  deep: "Deep learning",
  transformer: "Transformer era",
  frontier: "Frontier era",
};

const INITIAL_OPEN_YEAR = "2017";

export function Timeline() {
  const [openYear, setOpenYear] = useState<string>(INITIAL_OPEN_YEAR);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const nodeRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const openEvent = EVENTS.find((e) => e.year === openYear) ?? EVENTS[0];

  // On open change, scroll the rail so the active node is comfortably in view.
  useEffect(() => {
    const node = nodeRefs.current[openYear];
    const rail = scrollRef.current;
    if (!node || !rail) return;
    const railRect = rail.getBoundingClientRect();
    const nodeRect = node.getBoundingClientRect();
    const offset =
      nodeRect.left - railRect.left - railRect.width / 2 + nodeRect.width / 2;
    rail.scrollBy({ left: offset, behavior: "smooth" });
  }, [openYear]);

  return (
    <div className="relative">
      {/* Era legend */}
      <div className="hidden md:flex items-center gap-x-8 gap-y-2 flex-wrap mb-6">
        {(Object.keys(ERA_LABELS) as Era[]).map((era) => (
          <span
            key={era}
            className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-muted)]"
          >
            {ERA_LABELS[era]}
          </span>
        ))}
      </div>

      {/* Scroll hint on mobile */}
      <div className="md:hidden font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-muted)] mb-3">
        Scroll the rail
      </div>

      {/* The rail */}
      <div
        ref={scrollRef}
        className="relative overflow-x-auto pb-2 -mx-6 px-6 md:-mx-2 md:px-2"
        style={{ scrollbarWidth: "thin" }}
      >
        <div className="relative min-w-[1280px]">
          {/* Horizontal line */}
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-[64px] h-px bg-[var(--color-hairline)]"
          />

          <div
            className="grid gap-x-3"
            style={{ gridTemplateColumns: `repeat(${EVENTS.length}, minmax(0, 1fr))` }}
          >
            {EVENTS.map((event) => {
              const isOpen = event.year === openYear;
              return (
                <div key={event.year} className="relative flex flex-col items-center">
                  {/* Year label */}
                  <p
                    className={`font-sans leading-none tracking-[-0.02em] transition-colors ${
                      isOpen
                        ? "text-[var(--color-accent)] font-semibold"
                        : event.major
                        ? "text-[var(--color-heading)] font-semibold"
                        : "text-[var(--color-muted)] font-medium"
                    }`}
                    style={{ fontSize: event.major ? "0.95rem" : "0.85rem" }}
                  >
                    {event.year}
                  </p>

                  {/* spacer to align dots on the rail */}
                  <div className="h-[34px]" />

                  {/* Dot button */}
                  <button
                    ref={(el) => {
                      nodeRefs.current[event.year] = el;
                    }}
                    type="button"
                    onClick={() => setOpenYear(event.year)}
                    aria-pressed={isOpen}
                    aria-label={`${event.year}, ${event.title}`}
                    className="relative z-10 group flex flex-col items-center focus:outline-none"
                  >
                    <span
                      className={`block rounded-full transition-all duration-200 ${
                        isOpen
                          ? "w-[14px] h-[14px] bg-[var(--color-accent)] ring-4 ring-[var(--color-accent)]/15"
                          : event.major
                          ? "w-[11px] h-[11px] bg-[var(--color-accent)] group-hover:ring-4 group-hover:ring-[var(--color-accent)]/15"
                          : "w-[9px] h-[9px] bg-white border-2 border-[var(--color-muted)] group-hover:border-[var(--color-accent)]"
                      }`}
                    />
                    {/* Title */}
                    <span
                      className={`mt-3 font-sans text-[11px] leading-snug text-center max-w-[110px] transition-colors ${
                        isOpen
                          ? "text-[var(--color-heading)] font-semibold"
                          : event.major
                          ? "text-[var(--color-heading)] font-medium"
                          : "text-[var(--color-muted)]"
                      }`}
                    >
                      {event.title}
                    </span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Detail card */}
      <div className="mt-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={openEvent.year}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl border border-[var(--color-hairline)] bg-white px-7 md:px-10 py-8 md:py-10"
          >
            <div className="flex items-baseline gap-5 flex-wrap mb-4">
              <p
                className="font-sans font-semibold text-[var(--color-accent)] leading-none tracking-[-0.02em]"
                style={{ fontSize: "clamp(2rem, 3.4vw, 2.75rem)" }}
              >
                {openEvent.year}
              </p>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-muted)]">
                {ERA_LABELS[openEvent.era]}
              </p>
            </div>
            <h3
              className="font-sans font-semibold text-[var(--color-heading)] tracking-[-0.02em] leading-tight"
              style={{ fontSize: "clamp(1.25rem, 1.8vw, 1.5rem)" }}
            >
              {openEvent.title}
            </h3>
            <p className="mt-4 font-sans text-[var(--color-body)] leading-relaxed text-[16px] max-w-[640px]">
              {openEvent.blurb}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-muted)]">
        Click any year. Filled terracotta dots mark the major milestones.
      </p>
    </div>
  );
}
