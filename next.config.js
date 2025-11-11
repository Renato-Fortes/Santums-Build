/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Cloudflare handles images differently
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb', // your previous custom setting
    },
  },
};

module.exports = nextConfig;
