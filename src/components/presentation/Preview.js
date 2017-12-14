import React, { Component } from 'react';

class Preview extends Component {
  render(){
    return(
      <div style={{border: '1px solid black', margin: '10px 0', paddingLeft: '10px'}}>
        <h4>Username: {this.props.username}</h4>
        <p>Email: {this.props.email}</p>
        <p>Time joined: {this.props.timestamp}</p>
      </div>
    )
  }
}

export default Preview;