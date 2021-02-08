import { takeLatest, put, call, fork } from "redux-saga/effects";
import { getRoute } from "../../components/api";
import { orderRequest, orderSuccess, orderFailure } from "./actions.js";

function* orderWatcher() {
  yield takeLatest(orderRequest, orderFlow);
}

export function* orderFlow(action) {
  const { from, to } = action.payload;
  const payload = yield call(getRoute, from, to);

  if (payload) {
    yield put(orderSuccess(payload));
  } else {
    yield put(orderFailure());
  }
}

export default function*() {
  yield fork(orderWatcher);
}
