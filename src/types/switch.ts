import { DefaultProps } from "@/types/default";

interface SwitchProps extends DefaultProps {
  size?: "sm" | "md" | "lg";
  bgColor?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export type { SwitchProps };
