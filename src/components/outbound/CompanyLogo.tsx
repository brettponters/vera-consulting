"use client";

import { useState } from "react";

export function CompanyLogo({
  company,
  logoUrl,
}: {
  company: string;
  logoUrl: string;
}) {
  const [failed, setFailed] = useState(false);
  const [shape, setShape] = useState<"wide" | "standard" | "mark">("wide");
  const faviconGrade = /(?:favicon|apple-touch-icon|\/icon(?:[-_.\/]|$))/i.test(logoUrl);
  if (failed || !logoUrl || faviconGrade) return null;

  const width = {
    wide: "w-60",
    standard: "w-40",
    mark: "w-20",
  }[shape];

  return (
    <div className={`flex h-20 ${width} max-w-[58vw] shrink-0 items-center justify-start overflow-hidden`}>
      <img
        src={logoUrl}
        alt={`${company} logo`}
        className="block h-full w-full object-contain object-left mix-blend-multiply"
        onLoad={(event) => {
          const { naturalWidth, naturalHeight } = event.currentTarget;
          if (!naturalWidth || !naturalHeight || (naturalWidth <= 64 && naturalHeight <= 64)) {
            setFailed(true);
            return;
          }
          const ratio = naturalWidth / naturalHeight;
          setShape(ratio >= 2.4 ? "wide" : ratio >= 1.25 ? "standard" : "mark");
        }}
        onError={() => setFailed(true)}
      />
    </div>
  );
}
