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
  font-size: ${({ fs = 12 }) => fs}px;
  border-radius: 20px;

  ${({ size = "md" }) => {
    const { width, height } = SIZE_MAP[size];
    return `
      width: ${width}px;
      height: ${height}px;
    `;
  }}

  color: ${({ color = "white" }) => color};
  background-color: ${({ bgColor = COLORS.PRIMARY }) => bgColor};

  &:disabled {
    cursor: not-allowed;
    background-color: ${COLORS.DISABLED};
    background-image: none;
  }

  &:hover:not(:disabled) {
    transition: all 0.1s ease-in-out;
    background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1));
    color: ${COLORS.HOVER_TEXT};
  }
`;
