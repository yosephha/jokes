import { RECIVE_CATEGORIES } from '../actions/query_action';

const defaultState = [];

const categoriesReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECIVE_CATEGORIES:
      return defaultState.concat(action.categories);
    default:
      return state;
  }
}

export default categoriesReducer;
