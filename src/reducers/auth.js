import { handleActions } from 'redux-actions';
import { logIn, logOut } from '../actions/actions'

const initialState = {
  isLoggedIn: false
}

const authReducer = handleActions(
  {
    [logIn]: () => ({ isLoggedIn: true }),
    [logOut]: () => ({ isLoggedIn: false })
  },
  initialState
)

export default authReducer;
