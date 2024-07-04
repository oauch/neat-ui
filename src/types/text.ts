import { DefaultProps } from "@/types/default";

type FontWeightType = 400 | 500 | 600 | 700 | 800;
type AlignType = "start" | "left" | "center" | "right";
type DecorationType = "b" | "i" | "u" | "d" | "mark";

interface TextProps extends DefaultProps {
  fs?: number;
  fw?: FontWeightType;
  font?: string;
  color?: string;
  align?: AlignType;
  lineH?: number;
  letterS?: number;
  decoration?: DecorationType;
}

export type { TextProps };
