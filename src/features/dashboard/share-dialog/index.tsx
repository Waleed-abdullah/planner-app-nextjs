'use client';

import { TooltipArrow } from '@radix-ui/react-tooltip';
import { Share } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export const ShareDialog = () => {
  return (
    <Tooltip delayDuration={0}>
      <TooltipTrigger asChild>
        <div>
          <Button disabled>
            <Share />
            <span>Share</span>
          </Button>
        </div>
      </TooltipTrigger>
      <TooltipContent side="right">
        <p>Coming soon</p>
        <TooltipArrow />
      </TooltipContent>
    </Tooltip>
  );
};
