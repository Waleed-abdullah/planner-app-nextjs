import dayjs from 'dayjs';
import { PlusIcon } from 'lucide-react';

import { HorizontalScrollShadow } from '@/components/horizontal-scroll-shadow';
import { Button } from '@/components/ui/button';

import { EventItem } from './event-item';
import { CALENDAR_DAYS, HOUR_ARRAY } from './time-grid.constants';
import { useTimeGrid } from './use-time-grid';

export const TimeGrid = () => {
  const { addEventButtonClickHandler, startOfWeek, currentWeekEvents } =
    useTimeGrid();

  return (
    <HorizontalScrollShadow className="flex h-full w-full flex-col">
      {/* Time header row */}
      <div className="flex shrink-0">
        {/* Empty cell for day labels */}
        <div className="ml-5  min-w-10 border-r p-2" />

        {/* Hour headers */}
        {HOUR_ARRAY.map((item) => (
          <div
            key={`header-${item.id}`}
            className="w-full min-w-[120px] border-r p-2 text-center font-bold text-new-york-primary-1"
          >
            {item.hour}:00
          </div>
        ))}
      </div>

      <div className="flex flex-1 flex-col">
        {CALENDAR_DAYS.map((day, index) => (
          <div key={day} className="flex flex-grow">
            {/* Day label */}
            <div className="ml-5 min-w-10 border-r p-2  font-bold uppercase text-new-york-primary-1">
              {day[0]}
            </div>

            {/* Hour cells for this day */}
            {HOUR_ARRAY.map((item) => {
              // check if an event from currentweek events is in the current cell
              const matchedEvent = currentWeekEvents.find((event) => {
                const eventStart = dayjs(event.start_date);
                const cellStart = dayjs(startOfWeek)
                  .day(index + 1)
                  .hour(item.hour)
                  .minute(0)
                  .second(0);

                const cellEnd = cellStart.add(59, 'minutes');
                return eventStart.isBetween(cellStart, cellEnd, null, '[]');
              });
              return (
                <div
                  key={`${day}-${item.id}`}
                  className="group relative min-w-[120px] flex-1 border-r p-2"
                >
                  {matchedEvent ? (
                    <EventItem event={matchedEvent} />
                  ) : (
                    <Button
                      variant="outline"
                      size="icon"
                      className="absolute inset-0 flex h-full w-full  items-center justify-center"
                      onClick={() =>
                        addEventButtonClickHandler({
                          dayIndex: index,
                          hour: item.hour,
                        })
                      }
                    >
                      Add Event
                      <PlusIcon className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </HorizontalScrollShadow>
  );
};
