import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux' ;
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { BrowserRouter } from 'react-router-dom';

import authReducer from '../src/store/reducers/authReducer' ;
import basicInfoReducer from '../src/store/reducers/basicInfoReducer' ;
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { reducer as FormReducer } from "redux-form";
import '../node_modules/font-awesome/css/font-awesome.min.css' ;

const composeEnhancers = (process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null) || compose;


const rootReducer = combineReducers({
  basicInfoReducer:basicInfoReducer,
  authreducer: authReducer,
  form :FormReducer
});

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk,logger)
));


ReactDOM.render(
  <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
  ,
  document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
