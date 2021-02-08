import langs from "./langs";

const validate = values => {
  const errors = {};

  if (!values.name) {
    errors.name = langs.validate.emptyError;
  }

  if (!values.card) {
    errors.card = langs.validate.emptyError;
  }

  if (!values.date) {
    errors.date = langs.validate.emptyError;
  }

  if (!values.cvv) {
    errors.cvv = langs.validate.emptyError;
  }

  return errors;
};

export default validate;
