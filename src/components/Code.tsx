import useClipBoard from "@/hooks/useClipBoard";
import { COLORS } from "@/styles/color";
import { PropsWithChildren } from "@/types/default";
import SyntaxHighlighter from "react-syntax-highlighter";

import styled from "@emotion/styled";
import React, { forwardRef } from "react";
import { googlecode } from "react-syntax-highlighter/dist/cjs/styles/hljs";

type CodeProp = {
  code: string;
};

const Code = forwardRef<HTMLDivElement, CodeProp>(({ code }, ref) => {
  const { isCopy, onCopy } = useClipBoard(String(code));

  return (
    <Wrapper ref={ref}>
      <SyntaxHighlighter
        language="typescript"
        style={googlecode}
        customStyle={{
          marginTop: "20px",
          padding: "20px",
          border: `1px solid ${COLORS.LightGray}`,
          borderRadius: "10px",
          lineHeight: 1.6,
          fontSize: "1.6rem",
          overflowX: "scroll",
        }}
      >
        {code}
      </SyntaxHighlighter>
      <CopyButton onClick={onCopy}>{isCopy ? "✅" : "📝"}</CopyButton>
    </Wrapper>
  );
});

export default Code;

const Wrapper = styled.div<PropsWithChildren>`
  position: relative;
`;

const CopyButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
`;
