import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

import { ABSOLUTE_ROUTES } from '@/constants/routes';
import { useUserStoreContext } from '@/stores/user-store';
import { signOutUser } from '@/utils/auth';

export const useLogout = () => {
  const logoutUser = useUserStoreContext()((state) => state.logoutUser);
  const router = useRouter();
  return async () => {
    toast.loading('Logging out');
    try {
      await signOutUser();
    } catch {
      toast.error('There was an error logging out');
    }

    logoutUser();
    toast.dismiss();
    toast.success('Logout successful');
    router.push(ABSOLUTE_ROUTES.ROOT);
  };
};
