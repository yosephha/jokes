import { connect } from 'react-redux';
import JokesIndex from './jokes_index';
import {fetchCategories, queryJokes} from '../actions/query_action.js';

const mapStateToProps = state => ({
  categories: state.categories,
  jokes: state.jokes
});

const mapDispatchToProps = dispatch => ({
  fetchCategories: () => dispatch(fetchCategories()),
  queryJokes: (query) => dispatch(queryJokes(query))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JokesIndex);
