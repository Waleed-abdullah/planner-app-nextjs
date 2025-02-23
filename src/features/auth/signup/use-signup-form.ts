import { zodResolver } from '@hookform/resolvers/zod';
import { type SubmitHandler, useForm } from 'react-hook-form';

import { useFormErrorToast } from '@/hooks/use-form-error-toast';
import { AuthSchema, type AuthSchemaType } from '@/schemas/auth';
import { useSignUp } from '@/utils/auth';

export const useSignupForm = () => {
  const formHook = useForm<AuthSchemaType>({
    resolver: zodResolver(AuthSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  useFormErrorToast(formHook.formState.errors);

  const { mutateAsync } = useSignUp();

  const onSubmit: SubmitHandler<AuthSchemaType> = async (values) => {
    await mutateAsync(values);
  };

  return {
    formHook,
    onSubmit,
  };
};
