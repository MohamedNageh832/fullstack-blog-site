import "./styles.css";

const Label = ({ className, htmlFor, children }) => {
  const labelProps = {
    className: `form__label${className ? ` ${className}` : ""}`,
    htmlFor,
  };

  return <label {...labelProps}>{children}</label>;
};

export default Label;
