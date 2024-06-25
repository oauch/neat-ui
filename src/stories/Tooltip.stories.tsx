import { Button } from "@/components";
import Tooltip from "@/components/Tooltip";
import { TooltipProps } from "@/types";
import React from "react";

const meta = {
  title: "Tooltip",
  args: {
    position: "top",
  },
  component: Tooltip,
};

export default meta;

function Component({ ...props }: TooltipProps) {
  return (
    <Tooltip {...props}>
      <Button>Top</Button>
    </Tooltip>
  );
}

export const Tooltip_ = { render: Component };
