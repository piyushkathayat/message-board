import React from 'react';
import { List, Label } from 'semantic-ui-react'
import Message from './Message';
import { getUniqueId } from '../utils/common';
import { NO_POST_AVAILABLE, MESSAGE_COUNT_MESSAGE } from '../constants/common';
import PropTypes from 'prop-types';
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
                {`${MESSAGE_COUNT_MESSAGE} ${messages.length}`}
            </Label>
        )
    };

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

MessageList.propTypes =  {
    messages: PropTypes.array,
    deleteMessage: PropTypes.func,
    replyMessage: PropTypes.func
};

export default MessageList;
