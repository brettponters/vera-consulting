import type { MetadataRoute } from "next";
import { getAllSlugs } from "@/data/verticals";
import { getAllLocationSlugs } from "@/data/locations";

const BASE_URL = "https://veraconsulting.co";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const homepage: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];

  const mainRoutes: MetadataRoute.Sitemap = [
    "/about",
    "/how-we-work",
    "/our-strategy",
    "/our-work",
    "/ai-in-real-estate",
    "/reading",
    "/contact",
    "/get-started",
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const thinOrLegal: MetadataRoute.Sitemap = [
    "/charter",
    "/benefit-report",
    "/privacy",
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency: "yearly",
    priority: 0.4,
  }));

  // Programmatic vertical landing pages: /for/[slug] + index at /for
  const verticalRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/for`, lastModified, changeFrequency: "weekly", priority: 0.85 },
    ...getAllSlugs().map((slug) => ({
      url: `${BASE_URL}/for/${slug}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    })),
  ];

  // Local service-area pages: /locations + /locations/[slug]
  const locationRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/locations`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    ...getAllLocationSlugs().map((slug) => ({
      url: `${BASE_URL}/locations/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];

  return [
    ...homepage,
    ...mainRoutes,
    ...verticalRoutes,
    ...locationRoutes,
    ...thinOrLegal,
  ];
}
