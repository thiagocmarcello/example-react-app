// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import './index.css';
import store from './store';
import { addUser } from './modules/user/userReducer';

window.store = store;
window.addUser = addUser;

// ReactDOM.render(
//     <App />,
//     document.getElementById('root'),
// );
