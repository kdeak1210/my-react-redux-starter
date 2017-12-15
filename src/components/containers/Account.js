import React, { Component } from 'react';
import { Register, Login } from '../presentation';
import { connect } from 'react-redux';
import actions from '../../actions';

class Account extends Component {

  componentDidMount(){
    if (this.props.user == null){
      this.props.checkCurrentUser() // check user on page refresh/CDM hook
      .then()
      .catch(err => console.log(err.message));
    }
  }

  register(credentials){
    console.log('Register: ' + JSON.stringify(credentials));
    this.props.register(credentials);    
  }

  login(credentials){
    console.log('Login: ' + JSON.stringify(credentials));
    this.props.login(credentials);
  }

  logout(){
    console.log('Logout!');
    this.props.logout();
  }

  render(){
    return(
      <div>
        { (this.props.user == null) 
          ? [
            <Register key='register' onRegister={this.register.bind(this)}/>,
            <Login key='login' onLogin={this.login.bind(this)}/>            
          ]
          
          : [
            <h3 key='greeting'>Hello {this.props.user.username}!</h3>,
            <button key='logout' onClick={this.logout.bind(this)}>Logout</button>
          ]
        
        }
        
      </div>
    )
  }
}

const stateToProps = (state) => {
  return {
    user: state.account.user  // can be null
  }
}

const dispatchToProps = (dispatch) => {
  return {
    checkCurrentUser: () => dispatch(actions.checkCurrentUser()),
    login: (credentials) => dispatch(actions.login(credentials)),
    logout: () => dispatch(actions.logout()),
    register: (credentials) => dispatch(actions.register(credentials))
  }
}

export default connect(stateToProps, dispatchToProps)(Account);