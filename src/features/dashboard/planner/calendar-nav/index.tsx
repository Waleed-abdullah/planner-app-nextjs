import { CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useCalendarConfigContext } from '@/contexts/calendar-config-context';

export const CalendarNav = () => {
  const { currentDate, moveBackInTime, moveForwardInTime } =
    useCalendarConfigContext();

  return (
    <DropdownMenu>
      <div className="flex items-center justify-center">
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="flex grow-0 items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
          >
            <CalendarIcon className="h-4 w-4" />
            {currentDate.format('MMM D, YYYY')}
          </Button>
        </DropdownMenuTrigger>
      </div>
      <DropdownMenuContent className="w-56">
        <div className="flex items-center justify-between p-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => moveBackInTime('week')}
            className="h-8 w-8"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="text-sm font-medium">
            {currentDate.format('MMMM YYYY')}
          </span>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => moveForwardInTime('week')}
            className="h-8 w-8"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <DropdownMenuItem className="text-xs text-gray-500">
          Week of {currentDate.startOf('week').format('MMM D')} -{' '}
          {currentDate.endOf('week').format('MMM D, YYYY')}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
