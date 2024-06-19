import Text from "@/components/common/Text";
import { DOCS_LIST } from "@/constants/docs";
import { COLORS } from "@/styles/colors";
import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";

const SideBar = () => {
  const router = useRouter();
  const keySeparation = (key: string, name: string) => {
    return key === "components" ? `/components/${name}` : `/hooks/${name}`;
  };
  return (
    <Wrapper>
      {DOCS_LIST.map((val) => (
        <ListItems key={val.key}>
          <Text fs={2.4} fw={700} color={COLORS.SeaGreen}>
            {val.name}
          </Text>
          <Items>
            {val.list.map((item) => (
              <Link key={item.key} href={keySeparation(val.key, item.name)}>
                <Item
                  key={item.key}
                  active={router.pathname.includes(item.name)}
                >
                  {item.name}
                </Item>
              </Link>
            ))}
          </Items>
        </ListItems>
      ))}
    </Wrapper>
  );
};

export default SideBar;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
