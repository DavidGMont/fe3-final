import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import './styles/style.scss';
import { BrowserRouter } from 'react-router-dom';
import Context from './Context/Context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Context>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Context>
    </React.StrictMode>
);
