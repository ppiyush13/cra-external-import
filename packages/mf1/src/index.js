import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, MemoryRouter } from 'react-router-dom';
//import App from './App';

const Render = App => ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
    , 
    document.getElementById('root'));

import ('./App').then(module => {
    Render(module.default);
});