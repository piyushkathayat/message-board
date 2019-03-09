import React, { Component } from 'react';
import MessageBoard from "./containers/MessageBoard";
import { MESSAGE_HEADER } from './constants/common';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header className="app-header">
          <div>{MESSAGE_HEADER}</div>
        </header>
        <MessageBoard />
      </div>
    );
  }
}

export default App;
