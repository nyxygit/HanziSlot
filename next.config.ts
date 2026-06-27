import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow network access from other devices on the same LAN
  allowedDevOrigins: ["10.0.1.145"],

  // Only apply static export and base path for production builds (GitHub Pages).
  // During `next dev`, these are omitted so the app runs at localhost:3000/ directly.
  ...(process.env.NODE_ENV === "production"
    ? {
        // Static export for GitHub Pages
        output: "export" as const,

        // Repository name as base path for GitHub Pages
        basePath: "/HanziSlot",

        // Disable trailing slash redirects
        trailingSlash: true,
      }
    : {}),

  // Image optimization requires a server — disabled for static export
  // Applied in all environments so local dev matches the production build
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
