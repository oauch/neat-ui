import { GITHUB_SRC } from "@/constants/url";

export const URLCovert = (src: string) => {
  const srcSeparator = src.includes("use");
  return `${GITHUB_SRC}${srcSeparator ? "hooks" : "components"}/${src}.${
    srcSeparator ? "ts" : "tsx"
  }`;
};
