import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import Routes from './routes'
import registerServiceWorker from './registerServiceWorker';
// import './index.css';
import { Provider } from "react-redux"
import { store } from './store/index'
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAip81i4GuKl8RTeDwOdk7Nec7w66Ue9LE",
    authDomain: "inventory-management-sys-a095e.firebaseapp.com",
    databaseURL: "https://inventory-management-sys-a095e.firebaseio.com",
    projectId: "inventory-management-sys-a095e",
    storageBucket: "inventory-management-sys-a095e.appspot.com",
    messagingSenderId: "473183301038"
};
firebase.initializeApp(config);

ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
