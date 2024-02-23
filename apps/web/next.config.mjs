// @ts-check
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
  transpilePackages: ["@todo-app/components"],
  experimental: {
    swcPlugins: [["next-superjson-plugin", {}]],
  },
};
export default config;
