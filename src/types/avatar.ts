import { SizeToken } from "@/types/default";
import { JSXElementConstructor, ReactElement, ReactNode } from "react";

type IconProps = ReactElement<any, string | JSXElementConstructor<any>>;

interface DefaultAvatarProps {
  size?: SizeToken;
  max?: number;
}

interface AvatarProps extends DefaultAvatarProps {
  index?: number;
  name?: string;
  imgUrl?: string;
  icon?: IconProps;
}

interface AvatarGroupProps extends DefaultAvatarProps {
  space?: number;
  children?: ReactNode;
}

export type { AvatarGroupProps, AvatarProps };
