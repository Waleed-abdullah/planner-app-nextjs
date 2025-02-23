import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

import { ABSOLUTE_ROUTES } from '@/constants/routes';
import { useUserStoreContext } from '@/stores/user-store';

export const useLogout = () => {
  const logoutUser = useUserStoreContext()((state) => state.logoutUser);
  const router = useRouter();
  return () => {
    logoutUser();
    toast.success('Logout successful');
    router.push(ABSOLUTE_ROUTES.ROOT);
  };
};
