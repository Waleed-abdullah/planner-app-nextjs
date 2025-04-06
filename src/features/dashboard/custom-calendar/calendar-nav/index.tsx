import { Button } from '@/components/ui/button';
import { useCalendarConfigContext } from '@/contexts/calendar-config-context';

export const CalendarNav = () => {
  const { currentDate, moveBackInTime, moveForwardInTime } =
    useCalendarConfigContext();
  return (
    <div className="flex items-center justify-between">
      <Button variant="outline" onClick={() => moveBackInTime('week')}>
        Previous
      </Button>
      <span className="font-mono font-bold text-new-york-primary-1">
        {currentDate.format('MMMM D, YYYY')}
      </span>
      <Button variant="outline" onClick={() => moveForwardInTime('week')}>
        Next
      </Button>
    </div>
  );
};
