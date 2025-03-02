import { getUserEvents } from '@/services/events';

export async function GET() {
  try {
    const { eventData, error } = await getUserEvents();
    if (error) {
      return Response.json({ error: error.message }, { status: 401 });
    }
    return Response.json({ events: eventData });
  } catch (error) {
    return Response.json(
      {
        error: error instanceof Error ? error.message : 'Something went wrong',
      },
      { status: 500 }
    );
  }
}
