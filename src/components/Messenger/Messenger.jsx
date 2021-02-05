import './Messenger.css'

import React, { Component } from 'react';
import MessageField from '../MessageField/MessageField';
import MessageForm from '../MessageForm/MessageForm';

const messages = ['Hello!','How are you?','I am fine.'];

export default class Messenger extends Component {
    state = {
        chats: {
            '1': {
                id: 1,
                messages: [{text: 'Привет! Это чат №1', author: 'Bot'}],
                name: 'Чат 1'
            },
            '2': {
                id: 2,
                messages: [{text: 'Привет! Это чат №2', author: 'Bot'}],
                name: 'Чат 2'
            },
            '3': {
                id: 3,
                messages: [{text: 'Привет! Это чат №3', author: 'Bot'}],
                name: 'Чат 3'
            },
        }
    }

    componentDidUpdate() {
        if (this.messages.length) {
            const lastMessage = this.messages[this.messages.length -1];
            if (lastMessage.author !== 'Bot') {
                setTimeout(() => {
                    this.handleMessageSend({text: `Hello, ${lastMessage.author}! I am bot!`, author: 'Bot'})
                }, 1000);
            }
        }    
    }

    handleMessageSend = (message) => {
        const {chats} = this.state;
        const {match} = this.props;

        const chat = chats[match.params.id];
        const messages = this.messages.concat([message]);
        chat.messages=messages;


        this.setState({
            chats: {
                ...this.state.chats,
                [match.params.id]: chat,
            }
        });
    }

    get messages() {
        const {chats} = this.state;
        const {match} = this.props;

        let messages = null;

        if (match && chats[match.params.id]){
            messages = chats[match.params.id].messages;
        }

        return messages;
    }

    render() {

        return (
            <div className="messenger">
                {this.messages ? <MessageField items={this.messages}/> : 'Выбери чат, чтобы продолжить общение!'}
                {this.messages && <MessageForm onSend={this.handleMessageSend} />}
            </div>
        )
    }
};
