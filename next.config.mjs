/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  productionBrowserSourceMaps: false,
  compress: true,
  experimental: {
    optimizeCss: true,
  },
  webpack(config, { isServer }) {
    if (!isServer) {
      // Split vendor dependencies into separate chunks
      config.optimization.splitChunks = {
        chunks: 'all',
        maxSize: 25000000, // 25 MB per chunk
      };
    }

    return config;
  },
};

export default nextConfig;

