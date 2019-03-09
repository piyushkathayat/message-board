import React, { Component } from 'react';
import MessageBoard from "./containers/MessageBoard";
import './App.css';

// TODO: move to CONST
const MESSAGE_HEADER = 'Public Message Board';

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
