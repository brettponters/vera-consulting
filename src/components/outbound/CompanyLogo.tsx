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
  const initials = company
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return (
    <div
      className="flex h-16 w-48 shrink-0 items-center justify-center rounded-xl border border-black/10 p-4"
      style={{ backgroundColor }}
    >
      {failed || !logoUrl ? (
        <span className="text-lg font-bold tracking-[0.16em] text-white">{initials}</span>
      ) : (
        <img
          src={logoUrl}
          alt={`${company} logo`}
          className="h-full w-full object-contain"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}

