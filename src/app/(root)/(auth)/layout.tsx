import { AuthLayout } from '@/layouts/auth-layout';
import { type PropsWithChildren } from '@/types/common';

const Layout = ({ children }: PropsWithChildren) => {
  return <AuthLayout>{children}</AuthLayout>;
};

export default Layout;
