import { ChangeEvent, useRef, useState } from "react";
import "./styles.css";
import FormHints from "../form-hints";
import Label from "../label";
import FormGroup from "../form-group";
import { FormInputInterface } from "./types";

const FormInput = (props: FormInputInterface) => {
  const {
    id,
    name,
    value,
    type,
    label,
    placeholder,
    className,
    hints,
    onChange,
    onFocus,
    required,
    onBlur,
  } = props || {};
  const [hintsArray, setHintsArray] = useState(hints);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    for (let i = 0; i < hintsArray.length; i++) {
      hintsArray[i].valid = hintsArray[i].validate(
        (e.target as HTMLInputElement).value
      );

      setHintsArray([...hintsArray]);
    }

    if (onChange) onChange(e);
  };

  const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
    setIsFocused(false);

    if (onBlur) onBlur(e);
  };

  const handleFocus = (e: ChangeEvent<HTMLInputElement>) => {
    setIsFocused(true);

    if (onFocus) onFocus(e);
  };

  const inputProps = {
    name: name,
    id: id || name,
    ...(value && { value }),
    type,
    ref: inputRef,
    className: "form-input",
    placeholder, // TODO: change to make placeholder transform into label onclick or just hide on click
    onChange: handleChange,
    onBlur: handleBlur,
    onFocus: handleFocus,
    required,
  };

  const labelProps = {
    htmlFor: id || name,
    className: "form-label",
  };

  return (
    <FormGroup className={className}>
      {label && <Label {...labelProps}>{label}</Label>}
      <input {...inputProps} />

      {hints && isFocused && <FormHints hintsArray={hintsArray} />}
    </FormGroup>
  );
};

export default FormInput;