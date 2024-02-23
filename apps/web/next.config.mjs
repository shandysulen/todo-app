// @ts-check
import bundleAnalyzer from "@next/bundle-analyzer";
import { withAxiom } from "next-axiom";
import "./src/env.js";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: !!process.env.ANALYZE,
});

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  transpilePackages: ["@eds/components"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        pathname: "/**",
      },
    ],
  },
  experimental: {
    typedRoutes: false,
    swcPlugins: [["next-superjson-plugin", {}]],
    // serverComponentsExternalPackages: ["@libsql/client"],
  },
  webpack(config) {
    config.resolve.extensionAlias = {
      ".js": [".js", ".ts"],
      ".jsx": [".jsx", ".tsx"],
    };
    return config;
  },
};
export default withAxiom(withBundleAnalyzer(config));
