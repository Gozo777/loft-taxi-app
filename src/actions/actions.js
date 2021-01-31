export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const AUTHENTICATE = 'AUTHENTICATE';

export const logIn = () => ({ type: LOG_IN });
export const logOut = () => ({ type: LOG_OUT });
export const authenticate = (email, password) => ({
  type: AUTHENTICATE,
  payload: { email, password }
});


/*
import { createAction } from 'redux-actions';

export const fetchCardRequest = createAction("FETCH_CARD_REQUEST");
export const fetchCardSuccess = createAction("FETCH_CARD_SUCCESS");
export const fetchCardFailure = createAction("FETCH_CARD_FAILURE");
*/