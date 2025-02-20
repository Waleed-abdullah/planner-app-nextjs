import { createContext } from 'react';

import { type FormFieldContextValue } from './form-field-context.types';

export const FormFieldContext = createContext<FormFieldContextValue>(
  {} as FormFieldContextValue
);
