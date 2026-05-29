import type { Metadata } from "next";
import { dmSans, instrumentSans } from "./fonts";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { EditMode } from "@/components/ui/EditMode";
import "./globals.css";

const SITE_URL = "https://veraconsulting.co";
const SITE_DESCRIPTION =
  "AI coaching for coaches, consultants, and solo experts whose business runs on what they know. Get fluent. Take bigger work. Grow without hiring.";
const DEFAULT_TITLE = "VERA, AI Coaching for Coaches and Consultants";

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
  "@type": ["Organization", "ProfessionalService"],
  "@id": `${SITE_URL}/#org`,
  name: "VERA Consulting",
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  email: "brett@veraconsulting.co",
  telephone: "+1-561-900-8182",
  priceRange: "$$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Boca Raton",
    addressRegion: "FL",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 26.3683,
    longitude: -80.1289,
  },
  areaServed: "United States",
  serviceType:
    "AI Coaching, Strategy, and Integration for Coaches, Consultants, and Solo Experts",
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
        <Header />
        <main>{children}</main>
        <Footer />
        <EditMode />
      </body>
    </html>
  );
}
