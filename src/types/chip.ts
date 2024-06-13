import { ColorToken, DefaultProps, SizeToken } from "@/types/default";

interface ChipProps extends DefaultProps {
  label?: string;
  size?: SizeToken;
  colorTheme?: ColorToken;
  borderRadius?: string;
  active?: boolean;
  fontSize?: number;
  onClick?: () => void;
  disabled?: boolean;
}

export type { ChipProps };
