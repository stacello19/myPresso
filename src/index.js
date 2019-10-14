import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './style/common.scss';
import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {reducers} from './redux/index';
import {Provider} from 'react-redux'

const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware, createLogger({collapsed: true})))

const store = createStore(reducers, middleware);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));


