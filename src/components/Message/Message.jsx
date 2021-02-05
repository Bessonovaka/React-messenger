import './Message.css';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export const messageType = {
    author: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export class Message extends Component {

  static propTypes = messageType;

  get direction() {
    return this.props.author === 'Bot' ? 'start' : 'end';
  }

  render() {
    const {author, text} = this.props;

    return (
        <div className="message" style={{ alignSelf: `flex-${this.direction}` }}>
          <div className="sender">{author}: </div>
          <div>{ text}</div>
        </div>
    )
  }
};

   


