import { SIZE_MAP } from "@/constants/avatarSizeMap";
import { COLORS } from "@/styles/color";
import { AvatarProps } from "@/types/avatar";

import styled from "@emotion/styled";
import React from "react";
import { RxAvatar } from "react-icons/rx";

function Avatar({
  index,
  max,
  name,
  imgUrl,
  icon: Icon,
  ...props
}: AvatarProps) {
  return (
    <Wrapper index={index} max={max}>
      {Icon && Icon}
      {imgUrl && <Image src={imgUrl} alt={name} {...props} />}
      {!Icon && !imgUrl && (
        <DefaultAvatar
          style={{
            backgroundColor: "#2E8B57",
            borderRadius: "9999px",
            borderStyle: "hidden",
          }}
          color={COLORS.WHITE}
          {...props}
        />
      )}
    </Wrapper>
  );
}

export default Avatar;

const Wrapper = styled.div<AvatarProps>`
  &:first-of-type {
    position: relative;
  }

  ${({ max, index }) => {
    return (
      max !== undefined &&
      `position: absolute;
       left: ${index! * 25}px;
       z-index: ${index}`
    );
  }}
`;

const Image = styled.img<AvatarProps>`
  width: ${({ size = "md" }) => SIZE_MAP[size]}px;
  height: ${({ size = "md" }) => SIZE_MAP[size]}px;
  border-radius: 9999px;
  object-fit: cover;
`;

const DefaultAvatar = styled(RxAvatar)<AvatarProps>`
  width: ${({ size = "md" }) => SIZE_MAP[size]}px;
  height: ${({ size = "md" }) => SIZE_MAP[size]}px;
`;
