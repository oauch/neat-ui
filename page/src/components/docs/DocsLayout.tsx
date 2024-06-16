import SideBar from "@/components/layout/SideBar";
import styled from "@emotion/styled";
import { ReactNode } from "react";

type DocsLayoutProps = {
  children: ReactNode;
};

const DocsLayout = ({ children }: DocsLayoutProps) => {
  return (
    <Wrapper>
      <SideBar />
      <Content>{children}</Content>
    </Wrapper>
  );
};

export default DocsLayout;

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 100px 70px;
  gap: 100px;
`;

const Content = styled.div`
  width: 100%;
`;
