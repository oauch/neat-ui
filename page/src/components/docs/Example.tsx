import CodeBlock from "@/components/docs/CodeBlock";
import { COLORS } from "@/styles/colors";
import { ExampleListItem } from "@/types/Docs";
import styled from "@emotion/styled";
import { Text } from "@oauch/neat-ui";

const Example = ({ title, component: Component }: ExampleListItem) => {
  return (
    <Wrapper>
      <Text fs={20} fw={700}>
        🟢 {title}
      </Text>
      <InWrapper>
        <Component />
      </InWrapper>
      <CodeBlock code={Component.code} />
    </Wrapper>
  );
};

export default Example;

const Wrapper = styled.div`
  margin-top: 50px;
`;

const InWrapper = styled.div`
  display: flex;
  margin-top: 20px;

  border: 1px solid ${COLORS.LightGray};
  border-radius: 5px;
  gap: 10px;
`;
