import React from 'react';
import { render } from 'react-dom';
import ReactDOM from "react-dom/client";
import App from './components/App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// uncomment so that webpack can bundle styles
import styles from './scss/application.scss';

  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
     <App />
    </BrowserRouter>);
