'use client';

import { CalendarNav } from './calendar-nav';
import { TimeGrid } from './time-grid';

export const Planner = () => {
  return (
    <div className="flex size-full min-h-0 flex-1 flex-col">
      <CalendarNav />
      <TimeGrid />
    </div>
  );
};
