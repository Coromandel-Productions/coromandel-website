import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "vumbnail.com" },
      { protocol: "https", hostname: "i.vimeocdn.com" },
      { protocol: "https", hostname: "cdn.sanity.io" },
    ],
  },
  transpilePackages: ["next-sanity"],
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
