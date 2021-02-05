import './MessageForm.css';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export default class MessageForm extends React.Component {
    state = {
        author: 'Аноним',
        text:'',
    };

    static propTypes = {
        onSend: PropTypes.func, 
    };
    
    handleMessageSend = () => {
        const { onSend } = this.props;

        if (typeof onSend === 'function') {
            onSend(this.state);

            this.setState({text: ''});
        }
    };

    handleInputChange = (event) => {
        const fieldName = event.target.name;

        this.setState({
            [fieldName]: event.target.value,
        });
    };

    handleEnterDown = (event) => {
        if (event.ctrlKey && (event.keyCode === 13)) {
            this.handleMessageSend();
        }
    }

    render() {
        const { author, text } = this.state;

        return (
            <div className="message-form">
                <TextField label="Author" name="author" onChange={this.handleInputChange} type="text" value={author} /><br />
                <TextField className="textarea" multiline label="Text" onKeyDown={this.handleEnterDown} name="text" onChange={this.handleInputChange} value={text}/>
                <br/>
                <Button variant="contained" color="primary" onClick={this.handleMessageSend}>Send</Button>
            </div>
        )
    };
}