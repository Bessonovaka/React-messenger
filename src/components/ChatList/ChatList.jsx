import './ChatList.css'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import React from 'react';

export default class ChatList extends React.Component {

   render() {
       return (
        <List className="chatlist">
            <ListItem button>
                <ListItemText primary="Чат 1" />
            </ListItem>
            <ListItem button>
                <ListItemText primary="Чат 2" />
            </ListItem>
            <ListItem button>
                <ListItemText primary="Чат 3" />
            </ListItem>
        </List>

       )
   }
}