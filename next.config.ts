import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow network access from other devices on the same LAN
  allowedDevOrigins: ["10.0.1.145"],
};

export default nextConfig;
