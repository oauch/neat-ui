import { ColorToken, DefaultProps, SizeToken } from "@/types/default";

interface ChipProps extends DefaultProps {
  label?: string;
  size?: SizeToken;
  colorTheme?: ColorToken;
  active?: boolean;
  fs?: number;
  onClick?: () => void;
  disabled?: boolean;
}

export type { ChipProps };
