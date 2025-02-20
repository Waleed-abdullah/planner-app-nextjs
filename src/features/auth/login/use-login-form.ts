import { zodResolver } from '@hookform/resolvers/zod';
import { type SubmitHandler, useForm } from 'react-hook-form';

import { useFormErrorToast } from '@/hooks/use-form-error-toast';
import { AuthSchema, type AuthSchemaType } from '@/schemas/auth';

export const useLoginForm = () => {
  const formHook = useForm<AuthSchemaType>({
    resolver: zodResolver(AuthSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  useFormErrorToast(formHook.formState.errors);

  const onSubmit: SubmitHandler<AuthSchemaType> = (values) => {
    console.log(values);
  };

  return {
    formHook,
    onSubmit,
  };
};
