import {applyMiddleware, createStore} from 'redux';
//import thunk from 'react-thunk';
import reducers from '../reducer';
import {middleware} from '../navigator/AppNavigator';

const middlewares = [
    middleware,
];

//创建store

export default createStore(reducers, applyMiddleware(...middlewares));