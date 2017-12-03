import React from 'react'
import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';

const message = (props) => {
    const styles = {
        button: {
            margin: 12,
        }
    };

    return (
        <ListItem
            disabled={true}
            leftAvatar={<Avatar>{props.from ? props.from.charAt(0) : '?'}</Avatar>}
            tooltip="Yo dog"
            >
            {props.message}
            <RaisedButton
            onClick={props.click}
            label="Delete"
            secondary={true}
            style={styles.button}
            icon={<FontIcon className="muidocs-icon-custom-github" />}
            />
        </ListItem>
    );
}

export default message;