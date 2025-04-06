'use client';

import { Calendar } from './calendar';
import { CalendarNav } from './calendar-nav';

export const CustomCalendar = () => {
  return (
    <div className="flex size-full min-h-0 flex-1 flex-col">
      <CalendarNav />
      <Calendar />
    </div>
  );
};
