import React from 'react';
import { List } from 'semantic-ui-react'
import './ReplyList.css';

const ReplyList = (props) => {
    const { replies } = props;

    return (
        <List className="replyList">
            {replies.map(reply => {
                return (
                    <List.Item className="replyItem" key={reply.id}>
                        <span className="author">
                            {`${reply.author} :`}
                        </span>{reply.message}
                    </List.Item>)
            })}
        </List>)
}

export default ReplyList;