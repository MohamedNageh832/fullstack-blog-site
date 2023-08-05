import { ChangeEvent, ReactNode } from "react";
import { RadioInterface } from "../radio/types";

interface RadioGroupInterface {
  name: string;
  value: string;
  values: Array<RadioInterface>;
  children?: ReactNode;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export { RadioGroupInterface };
