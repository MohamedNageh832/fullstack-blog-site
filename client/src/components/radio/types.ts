import { ChangeEvent, ReactNode } from "react";

interface RadioInterface {
  id?: string;
  name?: string;
  value?: string;
  label?: string;
  checked?: boolean;
  children?: ReactNode;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export { RadioInterface };
