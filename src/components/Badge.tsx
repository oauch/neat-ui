import { COLORS } from "@/styles/color";
import { BadgeProps } from "@/types/badge";
import styled from "@emotion/styled";
import React from "react";

const Badge = ({ children, ...props }: BadgeProps) => {
  return <Wrapper {...props}>{children}</Wrapper>;
};

export default Badge;

const Wrapper = styled.div<BadgeProps>`
  display: inline-block;
  height: fit-content;
  padding: 5px;
  border-radius: 5px;

  background-color: ${({ bgColor = COLORS.BLACK }) => bgColor};
  color: ${({ color = COLORS.WHITE }) => color};

  font-size: ${({ fs = 12 }) => fs}px;
  font-weight: 700;
  text-transform: uppercase;
  white-space: nowrap;
`;
