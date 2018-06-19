import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Clock from './Clock.js'
import Counter from './Counter.js'
import Employee from './Employee.js'
import Information from './Information.js'



ReactDOM.render(<Employee /> , document.getElementById('root'));
registerServiceWorker();
