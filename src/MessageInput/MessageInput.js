import React , { Component } from 'react';
import PropTypes from 'prop-types';

class MessageInput extends Component {

    componentDidMount() {
        this.messageElement.focus();
    }

    send = () => {
        this.props.send(
            {sender: this.nameElement.value,
            content: this.messageElement.value});
        this.messageElement.value = "";
    }

    render() {
        return (
            <div>
                <p>Your name: <input
                    ref={ (inp) => {this.nameElement = inp} }
                    type="text" />
                </p> 
                <p> Message: <input
                    ref={ (inp) => {this.messageElement = inp} }
                    type="text" />
                </p>
                <button onClick={this.send}>Send</button>
            </div>
        );
    }
}

//  PropTypes do not work for functional components, but this is how they would look like...
MessageInput.propTypes = {
    send: PropTypes.func
};

export default MessageInput;