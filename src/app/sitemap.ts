import type { MetadataRoute } from "next";

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
    "/ai-fundamentals",
    "/reading",
    "/coaching",
    "/for-real-estate",
    "/solutions",
    "/contact",
    "/get-started",
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const solutionRoutes: MetadataRoute.Sitemap = [
    "/solutions/strategy",
    "/solutions/policy",
    "/solutions/coaching",
    "/solutions/training",
    "/solutions/agents",
    "/solutions/compliance",
    "/solutions/risk",
    "/solutions/evaluation",
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  const locationRoutes: MetadataRoute.Sitemap = [
    "/locations",
    "/locations/boca-raton",
    "/locations/delray-beach",
    "/locations/boynton-beach",
    "/locations/deerfield-beach",
    "/locations/fort-lauderdale",
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
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

  return [
    ...homepage,
    ...mainRoutes,
    ...solutionRoutes,
    ...locationRoutes,
    ...thinOrLegal,
  ];
}
