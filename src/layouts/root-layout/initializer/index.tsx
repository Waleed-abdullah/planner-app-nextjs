import { type PropsWithChildren } from 'react';
import { Toaster } from 'sonner';

export const Initializer = ({ children }: PropsWithChildren) => {
  return (
    <>
      {children}
      <Toaster />
    </>
  );
};
