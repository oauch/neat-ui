import IconLink from "@/components/common/IconLink";
import { TITLE } from "@/constants/common";
import { GITHUB, NPM } from "@/constants/url";
import { COLORS } from "@/styles/colors";
import { Text } from "@oauch/neat-ui";

import useHeader from "@/hooks/useHeader";
import styled from "@emotion/styled";
import { Flex } from "@oauch/neat-ui";
import Link from "next/link";
import { FaGithub, FaNpm } from "react-icons/fa";
import { FaEarthAsia } from "react-icons/fa6";

const MODAL_VAL = ["한국어", "English"];

const Header = () => {
  const { neatUiVer, openModal, isOpen, handleLanguage } = useHeader();

  return (
    <Wrapper>
      <Flex align="center" gap={20}>
        <Link href={"/"}>
          <Text fs={30} fw={800} color={COLORS.SeaGreen}>
            {TITLE}
          </Text>
        </Link>
        <Version>{neatUiVer}</Version>
      </Flex>
      <Flex align="center" gap={10}>
        <Translate>
          <FaEarthAsia
            size={30}
            onClick={openModal}
            style={{ cursor: "pointer" }}
          />
          {isOpen && (
            <MiniModal>
              {MODAL_VAL.map((val, index) => (
                <button key={index} onClick={() => handleLanguage(val)}>
                  {val}
                </button>
              ))}
            </MiniModal>
          )}
        </Translate>
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
  z-index: 99999;
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

const Translate = styled.div`
  display: flex;
  position: relative;
  font-size: 1.5rem;
`;

const MiniModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  position: absolute;
  top: 35px;
  left: -23px;
  padding: 10px;
  border: 1px solid ${COLORS.SeaGreen};
  border-radius: 10px;
  background-color: ${COLORS.White};
  z-index: 10000;
`;
