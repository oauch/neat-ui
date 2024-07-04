import Alert from "@/components/Alert";
import { AlertProps } from "@/types/alert";
import React from "react";

const meta = {
  title: "Alert",
  args: {
    status: "success",
    variants: "fill",
  },
  component: Alert,
};

export default meta;

function Component({ ...props }: AlertProps) {
  return <Alert {...props}>This Component is Alert</Alert>;
}

export const Alert_ = {
  render: Component,
};
