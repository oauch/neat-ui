import { SIZE_MAP } from "@/constants/avatarSizeMap";
import { AvatarProps } from "@/types/avatar";
import styled from "@emotion/styled";
import React from "react";

function Avatar({ index, max, name, imgUrl, ...props }: AvatarProps) {
  return (
    <Wrapper index={index} max={max}>
      <Image src={imgUrl} alt={name} {...props} />
    </Wrapper>
  );
}

export default Avatar;

const Wrapper = styled.div<AvatarProps>`
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
