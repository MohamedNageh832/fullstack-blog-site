import { ChangeEvent, HTMLInputTypeAttribute, ReactNode } from "react";

interface HintInterface {
  valid: boolean;
  validate: (value: Value) => boolean;
  children: ReactNode;
}

type Value = string | number;
type Hints = Array<HintInterface>;

interface FormInputInterface {
  id?: string;
  name?: string;
  value?: Value;
  className: string;
  type?: HTMLInputTypeAttribute;
  label?: string;
  placeholder?: string;
  hints?: Hints;
  errorMessage: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  onBlur?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export { FormInputInterface };
