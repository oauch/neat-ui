import { TITLE } from "@/constants/common";
import { NextSeo } from "next-seo";
import { useMemo } from "react";

type HeadProps = {
  name: string;
};

const Head = ({ name }: HeadProps) => {
  const title = useMemo(() => `${TITLE}${name ? ` | ${name}` : ""}`, [name]);
  return <NextSeo title={title} />;
};

export default Head;
