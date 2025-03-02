import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

import { serverEnv } from '@/env/server';

const client = postgres(serverEnv.DATABASE_URL);

export const db = drizzle(client);
