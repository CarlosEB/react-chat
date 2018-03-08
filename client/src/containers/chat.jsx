import React from 'react';
import Users from './users.js'
import Messages from './messages.js'
import Send from './send.js'
import Login from './login.js'

// Wrapper for chat components
export default class Chat extends React.Component {

   constructor() {
     super();
   }

   render() {
     return (
       <div className="row">
           <div className="conversation-wrap col-md-3">
             <Login />
             <Users />
           </div>
           <div className="message-wrap col-md-9">
               <Messages />
               <Send />
           </div>
       </div>
      );
   }
}
