import "./styles.css";
import { ButtonInterface } from "./types";

const Button = (props: ButtonInterface) => {
  const {
    className,
    color,
    variant = "normal",
    isPending,
    children,
    onClick,
  } = props || {};

  const btnProps = {
    className: `btn btn--${color} btn--${variant}${
      className ? ` ${className}` : ""
    }${isPending ? " btn--is-pending" : ""}`,
    onClick,
  };

  return (
    <button {...btnProps}>
      {children}
      {isPending && <span className="btn__loader"></span>}
    </button>
  );
};

export default Button;
