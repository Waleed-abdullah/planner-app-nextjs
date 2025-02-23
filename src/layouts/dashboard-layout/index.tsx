import { type PropsWithChildren } from '@/types/common';

import { Navbar } from './navbar';

export const DashboardLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="min-h-svh w-full bg-gray-100">
      <Navbar />
      <div className="h-[calc(100dvh-var(--navbar-height))] w-full">
        {children}
      </div>
    </div>
  );
};
