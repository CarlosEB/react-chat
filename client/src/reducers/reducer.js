// State used to store the chat data 
const initialState = {
    user: undefined,
    users: [],
    messages: [],
    muteUsers: []
}

// Reducer usad to control the actions dispatched by the components
export default (state = initialState, action) => {

    switch (action.type) {

        case "USER_LOGIN":
            return Object.assign({}, state, {user: action.value});

        case "USER_ENTER":
            return Object.assign({}, state, {users: action.value});

        case "USER_MUTE":
            if (state.muteUsers.filter((f) => f == action.value.facebookId).length != 0)
              return Object.assign({}, state, {muteUsers: state.muteUsers.filter((f) => f != action.value.facebookId)});

            return Object.assign({}, state, {muteUsers: [...state.muteUsers, action.value.facebookId]});

        case "USER_SEND":
            return Object.assign({}, state, {messages: [...state.messages, action.value]});

        case "NEW_MESSAGE":
            if (state.muteUsers.filter((f) => f == action.value.facebookId).length != 0) return state;
            return Object.assign({}, state, {messages: [...state.messages, action.value]});

        default:
            return state;
    }
}
