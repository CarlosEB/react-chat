import React from 'react';

import User from '../containers/user.js';

// Component used to show all registered users on chat
export default class Users extends React.Component {

   constructor() {
     super();
   }

   sortUsers(a, b) {
        var o1 = a.online;
        var o2 = b.online;

        var p1 = a.name.toLowerCase();
        var p2 = b.name.toLowerCase();

        if (o1 < o2) return 1;
        if (o1 > o2) return -1;
        if (p1 < p2) return -1;
        if (p1 > p2) return 1;
        return 0;
   }

   render() {

      const sortUsersList = this.props.data.filter( (f) => f.facebookId != this.props.user.facebookId).sort((a,b) => this.sortUsers(a,b));
      return(
         <div className="contact-list">
            {sortUsersList.map( (d,i) => <User key={i} user={d.name} online={d.online} imageUrl={d.imageUrl} /> )}
         </div>
      );
   }
}
