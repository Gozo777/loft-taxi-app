import { combineReducers } from "redux";
import { fork } from "redux-saga/effects";
import auth, { sagas as authSagas } from "./Auth";
import profile from "./Profile";
import address, { sagas as addressSagas } from "./Address";
import order, { sagas as orderSagas } from "./Order";

export default combineReducers({ auth, profile, address, order });

export function* rootSaga() {
  yield fork(authSagas);
  yield fork(addressSagas);
  yield fork(orderSagas);
}
