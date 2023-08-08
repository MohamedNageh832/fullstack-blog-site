import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { Button, Form, FormInput } from "../../../../components";
import { emailAddressHints, passwordHints } from "./hints";
import "./styles.css";

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

const RegisterForm = () => {
  const [error, setError] = useState(null);

  const handleSubmit = async (values) => {
    const valuesArray = Object.values(values);

    for (let i = 0; i < valuesArray; i++) {
      const value = valuesArray[i];

      if (value.trim() === "") return setError("Please fill all fields");
    }

    try {
      const result = await axios.post();

      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form className="register-form" onSubmit={handleSubmit}>
      {error && <p>{error}</p>}
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
