import React, { Component } from 'react';
import Message from './Message/Message';
import MessageInput from './MessageInput/MessageInput';
import axios from './components/firebase';
import classes from './Messages.css';

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

        let messageIndex = -1;
        for (let i=0; i < messages.length; i++) {
          if (messages[i].id === messageId) {
            messageIndex = i;
          }
        }

        messages.splice(messageIndex, 1);
        this.setState({messages: messages});
      }).catch(error => {
        console.log(error);
      });
  }

  send = (message) => {
    axios.post('/posts.json', message)
    .then(response => {
      message.id = response.data.name;
      const messages = [...this.state.messages, message];
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
    return (
      <div className="App">
        <div>
          <p className={classes.Header}>Received messages</p>
          {this.state.messages.map((message, index) => {
              return <Message
              key={message.id}
              header={message.header}
              message={message.content}
              sender={message.sender}
              order={this.state.order}
              click={() => this.deleteMessage(message.id)}
              />
          })}
        </div>

        <MessageInput
          send={this.send}
        />

      </div>
    );
  }
}

export default App;
