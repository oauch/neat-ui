import NewDocs from "@/components/common/NewDocs";
import Text from "@/components/common/Text";
import { DOCS_LIST } from "@/constants/docs";
import { COLORS } from "@/styles/colors";
import { CheckNewDocs } from "@/utils/CheckNewDocs";
import { KeySeparation } from "@/utils/KeySeparation";
import styled from "@emotion/styled";
import { Flex } from "@oauch/neat-ui";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

const SideBar = () => {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <Wrapper>
      {DOCS_LIST.map((val) => {
        const latestItemKey =
          val.key !== "docs" ? CheckNewDocs(val.list) : null;
        return (
          <ListItems key={val.key}>
            <Text fs={2.4} fw={700} color={COLORS.SeaGreen}>
              {t(val.name)}
            </Text>
            <Items>
              {val.list.map((item) => (
                <Flex align="center" gap={5} key={item.key}>
                  <Link href={KeySeparation(val.key, item.key)}>
                    <Item active={router.pathname.includes(item.key)}>
                      {t(item.name)}
                    </Item>
                  </Link>
                  {item.key === latestItemKey && <NewDocs />}
                </Flex>
              ))}
            </Items>
          </ListItems>
        );
      })}
    </Wrapper>
  );
};

export default SideBar;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 50px;
`;

const ListItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
`;

const Items = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  padding-left: 10px;
`;

const Item = styled.li<{ active: boolean }>`
  width: 100%;
  font-size: 1.5rem;
  font-weight: 600;
  padding: 10px;
  border-radius: 10px;

  transition: all 0.2s ease-in-out;
  cursor: pointer;

  color: ${({ active }) => (active ? COLORS.SeaGreen : COLORS.SlateGray)};
  background-color: ${({ active }) => active && "rgba(0, 0, 0, 0.08)"};

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;
