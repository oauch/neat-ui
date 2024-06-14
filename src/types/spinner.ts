import { DefaultProps, SizeToken } from "@/types/default";

interface SpinnerProps extends DefaultProps {
  size?: SizeToken;
  thickness?: number;
  color?: string;
  emptyColor?: string;
  speed?: number;
}

export type { SpinnerProps };
