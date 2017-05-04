import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { browserHistory } from 'react-router'

import App from './Container/App'
import reducer from './Reducers/index.js'
import './scss/main.scss'

let store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
let history = syncHistoryWithStore(browserHistory, store)

document.addEventListener('DOMContentLoaded', function() {
    render(
        <Provider store={ store }>
          <App history={ history } />
        </Provider>,
        document.getElementById('mount')
    );
})