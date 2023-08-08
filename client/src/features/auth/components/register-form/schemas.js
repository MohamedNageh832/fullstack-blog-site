import { email, minLength, object, string } from "valibot";

export const registerSchema = object({
  username: string([
    minLength(1, `This field can't be empty`),
    minLength(5, "Minimum 5 characters"),
  ]),
  email: string([
    minLength(1, "This field can't be empty"),
    email("This is not a valid email"),
  ]),
  password: string([
    minLength(1, "This field can't be empty"),
    minLength(8, "Minimum 8 characters"),
  ]),
  repeatPassword: string([
    minLength(1, "This field can't be empty"),
    minLength(8, "Minimum 8 characters"),
  ]),
});
