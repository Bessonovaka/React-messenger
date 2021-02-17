import './Header.css'

import React, { PureComponent } from 'react';
import {Link} from 'react-router-dom';


export class Header extends PureComponent {
   render() {
       const { chats } = this.props;

       return (
        <header className="header">
            <Link to="/profile" className="header__link"><h1>Мой чат</h1></Link>
            { chats && chats.length && <ul className="header__list">
                {chats.map((chat, idx) => <li key={idx}>{chat.name}</li>)}
            </ul> }
        </header>

       )
   }
}