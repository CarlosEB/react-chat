import { bindActionCreators } from 'redux'
import { connect }  from 'react-redux';

import * as actions from '../actions/user.js';
import UserLogin from '../components/login.jsx';

// Define the parts of state that will be exposed in the component login
const mapStateToProps = (state, ownProps) => { return { data: state.user } }

// Define the actions that will be used by the component
const mapDispatchToProps = (dispatch) => { return { actions: bindActionCreators (actions, dispatch)  } }

export default connect(mapStateToProps, mapDispatchToProps)(UserLogin);
