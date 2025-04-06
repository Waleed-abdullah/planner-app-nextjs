import { type Dayjs } from 'dayjs';
import {
  type Dispatch,
  type PropsWithChildren,
  type SetStateAction,
} from 'react';

import { type EventSelectType } from '@/schemas/event';

export interface ICalendarConfigContext {
  currentCountry: string | null;
  setCurrentCountry: Dispatch<SetStateAction<string | null>>;
  userEvents: EventSelectType[];
  setUserEvents: Dispatch<SetStateAction<EventSelectType[]>>;
  currentDate: Dayjs;
  moveBackInTime: (time: 'week' | 'day') => void;
  moveForwardInTime: (time: 'week' | 'day') => void;
}

export interface CalendarConfigProviderProps extends PropsWithChildren {
  userEvents?: EventSelectType[];
}
