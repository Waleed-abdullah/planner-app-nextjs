import { Globe, Smartphone } from 'lucide-react';

import { EXTERNAL_LINKS } from '@/constants/external-links';
import { DiscordIcon } from '@/icons/discord';
import { InstagramIcon } from '@/icons/instagram';

export const SOCIAL_LINKS = [
  {
    id: 1,
    icon: InstagramIcon,
    label: 'Follow us on Instagram',
    url: EXTERNAL_LINKS.INSTAGRAM,
  },
  {
    id: 2,
    icon: DiscordIcon,
    label: 'Message us on Discord (Live!)',
    url: EXTERNAL_LINKS.INSTAGRAM,
  },
  {
    id: 3,
    icon: Smartphone,
    label: 'Text us at +1 650 550 0482',
    url: `tel:${EXTERNAL_LINKS.TELEPHONE}`,
  },
  {
    id: 4,
    icon: Globe,
    label: 'www.tipsiti.com',
    url: EXTERNAL_LINKS.TIPSITI_WEBSITE,
  },
];
