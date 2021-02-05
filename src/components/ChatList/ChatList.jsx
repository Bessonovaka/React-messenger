import './ChatList.css'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {Link} from 'react-router-dom';

import React from 'react';



export default class ChatList extends React.Component {
    
   render() {
       
       return (
        <List className="chatlist">
            <ListItem button><Link to="/chats/1" className="link"><ListItemText primary="Чат 1" /></Link></ListItem>
            <ListItem button><Link to="/chats/2" className="link"><ListItemText primary="Чат 2" /></Link></ListItem>
            <ListItem button><Link to="/chats/3" className="link"><ListItemText primary="Чат 3" /></Link></ListItem>
        </List>
       )
   }
}