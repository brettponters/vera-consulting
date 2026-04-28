import React from "react";

interface Props {
  className?: string;
}

/**
 * Compact CoAgent architecture diagram for the home-page marquee.
 * Max 600x360. Transparent background (sits on #0a0a0a).
 */
export default function CoAgentArchitectureCompact({ className }: Props) {
  const stroke = "#888888";
  const accent = "#e8693a";
  const text = "#cccccc";
  const labelDim = "#999999";
  const font = "var(--font-cabinet), sans-serif";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 600 360"
      fill="none"
      className={className}
      role="img"
      aria-label="CoAgent architecture diagram showing LLM core, tools, memory, guardrails, and user interface layers"
    >
      {/* ── User Surface ── */}
      <rect x="180" y="16" width="240" height="44" rx="8" stroke={stroke} strokeWidth="1" />
      <text x="300" y="43" textAnchor="middle" fill={text} fontSize="13" fontFamily={font} fontWeight="600">
        Chat / Inbox / Queue
      </text>

      {/* ── Connector: Surface → LLM ── */}
      <line x1="300" y1="60" x2="300" y2="104" stroke={stroke} strokeWidth="1" />
      <polygon points="296,104 300,112 304,104" fill={stroke} />

      {/* ── LLM Core ── */}
      <rect x="170" y="112" width="260" height="56" rx="8" stroke={accent} strokeWidth="1.5" />
      <text x="300" y="137" textAnchor="middle" fill="#ffffff" fontSize="14" fontFamily={font} fontWeight="700">
        LLM Core
      </text>
      <text x="300" y="155" textAnchor="middle" fill={labelDim} fontSize="11" fontFamily={font}>
        Claude / Agent Loop
      </text>

      {/* ── Connector: LLM → Memory (left) ── */}
      <line x1="170" y1="140" x2="108" y2="140" stroke={stroke} strokeWidth="1" />
      <line x1="108" y1="140" x2="108" y2="200" stroke={stroke} strokeWidth="1" />
      <polygon points="104,200 108,208 112,200" fill={stroke} />

      {/* ── Connector: LLM → Tools (right) ── */}
      <line x1="430" y1="140" x2="492" y2="140" stroke={accent} strokeWidth="1" />
      <line x1="492" y1="140" x2="492" y2="200" stroke={accent} strokeWidth="1" />
      <polygon points="488,200 492,208 496,200" fill={accent} />

      {/* ── Memory Layer ── */}
      <rect x="20" y="208" width="176" height="56" rx="8" stroke={stroke} strokeWidth="1" />
      <text x="108" y="233" textAnchor="middle" fill={text} fontSize="13" fontFamily={font} fontWeight="600">
        Memory
      </text>
      <text x="108" y="251" textAnchor="middle" fill={labelDim} fontSize="10" fontFamily={font}>
        Conversation + Facts
      </text>

      {/* ── Tool Layer ── */}
      <rect x="404" y="208" width="176" height="56" rx="8" stroke={stroke} strokeWidth="1" />
      <text x="492" y="233" textAnchor="middle" fill={text} fontSize="13" fontFamily={font} fontWeight="600">
        Tools
      </text>
      <text x="492" y="251" textAnchor="middle" fill={labelDim} fontSize="10" fontFamily={font}>
        MLS / CRM / Cal / Email
      </text>

      {/* ── Connector: LLM → Guardrails ── */}
      <line x1="300" y1="168" x2="300" y2="296" stroke={stroke} strokeWidth="1" />
      <polygon points="296,296 300,304 304,296" fill={stroke} />

      {/* ── Guardrails ── */}
      <rect x="130" y="304" width="340" height="44" rx="8" stroke={stroke} strokeWidth="1" strokeDasharray="4 3" />
      <text x="300" y="331" textAnchor="middle" fill={labelDim} fontSize="12" fontFamily={font} fontWeight="500">
        Guardrails: Input / Output / Cost Cap / Refusal
      </text>
    </svg>
  );
}
