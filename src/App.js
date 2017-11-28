import React, { Component } from 'react';
import Message from './Message/Message';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    messages: [
      {id: 0, message: "Hello", from: "Juha"},
      {id: 1, message: "Yo dawg", from: "Janne"},
      {id: 2, message: "Hello", from: "Juha"}
    ],
    order: 0
  }

  messageHandler = () => {
    this.setState({order: this.state.order + 1});
  }

  deleteMessage = (messageIndex) => {
    const messages = [...this.state.messages];
    messages.splice(messageIndex, 1);
    this.setState({messages: messages});
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
              return <Message
              key={message.id}
              message={message.message}
              from={message.from}
              order={this.state.order}
              click={() => this.deleteMessage(index)}
              />
          })}
        </div>

      </div>
    );
  }
}

export default App;
