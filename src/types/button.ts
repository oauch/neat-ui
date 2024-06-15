import { DefaultProps } from "@/types/default";

interface ButtonProps extends DefaultProps {
  type?: "button" | "submit";
  size?: "sm" | "md" | "lg";
  fs?: number;
  colorTheme?: "primary" | "black" | "white";
  variants?: "none" | "outline";
  onClick?: () => void;
  isDisabled?: boolean;
}

export type { ButtonProps };
