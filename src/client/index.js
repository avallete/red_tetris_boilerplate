import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import App from './containers/app'
import { alert } from './actions/alert'

const initialState = {}

const store = configureStore(initialState);

console.log('store', store);
ReactDom.render((
  <Provider store={store}>
    <App/>
  </Provider>
), document.getElementById('tetris'))

store.dispatch(alert('Soon, will be here a fantastic Tetris ...'))
