import Text from "@/components/common/Text";
import Example from "@/components/docs/Example";
import Props from "@/components/docs/Props";
import Head from "@/components/layout/Head";
import ImportSource from "@/components/layout/ImportSource";
import { COLORS } from "@/styles/colors";
import { DocsContentProps } from "@/types/Docs";
import styled from "@emotion/styled";
import { useTranslation } from "react-i18next";

const DocsContent = ({
  name,
  description,
  imports,
  src,
  examples,
  props,
}: DocsContentProps) => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Head name={name} />
      <InWrapper>
        <Text fs={4} fw={700} color={COLORS.SeaGreen}>
          {name}
        </Text>
        {description && <Text fs={1.8}>{description}</Text>}
        {imports && src && <ImportSource imports={imports} src={src} />}
        {examples && (
          <ExampleWrapper>
            <Text fs={2.5} fw={800}>
              {t("Examples")}
            </Text>
            {examples.map(({ title, component }, index) => (
              <Example key={index} title={title} component={component} />
            ))}
            {props && <Props props={props} />}
          </ExampleWrapper>
        )}
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
  width: 80%;
  margin-top: 80px;
`;
