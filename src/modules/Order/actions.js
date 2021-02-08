import { createAction } from "redux-actions";

export const orderRequest = createAction("ORDER/FEATCH_REQUEST");
export const orderSuccess = createAction("ORDER/FEATCH_SUCCESS");
export const orderFailure = createAction("ORDER/FEATCH_FAILURE");
export const clearOrder = createAction("ORDER/CLEAR_CORD")