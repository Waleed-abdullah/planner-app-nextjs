'use client';

import { useUserStoreContext } from '@/stores/user-store';

import { UserMenu } from './user-menu';

export const Navbar = () => {
  const user = useUserStoreContext()((state) => state.user);
  return (
    <div className="sticky flex h-[--navbar-height] w-full items-center justify-end gap-3.5 border-b bg-white p-4 shadow">
      <span>{user?.email}</span>
      <UserMenu />
    </div>
  );
};
