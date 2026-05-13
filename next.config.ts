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
    ];
  },
};

export default nextConfig;
