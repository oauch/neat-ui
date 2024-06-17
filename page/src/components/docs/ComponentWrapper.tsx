import styled from "@emotion/styled";
import { ReactNode } from "react";

type ComponentWrapperProps = {
  children: ReactNode;
};

const ComponentWrapper = ({ children }: ComponentWrapperProps) => {
  return <Wrapper>{children}</Wrapper>;
};

export default ComponentWrapper;

const Wrapper = styled.div`
  width: 100%;
  padding: 10px;
`;
