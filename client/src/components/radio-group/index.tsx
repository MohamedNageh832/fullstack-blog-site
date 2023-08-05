import { ChangeEvent, useState } from "react";
import FormGroup from "../form-group";
import Radio from "../radio";
import { RadioGroupInterface } from "./types";

const RadioGroup = (props: RadioGroupInterface) => {
  const { name, value, values, onChange } = props || {};
  const [activeValue, setActiveValue] = useState<string>(value);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setActiveValue(value);

    if (onChange) onChange(e);
  };

  return (
    <FormGroup>
      {values.map((val, i) => (
        <Radio
          name={name}
          checked={activeValue === val}
          key={`form-radio-${val}${i}`}
          onChange={handleChange}
        >
          {val}
        </Radio>
      ))}
    </FormGroup>
  );
};

export default RadioGroup;
