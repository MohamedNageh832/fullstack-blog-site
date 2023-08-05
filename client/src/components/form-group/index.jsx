import "./styles.css";

const FormGroup = ({ className, children }) => {
  return (
    <section className={`form-group${className ? ` ${className}` : ""}`}>
      {children}
    </section>
  );
};

export default FormGroup;
