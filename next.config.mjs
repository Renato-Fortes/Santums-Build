/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Skip ESLint blocking during builds (safe for deployment)
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
