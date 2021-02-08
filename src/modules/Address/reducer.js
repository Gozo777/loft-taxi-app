import { combineReducers } from "redux";
import { handleActions } from "redux-actions";
import { addressRequest, addressSuccess, addressFailure } from "./actions";

const data = handleActions(
  {
    [addressRequest]: () => {},
    [addressSuccess]: (_state, action) => action.payload,
    [addressFailure]: () => {}
  },
  []
);

const isLoading = handleActions(
  {
    [addressRequest]: () => true,
    [addressSuccess]: () => false,
    [addressFailure]: () => false
  },
  false
);

const error = handleActions(
  {
    [addressRequest]: () => "",
    [addressFailure]: (_state, action) => action.payload
  },
  ""
);

export default combineReducers({ data, isLoading, error });
