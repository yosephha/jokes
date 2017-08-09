import merge from 'lodash/merge';
import { QUERY_API } from '../actions/query_action';

const defaultState = {}

const QueryReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch(action.type) {
    case QUERY_API:
      return merge({}, defaultState, action.jokes);
    default:
      return state;
  }
}

export default QueryReducer;
