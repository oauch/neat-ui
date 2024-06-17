import { COLORS } from "@/styles/color";
import { AlertProps } from "@/types/alert";
import AlertBgColor from "@/utils/Alert/AlertBgColor";
import AlertFillColor from "@/utils/Alert/AlertFillColor";

import styled from "@emotion/styled";
import React from "react";

function Alert({ status, customIcon, children, ...props }: AlertProps) {
  let icon = "";
  switch (status) {
    case "success":
      icon = "✅";
      break;
    case "error":
      icon = "💡";
      break;
    case "warning":
      icon = "⚠️";
      break;
    case "info":
      icon = "📝";
      break;
    default:
      icon = "🍞";
      break;
  }

  // 커스텀 아이콘 있을 때는 커스텀 아이콘으로 변경
  if (customIcon) {
    icon = customIcon;
  }

  return (
    <Wrapper>
      <AlertWrapper status={status} {...props}>
        <IconWrapper>{icon}</IconWrapper>
        {children}
      </AlertWrapper>
    </Wrapper>
  );
}

export default Alert;

const Wrapper = styled.div`
  z-index: 9999;
`;

const AlertWrapper = styled.div<AlertProps>`
  width: fit-content;
  height: fit-content;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  padding: 10px;

  background-color: ${({ status, variants }) =>
    AlertBgColor({ status, variants })};
  color: ${({ status, variants }) => {
    if (!status) return COLORS.BLACK;
    if (variants === "fill") return COLORS.WHITE;
    return AlertFillColor({ status });
  }};

  border: 2px solid
    ${({ status, variants }) => {
      if (variants === "outline") return AlertFillColor({ status });
      return "transparent";
    }};
  border-radius: 5px;
`;

const IconWrapper = styled.div`
  margin-left: 5px;
`;
