

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // needed for GitHub Pages
  },
  basePath: '/Portfolio', // 👈 since your repo is named Portfolio
  assetPrefix: '/Portfolio/',
};

export default nextConfig;
