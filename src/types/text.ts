import { ReactNode } from "react";

type FONT_WEIGHT = 400 | 500 | 600 | 700 | 800;

interface TextProps {
  children: ReactNode;
  fs?: number;
  fw?: FONT_WEIGHT;
  font?: string;
  color?: string;
  align?: string;
  lineH?: number;
  letterS?: number;
}

export type { TextProps };
