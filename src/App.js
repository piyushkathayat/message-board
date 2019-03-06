import React, { Component } from 'react';
import './App.css';
import MessageBoard from "./containers/MessageBoard";

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
