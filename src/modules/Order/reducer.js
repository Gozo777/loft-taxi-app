import { combineReducers } from "redux";
import { handleActions } from "redux-actions";
import {
  orderRequest,
  orderSuccess,
  orderFailure,
  clearOrder
} from "./actions";

const cord = handleActions(
  {
    [orderRequest]: () => [],
    [orderSuccess]: (_state, action) => action.payload,
    [orderFailure]: () => [],
    [clearOrder]: () => []
  },
  []
);

const isLoading = handleActions(
  {
    [orderRequest]: () => true,
    [orderSuccess]: () => false,
    [orderFailure]: () => false
  },
  false
);

const error = handleActions(
  {
    [orderRequest]: () => "",
    [orderFailure]: (_state, action) => action.payload
  },
  ""
);

export default combineReducers({ cord, isLoading, error });
