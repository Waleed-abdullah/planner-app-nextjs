'use client';

import { CalendarNav } from './calendar-nav';
import { TimeGrid } from './time-grid';
import { MORNING_HOURS, NOON_HOURS } from './time-grid/time-grid.constants';

export const Planner = () => {
  return (
    <div className="flex size-full min-h-0 flex-1 flex-col">
      <CalendarNav />
      <TimeGrid hours={MORNING_HOURS} />
      <TimeGrid hours={NOON_HOURS} />
    </div>
  );
};
