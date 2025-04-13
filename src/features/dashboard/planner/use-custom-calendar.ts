import { useCallback, useState } from 'react';
import { type View } from 'react-big-calendar';
import { type EventInteractionArgs } from 'react-big-calendar/lib/addons/dragAndDrop';
import { toast } from 'sonner';

import { useCalendarConfigContext } from '@/contexts/calendar-config-context';
import { useUpdateEventMutation } from '@/utils/events';

export const useCustomCalendar = () => {
  const [view, setView] = useState<View>('week');
  const [date, setDate] = useState<Date>(new Date());
  const onView = useCallback((view: View) => {
    setView(view);
  }, []);

  const { mutateAsync } = useUpdateEventMutation();

  const { userEvents, setUserEvents } = useCalendarConfigContext();

  const onNavigate = useCallback((date: Date) => {
    setDate(date);
  }, []);

  const handleUpdateEvent = useCallback(
    async ({ event, start, end }: EventInteractionArgs<object>) => {
      if (
        'id' in event &&
        typeof event.id === 'string' &&
        start instanceof Date &&
        end instanceof Date
      ) {
        const previousEvent = userEvents.find(
          (userEvent) => userEvent.id === event.id
        );
        try {
          toast.info('Updating event');

          // perform an optimistic update
          setUserEvents((prevEvents) =>
            prevEvents.map((userEvent) =>
              userEvent.id === event.id
                ? {
                    ...userEvent,
                    start_date: start,
                    end_date: end,
                  }
                : userEvent
            )
          );

          mutateAsync({
            id: event.id,
            start_date: start,
            end_date: end,
          });
        } catch {
          toast.error('Failed to update event');
          // rollback the optimistic update
          setUserEvents((prevEvents) =>
            prevEvents.map((userEvent) =>
              userEvent.id === event.id
                ? {
                    ...userEvent,
                    start_date: previousEvent!.start_date,
                    end_date: previousEvent!.end_date,
                  }
                : userEvent
            )
          );
        }
      } else {
        toast.error('Invalid event');
      }
    },
    [mutateAsync, setUserEvents, userEvents]
  );

  return {
    view,
    date,
    onView,
    onNavigate,
    handleUpdateEvent,
    events: userEvents.map((userEvent) => ({
      id: userEvent.id,
      title: userEvent.title,
      start: userEvent.start_date,
      end: userEvent.end_date,
    })),
  };
};
