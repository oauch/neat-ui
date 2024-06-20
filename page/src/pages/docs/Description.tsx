import Text from "@/components/common/Text";
import DocsContent from "@/components/docs/DocsContent";
import DocsLayout from "@/components/docs/DocsLayout";
import styled from "@emotion/styled";
import { Flex } from "@oauch/neat-ui";

const Description = () => {
  return (
    <DocsLayout>
      <DocsContent
        name={"Description"}
        description={"Neat UI is Just Neat and Simple React UI"}
      />
      <DescriptionWrapper>
        <Text fs={3} fw={600} lineH={100}>
          This UI library was developed for my ease of use
          <br />
          but I tried to make it as simple as possible for other developers to
          use it easily.
        </Text>
      </DescriptionWrapper>
    </DocsLayout>
  );
};

export default Description;

const DescriptionWrapper = styled(Flex)`
  margin-top: 100px;
`;
