import { TITLE } from "@/constants/common";

const DESCRIPTION = "Just Neat and Simple React UI";
const URL = "http://neat-ui.com";
const SITE_IMG = "/favicon.ico";

export const DEFAULT_SEO = {
  title: TITLE,
  description: DESCRIPTION,
  canonical: URL,
  icons: {
    icon: SITE_IMG,
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: URL,
    title: "Neat-UI",
    site_name: "Neat-UI",
    images: [
      {
        url: SITE_IMG,
        width: 285,
        height: 167,
        alt: TITLE,
      },
    ],
  },
  twitter: {
    handle: "@handle",
    site: "@site",
    cardType: "summary_large_image",
  },
};
