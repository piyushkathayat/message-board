import React from 'react';
import { List } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './ReplyList.css';

const ReplyList = ({replies}) => {

    const renderListItems = ({id, author, message}) => {
        return (
            <List.Item className="replyItem" key={id}>
                <span className="author">
                    {`${author} :`}
                </span>
                <span className="replyMessage">
                    {message}
                </span>
            </List.Item>)
    };

    return (
        <List className="replyList">
            {replies.map(reply => {
                return (renderListItems(reply))
            })}
        </List>)
}

ReplyList.propTypes = {
    replies: PropTypes.arrayOf (
        PropTypes.shape({
        id: PropTypes.number.isRequired,
        author: PropTypes.node.isRequired,
        message: PropTypes.string.isRequired
        })
    )};

export default ReplyList;
