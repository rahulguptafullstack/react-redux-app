import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';

import Post from './components/Post/Post';
import Form from './components/Post/Form';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
        </header>
        <hr/>
        <Form/>
        <hr/>
        <Post/>
      </div>
    </Provider>
  );
}

export default App;
