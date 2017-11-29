import React , { Component } from 'react';
import PropTypes from 'prop-types';
import addClass from '../hoc/addClass';

class MessageInput extends Component {

    componentDidMount() {
        this.inputElement.focus();
    }

    render() {
        return (
            <div>
                <input
                    ref={ (inp) => {this.inputElement = inp} }
                    type="text" />
                <button onClick={this.props.send}>Send</button>
            </div>
        );
    }
}

//  PropTypes do not work for functional components, but this is how they would look like...
MessageInput.propTypes = {
    send: PropTypes.string
};

export default addClass(MessageInput, 'message-input-hoc');