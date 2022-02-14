import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css'
import './index.css';
import App from './App';
import '../node_modules/uikit/dist/css/uikit.min.css';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import "../node_modules/uikit/dist/js/uikit.min.js";

UIkit.use(Icons);

ReactDOM.render(
    <App />, 
    document.getElementById('root')
);
