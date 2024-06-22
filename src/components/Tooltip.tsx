import { COLORS } from "@/styles/color";
import { InternalTooltipsProps, TooltipProps } from "@/types/tooltip";
import { ArrowConvert } from "@/utils/ArrowConvert";
import { useTooltip } from "../hooks/useTooltip";

import styled from "@emotion/styled";
import React from "react";
import { createPortal } from "react-dom";

function Tooltip({ children, ...props }: TooltipProps) {
  const {
    content,
    wrapperRef,
    handleMouseEnter,
    handleMouseLeave,
    disabled,
    isShow,
    tooltipRef,
    pointsOffset,
    toolTipElement,
    position,
    customBackgroundColor,
    customStyles,
  } = useTooltip(props);

  return (
    <Wrapper
      ref={wrapperRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {!disabled &&
        isShow &&
        createPortal(
          <Content
            ref={tooltipRef}
            style={{ ...pointsOffset, ...customStyles }}
            position={position}
            bgColor={customBackgroundColor}
          >
            {content}
          </Content>,
          toolTipElement
        )}
    </Wrapper>
  );
}

export default Tooltip;

const Wrapper = styled.div`
  width: fit-content;
  position: relative;
`;

const Content = styled.div<InternalTooltipsProps>`
  position: absolute;
  padding: 5px 10px;
  border-radius: 4px;

  font-size: 1.2rem;
  white-space: pre-line;
  color: ${COLORS.WHITE};
  background-color: ${COLORS.BLACK};

  z-index: 1000;

  &::after {
    content: "";
    position: absolute;

    border-width: 8px;
    border-style: solid;
    ${({ position = "top", bgColor = COLORS.BLACK }) =>
      ArrowConvert(position, bgColor)}

    z-index: 1000;
  }
`;
