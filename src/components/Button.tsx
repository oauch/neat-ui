import { COLORS } from "@/styles/color";
import { ButtonProps } from "@/types/button";
import styled from "@emotion/styled";
import React from "react";

function Button({
  type = "button",
  onClick,
  disabled = false,
  children,
  ...props
}: ButtonProps) {
  return (
    <Wrapper type={type} onClick={onClick} disabled={disabled} {...props}>
      {children}
    </Wrapper>
  );
}

export default Button;

const Wrapper = styled.button<ButtonProps>`
  width: ${({ size = "md" }) => {
    switch (size) {
      case "sm":
        return 70;
      case "md":
        return 80;
      case "lg":
        return 100;
      default:
        return 80;
    }
  }}px;
  height: ${({ size = "md" }) => {
    switch (size) {
      case "sm":
        return 30;
      case "md":
        return 40;
      case "lg":
        return 50;
      default:
        return 40;
    }
  }}px;

  font-size: ${({ fs = 12 }) => fs}px;
  font-weight: 600;
  color: ${({ color = "white" }) => color};

  border: unset;
  border: 1px
    ${({ variants = "none" }) => (variants === "none" ? "none" : "solid")};
  border-radius: 10px;

  background-color: ${({ bgColor = COLORS.PRIMARY }) => bgColor};

  cursor: pointer;

  &:hover {
    transition: all 0.15s ease-in-out;
    background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1));
    box-shadow: 1.5px 1.5px 1.5px 1.5px ${COLORS.GRAY};
    color: ${COLORS.HOVER_TEXT};
  }

  &:disabled {
    cursor: not-allowed;
    pointer-events: none;
    background-color: rgba(0, 0, 0, 0.2);
    background-image: none;
  }
`;
