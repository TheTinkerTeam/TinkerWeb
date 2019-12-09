import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

import reducer from './redux/reducers';

import App from './App';

// Initializing to an empty object, but here is where you could
// preload your redux state with initial values (from localStorage, perhaps)
const preloadedState = {};
const middlewares = [];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const store = createStore(
  reducer,
  preloadedState,
  applyMiddleware(...middlewares),
);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-root'),
);
