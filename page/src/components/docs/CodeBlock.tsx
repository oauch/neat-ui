import CopyButton from "@/components/common/CopyButton";
import { COLORS } from "@/styles/colors";
import styled from "@emotion/styled";
import { useClipBoard } from "@oauch/neat-ui";
import SyntaxHighlighter from "react-syntax-highlighter";
import { googlecode } from "react-syntax-highlighter/dist/cjs/styles/hljs";

type CodeBlockProp = {
  code: string;
};

const CodeBlock = ({ code }: CodeBlockProp) => {
  const { isCopy, onCopy } = useClipBoard(String(code));
  return (
    <Wrapper>
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
      <CopyButton types="code" onCopy={onCopy} isCopy={isCopy} />
    </Wrapper>
  );
};

export default CodeBlock;

const Wrapper = styled.div`
  position: relative;
`;
