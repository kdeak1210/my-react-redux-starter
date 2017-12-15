import React, { Component } from 'react';
import { Register, Login } from '../presentation';

class Account extends Component {

  register(credentials){
    console.log('Register: ' + JSON.stringify(credentials));    
  }

  login(credentials){
    console.log('Login: ' + JSON.stringify(credentials));
  }

  render(){

    return(
      <div>
        <h4>ACCOUNT (sign-up / login)</h4>
        <Register onRegister={this.register.bind(this)}/>
        <Login onLogin={this.login.bind(this)}/>
      </div>
    )
  }
}

export default Account;