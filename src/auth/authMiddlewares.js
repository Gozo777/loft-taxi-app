import { logIn } from '../actions/actions';
import { serverLogin } from '../api';
import { AUTHENTICATE } from '../actions/actions';

export const authMiddleware = (store) => (next) => async(action) =>
{
  if (action.type === AUTHENTICATE) {
    const { email, password } = action.payload;
    const success = await serverLogin(email, password)
    if (success) {
      store.dispatch(logIn())
    }
  } else {
    next(action)
  }
  }

/* import { fetchCardRequest, fetchCardSuccess, fetchCardFailure } from './actions';


export const taxiMiddleware = store => next => action => {
  if (action.type === fetchCardRequest.toString()) {
    fetch('https://loft-taxi.glitch.me/card?token=AUTH_TOKEN', { method: 'GET' })
  .then(response => response.json())
  .then(card => {
    store.dispatch(fetchCardSuccess(card));
  })
  .catch(error => {
    store.dispatch(fetchCardFailure(error));
  });
}
return next(action);
}; */