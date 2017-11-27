import React from 'react';

const message = (props) => {
    return (
        <div>
            {props.message} {props.order}
        </div>
    );
}

export default message;