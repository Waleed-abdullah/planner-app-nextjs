import { getUserEvents } from '@/services/events';
import { type PropsWithChildren } from '@/types/common';

import { CategoriesLegend } from './categories-legend';
import { DashboardProviders } from './dashboard-providers';
import { InfoHeader } from './info-header';
import { Navbar } from './navbar';

export const DashboardLayout = async ({ children }: PropsWithChildren) => {
  const { eventData } = await getUserEvents();

  return (
    <div className="relative flex min-h-svh w-full flex-col bg-gray-100">
      <Navbar />
      <div className="flex h-[calc(100dvh-var(--navbar-height))] flex-col">
        <InfoHeader />
        <DashboardProviders userEvents={eventData}>
          {children}
        </DashboardProviders>
      </div>
      <footer>
        <CategoriesLegend />
      </footer>
    </div>
  );
};
