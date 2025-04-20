import { MapPinIcon } from 'lucide-react';
import { type FC, useState } from 'react';

import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { CATEGORIES } from '@/constants/categories';
import { type EventSelectType } from '@/schemas/event';
import { cn } from '@/utils/cn';

import { EventDetailsDialogContent } from './event-details-dialog';

interface EventItemProps {
  event: EventSelectType;
  position: 'start' | 'middle' | 'end';
}

export const EventItem: FC<EventItemProps> = ({ event, position }) => {
  const [open, setOpen] = useState(false);

  const renderContent = () => {
    switch (position) {
      case 'start':
        return (
          <div className="flex min-w-0 flex-col">
            <div className="flex items-center gap-1">
              <span
                className="size-2 shrink-0 rounded-full"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
              />
              <span
                className="truncate text-xs font-medium"
                title={event.title}
              >
                {event.title}
              </span>
            </div>
            <div className="flex items-center gap-1 text-[10px] opacity-75">
              {event.location && (
                <>
                  <MapPinIcon className="h-2.5 w-2.5 shrink-0" />
                  <span className="truncate" title={event.location}>
                    {event.location}
                  </span>
                </>
              )}
            </div>
          </div>
        );
      case 'middle':
        return (
          <div className="flex h-full items-center justify-center">
            <div className="h-0.5 w-full bg-white opacity-50" />
          </div>
        );
      case 'end':
        return (
          <div className="flex h-full items-center">
            <div className="h-0.5 w-full bg-white opacity-50" />
          </div>
        );
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="w-full">
        <div
          style={{
            backgroundColor: CATEGORIES[event.category].color,
          }}
          className={cn(
            'absolute inset-0 z-10 flex flex-col justify-center overflow-hidden p-1',
            'rounded-md text-white shadow-sm transition-all',
            'hover:shadow-md hover:brightness-110',
            position === 'start' && 'min-w-0 items-start rounded-e-none',
            position === 'middle' && 'rounded-none',
            position === 'end' && 'rounded-s-none'
          )}
        >
          {renderContent()}
        </div>
      </DialogTrigger>
      <EventDetailsDialogContent event={event} setOpen={setOpen} />
    </Dialog>
  );
};
