import { createContext } from 'react';

import { type FormItemContextValue } from './form-item-context.types';

export const FormItemContext = createContext<FormItemContextValue>(
  {} as FormItemContextValue
);
