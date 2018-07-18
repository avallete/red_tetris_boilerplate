/**
 * Create the store with dynamic reducers
 */

import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import { fromJS } from 'immutable';
import { createLogger } from 'redux-logger'
import createReducer from './reducers'
import isEmpty from 'lodash/isEmpty'
import isFunction from 'lodash/isFunction'
import isString from 'lodash/isString'

const injectedReducers = {};

export function isValidReducer(key, reducer) {
  if (!isEmpty(key) && isString(key) && isFunction(reducer)) {
    return true;
  }
  throw new Error(`Invalid reducer :: [${key}]: ${reducer}`)
}

export function injectReducer({ key, reducer }) {
  isValidReducer(key, reducer)
  injectedReducers[key] = reducer;
}

export default function configureStore(initialState = {}) {
  // Create the store with two middlewares
  // 1. sagaMiddleware: Makes redux-sagas work
  // 2. routerMiddleware: Syncs the location/URL path to the state
  const middlewares = [
    thunk,
    createLogger(),
  ];

  const enhancers = [
    applyMiddleware(...middlewares),
  ];

  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers = compose
  /* eslint-enable */

  const store = createStore(
    createReducer(injectedReducers),
    fromJS(initialState),
    composeEnhancers(...enhancers)
  );

  /*
    Make reducers hot reloadable
   */
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(createReducer(injectedReducers));
    });
  }

  return store;
}
