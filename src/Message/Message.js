import React from 'react';
import WithClass from '../hoc/WithClass';

const message = (props) => {
    return (
        <WithClass classes={'message'}>
            {props.from}: {props.message} {props.order} <button onClick={props.click}>Delete</button>
        </WithClass>
    );
}

export default message;