import React , { Component } from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';

class MessageInput extends Component {
    state = {
        name: '',
        content: '',
        value: null
    }

    componentDidMount() {
        //this.messageElement.focus();
    }

    send = () => {
        this.props.send(
            {sender: this.state.name,
            content: this.state.content});
        this.setState({content: ''});
    }

    handleNameChange = (event) => {
        this.setState({name: event.target.value});
    }

    handleMessageChange = (event) => {
        this.setState({content: event.target.value});
    }

    handleChange = (event, index, value) => this.setState({value});

    render() {
        return (
            <div>
                <TextField hintText="Your name" onChange={this.handleNameChange}/>
                <TextField hintText="Message" onChange={this.handleMessageChange}/>
                <SelectField
                    floatingLabelText="Frequency"
                    value={this.state.value}
                    onChange={this.handleChange}
                    >
                    <MenuItem value={1} primaryText="Never" />
                    <MenuItem value={2} primaryText="Every Night" />
                    <MenuItem value={3} primaryText="Weeknights" />
                    <MenuItem value={4} primaryText="Weekends" />
                    <MenuItem value={5} primaryText="Weekly" />
                </SelectField>
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