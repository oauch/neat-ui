import { DefaultProps } from "@/types/default";

interface ButtonProps extends DefaultProps {
  type?: "button" | "submit";
  size?: "sm" | "md" | "lg";
  fs?: number;
  bgColor?: string;
  color?: string;
  variants?: "none" | "outline";
  onClick?: () => void;
  disabled?: boolean;
}

export type { ButtonProps };
