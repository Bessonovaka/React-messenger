import './Messenger.css'

import React, { Component } from 'react';
import MessageField from '../MessageField/MessageField';
import MessageForm from '../MessageForm/MessageForm';

const messages = ['Hello!','How are you?','I am fine.'];

export default class Messenger extends Component {
   /* 
    componentDidUpdate() {
        if (this.messages.length) {
            const lastMessage = this.messages[this.messages.length -1];
            if (lastMessage.author !== 'Bot') {
                setTimeout(() => {
                    this.handleMessageSend({text: `Hello, ${lastMessage.author}! I am bot!`, author: 'Bot'})
                }, 1000);
            }
        }    
    } */

    render() {
        const { messages, sendMessage} = this.props;
        return (
            <div className="messenger">
                {messages ? <MessageField items={messages}/> : 'Выбери чат, чтобы продолжить общение!'}
                {messages && <MessageForm onSend={sendMessage} />}
            </div>
        )
    }
};
