import { COLORS } from "@/styles/color";

export const DecorationCovert = (decoration: string) => {
  switch (decoration) {
    case "b":
      return "font-weight: 800;";
    case "i":
      return "font-style: italic;";
    case "u":
      return "text-decoration: underline;";
    case "d":
      return "text-decoration: line-through;";
    case "mark":
      return `background-color: ${COLORS.HIGH_LIGHT}`;
    default:
      return "";
  }
};
