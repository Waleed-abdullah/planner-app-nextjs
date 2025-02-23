import { DashboardLayout } from '@/layouts/dashboard-layout';
import { type PropsWithChildren } from '@/types/common';

const Layout = ({ children }: PropsWithChildren) => {
  return <DashboardLayout>{children}</DashboardLayout>;
};

export default Layout;
