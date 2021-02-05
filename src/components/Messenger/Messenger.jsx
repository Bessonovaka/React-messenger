import './Messenger.css'

import React, { Component } from 'react';
import MessageField from '../MessageField/MessageField';
import MessageForm from '../MessageForm/MessageForm';

const messages = ['Hello!','How are you?','I am fine.'];

export default class Messenger extends Component {
    state = {
        messages: [],
    };

    componentDidUpdate() {
        const lastMessage = this.state.messages[this.state.messages.length -1];
        if (lastMessage.author !== 'Bot') {
            setTimeout(() => {
                this.setState({
                    messages: this.state.messages.concat([{text: `Hello, ${lastMessage.author}! I am bot!`, author: 'Bot'}]),
                })
            }, 1000);
        }
        
    }

    handleMessageSend = (message) => {
        this.setState(({ messages }) => ({ messages: messages.concat([message])}));
    }

    render() {
        const { messages } = this.state;

        return (
            <div className="messenger">
                <MessageField items={messages}/>
                <MessageForm onSend={this.handleMessageSend} />
            </div>
        )
    }
};
