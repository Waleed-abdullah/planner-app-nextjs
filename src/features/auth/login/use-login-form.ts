import { zodResolver } from '@hookform/resolvers/zod';
import { type SubmitHandler, useForm } from 'react-hook-form';

import { useFormErrorToast } from '@/hooks/use-form-error-toast';
import { AuthSchema, type AuthSchemaType } from '@/schemas/auth';
import { useLogIn } from '@/utils/auth';

export const useLoginForm = () => {
  const formHook = useForm<AuthSchemaType>({
    resolver: zodResolver(AuthSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const { mutateAsync } = useLogIn();

  useFormErrorToast(formHook.formState.errors);

  const onSubmit: SubmitHandler<AuthSchemaType> = async (values) => {
    await mutateAsync(values);
  };

  return {
    formHook,
    onSubmit,
  };
};
