'use client';

import { type User } from '@supabase/supabase-js';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';

import { TooltipProvider } from '@/components/ui/tooltip';
import { UserStoreProvider } from '@/stores/user-store';
import { type PropsWithChildren } from '@/types/common';

interface RootLayoutProviderProps extends PropsWithChildren {
  user: User | null;
}

export const RootLayoutProvider = ({
  children,
  user,
}: RootLayoutProviderProps) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            refetchOnMount: false,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <UserStoreProvider initialState={{ user }}>
        <TooltipProvider>{children}</TooltipProvider>
      </UserStoreProvider>
    </QueryClientProvider>
  );
};
