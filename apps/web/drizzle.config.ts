import type { Config } from "drizzle-kit";
import { env } from "./src/env.js";

// dotenv.config({ path: ".env.local" });

export default {
  schema: "./src/schemas/*",
  out: "./drizzle",
  driver: "turso",
  dbCredentials: {
    url: env.DB_URL,
    authToken: env.DB_AUTH_TOKEN,
  },
} satisfies Config;
