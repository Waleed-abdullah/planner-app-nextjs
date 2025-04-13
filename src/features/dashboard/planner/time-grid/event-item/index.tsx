import { MapPinIcon } from 'lucide-react';
import { type FC, useState } from 'react';

import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { CATEGORIES } from '@/constants/categories';
import { type EventSelectType } from '@/schemas/event';
import { cn } from '@/utils/cn';

import { EventDetailsDialogContent } from './event-details-dialog';

interface EventItemProps {
  event: EventSelectType;
}

export const EventItem: FC<EventItemProps> = ({ event }) => {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <div
          style={{
            backgroundColor: CATEGORIES[event.category].color,
          }}
          className={cn(
            'absolute inset-0 z-10 flex flex-col items-start gap-0.5 p-2',
            'rounded-md text-white shadow-sm transition-all',
            'hover:shadow-md hover:brightness-110'
          )}
        >
          <h3 className="line-clamp-1 font-medium">{event.title}</h3>

          <div className="text-xs opacity-90">
            {CATEGORIES[event.category].label}
          </div>

          <div className="flex items-center gap-1 text-xs opacity-75">
            <MapPinIcon className="h-3 w-3" />
            <span className="line-clamp-1">{event.location}</span>
          </div>
        </div>
      </DialogTrigger>
      <EventDetailsDialogContent event={event} setOpen={setOpen} />
    </Dialog>
  );
};
