// @ts-check
import "./src/env.js";

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
export default config;
