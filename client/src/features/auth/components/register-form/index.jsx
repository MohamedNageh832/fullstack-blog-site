import { Link } from "react-router-dom";
import { Button, Form, FormInput } from "../../../../components";
import { emailAddressHints, passwordHints } from "./hints";
import "./styles.css";

const RegisterForm = () => {
  const usernameInputProps = {
    name: "username",
    type: "text",
    placeholder: "Username",
    className: "form__input",
  };

  const emailInputProps = {
    name: "emailAddress",
    type: "email",
    placeholder: "Email address",
    className: "form__input",
    hints: emailAddressHints,
  };

  const passwordInputProps = {
    name: "password",
    type: "password",
    placeholder: "Password",
    className: "form__input",
    hints: passwordHints,
  };

  return (
    <Form className="register-form">
      <h2 className="form__title">Register</h2>

      <FormInput {...usernameInputProps} />

      <FormInput {...emailInputProps} />

      <FormInput {...passwordInputProps} />

      <Button className="register-form__submit" color="green" variant="sharp">
        Register
      </Button>

      <small className="register-form__small">
        Already have an account? <Link to="/auth/login">Login</Link>
      </small>
    </Form>
  );
};

export default RegisterForm;
