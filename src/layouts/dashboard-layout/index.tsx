import { getUserEvents } from '@/services/events';
import { type PropsWithChildren } from '@/types/common';

import { DashboardProviders } from './dashboard-providers';
import { Navbar } from './navbar';

export const DashboardLayout = async ({ children }: PropsWithChildren) => {
  const { eventData } = await getUserEvents();

  return (
    <div className="min-h-svh w-full bg-gray-100">
      <Navbar />
      <div className="h-[calc(100dvh-var(--navbar-height))] w-full">
        <DashboardProviders userEvents={eventData}>
          {children}
        </DashboardProviders>
      </div>
    </div>
  );
};
