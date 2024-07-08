import styled from "@emotion/styled";
import { CSSProperties, ReactNode } from "react";

type ComponentWrapperProps = {
  children: ReactNode;
  style?: CSSProperties;
};

const ComponentWrapper = ({ children, style }: ComponentWrapperProps) => {
  return <Wrapper style={style}>{children}</Wrapper>;
};

export default ComponentWrapper;

const Wrapper = styled.div`
  width: 100%;
  padding: 10px;
`;
