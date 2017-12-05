import React , { Component } from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import classes from './MessageInput.css';

class MessageInput extends Component {
    state = {
        name: '',
        header: '',
        content: '',
        value: null
    }

    componentDidMount() {
        //this.messageElement.focus();
    }

    send = () => {
        this.props.send(
            {sender: this.state.name,
            header: this.state.header,
            content: this.state.content});
        this.setState({content: ''});
    }

    handleNameChange = (event) => {
        this.setState({name: event.target.value});
    }

    handleHeaderChange = (event) => {
        this.setState({header: event.target.value});
    }

    handleMessageChange = (event) => {
        this.setState({content: event.target.value});
    }

    handleChange = (event, index, value) => this.setState({value});

    render() {
        return (
            <div>
                <p className={classes.Header}>Input new message</p>
                <div>
                    <TextField hintText="Your name" onChange={this.handleNameChange}/>
                    <TextField hintText="Header" onChange={this.handleHeaderChange}/>
                    <TextField hintText="Message" onChange={this.handleMessageChange}/>
                </div>
                <RaisedButton onClick={this.send}>Send</RaisedButton>
            </div>
        );
    }
}

//  PropTypes do not work for functional components, but this is how they would look like...
MessageInput.propTypes = {
    send: PropTypes.func
};

export default MessageInput;