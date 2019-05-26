import React, { Component } from 'react';
import { TextArea, Button } from 'semantic-ui-react'
import { MIN_TEXT_LENGTH } from '../constants/common';
import PropTypes from 'prop-types';
import './MessagePanel.css';

class MessagePanel extends Component {
    constructor(props) {
        super(props);
        this.textRef = React.createRef();
        this.state = { postDisabled: true, value: '' };
    }

    componentDidMount() {
        const  { value } = this.props;
        this.setState({ value });
    }

    isValidPost = (string) => string.length > MIN_TEXT_LENGTH;

    // Post button validation
    handleTextInput = (e, data) => {
        this.setState({ value: data.value });
        if (this.isValidPost(data.value)) {
            this.setState({ postDisabled: false })
        } else {
            this.setState({ postDisabled: true })
        }
    };

    // Post on Press Enter
    handleOnEnter = (e) => {
        if (e.keyCode === 13 && e.shiftKey === false) {
            this.handlePost();
        }
    }

    handlePost = () => {
        const { value } = this.state;
        if (this.isValidPost(value)) {
            this.props.post(value);
            this.setState({ postDisabled: true, value: '' })
        }
    }

    render() {
        const { minHeight: height, placeholderMessage, isReply, buttonLabel } = this.props;

        return (
            <div className={isReply ? 'replyMessage' : 'messagePanel'} >
                <TextArea
                    ref={this.textRef}
                    placeholder={placeholderMessage}
                    style={{ minHeight: height }}
                    onChange={this.handleTextInput}
                    onKeyDown={this.handleOnEnter}
                    value={this.state.value} />
                <div className="postButton">
                    <Button
                        disabled={this.state.postDisabled}
                        floated="right"
                        color="linkedin"
                        onClick={this.handlePost}>
                        {buttonLabel ? buttonLabel : 'Post'}
                    </Button>
                </div>
            </div >)
    }
};

MessagePanel.propTypes  = {
    placeholderMessage: PropTypes.string.isRequired,
    isReply: PropTypes.bool,
    minHeight: PropTypes.number,
    rows: PropTypes.number,
    value: PropTypes.string,
    buttonLabel: PropTypes.string,
    post: PropTypes.func.isRequired
};

export default MessagePanel;
