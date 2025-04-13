import { ScrollShadow } from '@heroui/scroll-shadow';
import { type PropsWithChildren } from 'react';

import { type PropsWithClassname } from '@/types/common';
import { cn } from '@/utils/cn';

export const horizontalShadow = [
  'data-[left-scroll=true]:[mask-image:linear-gradient(270deg,#000_calc(100%_-_var(--scroll-shadow-size)),transparent)]',
  'data-[right-scroll=true]:[mask-image:linear-gradient(90deg,#000_calc(100%_-_var(--scroll-shadow-size)),transparent)]',
  'data-[left-right-scroll=true]:[mask-image:linear-gradient(to_right,#000,#000,transparent_0,#000_var(--scroll-shadow-size),#000_calc(100%_-_var(--scroll-shadow-size)),transparent)]',
];

export const HorizontalScrollShadow = ({
  children,
  className,
}: PropsWithChildren<PropsWithClassname>) => {
  return (
    <ScrollShadow
      className={cn(className, horizontalShadow)}
      orientation="horizontal"
    >
      {children}
    </ScrollShadow>
  );
};
