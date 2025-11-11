import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  
  // Image optimization - disable for Cloudflare Pages compatibility
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
