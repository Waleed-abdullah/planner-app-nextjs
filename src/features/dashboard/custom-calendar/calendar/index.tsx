import { HorizontalScrollShadow } from '@/components/horizontal-scroll-shadow';

const HOUR_ARRAY = Array.from({ length: 24 }, (_, i) => ({
  id: i,
  hour: i,
}));

const CALENDAR_DAYS = [
  'MONDAY',
  'TUESDAY',
  'WEDNESDAY',
  'THURSDAY',
  'FRIDAY',
  'SATURDAY',
  'SUNDAY',
];

export const Calendar = () => {
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
        {CALENDAR_DAYS.map((day) => (
          <div key={day} className="flex flex-grow">
            {/* Day label */}
            <div className="ml-5 min-w-10 border-r p-2  font-bold uppercase text-new-york-primary-1">
              {day[0]}
            </div>

            {/* Hour cells for this day */}
            {HOUR_ARRAY.map((item) => (
              <div
                key={`${day}-${item.id}`}
                className="min-w-[120px] flex-1 border-r p-2"
              >
                {/* Event would go here */}
              </div>
            ))}
          </div>
        ))}
      </div>
    </HorizontalScrollShadow>
  );
};
