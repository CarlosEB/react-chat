import React from 'react';

// Component used to represent the user message
export default class Message extends React.Component {

   constructor() {
     super();
   }

   render() {

      const img32 = {width: 32, height: 32};
      let {user, message, time} = this.props;
      return(
       <div className="msg">
          <a className="pull-left" href="#">
              <img className="" style={img32} alt="64x64" src={user.imageUrl} />
          </a>
          <div className="">
              <small className="pull-right time"><i className="fa fa-clock-o"></i> {time}</small>

              <h5 className="">{user.name}</h5>
              <small className="col-md-10">{message}</small>
          </div>
       </div>
      );
   }
}
