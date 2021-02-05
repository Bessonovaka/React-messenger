import './Header.css'

import React from 'react';
import {Link} from 'react-router-dom';


export default class Header extends React.Component {

   render() {
       return (
        <div className="header">
            <Link to="/profile" className="header__link"><h1>Мой чат</h1></Link>
        </div>

       )
   }
}