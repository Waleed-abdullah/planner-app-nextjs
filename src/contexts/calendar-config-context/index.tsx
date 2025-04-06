'use client';

import dayjs from 'dayjs';
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
  const [currentDate, setCurrentDate] = useState(dayjs());

  const moveForwardInTime = (time: 'week' | 'day') => {
    setCurrentDate((prev) => prev.add(1, time));
  };

  const moveBackInTime = (time: 'week' | 'day') => {
    setCurrentDate((prev) => prev.subtract(1, time));
  };

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
      currentDate,
      moveBackInTime,
      moveForwardInTime,
    }),
    [currentCountry, currentDate, userEvents]
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
