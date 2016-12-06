import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import './scss/main.scss';
import './vendor/flexboxgrid.min.css';

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
        React.createElement(App),
        document.getElementById('mount')
    );
});