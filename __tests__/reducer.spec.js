import * as actions_user from '../client/src/actions/user.js'
import * as actions_send from '../client/src/actions/send.js'
import * as actions_message from '../client/src/actions/message.js'

import reducer from '../client/src/reducers/reducer.js'

describe('Reducer', () => {

  const initialState = {
      user: undefined,
      users: [],
      messages: [],
      muteUsers: []
  }

  const staticUser = {
      "email": "kadu_br@hotmail.com",
      "facebookId": "123456",
      "name": "Carlos Ed",
      "imageUrl": "https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/15781355_1187404814691146_7355382923144853809_n.jpg?oh=e3bcaf654d0ab734213f3997943fd7f7&oe=58E5EA72",
      "online": true,
      "clientId": ""
    }

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should user login', () => {
    const action = { type: 'USER_LOGIN', value: staticUser};
    const data = reducer(undefined, action);
    expect(data.user).toEqual(staticUser);
  });

  it('should user enter', () => {
    const action = { type: 'USER_ENTER', value: [staticUser]};
    const data = reducer(undefined, action);
    expect(data.users.length).toEqual(1);
  });

  it('should user mute / unmute', () => {
    const action = { type: 'USER_MUTE', value: {facebookId: 123}};
    const data1 = reducer(undefined, action);
    expect(data1.muteUsers.length).toEqual(1);
    const data2 = reducer(data1, action);
    expect(data2.muteUsers.length).toEqual(0);
  });

  it('should send message', () => {
    const action = { type: 'USER_SEND', value: "Message..."};
    const data = reducer(undefined, action);
    expect(data.messages.length).toEqual(1);
  });

  it('should receive new message', () => {
    const action = { type: 'NEW_MESSAGE', value: "Message..."};
    const data = reducer(undefined, action);
    expect(data.messages.length).toEqual(1);
  });

    it('should not receive new message from muted user', () => {

      const data1 = reducer(undefined, { type: 'USER_MUTE', value: {facebookId: 123}});
      const action = { type: 'NEW_MESSAGE', value: {facebookId: 123, msg:"Message..."}};
      const data2 = reducer(data1, action);

      expect(data2.messages.length).toEqual(0);
    });
});
