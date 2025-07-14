import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // domains: ['api.seoachoiaws.com'],
    // 빌드 시 바꿀 것
    domains: ['localhost'],
  },
};

export default nextConfig;
