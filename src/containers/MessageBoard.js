import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import MessagePanel from '../components/MessagePanel';
import MessageList from '../components/MessageList';
import { addPost, deletePost, updatePost } from '../actions/actions';
import { Seperator } from '../components/Seperator';
import { getUniqueId } from '../utils/common';

// TODO: move to CONST
const MAIN_MESSAGE_PANEL_HEIGHT = 200;
const MESSAGE_PANEL_MAIN_MESSAGE = 'Enter the public message';

class MessageBoard extends Component {
    render() {
        const { messages } = this.props;
        const messageHandler = (post) => {
            const message = {
                id: getUniqueId(messages),
                message: post,
                parentId: null,
                author: 'loggedInUser',
                reply: []
            }
            this.props.dispatchMessage(message);
        };

        return (
            <Fragment>
                <MessagePanel
                    post={messageHandler}
                    minHeight={MAIN_MESSAGE_PANEL_HEIGHT}
                    placeholderMessage={MESSAGE_PANEL_MAIN_MESSAGE}
                />
                <Seperator />
                <MessageList
                    messages={messages}
                    deleteMessage={this.props.handleDeleteMessage}
                    replyMessage={this.props.handleReplyMessage}
                />
            </Fragment>)
    }
}

const mapConnectToProps = (state) => ({
    messages: state.post
})

const mapDispatchToProps = dispatch => ({
    dispatchMessage: (message) => {
        dispatch(addPost(message))
    },
    handleDeleteMessage: (id) => dispatch(deletePost(id)),
    handleReplyMessage: (message) => dispatch(updatePost(message))
})

export default connect(
    mapConnectToProps, mapDispatchToProps
)(MessageBoard);