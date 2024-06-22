import useBoolean from "@/hooks/useBoolean";
import { COLORS } from "@/styles/color";
import { SwitchProps } from "@/types/switch";

import styled from "@emotion/styled";
import React from "react";

function Switch({ onClick, ...props }: SwitchProps) {
  const { isBoolean, toggle } = useBoolean();

  return (
    <Label {...props}>
      <Input
        type="checkbox"
        checked={isBoolean}
        onChange={toggle}
        onClick={onClick}
        disabled={props.disabled}
      />
      <Slider {...props} />
    </Label>
  );
}

export default Switch;

const Label = styled.label<SwitchProps>`
  display: block;
  position: relative;
  width: ${({ size = "md" }) => {
    switch (size) {
      case "sm":
        return 35;
      case "md":
        return 50;
      case "lg":
        return 75;
      default:
        return 50;
    }
  }}px;
  height: ${({ size = "md" }) => {
    switch (size) {
      case "sm":
        return 20;
      case "md":
        return 28;
      case "lg":
        return 40;
      default:
        return 28;
    }
  }}px;
`;

const Input = styled.input`
  opacity: 0;
`;

const Slider = styled.div<SwitchProps>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${COLORS.GRAY};
  transition: 0.4s;
  border-radius: 40px;

  opacity: ${({ disabled = false }) => (disabled ? 0.4 : 1)};
  cursor: ${({ disabled = false }) => (disabled ? "not-allowed" : "pointer")};

  &::before {
    content: "";
    position: absolute;
    width: ${({ size = "md" }) => {
      switch (size) {
        case "sm":
          return 15;
        case "md":
          return 20;
        case "lg":
          return 32;
      }
    }}px;
    height: ${({ size = "md" }) => {
      switch (size) {
        case "sm":
          return 15;
        case "md":
          return 20;
        case "lg":
          return 32;
      }
    }}px;
    left: ${({ size = "md" }) => {
      switch (size) {
        case "sm":
          return 3;
        case "md":
          return 4;
        case "lg":
          return 6;
      }
    }}px;
    bottom: ${({ size = "md" }) => {
      switch (size) {
        case "sm":
          return 2.5;
        case "md":
          return 3.8;
        case "lg":
          return 4;
        default:
          return 3.8;
      }
    }}px;
    background-color: ${COLORS.WHITE};
    transition: 0.4s;
    border-radius: 50%;
  }

  input:checked + &::before {
    transform: translateX(
      ${({ size = "md" }) => {
        switch (size) {
          case "sm":
            return 14;
          case "md":
            return 22;
          case "lg":
            return 31;
        }
      }}px
    );
  }

  input:checked + & {
    background-color: ${({ bgColor = COLORS.PRIMARY }) => bgColor};
  }
`;
