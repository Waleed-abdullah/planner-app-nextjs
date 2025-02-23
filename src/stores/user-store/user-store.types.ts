import { type User } from '@supabase/supabase-js';

export type UserState = {
  user: User | null;
};

export type UserAction = {
  loginUser: (payload: { user: User }) => void;
  logoutUser: () => void;
};
