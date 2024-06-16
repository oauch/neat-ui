import IconLink from "@/components/common/IconLink";
import Text from "@/components/common/Text";
import { COLORS } from "@/styles/colors";
import { URLCovert } from "@/utils/URLConvert";
import styled from "@emotion/styled";
import { Flex } from "@oauch/neat-ui";
import { FaGithub } from "react-icons/fa";

type ImportSourceProps = {
  imports: string[];
  src: string;
};

const ImportSource = ({ imports, src }: ImportSourceProps) => {
  return (
    <Wrapper>
      <Flex align="center" gap={10}>
        <Text fs={2} fw={600}>
          Import
        </Text>
        <Import>import {imports.join(", ")} from '@oauch/neat-ui';</Import>
        <IconLink href={URLCovert(src)} Icon={FaGithub} size={30} />
      </Flex>
    </Wrapper>
  );
};

export default ImportSource;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  gap: 15px;
`;

const Import = styled.p`
  padding: 5px 10px;
  font-size: 1.5rem;
  color: ${COLORS.White};
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.5);
`;
