import { DefaultProps, SizeToken } from "@/types/default";

interface ChipProps extends DefaultProps {
  label?: string;
  size?: SizeToken;
  bgColor?: string;
  color?: string;
  active?: boolean;
  fs?: number;
  onClick?: () => void;
  disabled?: boolean;
}

export type { ChipProps };
