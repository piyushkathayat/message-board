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