import React from "react";

interface Props {
  className?: string;
}

/**
 * Full CoAgent architecture diagram for the /work/coagent case-study page.
 * Max 960x600. Transparent background (sits on #0a0a0a).
 */
export default function CoAgentArchitectureFull({ className }: Props) {
  const stroke = "#888888";
  const accent = "#e8693a";
  const text = "#cccccc";
  const textBright = "#ffffff";
  const labelDim = "#999999";
  const labelFaint = "#666666";
  const font = "var(--font-cabinet), sans-serif";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 960 600"
      fill="none"
      className={className}
      role="img"
      aria-label="Full CoAgent architecture diagram with annotated LLM core, tool integrations, memory layer, guardrails, and user-facing surfaces"
    >
      {/* ═══════════════════════════════════════════
          ROW 1 — User-Facing Surface (3 boxes)
          ═══════════════════════════════════════════ */}
      {/* Chat */}
      <rect x="260" y="20" width="120" height="48" rx="4" stroke={stroke} strokeWidth="1" />
      <text x="320" y="49" textAnchor="middle" fill={text} fontSize="13" fontFamily={font} fontWeight="600">
        Chat
      </text>

      {/* Inbox */}
      <rect x="420" y="20" width="120" height="48" rx="4" stroke={stroke} strokeWidth="1" />
      <text x="480" y="49" textAnchor="middle" fill={text} fontSize="13" fontFamily={font} fontWeight="600">
        Inbox
      </text>

      {/* Queue */}
      <rect x="580" y="20" width="120" height="48" rx="4" stroke={stroke} strokeWidth="1" />
      <text x="640" y="49" textAnchor="middle" fill={text} fontSize="13" fontFamily={font} fontWeight="600">
        Queue
      </text>

      {/* Row 1 label */}
      <text x="130" y="49" textAnchor="end" fill={labelFaint} fontSize="11" fontFamily={font} fontWeight="500" letterSpacing="0.06em">
        USER SURFACE
      </text>

      {/* ── Connectors: Surface → LLM ── */}
      <line x1="320" y1="68" x2="320" y2="130" stroke={stroke} strokeWidth="1" />
      <line x1="480" y1="68" x2="480" y2="130" stroke={stroke} strokeWidth="1" />
      <line x1="640" y1="68" x2="640" y2="108" stroke={stroke} strokeWidth="1" />
      <line x1="640" y1="108" x2="700" y2="108" stroke={stroke} strokeWidth="1" />
      <line x1="700" y1="108" x2="700" y2="130" stroke={stroke} strokeWidth="1" />
      {/* Merge line */}
      <line x1="320" y1="130" x2="700" y2="130" stroke={stroke} strokeWidth="1" />
      {/* Single arrow down */}
      <line x1="480" y1="130" x2="480" y2="148" stroke={stroke} strokeWidth="1" />
      <polygon points="476,148 480,156 484,148" fill={stroke} />

      {/* ═══════════════════════════════════════════
          ROW 2 — LLM Core
          ═══════════════════════════════════════════ */}
      <rect x="300" y="156" width="360" height="72" rx="8" stroke={accent} strokeWidth="1.5" />
      <text x="480" y="186" textAnchor="middle" fill={textBright} fontSize="16" fontFamily={font} fontWeight="700">
        LLM Core
      </text>
      <text x="480" y="210" textAnchor="middle" fill={labelDim} fontSize="12" fontFamily={font}>
        Claude &middot; Agent Loop &middot; Planner &middot; Executor
      </text>

      {/* Row 2 label */}
      <text x="130" y="196" textAnchor="end" fill={labelFaint} fontSize="11" fontFamily={font} fontWeight="500" letterSpacing="0.06em">
        AGENT CORE
      </text>

      {/* ═══════════════════════════════════════════
          ROW 3 — Memory (left) + Tools (right)
          ═══════════════════════════════════════════ */}

      {/* ── Connector: LLM → Memory ── */}
      <line x1="300" y1="192" x2="240" y2="192" stroke={stroke} strokeWidth="1" />
      <line x1="240" y1="192" x2="240" y2="296" stroke={stroke} strokeWidth="1" />
      <polygon points="236,296 240,304 244,296" fill={stroke} />

      {/* ── Connector: LLM → Tools (accent) ── */}
      <line x1="660" y1="192" x2="720" y2="192" stroke={accent} strokeWidth="1" />
      <line x1="720" y1="192" x2="720" y2="296" stroke={accent} strokeWidth="1" />
      <polygon points="716,296 720,304 724,296" fill={accent} />

      {/* ── Memory Layer ── */}
      <rect x="80" y="304" width="320" height="88" rx="8" stroke={stroke} strokeWidth="1" />
      <text x="240" y="332" textAnchor="middle" fill={text} fontSize="14" fontFamily={font} fontWeight="600">
        Memory Layer
      </text>

      {/* Memory sub-items */}
      <rect x="100" y="346" width="128" height="32" rx="4" stroke={stroke} strokeWidth="0.5" />
      <text x="164" y="367" textAnchor="middle" fill={labelDim} fontSize="11" fontFamily={font}>
        Conversation Memory
      </text>

      <rect x="248" y="346" width="128" height="32" rx="4" stroke={stroke} strokeWidth="0.5" />
      <text x="312" y="367" textAnchor="middle" fill={labelDim} fontSize="11" fontFamily={font}>
        Long-term Facts
      </text>

      {/* Row 3 label */}
      <text x="42" y="348" textAnchor="end" fill={labelFaint} fontSize="11" fontFamily={font} fontWeight="500" letterSpacing="0.06em">
        MEMORY
      </text>

      {/* ── Tool Layer ── */}
      <rect x="560" y="304" width="320" height="136" rx="8" stroke={stroke} strokeWidth="1" />
      <text x="720" y="332" textAnchor="middle" fill={text} fontSize="14" fontFamily={font} fontWeight="600">
        Tool Layer
      </text>

      {/* Tool sub-items: 2x2 grid */}
      <rect x="580" y="346" width="128" height="32" rx="4" stroke={stroke} strokeWidth="0.5" />
      <text x="644" y="367" textAnchor="middle" fill={labelDim} fontSize="11" fontFamily={font}>
        MLS Lookup
      </text>

      <rect x="728" y="346" width="128" height="32" rx="4" stroke={stroke} strokeWidth="0.5" />
      <text x="792" y="367" textAnchor="middle" fill={labelDim} fontSize="11" fontFamily={font}>
        Contact CRM
      </text>

      <rect x="580" y="392" width="128" height="32" rx="4" stroke={stroke} strokeWidth="0.5" />
      <text x="644" y="413" textAnchor="middle" fill={labelDim} fontSize="11" fontFamily={font}>
        Calendar
      </text>

      <rect x="728" y="392" width="128" height="32" rx="4" stroke={stroke} strokeWidth="0.5" />
      <text x="792" y="413" textAnchor="middle" fill={labelDim} fontSize="11" fontFamily={font}>
        Email
      </text>

      {/* Tool label */}
      <text x="918" y="348" textAnchor="end" fill={labelFaint} fontSize="11" fontFamily={font} fontWeight="500" letterSpacing="0.06em">
        TOOLS
      </text>

      {/* ═══════════════════════════════════════════
          ROW 4 — Guardrails (full width, dashed)
          ═══════════════════════════════════════════ */}

      {/* ── Connector: LLM → Guardrails ── */}
      <line x1="480" y1="228" x2="480" y2="496" stroke={stroke} strokeWidth="1" />
      <polygon points="476,496 480,504 484,496" fill={stroke} />

      <rect x="140" y="504" width="680" height="72" rx="8" stroke={stroke} strokeWidth="1" strokeDasharray="6 4" />
      <text x="480" y="534" textAnchor="middle" fill={text} fontSize="14" fontFamily={font} fontWeight="600">
        Guardrails
      </text>

      {/* Guardrail sub-labels */}
      <text x="240" y="558" textAnchor="middle" fill={labelDim} fontSize="11" fontFamily={font}>
        Input Filter
      </text>
      <text x="390" y="558" textAnchor="middle" fill={labelDim} fontSize="11" fontFamily={font}>
        Output Filter
      </text>
      <text x="560" y="558" textAnchor="middle" fill={labelDim} fontSize="11" fontFamily={font}>
        Cost Cap
      </text>
      <text x="700" y="558" textAnchor="middle" fill={labelDim} fontSize="11" fontFamily={font}>
        Refusal Patterns
      </text>

      {/* Separators between sub-labels */}
      <line x1="315" y1="544" x2="315" y2="564" stroke={labelFaint} strokeWidth="0.5" />
      <line x1="476" y1="544" x2="476" y2="564" stroke={labelFaint} strokeWidth="0.5" />
      <line x1="630" y1="544" x2="630" y2="564" stroke={labelFaint} strokeWidth="0.5" />

      {/* Row 4 label */}
      <text x="100" y="544" textAnchor="end" fill={labelFaint} fontSize="11" fontFamily={font} fontWeight="500" letterSpacing="0.06em">
        GUARDRAILS
      </text>

      {/* ── Bidirectional arrow annotation on accent connector ── */}
      <text x="742" y="252" fill={accent} fontSize="10" fontFamily={font} fontWeight="500">
        API calls
      </text>
    </svg>
  );
}
