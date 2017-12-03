import React, { Component } from 'react';
import Message from './Message/Message';
import MessageInput from './MessageInput/MessageInput';
import axios from './components/firebase';

class App extends Component {
  state = {
    messages: [],
    order: 0
  }

  deleteMessage = (messageId) => {
    axios.delete('/posts/' + messageId + ".json")
      .then(response => {

        // create copy because otherwise we would modify current state
        const messages = [...this.state.messages];
        messages.splice(messageId, 1);
        this.setState({messages: messages});
      }).catch(error => {
        console.log(error);
      });
  }

  send = (message) => {
    axios.post('/posts.json', message)
    .then(response => {
      console.log(response);
      message.id = response.data.name;
      const messages = [...this.state.messages, message];
      console.log('messages', messages);
      this.setState({messages: messages});
    })
    .catch(error => console.log(error));
  }

  componentDidMount () {
    axios.get( '/posts.json' )
        .then( response => {
            const messages = Object.keys(response.data).map((key) => {
              return {
                ...response.data[key],
                'id': key
              }});
            this.setState({messages: messages});
        } )
        .catch(error => {
            console.log(error);
            this.setState({error: true});
        });
  }

  render() {

    const classes = [];

    if (this.state.messages.length === 0) {
      classes.push('red');
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Real Telegram</h1>
        </header>
        <p>Uri: {this.props.match.params.messageId}</p>

        <div>
          <p className={classes.join(' ')}>Received messages</p>
          {this.state.messages.map((message, index) => {
              return <Message
              key={message.id}
              message={message.content}
              from={message.sender}
              order={this.state.order}
              click={() => this.deleteMessage(message.id)}
              />
          })}
        </div>

        <div>
          <p>Input new message</p>
          <MessageInput
            send={this.send}
          />
        </div>

      </div>
    );
  }
}

export default App;
