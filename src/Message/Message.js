import React from 'react';

const message = (props) => {
    return (
        <div>
            {props.from}: {props.message} {props.order} <button onClick={props.click}>Delete</button>
        </div>
    );
}

export default message;