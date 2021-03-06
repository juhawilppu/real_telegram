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

    handleNameChange = (event) => this.setState({name: event.target.value});

    handleHeaderChange = (event) => this.setState({header: event.target.value});

    handleMessageChange = (event) => this.setState({content: event.target.value});

    render() {
        return (
            <div>
                <p className={classes.Header}>Input new message</p>
                <div>
                    <TextField hintText="" floatingLabelText="Name" onChange={this.handleNameChange}/><br />
                    <TextField hintText="" floatingLabelText="Subject" onChange={this.handleHeaderChange}/><br />
                    <TextField hintText="" floatingLabelText="Message" onChange={this.handleMessageChange} multiLine={true} rows={2}/>
                </div>
                <RaisedButton onClick={this.send}>Send</RaisedButton>
            </div>
        );
    }
}

MessageInput.propTypes = {
    send: PropTypes.func
};

export default MessageInput;