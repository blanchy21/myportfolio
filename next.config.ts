import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hoirqrkdgbmvpwutwuwj-all.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/assets/**',
      },
    ],
  },
};

export default nextConfig;
