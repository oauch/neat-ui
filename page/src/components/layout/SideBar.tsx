import Text from "@/components/common/Text";
import { DOCS_LIST } from "@/constants/docs";
import { COLORS } from "@/styles/colors";
import styled from "@emotion/styled";

import Link from "next/link";

const SideBar = () => {
  return (
    <Wrapper>
      {DOCS_LIST.map((val) => (
        <ListItems key={val.key}>
          <Text fs={2.4} fw={700} color={COLORS.SeaGreen}>
            {val.name}
          </Text>
          <Items>
            {val.list.map((val) => (
              <Link key={val.key} href={`/components/${val.name}`}>
                <Item>{val.name}</Item>
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

const Item = styled.li`
  width: 100%;
  font-size: 1.5rem;
  font-weight: 500;
  color: ${COLORS.SlateGray};
  padding: 10px;
  border-radius: 10px;

  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }

  &:active {
    color: ${COLORS.SeaGreen};
    background-color: transparent;
  }
`;