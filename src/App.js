import React, { Component } from 'react';
import Message from './Message/Message';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: []
    }
  }

  render() {

    function message(e) {
      e.preventDefault();
      console.log('The link was clicked.');
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Real Telegram</h1>
        </header>
        <p className="App-intro">
          Click on the button to send a message.
        </p>

        <button onClick={message}>Morse</button>

        <div>
          <p>Received messages</p>
          <Message message="Juha" />
        </div>

      </div>
    );
  }
}

export default App;
