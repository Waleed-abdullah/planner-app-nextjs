import { LinkItem } from './link-item';
import { SOCIAL_LINKS } from './social-links.constants';

export const SocialLinks = () => {
  return (
    <div className="grid w-full max-w-[450px] grid-cols-2 gap-y-2">
      <div className="col-span-2 grid grid-cols-2 gap-4 border-b border-primary pb-2">
        {SOCIAL_LINKS.slice(0, 2).map((link) => (
          <LinkItem key={link.id} {...link} />
        ))}
      </div>
      <div className="col-span-2 grid grid-cols-2 gap-4">
        {SOCIAL_LINKS.slice(2, 4).map((link) => (
          <LinkItem key={link.id} {...link} />
        ))}
      </div>
    </div>
  );
};
