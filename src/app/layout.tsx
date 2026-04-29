import type { Metadata } from 'next';
import { cabinetGrotesk, satoshi } from '@/app/fonts';
import { BRAND_NAME, DESCRIPTION } from '@/config/brand';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: BRAND_NAME,
  description: DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cabinetGrotesk.variable} ${satoshi.variable}`}
    >
      <body className="bg-bg-base text-fg-base font-sans antialiased min-h-full">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
