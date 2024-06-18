import { SIZE_MAP } from "@/constants/chipSizeMap";
import { COLORS } from "@/styles/color";
import { ChipProps } from "@/types/chip";
import styled from "@emotion/styled";
import React, { forwardRef, useState } from "react";

const Chip = forwardRef<HTMLButtonElement, ChipProps>(
  ({ onClick, label, children, disabled, ...props }, ref) => {
    const [isSelected, setIsSelected] = useState(false);
    return (
      <Wrapper
        ref={ref}
        active={isSelected}
        onClick={() => {
          setIsSelected((prev) => !prev);
        }}
        disabled={disabled}
        aria-label={label ?? "chip"}
        {...props}
      >
        {children}
      </Wrapper>
    );
  }
);

export default Chip;

const Wrapper = styled.button<ChipProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${COLORS.DISABLED};
  font-size: ${({ fs = 12 }) => fs}px;
  padding: 8px 16px 8px 32px; // 문자열에서 숫자로 수정
  border-radius: 100rem;

  ${({ size = "md" }) => {
    const { width, height } = SIZE_MAP[size];
    return `
      width: ${width}px;
      height: ${height}px;
    `;
  }}

  background-color: ${({ colorTheme = COLORS.WHITE, active }) => {
    switch (colorTheme) {
      case "primary":
        return active ? COLORS.SKIN : COLORS.PRIMARY;
      case "black":
        return active ? COLORS.BLACK : COLORS.BLACK_SUB;
      case "white":
        return active ? COLORS.PRIMARY : COLORS.WHITE;
      default:
        return colorTheme;
    }
  }};

  color: ${({ colorTheme = "white" }) => {
    return colorTheme === "primary" || colorTheme === "white"
      ? COLORS.BLACK
      : COLORS.WHITE;
  }};

  &:disabled {
    cursor: not-allowed;
    background-color: ${COLORS.DISABLED};
    background-image: none;
  }

  &:hover:not(:disabled) {
    transition: all 0.15s ease-in-out;
    background-color: ${({ colorTheme }) => {
      switch (colorTheme) {
        case "primary":
          return COLORS.SKIN;
        case "black":
          return COLORS.BLACK_SUB;
        case "white":
          return COLORS.PRIMARY;
        default:
          return colorTheme;
      }
    }};
    transition: 0.4s;
    border-color: ${COLORS.BLACK};
  }
`;
