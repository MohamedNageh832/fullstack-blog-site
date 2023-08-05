const Form = ({ className, onSubmit, children }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    const values = {};

    for (const [name, value] of data) {
      values[name] = value;
    }

    if (onSubmit) onSubmit(values);
  };

  const formProps = {
    className,
    onSubmit: handleSubmit,
  };

  return <form {...formProps}>{children}</form>;
};

export default Form;
