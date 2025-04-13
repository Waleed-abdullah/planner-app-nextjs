import { db } from '@/libs/db';
import { events } from '@/libs/db/schemas';
import { createClient } from '@/libs/supabase/server';
import { EventInsertSchema } from '@/schemas/event';

export async function POST(request: Request) {
  const { title, start_date, end_date, location, category } =
    await request.json();

  const parsedStartDate = new Date(start_date);
  const parsedEndDate = new Date(end_date);

  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return Response.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    const eventData = EventInsertSchema.parse({
      title,
      start_date: parsedStartDate,
      end_date: parsedEndDate,
      location,
      user_id: user.id,
      category: category,
    });

    await db.insert(events).values(eventData);

    return Response.json({ status: 200 });
  } catch (error) {
    return Response.json(
      { error: error instanceof Error ? error.message : 'Invalid data' },
      { status: 500 }
    );
  }
}
