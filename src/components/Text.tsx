import { TextProps } from "@/types/text";
import styled from "@emotion/styled";
import React from "react";

function Text({ children, ...props }: TextProps) {
  return <Wrapper {...props}>{children}</Wrapper>;
}

export default Text;

const Wrapper = styled.p<TextProps>`
  font-size: ${({ fs = 1.2 }) => fs}px;
  font-weight: ${({ fw = 400 }) => fw};
  font-family: ${({ font }) => font};
  text-align: ${({ align }) => align};
  line-height: ${({ lineH }) => lineH};
  letter-spacing: ${({ letterS }) => letterS};
  color: ${({ color }) => color};
  white-space: break-spaces;
`;
