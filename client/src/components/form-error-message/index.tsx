import { AiOutlineExclamationCircle } from "react-icons/ai";
import { FormErrorMessageInterface } from "./types";
import "./styles.css";

const FormErrorMessage = (props: FormErrorMessageInterface) => {
  const { children } = props;

  return (
    <div className="form-error">
      <AiOutlineExclamationCircle className="form-error__icon" />
      <p className="form-error__message">{children}</p>
    </div>
  );
};

export default FormErrorMessage;
