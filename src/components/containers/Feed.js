import React, { Component } from 'react';
import { Preview } from '../presentation';
import { APIManager } from '../../utils';

class Feed extends Component {

  constructor(){
    super();
    this.state = {
      users: [ ]
    };
  }

  componentDidMount(){
    console.log('CDM - FEED');
    APIManager.get('/api/profile', null)
    .then(response => {
      console.log('GET: ' + JSON.stringify(response));
      let updated = Object.assign({}, this.state.users);
      updated = response.results;
      this.setState({
        users: updated
      })
    })
    .catch(err => {
      alert(err);
    });
  }

  render(){

    const { users } = this.state;

    return(
      <div>
        <h4>FEED (list of profiles)</h4>
        <ul style={{listStyle: 'none'}}>
        { users.map((user, i) => {
          return (
            <li key={i}>
              <Preview username={user.username} email={user.email} timestamp={user.timestamp} />
            </li>
          )
        })}
        </ul>         
      </div>
    )
  }
}

export default Feed;