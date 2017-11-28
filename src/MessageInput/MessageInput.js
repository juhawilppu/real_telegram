import React from 'react';

const messageInput = (props) => {
    return (
        <div>
            <input type="text" /> <button onClick={props.send}>Send</button>
        </div>
    );
}

export default messageInput;