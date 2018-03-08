import { bindActionCreators } from 'redux'
import { connect }  from 'react-redux';

import * as actions from '../actions/message.js';
import Messages from '../components/messages.jsx';

// Define the parts of state that will be exposed in the component messages
const mapStateToProps = (state, ownProps) => { return { data: state.messages } }

// Define the actions that will be used by the component
const mapDispatchToProps = (dispatch) => { return { actions: bindActionCreators (actions, dispatch) } }

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
