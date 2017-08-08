import { combineReducers } from 'redux';
import LogInReducer from './login_reducer';

export default combineReducers({
  user: LogInReducer
});
