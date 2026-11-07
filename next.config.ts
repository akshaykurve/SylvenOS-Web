import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  // Don't advertise the framework on every response.
  poweredByHeader: false,
  experimental: {
    // Import only the icons/components actually used instead of whole barrels.
    optimizePackageImports: ["motion", "lucide-react", "react-icons"],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
