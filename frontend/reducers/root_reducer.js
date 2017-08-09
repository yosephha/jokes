import { combineReducers } from 'redux';
import LogInReducer from './login_reducer';
import CategoriesReducer from './categories_reducer';
import QueryReducer from './query_reducer';

export default combineReducers({
  user: LogInReducer,
  categories: CategoriesReducer,
  jokes: QueryReducer
});
