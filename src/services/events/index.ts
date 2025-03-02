import 'server-only';

import { eq } from 'drizzle-orm';

import { db } from '@/libs/db';
import { events } from '@/libs/db/schemas';
import { type EventSelectType } from '@/schemas/event';

import { getUserId } from '../user';

export const getUserEvents = async (): Promise<{
  eventData: EventSelectType[];
  error: Error | null;
}> => {
  const userId = await getUserId();
  if (!userId) return { eventData: [], error: new Error('Unauthorized') };

  const eventData = await db
    .select()
    .from(events)
    .where(eq(events.user_id, userId));

  return { eventData, error: null };
};
