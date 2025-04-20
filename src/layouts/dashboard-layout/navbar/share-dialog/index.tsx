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
          <Button variant="ghost" disabled>
            <Share className="size-4 text-new-york-primary-1" />
            <span className="sr-only">Share</span>
          </Button>
        </div>
      </TooltipTrigger>
      <TooltipContent side="bottom">
        <p>Coming soon</p>
        <TooltipArrow />
      </TooltipContent>
    </Tooltip>
  );
};
