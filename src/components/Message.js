import React, { Component } from 'react';
import { List, Icon } from 'semantic-ui-react';
import EditModal from './EditModal';
import './Message.css';

class Message extends Component {

    constructor(props) {
        super(props);
        this.state = { openModel: false };
    }

    render() {
        const { author, message, id } = this.props.detail;

        const handleDeleteMesssage = (id) => this.props.deleteMessage(id);

        const handleEditMesssage = () => this.setState({ openModel: true })

        const handleModalClose = () => this.setState({ openModel: false });

        return (
            <List.Item className="message">
                <div>
                    <div>
                        <span>{`Author: ${author}-${id}`}</span>
                        <span className="buttons">
                            <Icon name='edit' onClick={handleEditMesssage} />
                            <Icon name='trash' onClick={() => handleDeleteMesssage(id)} />
                        </span>
                    </div>
                    <p>{message}</p>
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
