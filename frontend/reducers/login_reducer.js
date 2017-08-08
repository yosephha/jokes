import { LOGIN_USER, LOGOUT_USER } from '../actions/login_action';
import merge from 'lodash/merge';

const defaultState = {
  currentUser: false
}

const LogInReducer = (state = defaultState, action) => {
  Object.freeze(state);
  const currentUser = action.currentUser;

  switch(action.type) {
    case LOGIN_USER:
      return merge({}, defaultState, {
        currentUser
      });
    case LOGOUT_USER:
      return merge({}, defaultState, {
        currentUser
      });
    default:
      return state;
  }
};

export default LogInReducer;
