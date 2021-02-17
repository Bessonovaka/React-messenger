import { applyMiddleware, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import { initReducer } from './reducers/index';

import { logger } from './middlewares/logger';
import { bot } from './middlewares/bot';

export const history=createBrowserHistory();

export const store = createStore(initReducer(history), applyMiddleware(logger, bot, routerMiddleware(history)));