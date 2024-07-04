import { Text } from "@/components";
import { TextProps } from "@/types";
import React from "react";

const meta = {
  title: "Text",
  args: {
    fs: 15,
    fw: 400,
    font: "Pretendard",
    color: "#000",
    align: "left",
    lineH: "normal",
    letterS: 0,
    decoration: "b",
  },
  component: Text,
};

export default meta;

function Component({ ...props }: TextProps) {
  return <Text {...props}>Text</Text>;
}

export const Text_ = { render: Component };
