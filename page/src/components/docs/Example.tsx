import Text from "@/components/common/Text";
import { COLORS } from "@/styles/colors";
import { ExampleListItem } from "@/types/Docs";
import styled from "@emotion/styled";
import SyntaxHighlighter from "react-syntax-highlighter";
import { googlecode } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const Example = ({ title, component: Component }: ExampleListItem) => {
  return (
    <Wrapper>
      <Text fs={2} fw={400}>
        🟢 {title}
      </Text>
      <InWrapper>{/* <Component />*/}</InWrapper>
      <SyntaxHighlighter
        language="typescript"
        style={googlecode}
        customStyle={{
          padding: "20px",
          borderRadius: "10px",
          lineHeight: 1.6,
          fontSize: "1.6rem",
        }}
      >
        {Component.code}
      </SyntaxHighlighter>
    </Wrapper>
  );
};

export default Example;

const Wrapper = styled.div`
  margin-top: 20px;
`;

const InWrapper = styled.div`
  display: flex;

  border: 1px solid ${COLORS.SeaGreen};
  border-radius: 5px;
`;
