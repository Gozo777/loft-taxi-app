import { takeLatest, put, call, fork } from "redux-saga/effects";
import { getAddressList } from "../../components/api";
import { addressRequest, addressSuccess, addressFailure } from "./actions.js";

function* addressWatcher() {
  yield takeLatest(addressRequest, addressFlow);
}

export function* addressFlow() {
  const payload = yield call(getAddressList);

  if (payload.addresses) {
    yield put(addressSuccess(payload.addresses));
  } else {
    yield put(addressFailure(payload.error));
  }
}

export default function*() {
  yield fork(addressWatcher);
}
