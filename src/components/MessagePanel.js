import React, { Component } from 'react';
import { TextArea, Button } from 'semantic-ui-react'
import { MIN_TEXT_LENGTH } from '../constants/common';
import './MessagePanel.css';

class MessagePanel extends Component {
    constructor(props) {
        super(props);
        this.textRef = React.createRef();
        this.state = { postDisabled: true, value: '' };
    }

    componentDidMount() {
        this.setState({ value: this.props.value });
    }

    render() {
        const { minHeight: height, placeholderMessage, isReply, buttonLabel } = this.props;

        const isValidPost = (string) => string.length > MIN_TEXT_LENGTH;

        // Post button validation
        const handleTextInput = (e, data) => {
            this.setState({ value: data.value });
            if (isValidPost(data.value)) {
                this.setState({ postDisabled: false })
            } else {
                this.setState({ postDisabled: true })
            }
        };

        // Post on Press Enter
        const handleOnEnter = (e) => {
            if (e.keyCode === 13 && e.shiftKey === false) {
                handlePost();
            }
        }

        const handlePost = () => {
            const { value } = this.state;
            if (isValidPost(value)) {
                this.props.post(value);
                this.setState({ postDisabled: true, value: '' })
            }
        }

        return (
            <div className={isReply ? 'replyMessage' : 'messagePanel'} >
                <TextArea
                    ref={this.textRef}
                    placeholder={placeholderMessage}
                    style={{ minHeight: height }}
                    onChange={handleTextInput}
                    onKeyDown={handleOnEnter}
                    value={this.state.value} />
                <div className="postButton">
                    <Button
                        disabled={this.state.postDisabled}
                        floated="right"
                        color="linkedin"
                        onClick={handlePost}>
                        {buttonLabel ? buttonLabel : 'Post'}
                    </Button>
                </div>
            </div >)
    }
};

export default MessagePanel;
