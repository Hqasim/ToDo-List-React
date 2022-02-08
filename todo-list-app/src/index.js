import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css'; // Bootstrap
import store from './redux/store'; // Redux
import { Provider } from 'react-redux'; // Redux

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);