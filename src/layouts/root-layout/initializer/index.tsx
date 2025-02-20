import { type PropsWithChildren } from 'react';
import { Toaster } from 'react-hot-toast';

export const Initializer = ({ children }: PropsWithChildren) => {
  return (
    <>
      {children}
      <Toaster />
    </>
  );
};
