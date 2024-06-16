import IconLink from "@/components/common/IconLink";
import Text from "@/components/common/Text";
import { TITLE } from "@/constants/common";
import { GITHUB, NPM } from "@/constants/url";
import useNpmVersion from "@/hooks/useNpmVersion";
import { COLORS } from "@/styles/colors";

import styled from "@emotion/styled";
import { Flex } from "@oauch/neat-ui";
import Link from "next/link";

import { FaGithub, FaNpm } from "react-icons/fa";

const Header = () => {
  const { version } = useNpmVersion();
  return (
    <Wrapper>
      <Flex align="center" gap={20}>
        <Link href={"/"}>
          <Text fs={3} fw={800} color={COLORS.SeaGreen}>
            {TITLE}
          </Text>
        </Link>
        <Version>{version}</Version>
      </Flex>
      <Flex align="center" gap={10}>
        <IconLink Icon={FaGithub} href={GITHUB} />
        <IconLink Icon={FaNpm} href={NPM} />
      </Flex>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid ${COLORS.LightGray};
  backdrop-filter: blur(3px);
  z-index: 5;
`;

const Version = styled.div`
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-radius: 10px;
  font-size: 1.2rem;
  font-weight: 500;
  background-color: ${COLORS.LightGray};
`;
