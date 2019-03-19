import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import MessagePanel from '../components/MessagePanel';
import MessageList from '../components/MessageList';
import {
    MAIN_MESSAGE_PANEL_HEIGHT,
    MESSAGE_PANEL_MAIN_MESSAGE } from '../constants/common';
import { addPost, deletePost, updatePost } from '../actions/actions';
import { Seperator } from '../components/Seperator';
import { getUniqueId } from '../utils/common';
import { getPost } from '../actions/actions';
import PropTypes from 'prop-types';

class MessageBoard extends Component {
    
    componentDidMount = () => {
        this.props.getPost();
    };

    messageHandler = (post) => {
        const { messages } = this.props;
        const message = {
            id: getUniqueId(messages),
            message: post,
            parentId: null,
            author: 'loggedInUser',
            reply: []
        }
        this.props.dispatchMessage(message);
    };


    render() {
        const { messages, handleDeleteMessage, handleReplyMessage } = this.props;
        return (
            <Fragment>
                <MessagePanel
                    post={this.messageHandler}
                    minHeight={MAIN_MESSAGE_PANEL_HEIGHT}
                    placeholderMessage={MESSAGE_PANEL_MAIN_MESSAGE}
                />
                <Seperator />
                <MessageList
                    messages={messages}
                    deleteMessage={handleDeleteMessage}
                    replyMessage={handleReplyMessage}
                />
            </Fragment>)
    }
}

MessageBoard.propType = {
    messages: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            author: PropTypes.node.isRequired,
            message: PropTypes.string.isRequired,
            parentId: PropTypes.node
        })
    )
};

const mapStateToProps = (state) => ({
    messages: state.post
})

const mapDispatchToProps = dispatch => ({
    dispatchMessage: (message) => {
        dispatch(addPost(message))
    },
    handleDeleteMessage: (id) => dispatch(deletePost(id)),
    handleReplyMessage: (message) => dispatch(updatePost(message)),
    getPost: () => dispatch(getPost())
})

export default connect(
    mapStateToProps, mapDispatchToProps
)(MessageBoard);