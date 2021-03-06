import { handleActions } from "redux-actions";
import { profileSubmit } from "./actions";

export default handleActions(
  {
    [profileSubmit]: (_state, action) => action.payload
  },
  { name: "", date: "", card: "", cvv: "" }
);
