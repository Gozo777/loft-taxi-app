import langs from "./langs";

const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const validate = values => {
  const errors = {};

  if (!values.login) {
    errors.login = langs.validate.login.empty;
  } else if (!reg.test(String(values.login).toLowerCase())) {
    errors.login = langs.validate.login.validEmail;
  }
  if (!values.password) {
    errors.password = langs.validate.password.empty;
  }

  return errors;
};

export default validate;
