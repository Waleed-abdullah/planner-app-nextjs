import { type ClassValue, clsx } from 'clsx';

import { customTwMerge } from './custom-tw-merge';

export function cn(...inputs: ClassValue[]) {
  return customTwMerge(clsx(inputs));
}
