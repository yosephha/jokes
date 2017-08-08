import { connect } from 'react-redux';
import JokesIndex from './jokes_index';

const mapStateToProps = state => ({
  // jokes: state.jokes
});

export default connect(
  null,
  null
)(JokesIndex);
