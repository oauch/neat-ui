import { Button, Flex } from "@/components";
import { FlexProps } from "@/types";
import React from "react";

const meta = {
  title: "Flex",
  args: {
    direction: "row",
    justify: "start",
    align: "start",
    wrap: "nowrap",
    grow: 0,
    shrink: 0,
    basis: "auto",
    gap: 5,
  },
  component: Flex,
};

export default meta;

function Component({ ...props }: FlexProps) {
  return (
    <Flex {...props}>
      <Button>First</Button>
      <Button>Second</Button>
      <Button>Third</Button>
    </Flex>
  );
}

export const Flex_ = { render: Component };
