import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  // images: {
  //   domains: ['api.seoachoiaws.com', 'localhost'],
  //   remotePatterns: [
  //     {
  //       protocol: 'http',
  //       hostname: '**',
  //     },
  //     {
  //       protocol: 'https',
  //       hostname: '**',
  //     },
  //   ],
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.seoachoiaws.com',
        pathname: '/',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
