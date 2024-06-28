import Code from "@/components/Code";
import { CodeProps } from "@/types/code";
import React from "react";

const meta = {
  title: "Code",
  args: {
    fs: 15,
    color: "#fff",
    bgColor: "rgba(0, 0, 0, 0.6)",
  },
  component: Code,
};

export default meta;

function Component({ ...props }: CodeProps) {
  return (
    <Code {...props}>{`return (
  <Wrapper color={color}>
    <InWrapper>
      <CodeText>{children}</CodeText>
      <CopyButton onClick={onCopy}>{isCopy ? '✅' : '📝'}</CopyButton>
    </InWrapper>
  </Wrapper>
);`}</Code>
  );
}

export const Code_ = { render: Component };
