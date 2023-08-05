import { ChangeEvent, useRef } from "react";

import { FormFileInterface } from "./types";
import FormGroup from "../form-group";
import Label from "../label";
import "./styles.css";
import Button from "../button";

const FormFile = (props: FormFileInterface) => {
  const { name, id, children, onChange, label, variant, color } = props || {};
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(e);
  };

  const inputProps = {
    name,
    id: id || name,
    type: "file",
    ref: inputRef,
    onChange: handleChange,
  };

  const handleClick = () => inputRef.current.click();

  return (
    <FormGroup className="form-file">
      {label && <Label>{label}</Label>}

      <input className="form-file__input" {...inputProps} />

      <Button
        className="form-file__btn"
        color={color}
        variant={variant}
        onClick={handleClick}
      >
        {children}
      </Button>
    </FormGroup>
  );
};

export default FormFile;
