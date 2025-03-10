import dayjs from 'dayjs';

import { LogoIcon } from '@/icons/logo';

import { UserMenu } from './user-menu';

export const Navbar = () => {
  return (
    <div className="sticky flex h-[--navbar-height] w-full items-center justify-between gap-3.5 border-b bg-white p-4 text-new-york-primary-1 shadow">
      <div className="gap flex items-center gap-2.5">
        <LogoIcon className="size-8" />
        <span className="text-xs font-medium 2xl:text-sm ">TRAVEL GUIDE</span>
      </div>
      <div className="text-3xl">📅</div>
      <div className="flex items-center gap-3">
        <span className="text-xs font-medium 2xl:text-sm">
          {dayjs().format('DD / MM / YYYY')}
        </span>
        <UserMenu />
      </div>
    </div>
  );
};
