import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import updateLocale from 'dayjs/plugin/updateLocale';
import { useMemo } from 'react';

import { useCalendarConfigContext } from '@/contexts/calendar-config-context';
import { useAddEventDialogStore } from '@/stores/add-event-dialog-store';

dayjs.extend(isBetween);
dayjs.extend(updateLocale);
// Set Monday as the first day of the week
dayjs.updateLocale('en', {
  weekStart: 1,
});

export const useTimeGrid = () => {
  const { openDialog } = useAddEventDialogStore();
  const { userEvents, currentDate } = useCalendarConfigContext();

  const { currentWeekEvents, startOfWeek, endOfWeek } = useMemo(() => {
    const startOfWeek = dayjs(currentDate).startOf('week');
    const endOfWeek = dayjs(currentDate).endOf('week');
    const currentWeekEvents = userEvents.filter((event) => {
      const eventStart = dayjs(event.start_date);
      return eventStart.isBetween(startOfWeek, endOfWeek, null, '[]');
    });

    return { currentWeekEvents, startOfWeek, endOfWeek };
  }, [userEvents, currentDate]);

  const addEventButtonClickHandler = ({
    dayIndex,
    hour,
  }: {
    dayIndex: number;
    hour: number;
  }) => {
    const startTime = startOfWeek
      .day(dayIndex + 1)
      .hour(hour)
      .minute(0)
      .second(0);
    openDialog(startTime.toDate());
  };
  return {
    addEventButtonClickHandler,
    currentWeekEvents,
    startOfWeek,
    endOfWeek,
  };
};
