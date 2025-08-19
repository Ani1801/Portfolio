/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // GitHub Pages doesn’t support Next.js image optimization
  },
  output: "export", // Generate static HTML for GitHub Pages
  basePath: "/your-repo-name", // 👈 change this to your actual GitHub repo name
  assetPrefix: "/your-repo-name/",
};

export default nextConfig;
