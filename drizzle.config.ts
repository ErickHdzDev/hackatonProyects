import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: 'postgresql',
  schema: './src/server/db/schemas.ts',
  out: './src/server/db/migrations',
  dbCredentials: {
    host: process.env.POSTGRES_HOST ?? '',
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE ?? '',
  },
});