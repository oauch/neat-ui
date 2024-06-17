import { COLORS } from "@/styles/colors";
import styled from "@emotion/styled";
import { useClipBoard } from "@oauch/neat-ui";
import SyntaxHighlighter from "react-syntax-highlighter";
import { googlecode } from "react-syntax-highlighter/dist/esm/styles/hljs";

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
          border: `1px solid ${COLORS.SeaGreen}`,
          borderRadius: "10px",
          lineHeight: 1.6,
          fontSize: "1.6rem",
        }}
      >
        {code}
      </SyntaxHighlighter>
      <CopyButton onClick={onCopy}>{isCopy ? "✅" : "📝"}</CopyButton>
    </Wrapper>
  );
};

export default CodeBlock;

const Wrapper = styled.div`
  position: relative;
`;

const CopyButton = styled.button`
  position: absolute;
  top: 5px;
  right: 10px;
  font-size: 2.5rem;
`;
