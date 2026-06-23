import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow network access from other devices on the same LAN
  allowedDevOrigins: ["10.0.1.145"],

  // Static export for GitHub Pages
  output: "export",

  // Repository name as base path for GitHub Pages
  basePath: "/HanziSlot",

  // Image optimization requires a server — disabled for static export
  images: {
    unoptimized: true,
  },

  // Disable trailing slash redirects
  trailingSlash: true,
};

export default nextConfig;
