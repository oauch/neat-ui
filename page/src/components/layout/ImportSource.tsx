import CopyButton from "@/components/common/CopyButton";
import IconLink from "@/components/common/IconLink";
import Text from "@/components/common/Text";
import { COLORS } from "@/styles/colors";
import { StringCovert } from "@/utils/StringCovert";
import { URLCovert } from "@/utils/URLConvert";
import styled from "@emotion/styled";
import { Flex, useClipBoard } from "@oauch/neat-ui";
import { FaGithub } from "react-icons/fa";

type ImportSourceProps = {
  imports: string[];
  src: string;
};

const ImportSource = ({ imports, src }: ImportSourceProps) => {
  const { isCopy, onCopy } = useClipBoard(StringCovert(imports));
  return (
    <Wrapper>
      <Flex align="center" gap={10}>
        <Text fs={2} fw={600}>
          Import
        </Text>
        <Import>
          {StringCovert(imports)}
          <CopyButton onCopy={onCopy} isCopy={isCopy} fs={1.5} />
        </Import>
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
  display: flex;
  align-items: center;
  gap: 5px;
  position: relative;
  padding: 5px;
  padding-left: 10px;

  font-size: 1.5rem;
  color: ${COLORS.White};
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.5);
`;
