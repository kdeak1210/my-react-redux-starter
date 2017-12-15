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

  render(){
    console.log(JSON.stringify(this.props.user))
    return(
      <div>
        { (this.props.user == null) 
          ? [
            <Register key={'register'} onRegister={this.register.bind(this)}/>,
            <Login key={'login'} onLogin={this.login.bind(this)}/>            
          ]
          
          : <h3>Hello {this.props.user.username}</h3>
        
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
    register: (credentials) => dispatch(actions.register(credentials)),
    login: (credentials) => dispatch(actions.login(credentials)),
    checkCurrentUser: () => dispatch(actions.checkCurrentUser())
  }
}

export default connect(stateToProps, dispatchToProps)(Account);