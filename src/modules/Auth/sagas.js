import { takeLatest, put, call, fork } from "redux-saga/effects";
import { auth } from "../../components/api";
import { authRequest, authSuccess, authFailure } from "./actions.js";

function* authWatcher() {
  yield takeLatest(authRequest, authFlow);
}

export function* authFlow(action) {
  const { login, password } = action.payload;
  const {success, error} = yield call(auth, login, password);
  
  if (success) {
    yield put(authSuccess());
  } else {
    yield put(authFailure(error));
  }
}

export default function*() {
  yield fork(authWatcher);
}
