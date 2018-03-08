// Actions used by user component

export function userLogin(value) {
    return { type: 'USER_LOGIN', value: value };
}

export function userEnter(value) {
    return { type: 'USER_ENTER', value: value };
}

export function userMute(value) {
    return { type: 'USER_MUTE', value: value };
}
