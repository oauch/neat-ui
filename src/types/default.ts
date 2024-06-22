import { CSSProperties, ReactNode, RefObject } from "react";

type SizeToken = "sm" | "md" | "lg";
type ElementRef = RefObject<HTMLElement>;

interface PropsWithChildren {
  children?: ReactNode;
}
interface DefaultProps extends PropsWithChildren {
  key?: number | string;
  className?: string;
  style?: CSSProperties;
}

export type { DefaultProps, ElementRef, PropsWithChildren, SizeToken };
