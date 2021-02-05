import './Layout.css'

import React from 'react';
import Header from '../Header/Header';
import ChatList from '../ChatList/ChatList';
import Messenger from '../Messenger/Messenger';


export default class Layout extends React.Component {

   render() {
       return (
        <div className="layout">
            <Header  />
            <div className="messenger-box">
                <ChatList />
                <Messenger />
            </div>
        </div>

       )
   }
}

