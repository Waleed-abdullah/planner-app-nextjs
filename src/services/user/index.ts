import 'server-only';

import { createClient } from '@/libs/supabase/server';

export const getUserId = async () => {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user?.id;
};
