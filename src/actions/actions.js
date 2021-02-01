import { createAction } from "redux-actions";

export const logIn = createAction("AUTH/LOGIN");
export const logOut = createAction("AUTH/LOGOUT");
export const authenticate = createAction(
  "auth/AUTHENTICATE",
  (email, password) => ({
    email,
    password,
  })
);
export const failure = createAction('FAILURE');