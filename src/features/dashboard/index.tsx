'use client';

import { Button } from '@/components/ui/button';
import { useLogout } from '@/hooks/use-logout';
import { useUserStoreContext } from '@/stores/user-store';

export const Dashboard = () => {
  const { user } = useUserStoreContext()((state) => state);
  const handleLogout = useLogout();
  return (
    <div className="flex h-dvh flex-col items-center justify-center">
      <span className="">email {user?.email}</span>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
};
