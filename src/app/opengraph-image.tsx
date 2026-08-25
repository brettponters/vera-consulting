import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "VERA Solutions, an outcome-aligned B2B growth partner";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#FAF5EA",
          color: "#050507",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <svg
            width="44"
            height="66"
            viewBox="0 0 360 540"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 0 0 L 180 540 L 360 0"
              stroke="#C97B3F"
              strokeWidth="72"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span
              style={{
                fontSize: 36,
                fontWeight: 700,
                letterSpacing: "0.08em",
              }}
            >
              VERA
            </span>
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: 999,
                background: "#C97B3F",
              }}
            />
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
              maxWidth: 1000,
            }}
          >
Define the outcome. We build the system to reach it.
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              fontSize: 24,
              color: "#5C5C66",
            }}
          >
            <span>Growth Strategy</span>
            <span style={{ color: "#C97B3F" }}>·</span>
            <span>Operated Acquisition</span>
            <span style={{ color: "#C97B3F" }}>·</span>
            <span>Outcome Alignment</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 20,
            color: "#5C5C66",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}
        >
          <span>verasolutions.ai</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
