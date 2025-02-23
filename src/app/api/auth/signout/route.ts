import { createClient } from '@/libs/supabase/server';

export async function POST() {
  const supabase = await createClient();

  const { error } = await supabase.auth.signOut();

  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }

  return Response.json({
    status: 200,
  });
}
