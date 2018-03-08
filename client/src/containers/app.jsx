import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import Users from './users.js'
import chatReducer from '../reducers/reducer.js';

import {startSocket, chatMiddleware} from './socket.js';

import Chat from './chat.jsx'

// Create the store with middleware socket.io
const createStoreWithMiddleware = applyMiddleware(chatMiddleware)(createStore);
const store = createStoreWithMiddleware(chatReducer);

// start the middleware socket
startSocket(store);

// Render the chat with the store
export default() => <Provider store={store}><Chat/></Provider>;
