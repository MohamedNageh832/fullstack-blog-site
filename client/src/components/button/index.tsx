import "./styles.css";
import { ButtonInterface } from "./types";

const Button = (props: ButtonInterface) => {
  const {
    className,
    color,
    variant = "normal",
    children,
    onClick,
  } = props || {};

  const btnProps = {
    className: `btn btn--${color} btn--${variant}${
      className ? ` ${className}` : ""
    }`,
    onClick,
  };

  return <button {...btnProps}>{children}</button>;
};

export default Button;
