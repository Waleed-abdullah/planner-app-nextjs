import { createClient } from '@/libs/supabase/server';

export async function POST(request: Request) {
  const { email, password }: { email: string; password: string } =
    await request.json();

  const supabase = await createClient();

  const { error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }

  return Response.json({
    status: 200,
  });
}
