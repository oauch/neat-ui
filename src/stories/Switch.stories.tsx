import Switch from "@/components/Switch";
import { COLORS } from "@/styles/color";
import { SwitchProps } from "@/types/switch";
import React from "react";

const meta = {
  title: "Switch",
  args: {
    size: "md",
    bgColor: COLORS.PRIMARY,
    disabled: false,
  },
  component: Switch,
};

export default meta;

function Component({ ...props }: SwitchProps) {
  return <Switch {...props} />;
}

export const Switch_ = { render: Component };
