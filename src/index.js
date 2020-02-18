import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import GenderContextProvider from "./store/GenderProvider.jsx";
import UserContextProvider from './store/UserProvider'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <UserContextProvider>
        <GenderContextProvider>
            <App />
        </GenderContextProvider>,
    </UserContextProvider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
