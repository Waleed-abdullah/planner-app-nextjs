import { defineConfig } from 'drizzle-kit';

import { serverEnv } from '@/env/server';

export default defineConfig({
  schema: './src/libs/db/schemas',
  out: './src/libs/db/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: serverEnv.DATABASE_URL,
  },
  schemaFilter: ['public'],
});
