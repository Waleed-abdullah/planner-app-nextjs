import { useEffect } from 'react';
import { type FieldErrors } from 'react-hook-form';
import { toast } from 'sonner';

export const useFormErrorToast = (errors: FieldErrors) => {
  useEffect(() => {
    if (errors) {
      const keys = Object.keys(errors);
      keys.forEach((key) => {
        const error = errors[key];
        if (error?.message && typeof error.message === 'string') {
          toast.error(`For field ${key}: ${error.message}`);
        }
      });
    }
  }, [errors]);
};
