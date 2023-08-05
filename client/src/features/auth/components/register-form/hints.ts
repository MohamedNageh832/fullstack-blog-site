const emailAddressHints: Array<{}> = [
  {
    message: "Minimum 4 characters",
    validate: (value: string) => value.length >= 4,
  },
  {
    message: "max 3 words",
    validate: (value: string) => value.split(" ").length <= 3,
  },
];

const passwordHints: Array<{}> = [
  {
    message: `Minimum 8 characters`,
    validate: (value: string) => value.length >= 8,
  },
  {
    message: `Has at least one capital letter`,
    validate: (value: string) => value.match(new RegExp(/[A-Z]/g)),
  },
  {
    message: `Has at least one symbol`,
    validate: (value: string) => value.match(new RegExp(/^~/)),
  },
  {
    message: `Has at least one number`,
    validate: (value: string) => value.match(new RegExp(/[0-9]/g)),
  },
];

export { emailAddressHints, passwordHints };
