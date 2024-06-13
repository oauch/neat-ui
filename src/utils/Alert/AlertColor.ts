import { COLORS } from "@/styles/color";
import { AlertFunctionProps } from "@/types/alert";

function AlertColor({ status }: AlertFunctionProps) {
  switch (status) {
    case "success":
      return COLORS.SUCCESS;
    case "error":
      return COLORS.ERROR;
    case "warning":
      return COLORS.WARNING;
    case "info":
      return COLORS.INFO;
    default:
      return COLORS.PRIMARY;
  }
}

export default AlertColor;
