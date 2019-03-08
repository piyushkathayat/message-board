import React, { Component } from 'react';
import MessageBoard from "./containers/MessageBoard";
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header className="app-header">
          <div>Public Message Board</div>
        </header>
        <MessageBoard />
      </div>
    );
  }
}

export default App;
