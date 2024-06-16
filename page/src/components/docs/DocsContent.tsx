import Text from "@/components/common/Text";
import Example from "@/components/docs/Example";
import Head from "@/components/layout/Head";
import ImportSource from "@/components/layout/ImportSource";
import { COLORS } from "@/styles/colors";
import { DocsContentProps } from "@/types/Docs";
import styled from "@emotion/styled";

const DocsContent = ({
  name,
  description,
  imports,
  src,
  examples,
}: DocsContentProps) => {
  return (
    <Wrapper>
      <Head name={name} />
      <InWrapper>
        <Text fs={4} fw={700} color={COLORS.SeaGreen}>
          {name}
        </Text>
        <Text fs={1.8}>{description}</Text>
        <ImportSource imports={imports} src={src} />
        <ExampleWrapper>
          <Text fs={2} fw={800}>
            Examples
          </Text>
          {examples.map((val) => (
            <Example title={val.title} component={val.component} />
          ))}
        </ExampleWrapper>
      </InWrapper>
    </Wrapper>
  );
};

export default DocsContent;

const Wrapper = styled.section`
  width: 100%;
`;

const InWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 5px;
`;

const ExampleWrapper = styled.div`
  margin-top: 80px;
`;
