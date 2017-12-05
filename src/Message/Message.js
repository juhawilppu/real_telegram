import React from 'react'
import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

const message = (props) => {
    return (
        <Card>
            <CardHeader
            title={props.header}
            subtitle={props.sender}
            actAsExpander={true}
            showExpandableButton={true}
            />
            <CardText>{props.message}</CardText>
            <CardActions>
            <FlatButton
            onClick={props.click}
            label="Delete"
            />
            </CardActions>
        </Card>
    );
}

export default message;