import { useState } from "react";
import { Link } from "react-router-dom";
import { axiosPublic } from "../../../../lib/axios";
import {
  Button,
  Form,
  FormErrorMessage,
  FormInput,
} from "../../../../components";
import { useAuth } from "../../context";
import "./styles.css";

const LoginForm = () => {
  const { login } = useAuth();
  const [errors, setErrors] = useState({});

  const emailInputProps = {
    name: "email",
    type: "email",
    label: "Email address",
  };

  const passwordInputProps = {
    name: "password",
    type: "password",
    label: "Password",
  };

  const handleSubmit = async (values) => {
    setErrors({});
    const { email, password } = values;

    if (email === "") {
      setErrors((prev) => ({
        ...prev,
        email: { message: "This field can't be empty" },
      }));
    } else if (password === "") {
      setErrors((prev) => ({
        ...prev,
        password: { message: "This field can't be empty" },
      }));
    } else {
      try {
        const result = await axiosPublic.post("/auth/login", values);

        console.log(result);
      } catch (err) {
        if (err.response) {
          const { message } = err.response.data;
          setErrors((prev) => ({ ...prev, formError: { message } }));
        } else {
          console.log(err);
        }
      }
    }
  };

  console.log(errors);

  return (
    <Form className="login-form" onSubmit={handleSubmit}>
      <h2 className="form__title">Login</h2>

      {errors.formError && (
        <FormErrorMessage>{errors.formError.message}</FormErrorMessage>
      )}

      <FormInput
        {...emailInputProps}
        errorMessage={errors[emailInputProps.name]}
      />

      <FormInput
        {...passwordInputProps}
        errorMessage={errors[passwordInputProps.name]}
      />

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
