import React, { Component } from 'react';
import { List, Icon } from 'semantic-ui-react';
import EditModal from './EditModal';
import MessagePanel from './MessagePanel';
import ReplyList from './ReplyList';
import './Message.css';

class Message extends Component {

    constructor(props) {
        super(props);
        this.state = { openModel: false };
    }

    render() {
        const { author, message, id, reply } = this.props.detail;

        const handleDeleteMesssage = (id) => this.props.deleteMessage(id);

        const handleEditMesssage = () => this.setState({ openModel: true })

        const handleModalClose = () => this.setState({ openModel: false });

        const messageHandler = (message) => {
            this.props.replyMessage({ message, parentId: id });
        };

        const isReplyAvailable = () => reply.length > 0;

        return (
            <List.Item className="message">
                <div>
                    <div className="messageHeader">
                        <span className="author">{author}</span>
                        <span className="buttons">
                            <Icon name='edit' onClick={handleEditMesssage} />
                            <Icon name='trash' onClick={() => handleDeleteMesssage(id)} />
                        </span>
                    </div>

                    <p>{message}</p>

                    {isReplyAvailable && <ReplyList replies={reply} />}

                    <div>
                        <MessagePanel
                            isReply
                            rows={1}
                            placeholderMessage="Write your comment..."
                            buttonLabel="Reply"
                            post={messageHandler}
                        />
                    </div>
                </div>
                <EditModal
                    open={this.state.openModel}
                    close={() => handleModalClose()}
                    detail={this.props.detail}
                />
            </List.Item>
        );
    }
}

export default Message;
