import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './stores';
import { Home } from './components/layout';

class App extends Component {
  render(){
    return(
      <Provider store={store.configureStore()}>
        <div>
          <Home />
        </div>
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));