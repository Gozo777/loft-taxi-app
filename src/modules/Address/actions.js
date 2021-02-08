import { createAction } from "redux-actions";

export const addressRequest = createAction("ADDRESS/FEATCH_REQUEST");
export const addressSuccess = createAction("ADDRESS/FEATCH_SUCCESS");
export const addressFailure = createAction("ADDRESS/FEATCH_FAILURE");
