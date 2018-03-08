import React from 'react';

// Component used to represent the user
export default class User extends React.Component {

    constructor() {
        super();
    }

    handleClick(user, e) {
        this.props.actions.userMute(user);
        $(e.target).toggleClass('fa-volume-up');
        $(e.target).toggleClass('fa-volume-off');
    }

    render() {
        let {online, user, imageUrl} = this.props;
        let styleOnlineMute = { display: online ? 'block' : 'none' };
        let styleOnline = { color: online ? 'darkgreen' : 'gray' };
        let statusOnline = online ? 'online' : 'offline';
        return (
            <div className="contact">
                <a className="pull-left" href="#">
                    <img className="" alt="64x64" src={imageUrl}/></a>
                <div className="">
                    <h5 className="">{user}</h5>
                    <small style={styleOnline}>{statusOnline}</small>
                    <div style={styleOnlineMute}>
                        <a href="javascript:void(0)" onClick={(e) => this.handleClick(user, e)}>
                            <i className="fa fa-volume-up"></i>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}
