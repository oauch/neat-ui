import Badge from "@/components/Badge";
import { COLORS } from "@/styles/color";
import { BadgeProps } from "@/types/badge";
import React from "react";

const meta = {
  title: "Badge",
  args: {
    bgColor: COLORS.PRIMARY,
    color: COLORS.WHITE,
    fs: 15,
  },
  component: Badge,
};

export default meta;

function Component({ ...props }: BadgeProps) {
  return <Badge {...props}>Button</Badge>;
}

export const Badge_ = { render: Component };
