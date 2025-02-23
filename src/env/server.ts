import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const serverEnv = createEnv({
  server: {
    SUPABASE_URL: z.string(),
    SUPABASE_ANON_KEY: z.string(),
  },
  experimental__runtimeEnv: process.env,
});
