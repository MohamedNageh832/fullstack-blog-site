import { Link } from "react-router-dom";
import { Button, Form, FormInput } from "../../../../components";
import "./styles.css";

const LoginForm = () => {
  const emailInputProps = {
    name: "emailAddress",
    type: "email",
    label: "Email address",
  };

  const passwordInputProps = {
    name: "password",
    type: "password",
    label: "Password",
  };

  return (
    <Form className="login-form">
      <h2 className="form__title">Login</h2>

      <FormInput {...emailInputProps} />

      <FormInput {...passwordInputProps} />

      <Button color="green" variant="sharp">
        Submit
      </Button>

      <small className="login-form__small">
        New here? <Link to="/auth/register">Create account</Link>
      </small>
    </Form>
  );
};

export default LoginForm;
