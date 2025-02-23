import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

import { ABSOLUTE_ROUTES, API_ROUTES } from '@/constants/routes';
import { type AuthSchemaType } from '@/schemas/auth';

const onSuccessHandler = (toastMessage: string) => {
  toast.success(toastMessage);
  window.location.pathname = ABSOLUTE_ROUTES.DASHBOARD;
};

export const useLogIn = () =>
  useMutation({
    mutationFn: async (data: AuthSchemaType) => {
      const response = await fetch(API_ROUTES.SIGN_IN, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.error);
      }

      return responseData;
    },
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: () => {
      onSuccessHandler('Logged in successfully');
    },
  });

export const useSignUp = () =>
  useMutation({
    mutationFn: async (data: AuthSchemaType) => {
      const response = await fetch(API_ROUTES.SIGN_UP, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.error);
      }

      return responseData;
    },
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: () => {
      onSuccessHandler('Signed up successfully');
    },
  });

export const signOutUser = async () => {
  const response = await fetch(API_ROUTES.SIGN_OUT, {
    method: 'POST',
  });

  if (!response.ok) {
    throw new Error('Failed to sign out');
  }

  return response.json();
};
