import Spinner from "@/components/Spinner";
import { COLORS } from "@/styles/color";
import { SpinnerProps } from "@/types";

import React from "react";

const meta = {
  title: "Spinner",
  args: {
    size: "sm",
    thickness: "2",
    color: COLORS.BLACK,
    emptyColor: "transparent",
    speed: "1",
  },
  component: Spinner,
};

export default meta;

function Component({ ...props }: SpinnerProps) {
  return <Spinner {...props} />;
}

export const Spinner_ = {
  render: Component,
};
