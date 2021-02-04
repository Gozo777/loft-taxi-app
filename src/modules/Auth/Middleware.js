import { loginAction, failureAction, signupAction, } from './actions';

export const authMiddleware = (store) => (next) => (action) => {
  if (action.type === loginAction.toString()) {
    fetch('https://loft-taxi.glitch.me/auth', {
      method: 'POST',
      headers: { 'content-Type': 'application/json' },
      body: JSON.stringify({
        email: action.payload.email,
        password: action.payload.password }) })
      .then((response) => response.json())
      .then((response) => localStorage.setItem('user', JSON.stringify({
        email: action.payload.email,
        info: response.token,
      })))
      .then(() => store.dispatch(action.payload))
      .catch((error) => failureAction(error));
  }
  return next(action);
};

export const registerMiddleware = (store) => (next) => (action) => {
  if (action.type === signupAction.toString()) {
    fetch('https://loft-taxi.glitch.me/register', {
      method: 'POST',
      headers: { 'content-Type': 'application/json' },
      body: JSON.stringify({
        email: action.payload.email,
        password: action.payload.password,
        name: action.payload.name,
        surname: action.payload.surname,
      }) })
      .then((response) => response.json())
      .then((response) => localStorage.setItem('user', JSON.stringify({
        email: action.payload.email,
        info: response.token,
      })))
      .then(() => store.dispatch(action.payload))
      .catch((error) => failureAction(error));
  }
  return next(action);
};