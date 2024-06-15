import DocsLayout from "@/components/layout/DocsLayout";
import styled from "@emotion/styled";

const Components = () => {
  return <DocsLayout>컴포넌트</DocsLayout>;
};

export default Components;

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 20px 20px 0;
  gap: 20px;
`;
