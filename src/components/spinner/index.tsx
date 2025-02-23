import { LoaderIcon } from '@/icons/loader';
import { type PropsWithClassname } from '@/types/common';
import { cn } from '@/utils/cn';

export const Spinner = ({ className }: PropsWithClassname) => (
  <LoaderIcon className={cn('size-4 animate-spin text-primary', className)} />
);
