import React from 'react';

// Component used to send message from user
export default class Send extends React.Component {

    constructor() {
        super();
    }

    handleClick() {
        if ($('.send-message').val() === '') return;
        let time = new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
        this.props.actions.sendMessage({user: this.props.user, time: time, message: $('.send-message').val()});
        $('.send-message').val('');
    }

    render() {
        let loged = { display: this.props.user == undefined ? 'none' : 'block' }
        let handleClick = this.handleClick.bind(this);
        return (
            <div className="send-wrap input-group" style={loged}>
                <input type="text" className="form-control send-message" placeholder="Message..."></input>
                <span className="input-group-btn">
                  <button className="btn btn-success" onClick={handleClick} type="button">Send</button>
                </span>
            </div>
        );
    }
}
