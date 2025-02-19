import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const clientEnv = createEnv({
  client: {
    NEXT_PUBLIC_IS_PRODUCTION: z.boolean().default(false),
  },
  runtimeEnv: {
    NEXT_PUBLIC_IS_PRODUCTION: process.env.NEXT_PUBLIC_IS_PRODUCTION,
  },
});
