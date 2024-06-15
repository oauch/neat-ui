import Text from "@/components/common/Text";
import styled from "@emotion/styled";

const Components = () => {
  return (
    <Wrapper>
      <Menu>
        <Text fs={2} fw={700}>
          Components
        </Text>
        <Items></Items>
      </Menu>
      <div>content</div>
    </Wrapper>
  );
};

export default Components;

const Wrapper = styled.section`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 0 20px;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Items = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
