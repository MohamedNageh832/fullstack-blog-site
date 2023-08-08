import { AiFillExclamationCircle } from "react-icons/ai";
import { FormErrorMessageInterface } from "./types";
import "./styles.css";

const FormErrorMessage = (props: FormErrorMessageInterface) => {
  const { children } = props;

  return (
    <div className="form-error">
      <AiFillExclamationCircle />
      <p>{children}</p>
    </div>
  );
};

export default FormErrorMessage;
