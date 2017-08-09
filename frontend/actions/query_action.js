import * as APIUtil from '../util/query_util';

export const RECIVE_CATEGORIES = 'FETCH_CATEGORIES';
export const QUERY_API = 'QUERY_API';

export const reciveCategories = (categories) => ({
  type: RECIVE_CATEGORIES,
  categories
});

export const fetchCategories = () => dispatch => (
  APIUtil.fetchCategories()
  .then((categories) => dispatch(reciveCategories(categories)))
)
