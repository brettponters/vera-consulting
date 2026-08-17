"use client";

import { useState } from "react";

export function CompanyLogo({
  company,
  logoUrl,
  backgroundColor,
}: {
  company: string;
  logoUrl: string;
  backgroundColor: string;
}) {
  const [failed, setFailed] = useState(false);
  if (failed || !logoUrl) return null;

  return (
    <div className="flex h-16 w-48 shrink-0 items-center justify-start overflow-hidden">
      <img
        src={logoUrl}
        alt={`${company} logo`}
        className="block max-h-11 max-w-full object-contain"
        onError={() => setFailed(true)}
      />
    </div>
  );
}
