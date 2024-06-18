import Chip from "@/components/Chip";
import { ChipProps } from "@/types/chip";
import React from "react";

const meta = {
  title: "Chip",
  args: {
    size: "md",
    colorTheme: "primary",
  },
  component: Chip,
};

export default meta;

function Component({ children, ...props }: ChipProps) {
  return <Chip {...props}>{children ?? "Chip"}</Chip>;
}

export const Chip_ = {
  render: Component,
};
