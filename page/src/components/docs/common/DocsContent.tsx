import Example from "@/components/docs/common/Example";
import Props from "@/components/docs/common/Props";
import Head from "@/components/layout/Head";
import ImportSource from "@/components/layout/ImportSource";
import { COLORS } from "@/styles/colors";
import { DocsContentProps } from "@/types/Docs";
import styled from "@emotion/styled";
import { Text } from "@oauch/neat-ui";
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
        <Text fs={40} fw={700} color={COLORS.SeaGreen}>
          {name}
        </Text>
        {description && <Text fs={18}>{description}</Text>}
        {imports && src && <ImportSource imports={imports} src={src} />}
        {examples && (
          <ExampleWrapper>
            <Text fs={25} fw={800}>
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
