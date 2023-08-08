import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { safeParse, set } from "valibot";
import {
  Button,
  Form,
  FormErrorMessage,
  FormInput,
} from "../../../../components";
import { emailAddressHints, passwordHints } from "./hints";
import "./styles.css";
import { registerSchema } from "./schemas";
import { axiosPublic } from "../../../../lib/axios";

const usernameInputProps = {
  name: "username",
  type: "text",
  label: "Username",
};

const emailInputProps = {
  name: "email",
  type: "email",
  label: "Email address",
  hints: emailAddressHints,
};

const passwordInputProps = {
  name: "password",
  type: "password",
  label: "Password",
  hints: passwordHints,
};

const repeatPasswordInputProps = {
  name: "repeatPassword",
  type: "password",
  label: "Repeat password",
};

const RegisterForm = () => {
  const navigate = useNavigate();
  const [isPending, setIsPending] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = async (values) => {
    setIsPending(true);
    setErrors({});

    const { password, repeatPassword } = values;

    const result = safeParse(registerSchema, values);

    if (!result.success) {
      const { issues } = result.error;

      issues.forEach((issue) => {
        const { message, path } = issue;

        setErrors((prev) => ({ ...prev, [path[0].key]: { message } }));
      });
    } else {
      if (password !== repeatPassword) {
        setErrors((prev) => ({
          ...prev,
          repeatPassword: { message: `Passwords don't match` },
        }));
      } else {
        try {
          const { repeatPassword, ...otherValues } = values;
          const result = await axiosPublic.post("/auth/register", otherValues);
          const { success } = result.response.data;

          console.log(result.response, success);
          navigate("/auth/login");
        } catch (err) {
          const { message } = err.response.data;
          setErrors((prev) => ({ ...prev, formError: { message } }));
          console.log(err);
        }
      }
    }

    setIsPending(false);
  };

  console.log(errors);

  return (
    <Form className="register-form" onSubmit={handleSubmit}>
      <h2 className="form__title">Register</h2>
      {errors.formError && (
        <FormErrorMessage>{errors.formError.message}</FormErrorMessage>
      )}

      <FormInput
        {...usernameInputProps}
        errorMessage={errors[usernameInputProps.name]}
      />

      <FormInput
        {...emailInputProps}
        errorMessage={errors[emailInputProps.name]}
      />

      <FormInput
        {...passwordInputProps}
        errorMessage={errors[passwordInputProps.name]}
      />

      <FormInput
        {...repeatPasswordInputProps}
        errorMessage={errors[repeatPasswordInputProps.name]}
      />

      <Button
        className="register-form__submit"
        color="green"
        variant="sharp"
        isPending={isPending}
      >
        Register
      </Button>

      <small className="register-form__small">
        Already have an account? <Link to="/auth/login">Login</Link>
      </small>
    </Form>
  );
};

export default RegisterForm;
