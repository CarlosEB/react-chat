import React from 'react';
import Message from './message.jsx';

// Component used to show all messages from the users
export default class Messages extends React.Component {

   constructor() {
     super();
   }

   componentDidUpdate(prevProps, prevState) {
      $('.msg-wrap').scrollTop(999999999);
   }

   render() {
     return(
       <div className="msg-wrap">
          {this.props.data.map( (d,i) => <Message key={i} message={d.message} user={d.user} time={d.time} /> ) }
       </div>
     );
   }
}
