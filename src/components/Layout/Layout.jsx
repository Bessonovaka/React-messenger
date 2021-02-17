import './Layout.css'

import React from 'react';
import HeaderRedux from '../../containers/HeaderContainer';
import ChatList from '../ChatList/ChatList';
import Messenger from '../Messenger/Messenger';


export default class Layout extends React.Component {

   render() {
       return (
        <div className="layout">
            <HeaderRedux  />
            <div className="messenger-box">
                <ChatList chats={this.props.chats} addChat={this.props.addChat}/>
                <Messenger addChat={this.props.handleChatAdd} match={this.props.match} chats={this.props.chats} messages={this.props.messages} sendMessage={this.props.sendMessage} />
            </div>
        </div>

       )
   }
}

