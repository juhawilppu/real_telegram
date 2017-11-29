import React from 'react';
import addClass from '../hoc/addClass';

const messageInput = (props) => {
    return (
        <div>
            <input type="text" /> <button onClick={props.send}>Send</button>
        </div>
    );
}

export default addClass(messageInput, 'message-input-hoc');