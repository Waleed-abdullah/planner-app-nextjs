import { eq } from 'drizzle-orm';

import { db } from '@/libs/db';
import { events } from '@/libs/db/schemas';
import { createClient } from '@/libs/supabase/server';

export async function DELETE(request: Request) {
  const { eventId } = await request.json();

  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return Response.json({ error: 'Unauthorized' }, { status: 401 });
  try {
    const deletedEvent = await db
      .delete(events)
      .where(eq(events.id, eventId))
      .returning();

    return Response.json({ status: 200, deletedEvent });
  } catch (error) {
    return Response.json(
      { error: error instanceof Error ? error.message : 'Invalid data' },
      { status: 500 }
    );
  }
}
