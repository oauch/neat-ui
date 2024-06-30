import { PropsWithChildren } from "@/types/default";

interface BadgeProps extends PropsWithChildren {
  bgColor: string;
  color: string;
  fs: number;
}

export type { BadgeProps };
