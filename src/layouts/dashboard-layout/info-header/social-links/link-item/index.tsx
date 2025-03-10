import { type SOCIAL_LINKS } from '../social-links.constants';

type LinkItemProps = (typeof SOCIAL_LINKS)[0];

export const LinkItem = ({ icon: Icon, label, url }: LinkItemProps) => {
  return (
    <a
      href={url}
      target="_blank"
      className="flex items-center rounded-md text-[9px]/[12px] hover:underline 2xl:text-xs"
      rel="noreferrer"
    >
      <Icon className="size-5" />
      <span className="ml-2">{label}</span>
    </a>
  );
};
