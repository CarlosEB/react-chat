import { bindActionCreators } from 'redux'
import { connect }  from 'react-redux';

import * as actions from '../actions/send.js';
import Send from '../components/send.jsx';

// Define the parts of state that will be exposed in the component send
const mapStateToProps = (state, ownProps) => { return { data: state.messages, user: state.user } }

// Define the actions that will be used by the component
const mapDispatchToProps = (dispatch) => { return { actions: bindActionCreators (actions, dispatch) } }

export default connect(mapStateToProps, mapDispatchToProps)(Send);
