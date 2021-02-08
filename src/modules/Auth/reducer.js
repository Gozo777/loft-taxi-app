import { combineReducers } from "redux";
import { handleActions } from "redux-actions";
import { authRequest, authSuccess, authFailure, logOut } from "./actions";

const isAuthorized = handleActions(
  {
    [authSuccess]: () => true,
    [logOut]: () => false
  },
  false
);

const isLoading = handleActions(
  {
    [authRequest]: () => true,
    [authSuccess]: () => false,
    [authFailure]: () => false
  },
  false
);

const authError = handleActions(
  {
    [authRequest]: () => "",
    [authFailure]: (_state, action) => action.payload,
    [authSuccess]: () => ""
  },
  ""
);

export default combineReducers({ isAuthorized, isLoading, authError });
