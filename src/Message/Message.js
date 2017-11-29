import React from 'react';
import WithClass from '../hoc/WithClass';
import PropTypes from 'prop-types';

const message = (props) => {
    return (
        <WithClass classes={'message'}>
            {props.from}: {props.message} {props.order} <button onClick={props.click}>Delete</button>
        </WithClass>
    );
}

//  PropTypes do not work for functional components, but this is how they would look like...
message.PropTypes = {
    from: PropTypes.string,
    message: PropTypes.func,
    order: PropTypes.number,
    click: PropTypes.func

};

export default message;