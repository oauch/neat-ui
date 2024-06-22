import Chip from "@/components/Chip";
import { COLORS } from "@/styles/color";
import { ChipProps } from "@/types/chip";
import React from "react";

const meta = {
  title: "Chip",
  args: {
    size: "md",
    bgColor: COLORS.PRIMARY,
    color: COLORS.WHITE,
    disabled: false,
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
