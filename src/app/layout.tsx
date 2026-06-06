import type { Metadata } from "next";
import Script from "next/script";
import { dmSans, instrumentSans } from "./fonts";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { EditMode } from "@/components/ui/EditMode";
import { MotionGuard } from "@/components/MotionGuard";
import "./globals.css";

const SITE_URL = "https://veraconsulting.co";
const SITE_DESCRIPTION =
  "AI tools, coaching, and training for real estate professionals. Learn how to use AI and ChatGPT for lead generation, listings, deal research, and follow-ups, without losing the personal relationships that close deals. Boca Raton, FL.";
const DEFAULT_TITLE = "VERA, AI Tools & Coaching for Real Estate";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: "%s | VERA",
    default: DEFAULT_TITLE,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    title: DEFAULT_TITLE,
    description: SITE_DESCRIPTION,
    type: "website",
    siteName: "VERA",
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
  "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
  "@id": `${SITE_URL}/#org`,
  name: "VERA Consulting",
  description: "AI tools, coaching, and training for real estate professionals. Learn how to use AI and ChatGPT for lead generation, listings, deal research, and follow-ups, without losing the personal relationships that close deals. Boca Raton, FL.",
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
  geo: {
    "@type": "GeoCoordinates",
    latitude: 26.3683,
    longitude: -80.1289,
  },
  areaServed: [
    { "@type": "City", name: "Boca Raton" },
    { "@type": "City", name: "Delray Beach" },
    { "@type": "AdministrativeArea", name: "Palm Beach County" },
  ],
  openingHours: "Mo-Fr 09:00-17:00",
  serviceType: "AI consulting, coaching, and training for real estate professionals",
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
