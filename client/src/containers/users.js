import { bindActionCreators } from 'redux'
import { connect }  from 'react-redux';

import * as actions from '../actions/user.js';
import Users from '../components/users.jsx';

// Define the parts of state that will be exposed in the component users
const mapStateToProps = (state, ownProps) => { return { data: state.users, user: state.user } }

// Define the actions that will be used by the component
const mapDispatchToProps = (dispatch) => { return { actions: bindActionCreators (actions, dispatch) } }

export default connect(mapStateToProps, mapDispatchToProps)(Users);
