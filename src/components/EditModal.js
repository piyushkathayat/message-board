import React from 'react';
import { Modal, Icon } from 'semantic-ui-react';
import MessagePanel from './MessagePanel';
import { connect } from 'react-redux';
import { editPost } from '../actions/Actions';
import './EditModal.css';

const EditModal = (props) => {
    const { open, close, detail } = props;

    const messageHandler = (message) => {
        close();
        const newMessage = { ...detail, message };
        props.dispatchMessage(newMessage);
    };

    const handleCloseModal = () => close();

    return (
        <Modal size={'tiny'} closeOnDimmerClick open={open} >
            <Modal.Header className="modalHeader">
                <h5>Edit Your Post</h5>
                <Icon className="closeModal" name='close' onClick={() => handleCloseModal()} />
            </Modal.Header>
            <MessagePanel
                post={messageHandler}
                minHeight={100}
                placeholderMessage="Enter the public message"
                value={detail.message}
            />
        </Modal >
    )
}

const mapDispatchToProps = dispatch => ({
    dispatchMessage: (detail) => {
        dispatch(editPost(detail))
    },
})

export default connect(
    null, mapDispatchToProps
)(EditModal);
