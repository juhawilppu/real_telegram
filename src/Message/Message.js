import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import ActionAndroid from 'material-ui/svg-icons/action/android';

const message = (props) => {
    return (
        <div>
            {props.from}: {props.message} {props.order} <FlatButton icon={<ActionAndroid />} onClick={props.click}>Delete</FlatButton>
        </div>
    );
}

export default message;