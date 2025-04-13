import { TooltipArrow } from '@radix-ui/react-tooltip';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import dayjs from 'dayjs';
import { CalendarIcon, ClockIcon, MapPinIcon } from 'lucide-react';
import { type FC } from 'react';

import { Button } from '@/components/ui/button';
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { CATEGORIES } from '@/constants/categories';
import { type EventSelectType } from '@/schemas/event';

interface EventDetailsDialogContentProps {
  event: EventSelectType;
}

export const EventDetailsDialogContent: FC<EventDetailsDialogContentProps> = ({
  event,
}) => {
  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle className="flex items-center gap-2 text-xl">
          <div
            className="h-3 w-3 rounded-full"
            style={{ backgroundColor: CATEGORIES[event.category].color }}
          />
          {event.title}
        </DialogTitle>
      </DialogHeader>
      <VisuallyHidden>
        <DialogDescription>
          Shows details about the current event
        </DialogDescription>
      </VisuallyHidden>

      <div className="flex flex-col gap-4 py-4">
        {/* Category */}
        <div className="flex items-center gap-2 text-sm">
          <div className="flex items-center gap-2 rounded-full bg-secondary px-3 py-1">
            {CATEGORIES[event.category].label}
          </div>
        </div>

        {/* Date and Time */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <CalendarIcon className="h-4 w-4" />
          <span>{dayjs(event.start_date).format('MMM D, YYYY')}</span>
          <ClockIcon className="ml-2 h-4 w-4" />
          <span>
            {dayjs(event.start_date).format('h:mm A')} -
            {dayjs(event.end_date).format('h:mm A')}
          </span>
        </div>

        {/* Location if exists */}
        {event.location && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPinIcon className="h-4 w-4" />
            <span>{event.location}</span>
          </div>
        )}

        {/* Description if exists */}
        {event.description && (
          <div className="mt-2">
            <h4 className="mb-2 font-medium">Description</h4>
            <p className="whitespace-pre-wrap text-sm text-muted-foreground">
              {event.description}
            </p>
          </div>
        )}
      </div>
      <DialogFooter>
        <Tooltip delayDuration={0}>
          <TooltipTrigger disabled>
            <Button variant="destructive" disabled>
              Delete
            </Button>
          </TooltipTrigger>
          <TooltipContent side="top">
            <p className="text-sm text-muted-foreground">
              This feature is not yet implemented.
            </p>
            <TooltipArrow />
          </TooltipContent>
        </Tooltip>
      </DialogFooter>
    </DialogContent>
  );
};
