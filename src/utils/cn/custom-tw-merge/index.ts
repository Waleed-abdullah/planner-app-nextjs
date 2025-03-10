import { extendTailwindMerge } from 'tailwind-merge';

export const customTwMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'text-color': ['new-york-primary-1'],
    },
  },
});
