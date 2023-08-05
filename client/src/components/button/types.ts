import { MouseEvent, ReactNode } from "react";

type Color =
  | "green"
  | "red"
  | "blue"
  | "yellow"
  | "teal"
  | "cyan"
  | "secondary";
type Variant = "normal" | "sharp" | "outline" | "sharp-outline";

interface ButtonInterface {
  color?: Color;
  variant?: Variant;
  className?: string;
  children?: ReactNode;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
}

export { ButtonInterface };
