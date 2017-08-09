import { connect } from 'react-redux';
import JokesIndex from './jokes_index';

const mapStateToProps = state => ({
  // jokes: state.jokes
});

const mapDispatchToProps = state => ({
  fetchCategories: '',
  query: ''
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JokesIndex);
