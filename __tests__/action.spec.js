import * as actions_user from '../client/src/actions/user.js'
import * as actions_send from '../client/src/actions/send.js'
import * as actions_message from '../client/src/actions/message.js'

describe('User Actions', () => {
  it('should create an action to user login', () => {
    const expectedAction = { type: 'USER_LOGIN', value: [] };
    expect(actions_user.userLogin([])).toEqual(expectedAction);
  });

  it('should create an action to user enter chat', () => {
    const expectedAction = { type: 'USER_ENTER', value: [] };
    expect(actions_user.userEnter([])).toEqual(expectedAction);
  });

  it('should create an action to user mute', () => {
    const expectedAction = { type: 'USER_MUTE', value: [] };
    expect(actions_user.userMute([])).toEqual(expectedAction);
  });

});

describe('Send Actions', () => {
  it('should create an action to send a message', () => {
    const expectedAction = { type: 'SEND_MESSAGE', value: 'send message' };
    expect(actions_send.sendMessage('send message')).toEqual(expectedAction);
  });
});

describe('Message Actions', () => {
  it('should create an action to new message', () => {
    const expectedAction = { type: 'NEW_MESSAGE', value: 'message new' };
    expect(actions_message.newMessage('message new')).toEqual(expectedAction);
  });
});
