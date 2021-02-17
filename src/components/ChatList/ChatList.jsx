import './ChatList.css'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {Link} from 'react-router-dom';

import React from 'react';



export default class ChatList extends React.Component {
    
   render() {
       const {chats, addChat} = this.props;
       return (
        <List className="chatlist">
            {chats.map((chat, idx) => <ListItem key={idx} button>
                <Link to={chat.link} className="link">
                    <ListItemText primary={chat.name} />
                </Link>
            </ListItem>)}
            <Link onClick={addChat} className="link">
                <ListItemText primary="Добавить чат" />
            </Link>
        </List>
       )
   }
}