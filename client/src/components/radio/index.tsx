import { RadioInterface } from "./types";
import FormGroup from "../form-group";
import Label from "../label";
import "./styles.css";

const Radio = (props: RadioInterface) => {
  const { id, name, checked, children, onChange } = props || {};

  const inputProps = {
    type: "radio",
    name,
    id: `${name}-${children}`,
    value: children,
    checked,
    onChange,
  };

  return (
    <section className="form-radio">
      <input {...inputProps} />

      <Label className="form-radio__label" htmlFor={inputProps.id}>
        {children}
      </Label>
    </section>
  );
};

export default Radio;
