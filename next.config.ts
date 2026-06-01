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
    ];
  },
};

export default nextConfig;
