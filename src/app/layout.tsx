import type { Metadata } from "next";
import Script from "next/script";
import { dmSans, instrumentSans } from "./fonts";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { EditMode } from "@/components/ui/EditMode";
import { MotionGuard } from "@/components/MotionGuard";
import "./globals.css";

const SITE_URL = "https://www.verasolutions.ai";
const SITE_DESCRIPTION =
  "VERA Solutions turns measurable B2B growth targets into operated acquisition systems, with compensation aligned to the outcome.";
const DEFAULT_TITLE = "Outcome-Aligned B2B Growth Partner | VERA Solutions";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: "%s | VERA Solutions",
    default: DEFAULT_TITLE,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    title: DEFAULT_TITLE,
    description: SITE_DESCRIPTION,
    type: "website",
    siteName: "VERA Solutions",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "@id": `${SITE_URL}/#org`,
  name: "VERA Solutions",
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  email: "brett@veraconsulting.co",
  telephone: "+1-561-900-8182",
  priceRange: "$$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Boca Raton",
    addressRegion: "FL",
    postalCode: "33431",
    addressCountry: "US",
  },
  areaServed: { "@type": "Country", name: "United States" },
  openingHours: "Mo-Fr 09:00-17:00",
  serviceType: "Outcome-aligned B2B growth strategy and operated acquisition systems",
  sameAs: [],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${instrumentSans.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </head>
      <body>
        <MotionGuard>
          <Header />
          <main>{children}</main>
          <Footer />
          <EditMode />
        </MotionGuard>
        {/* Leadsy.ai visitor identification tag (third-party, sitewide). */}
        <Script
          id="vtag-ai-js"
          src="https://r2.leadsy.ai/tag.js"
          strategy="afterInteractive"
          data-pid="17mA3UGaLZpcPQL37"
          data-version="062024"
        />
      </body>
    </html>
  );
}
