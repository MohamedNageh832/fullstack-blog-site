const ValixValidations = {
  string: {
    validate: (value) => typeof value === "string",
    error: "Value must be a string",
  },

  number: {
    validate: (value) => typeof value === "number",
    error: "Value must be a number",
  },

  boolean: {
    validate: (value) => typeof value === "boolean",
    error: "Value must be a boolean",
  },

  nan: {
    validate: (value) => isNaN(value),
    error: "Value must be a nan",
  },

  date: {
    validate: (value) => {
      console.log(new Date(value));
      return new Date(value) !== "Invalid Date";
    },
    error: "Value must be a nan",
  },
};

class ValixUtils {
  constructor(type) {
    this.type = type;
  }

  safeParse(value) {
    const valid = ValixValidations[this.type].validate(value);

    if (!valid) {
      return { success: false, error: ValixValidations[this.type].error };
    }

    return { success: true };
  }
}

export const valix = {
  string() {
    return new ValixUtils("string");
  },

  number() {
    return new ValixUtils("number");
  },

  nan() {
    return new ValixUtils("nan");
  },

  boolean() {
    return new ValixUtils("boolean");
  },

  date() {
    return new ValixUtils("date");
  },
};
