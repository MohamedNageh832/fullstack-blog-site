import { ChangeEvent, ReactNode } from "react";
import { ButtonInterface } from "../button/types";

interface FormFileInterface extends ButtonInterface {
  name: string;
  id: string;
  children: ReactNode;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  label: string;
}

export { FormFileInterface };
