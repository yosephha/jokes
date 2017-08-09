import * as APIUtil from '../util/query_util';

export const RECIVE_CATEGORIES = 'FETCH_CATEGORIES';
export const QUERY_API = 'QUERY_API';

export const reciveCategories = (categories) => ({
  type: RECIVE_CATEGORIES,
  categories
});

export const reciveJokes = (jokes) => ({
  type: QUERY_API,
  jokes
});

export const fetchCategories = () => dispatch => (
  APIUtil.fetchCategories()
  .then((categories) => dispatch(reciveCategories(categories)))
);

export const queryJokes = (query) => dispatch => (
  APIUtil.queryAPI(query)
  .then((jokes) => dispatch(reciveJokes(jokes)))
);
