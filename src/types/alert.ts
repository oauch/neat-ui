import { DefaultProps } from "@/types/default";

interface AlertProps extends DefaultProps {
  status?: "success" | "error" | "warning" | "info";
  variants?: "fill" | "outline";
  customIcon?: string;
}

interface AlertFunctionProps {
  status?: "success" | "error" | "warning" | "info";
  variants?: "fill" | "outline";
  customIcon?: string;
}

export type { AlertFunctionProps, AlertProps };
