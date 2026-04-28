import type { Metadata } from 'next';
import { cabinetGrotesk, satoshi } from '@/app/fonts';
import { SmoothScrollProvider } from '@/components/providers/SmoothScrollProvider';
import { BRAND_NAME, DESCRIPTION, TAGLINE } from '@/config/brand';
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
      className={`dark ${cabinetGrotesk.variable} ${satoshi.variable}`}
    >
      <body className="bg-bg-base text-fg-base font-sans antialiased min-h-full">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
