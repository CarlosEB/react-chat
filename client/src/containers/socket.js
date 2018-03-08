import io from 'socket.io-client';
import * as message_actions from '../actions/message.js';
import * as user_actions from '../actions/user.js';

var socket = null;

// Middleware responsible for the socket communication in chat.
export function chatMiddleware(store) {
    return next => action => {

        const result = next(action);
        if (socket) {
            switch (action.type) {

                case "SEND_MESSAGE":
                    socket.emit('messages', action.value);
                    break;

                case "USER_LOGIN":
                    socket.emit('users', action.value);
                    break;
            }
        }
        return result;
    };
}

// Method used to start the socket and prepare the listeners
export function startSocket(store) {

    socket = io.connect('http://localhost:3000');
    socket.on('broad', data => { store.dispatch(message_actions.newMessage(data)); });
    socket.on('join', data => { store.dispatch(user_actions.userEnter(data)); });
}
