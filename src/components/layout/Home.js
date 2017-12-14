import React, { Component } from 'react';
import { Feed } from '../containers';

class Home extends Component {
  render(){
    return(
      <div>
        <h1>HOME LAYOUT</h1>

        <div className="row">
          <div className="col-md-6">
            <Feed />
          </div>
          <div className="col-md-6">
            SIGNUP/LOGIN
          </div>
        </div>
      </div>
    )
  }
}

export default Home;