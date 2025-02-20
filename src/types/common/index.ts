import { type ReactNode } from 'react';

export type PropsWithChildren<P = unknown> = P &
  Readonly<{
    children?: ReactNode;
  }>;

export type PropsWithClassname<P = unknown> = P & {
  className?: string;
};
