import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import dayjs from 'dayjs';
import { CalendarIcon, ClockIcon, MapPinIcon } from 'lucide-react';
import { type FC } from 'react';

import { Spinner } from '@/components/spinner';
import { Button } from '@/components/ui/button';
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { CATEGORIES } from '@/constants/categories';
import { type EventSelectType } from '@/schemas/event';
import { useDeleteEventMutation } from '@/utils/events';

interface EventDetailsDialogContentProps {
  event: EventSelectType;
  setOpen: (open: boolean) => void;
}

export const EventDetailsDialogContent: FC<EventDetailsDialogContentProps> = ({
  event,
  setOpen,
}) => {
  const { mutateAsync, isPending } = useDeleteEventMutation();
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
        <div className="flex items-center gap-2 text-sm">
          <div className="flex items-center gap-2 rounded-full bg-secondary px-3 py-1">
            {CATEGORIES[event.category].label}
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <CalendarIcon className="h-4 w-4" />
          <span>{dayjs(event.start_date).format('MMM D, YYYY')}</span>
          <ClockIcon className="ml-2 h-4 w-4" />
          <span>
            {dayjs(event.start_date).format('h:mm A')} -
            {dayjs(event.end_date).format('h:mm A')}
          </span>
        </div>

        {event.location && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPinIcon className="h-4 w-4" />
            <span>{event.location}</span>
          </div>
        )}

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
        <Button
          variant="destructive"
          disabled={isPending}
          onClick={async () => {
            try {
              await mutateAsync(event.id);
              setOpen(false);
            } catch {}
          }}
        >
          {isPending ? <Spinner className="size-4 text-white" /> : 'Delete'}
        </Button>
      </DialogFooter>
    </DialogContent>
  );
};
