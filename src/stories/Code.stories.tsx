import Code from "@/components/Code";
import React from "react";

const meta = {
  title: "Code",
  component: Code,
};

export default meta;

const code = `return (
  <Wrapper color={color}>
    <InWrapper>
      <CodeText>{children}</CodeText>
      <CopyButton onClick={onCopy}>{isCopy ? '✅' : '📝'}</CopyButton>
    </InWrapper>
  </Wrapper>
);`;

function Component() {
  return <Code code={code} />;
}

export const Code_ = { render: Component };
