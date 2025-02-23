import { type PropsWithClassname } from '@/types/common';

export const LoaderIcon = ({ className }: PropsWithClassname) => (
  <svg
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
    className={className}
  >
    <path
      d="M21 12.633a9 9 0 1 1-6.219-8.56"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
