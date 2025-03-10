import { SocialLinks } from './social-links';

export const InfoHeader = () => {
  return (
    <div className="flex items-center justify-between px-8 pt-3">
      <div className="relative">
        <span className="z-50 font-bodoni text-[60px] text-new-york-primary-1">
          ONE WEEK ITINERARY
        </span>
        <div className="absolute top-12 h-9 w-full bg-[rgba(239,231,195,0.40)]" />
      </div>
      <div className="flex w-full max-w-[580px] items-center justify-between border-l border-primary pl-2">
        <span className="w-[71px] text-[22px]/[22px] font-[900] text-new-york-primary-1">
          LIVE TIPS
        </span>
        <SocialLinks />
      </div>
    </div>
  );
};
