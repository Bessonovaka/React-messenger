import './MessageField.css'

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {Message, messageType} from '../Message/Message';

export default  class MessageField extends React.Component {
   static propTypes = {
       items: PropTypes.arrayOf (
           PropTypes.shape(messageType),
       ),
   };

   render() {
       const { items } = this.props;
       
       return (
           <div className="messages-list">
               {items.map((item, idx) => <Message key={idx} {...item} />)}
           </div>
       );
   }
}


