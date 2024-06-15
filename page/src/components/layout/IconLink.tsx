import Link from "next/link";
import { IconType } from "react-icons";

type IconLinkProps = {
  href: string;
  Icon: IconType;
};

const IconLink = ({ Icon, href }: IconLinkProps) => {
  return (
    <Link href={href} target="_blank">
      <Icon size={35} />
    </Link>
  );
};

export default IconLink;
