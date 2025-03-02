import { zodResolver } from '@hookform/resolvers/zod';
import { type Dispatch, type SetStateAction } from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';

import { useFormErrorToast } from '@/hooks/use-form-error-toast';
import { EventCreateSchema, type EventCreateSchemaType } from '@/schemas/event';
import { useInsertEventMutation } from '@/utils/events';

export const useAddEventForm = (
  setIsDialogOpen: Dispatch<SetStateAction<boolean>>
) => {
  const formHook = useForm<EventCreateSchemaType>({
    resolver: zodResolver(EventCreateSchema),
  });

  const { mutateAsync } = useInsertEventMutation();

  useFormErrorToast(formHook.formState.errors);

  const onSubmit: SubmitHandler<EventCreateSchemaType> = async (values) => {
    await mutateAsync(values);
    setIsDialogOpen(false);
  };

  return { formHook, onSubmit };
};
