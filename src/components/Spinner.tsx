import { SIZE_MAP } from "@/constants/avatarSizeMap";
import { COLORS } from "@/styles/color";
import { SpinnerProps } from "@/types";

import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";

const FONT_SIZE = {
  sm: 20,
  md: 30,
  lg: 40,
};

function Spinner({ children, ...props }: SpinnerProps) {
  return <Wrapper {...props}>{children}</Wrapper>;
}

export default Spinner;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Wrapper = styled.div<SpinnerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ size = "md" }) => {
    return `
      width: ${SIZE_MAP[size]}px;
      height: ${SIZE_MAP[size]}px;
    `;
  }}
  font-size: ${({ size = "md" }) => FONT_SIZE[size]}px;
  ${({
    children,
    thickness = 2,
    color = COLORS.BLACK,
    emptyColor = "transparent",
  }) => {
    return children
      ? ``
      : `border: ${thickness}px solid
    ${color};
  border-left-color: ${emptyColor};
  border-radius: 100%;`;
  }}
  animation: ${rotate} ${({ speed = 1 }) => speed}s infinite linear;
`;
