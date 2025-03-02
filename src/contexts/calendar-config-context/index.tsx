'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';

import { type EventSelectType } from '@/schemas/event';
import { useGetUserEvents } from '@/utils/events';

import {
  type CalendarConfigProviderProps,
  type ICalendarConfigContext,
} from './calendar-config-context.types';

const CalendarConfigContext = createContext<ICalendarConfigContext | null>(
  null
);

export const CalendarConfigProvider = ({
  children,
  userEvents: userEventsParam = [],
}: CalendarConfigProviderProps) => {
  const [currentCountry, setCurrentCountry] = useState<string | null>(null);
  const [userEvents, setUserEvents] =
    useState<EventSelectType[]>(userEventsParam);
  const { data, isRefetching } = useGetUserEvents();

  useEffect(() => {
    if (data && !isRefetching) {
      setUserEvents(data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRefetching]);

  const values = useMemo(
    () => ({
      currentCountry,
      setCurrentCountry,
      userEvents,
      setUserEvents,
    }),
    [currentCountry, userEvents]
  );

  return (
    <CalendarConfigContext.Provider value={values}>
      {children}
    </CalendarConfigContext.Provider>
  );
};

export const useCalendarConfigContext = () => {
  const context = useContext(CalendarConfigContext);

  if (context === null) {
    throw new Error(
      'useCalendarConfigContext must be used within a CalendarConfigProvider'
    );
  }

  return context;
};
