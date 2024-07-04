import DocsContent from "@/components/docs/DocsContent";
import DocsLayout from "@/components/docs/DocsLayout";
import styled from "@emotion/styled";
import { Flex, Text } from "@oauch/neat-ui";
import { useTranslation } from "react-i18next";

const Description = () => {
  const { t } = useTranslation();
  return (
    <DocsLayout>
      <DocsContent
        name={t("Docs_Description_Title")}
        description={t("Docs_Description_SubTItle")}
      />
      <DescriptionWrapper>
        <Text fs={30} fw={600} lineH={2}>
          {t("Docs_Description_1")}
          <br />
          {t("Docs_Description_2")}
        </Text>
      </DescriptionWrapper>
    </DocsLayout>
  );
};

export default Description;

const DescriptionWrapper = styled(Flex)`
  margin-top: 100px;
`;
