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

  const hex = backgroundColor.replace("#", "");
  const normalizedHex = hex.length === 3
    ? hex.split("").map((character) => character + character).join("")
    : hex;
  const colorValue = Number.parseInt(normalizedHex, 16);
  const red = (colorValue >> 16) & 255;
  const green = (colorValue >> 8) & 255;
  const blue = colorValue & 255;
  const isLightBackground = (red * 299 + green * 587 + blue * 114) / 1000 > 170;

  return (
    <div className="flex h-16 w-48 shrink-0 items-center justify-start overflow-hidden">
      {failed || !logoUrl ? (
        <span
          className={`text-2xl font-black tracking-[0.12em] ${isLightBackground ? "text-black" : "text-white"}`}
          aria-label={`${company} wordmark`}
        >
          {initials}
        </span>
      ) : (
        <img
          src={logoUrl}
          alt={`${company} logo`}
          className="block max-h-11 max-w-full object-contain"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}
