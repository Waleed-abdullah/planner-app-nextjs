import { zodResolver } from '@hookform/resolvers/zod';
import dayjs from 'dayjs';
import { useEffect, useMemo } from 'react';
import { type SubmitHandler, useForm, useWatch } from 'react-hook-form';
import { toast } from 'sonner';

import { useCalendarConfigContext } from '@/contexts/calendar-config-context';
import { useFormErrorToast } from '@/hooks/use-form-error-toast';
import {
  EventCreateFormSchema,
  type EventCreateFormSchemaType,
  type EventCreateSchemaType,
} from '@/schemas/event';
import { useAddEventDialogStore } from '@/stores/add-event-dialog-store';
import { useInsertEventMutation } from '@/utils/events';

export const useAddEventForm = () => {
  const { setIsOpen, startTime } = useAddEventDialogStore();
  const { userEvents } = useCalendarConfigContext();

  const formHook = useForm<EventCreateFormSchemaType>({
    resolver: zodResolver(EventCreateFormSchema),
    defaultValues: {
      start_date: startTime ?? undefined,
    },
  });

  const { mutateAsync } = useInsertEventMutation();

  const [start_date, duration] = useWatch({
    control: formHook.control,
    name: ['start_date', 'duration'],
  });

  const isOverlapping = useMemo(() => {
    const end_date = start_date
      ? dayjs(start_date)
          .add(duration || 0, 'hour')
          .toDate()
      : null;
    if (!start_date || !end_date || !userEvents) return false;

    return userEvents.some((event) => {
      const eventStart = dayjs(event.start_date);
      const eventEnd = dayjs(event.end_date);
      const newStart = dayjs(start_date);
      const newEnd = dayjs(end_date);

      return (
        (newStart.isAfter(eventStart) && newStart.isBefore(eventEnd)) || // Start date is within an existing event
        (newEnd.isAfter(eventStart) && newEnd.isBefore(eventEnd)) || // End date is within an existing event
        (newStart.isBefore(eventStart) && newEnd.isAfter(eventEnd)) || // New event completely wraps an existing event
        newStart.isSame(eventStart) ||
        newEnd.isSame(eventEnd) // Start or end dates are the same
      );
    });
  }, [duration, start_date, userEvents]);

  // Set custom validation
  useEffect(() => {
    if (isOverlapping) {
      formHook.setError('start_date', {
        type: 'manual',
        message: 'This time slot overlaps with an existing event',
      });
    } else {
      formHook.clearErrors('start_date');
    }
  }, [isOverlapping, formHook]);

  useFormErrorToast(formHook.formState.errors);

  const onSubmit: SubmitHandler<EventCreateFormSchemaType> = async (values) => {
    if (isOverlapping) {
      toast.error('This time slot overlaps with an existing event');
      return;
    }
    const { duration, ...rest } = values;
    const mutationData: EventCreateSchemaType = {
      ...rest,
      end_date: dayjs(values.start_date).add(duration, 'hour').toDate(),
    };
    await mutateAsync(mutationData);
    setIsOpen(false);
  };

  return { formHook, onSubmit };
};
