import Button from "@/components/Button";
import { ButtonProps } from "@/types/button";
import React from "react";

const meta = {
  title: "Button",
  args: {
    type: "button",
    size: "md",
    fs: 12,
    colorTheme: "primary",
    variants: "none",
    disabled: false,
  },
  component: Button,
};

export default meta;

function Component({ ...props }: ButtonProps) {
  return <Button {...props}>Button</Button>;
}

export const Button_ = { render: Component };
