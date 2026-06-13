import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
  async redirects() {
    return [
      {
        source: '/our-approach',
        destination: '/our-strategy',
        permanent: true,
      },
      // Old indexed URLs that now 404. 301 them to the closest live page so
      // Google passes their ranking signal forward instead of dropping it.
      {
        source: '/research',
        destination: '/reading',
        permanent: true,
      },
      {
        source: '/solutions',
        destination: '/our-strategy',
        permanent: true,
      },
      // Old general-AI explainer, replaced by the real estate guide.
      {
        source: '/ai-fundamentals',
        destination: '/ai-in-real-estate',
        permanent: true,
      },
      // 1:1 coaching offer retired. Send the old URL to the contact page so any
      // inbound links or indexed traffic land on a live booking page, not a 404.
      {
        source: '/coaching',
        destination: '/contact',
        permanent: true,
      },
      // Vertical pages repositioned from agent niches to real estate investing
      // personas. 301 the old indexed /for/* slugs to the closest new persona so
      // ranking signal and any inbound links carry forward instead of 404ing.
      {
        source: '/for/listing-agents',
        destination: '/for/real-estate-agents',
        permanent: true,
      },
      {
        source: '/for/buyers-agents',
        destination: '/for/real-estate-agents',
        permanent: true,
      },
      {
        source: '/for/luxury-agents',
        destination: '/for/real-estate-agents',
        permanent: true,
      },
      {
        source: '/for/commercial-agents',
        destination: '/for/real-estate-agents',
        permanent: true,
      },
      {
        source: '/for/investment-agents',
        destination: '/for/buy-and-hold',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
