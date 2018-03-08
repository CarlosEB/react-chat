import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FacebookLogin from './facebook.jsx';

// Component used to handle the user login (integrated with facebook)
export default class User extends React.Component {

   constructor() {
     super();
     this.responseFacebook = this.responseFacebook.bind(this);
   }

   responseFacebook(response) {
     if (response.status == "unknown") return;

      $('.loged-user span').hide();
      $('.loged-user a').show();

      var user = {
         email: response.email,
         facebookId: response.id,
         name: response.name,
         imageUrl: response.picture.data.url,
         online: true,
         clientId: null
      }

     this.props.actions.userLogin(user);
   };

   render() {
     let loged = this.props.data == undefined ? "" : "Welcome, " + this.props.data.name;
     let logout = () => {
        window.FB.logout();
        window.location.reload();
     }
     return (
         <div className="loged-user">
             {loged}
             <FacebookLogin
               appId="371359853214253"
               autoLoad
               fields="name,email,picture"
               buttonStyle={ { fontSize: 25 } }
               callback={this.responseFacebook}
               textButton=" Login"
               icon="fa-facebook"
             />
          <a href="javascript:void(0)" className="logout-style" onClick={logout}>Logout</a>
         </div>
      );
   }
}
