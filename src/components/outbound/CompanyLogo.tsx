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
  const isFavicon = logoUrl.includes("google.com/s2/favicons");
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
    <div
      className="flex h-16 w-48 shrink-0 items-center justify-center rounded-xl border border-black/10 p-4"
      style={{ backgroundColor }}
    >
      {failed || !logoUrl || isFavicon ? (
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
          className="h-full w-full object-contain"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}
