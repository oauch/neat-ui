import Link from "next/link";
import { IconType } from "react-icons";

type IconLinkProps = {
  href: string;
  Icon: IconType;
  size?: number;
};

const IconLink = ({ Icon, href, size }: IconLinkProps) => {
  return (
    <Link href={href} target="_blank">
      <Icon size={size ?? 35} />
    </Link>
  );
};

export default IconLink;
