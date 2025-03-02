import { CalendarConfigProvider } from '@/contexts/calendar-config-context';
import { type EventSelectType } from '@/schemas/event';
import { type PropsWithChildren } from '@/types/common';

interface DashboardProvidersProps extends PropsWithChildren {
  userEvents: EventSelectType[];
}

export const DashboardProviders = ({
  userEvents,
  children,
}: DashboardProvidersProps) => {
  return (
    <CalendarConfigProvider userEvents={userEvents}>
      {children}
    </CalendarConfigProvider>
  );
};
