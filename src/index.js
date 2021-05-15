import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

const options = {
    position: 'top center',
    timeout: 10000,
    offset: '30px',
    transition: 'scale'
};

ReactDOM.render(
    <Router>
        <AlertProvider template={AlertTemplate} {...options}>
            <App />
        </AlertProvider>
    </Router>,
    document.getElementById('root')
);
reportWebVitals();