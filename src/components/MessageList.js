import React from 'react';
import { List, Label } from 'semantic-ui-react'
import Message from './Message';
import { getUniqueId } from '../utils/common';
import { NO_POST_AVAILABLE } from '../constants/common';
import './MessageList.css';

/**
 This component renders list of <Messages /> 
 **/

const MessageList = (props) => {
    const { messages, deleteMessage, replyMessage } = props;
    const handleDeleteMessage = (id) => deleteMessage(id);

    const handleReplyMessage = (reply) => {
        const replyMsg = { ...reply, id: getUniqueId(messages), author: 'loggedInUser' }
        replyMessage(replyMsg)
    };

const renderCounterLabel = () => {
    return (
        <Label color='blue' ribbon>
            {`Received messages: ${messages.length}`}
        </Label>
    )
}
    return (
        <div className="messageList">
            {messages.length > 0 ?
                <List>
                    {renderCounterLabel()}
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
                <Label color='red' ribbon>
                <h5>{NO_POST_AVAILABLE}</h5>
                </Label>
            }
        </div>
    );
};

export default MessageList;