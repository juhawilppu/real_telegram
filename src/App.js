import React, { Component } from 'react';
import Message from './Message/Message';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    messages: [
      {message: "Hello", from: "Juha"},
      {message: "Yo dawg", from: "Janne"},
      {message: "Hello", from: "Juha"}
    ],
    order: 0
  }

  messageHandler = () => {
    this.setState({order: this.state.order + 1});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Real Telegram</h1>
        </header>
        <p className="App-intro">
          Click on the button to send a message.
        </p>

        <button onClick={this.messageHandler}>Morse</button>

        <div>
          <p>Received messages</p>
          {this.state.messages.map((message, index) => {
              return <Message message={message.message} from={message.from} order={this.state.order} />
          })}
        </div>

      </div>
    );
  }
}

export default App;
