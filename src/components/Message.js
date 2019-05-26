import React, { Component } from 'react';
import { List, Icon } from 'semantic-ui-react';
import EditModal from './EditModal';
import MessagePanel from './MessagePanel';
import ReplyList from './ReplyList';
import { MESSAGE_PANEL_REPLY_MESSAGE } from '../constants/common';
import './Message.css';

class Message extends Component {
    constructor(props) {
        super(props);
        this.state = { openModel: false };
    }

    handleEditMesssage = () => this.setState({ openModel: true })

    handleDeleteMesssage = (id) => this.props.deleteMessage(id);

    renderMessageHeader = () => {
        const { author, id } = this.props.detail; 
        return (
            <div className="messageHeader">
                <span className="author">{author}</span>
                <span className="buttons">
                    <Icon name='edit' onClick={this.handleEditMesssage} />
                    <Icon name='trash' onClick={() => this.handleDeleteMesssage(id)} />
                </span>
            </div>)
    }

    handleModalClose = () => this.setState({ openModel: false });

    isReplyAvailable = () => this.props.detail.reply.length > 0;

    render() {
        const { message, id, reply } = this.props.detail; 

        const messageHandler = (message) => {
            this.props.replyMessage({ message, parentId: id });
        };

        return (
            <List.Item className="message">
                <div>
                    {this.renderMessageHeader()}

                    <p>{message}</p>
                    
                    {this.isReplyAvailable && <ReplyList replies={reply} />}
                    
                    <MessagePanel
                        isReply
                        rows={1}
                        placeholderMessage={MESSAGE_PANEL_REPLY_MESSAGE}
                        buttonLabel="Reply"
                        post={messageHandler}
                    />
                </div>
                <EditModal
                    open={this.state.openModel}
                    close={() => this.handleModalClose()}
                    detail={this.props.detail}
                />
            </List.Item>
        );
    }
}

export default Message;
