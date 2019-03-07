import React from 'react';
import { List, Label } from 'semantic-ui-react'
import './MessageList.css';
import Message from './Message';
import { getUniqueId } from '../utils/common';

/**
 This component renders list of <Messages /> 
 **/

const MessageList = (props) => {
    const { messages, deleteMessage, replyMessage } = props;
    // console.log("messages ==>", messages);
    const handleDeleteMessage = (id) => deleteMessage(id);

    const handleReplyMessage = (reply) => {
        const replyMsg = { ...reply, id: getUniqueId(messages), author: 'loggedInUser' }
        replyMessage(replyMsg)
    };

    return (
        <div className="messageList">
            {messages.length > 0 ?
                <List>
                    {messages.map((messageDetail, index) => {
                        return (
                            <Message
                                key={index}
                                detail={messageDetail}
                                deleteMessage={(id) => handleDeleteMessage(id)}
                                replyMessage={(message) => handleReplyMessage(message)}
                            />)
                    })}
                </List> :
                <Label color='red' ribbon>No post available.</Label>
            }
        </div>
    );
};

export default MessageList;