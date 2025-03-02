import { eq } from 'drizzle-orm';

import { db } from '@/libs/db';
import { events } from '@/libs/db/schemas';
import { createClient } from '@/libs/supabase/server';
import { EventUpdateSchema } from '@/schemas/event';

export async function PATCH(request: Request) {
  const { id, start_date, end_date, title } = await request.json();

  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return Response.json({ error: 'Unauthorized' }, { status: 401 });
  if (!id)
    return Response.json({ error: 'Event ID is required' }, { status: 400 });
  try {
    // Create an update object with only the fields that are provided
    const updateData: Record<string, unknown> = {};

    if (title !== undefined) updateData.title = title;
    if (start_date !== undefined) updateData.start_date = new Date(start_date);
    if (end_date !== undefined) updateData.end_date = new Date(end_date);

    if (Object.keys(updateData).length === 0) {
      return Response.json({ message: 'No fields to update' });
    }

    const parsed = EventUpdateSchema.parse(updateData);

    const result = await db
      .update(events)
      .set(parsed)
      .where(eq(events.id, id))
      .returning();

    if (result.length === 0) {
      return Response.json({ error: 'Event not found' }, { status: 404 });
    }

    return Response.json({
      message: 'Event updated successfully',
      event: result[0],
    });
  } catch (error) {
    return Response.json({ error: 'Failed to update event' }, { status: 500 });
  }
}
