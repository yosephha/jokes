import { connect } from 'react-redux';
import {login, logout} from '../actions/login_action';
import Login from './login';

const mapStateToProps = (state) => {
  return ({
    user: state.user
  });
};

const mapDispatchToProps = (dispatch) => {

  return ({
    login: () => dispatch(login())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
