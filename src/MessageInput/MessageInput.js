import React , { Component } from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class MessageInput extends Component {
    state = {
        name: '',
        content: '',
        value: null
    }

    componentDidMount() {
        this.messageElement.focus();
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

    handleContentChange = (event) => {
        this.setState({content: event.target.value});
    }

    render() {
        return (
            <div>
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
                <p>Your name: <input
                    ref={ (inp) => {this.nameElement = inp} }
                    value={this.state.name} onChange={this.handleNameChange}
                    type="text" />
                </p> 
                <p> Message: <input
                    ref={ (inp) => {this.messageElement = inp} }
                    value={this.state.content} onChange={this.handleContentChange}
                    type="text" />
                </p>
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