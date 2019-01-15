import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './Header';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import { robots } from './robots';
import { bigpic } from './robots';

ReactDOM.render(

        <App />

    ,
    document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();