import DocsContent from "@/components/docs/DocsContent";
import DocsLayout from "@/components/docs/DocsLayout";
import { COLORS } from "@/styles/colors";
import styled from "@emotion/styled";

const Install = () => {
  return (
    <DocsLayout>
      <DocsContent name={"Install"} />
      <InstallText>npm i @oauch/neat-ui</InstallText>
    </DocsLayout>
  );
};

export default Install;

const InstallText = styled.p`
  width: fit-content;
  margin-top: 20px;
  padding: 5px 10px;
  font-size: 2rem;
  font-weight: 600;
  color: ${COLORS.White};
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 10px;
`;
