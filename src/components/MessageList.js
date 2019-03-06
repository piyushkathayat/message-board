import React from 'react';
import { List, Label } from 'semantic-ui-react'
import './MessageList.css';
import Message from './Message';

/**
 This component renders list of <Messages /> 
 **/

const MessageList = (props) => {
    const { messages, deleteMessage } = props;

    const handleDeleteMessage = (id) => deleteMessage(id);

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
                            />)
                    })}
                </List> :
                <Label color='red' ribbon>No post available.</Label>
            }
        </div>
    );
};

export default MessageList;