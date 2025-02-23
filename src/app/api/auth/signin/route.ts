import { createClient } from '@/libs/supabase/server';

export async function POST(request: Request) {
  const { email, password }: { email: string; password: string } =
    await request.json();

  const supabase = await createClient();

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return Response.json({ error: error.message }, { status: 400 });
  }

  return Response.json(
    { user: data.user },
    {
      status: 200,
    }
  );
}
