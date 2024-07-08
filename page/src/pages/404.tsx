import styled from "@emotion/styled";
import { Button, Text } from "@oauch/neat-ui";
import { useRouter } from "next/navigation";

const NotFoundPage = () => {
  const navigate = useRouter();
  return (
    <Wrapper>
      <Text fs={40} fw={800}>
        404
      </Text>
      <Text fs={20} fw={600}>
        Not Found Page.
      </Text>
      <Button onClick={() => navigate.back()}>Back page</Button>
    </Wrapper>
  );
};

export default NotFoundPage;

const Wrapper = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
