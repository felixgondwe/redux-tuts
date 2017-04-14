/**
 * app.js serves as the entry point into our application
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Menu from './components/global/menu.jsx';

ReactDOM.render(<Menu />, document.getElementById('app'));