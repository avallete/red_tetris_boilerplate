import isEmpty from 'lodash/isEmpty';
import isFunction from 'lodash/isFunction';
import isString from 'lodash/isString';

import createReducer from '../reducers';

export function isValidReducer(key, reducer) {
  if (!isEmpty(key) && isString(key) && isFunction(reducer)) {
    return true;
  }
  throw new Error(`Invalid reducer :: [${key}]: ${reducer}`)
}

export function injectReducerFactory(store) {
  return function injectReducer(key, reducer) {
    isValidReducer(key, reducer)

    /*  Check `store.injectedReducers[key] === reducer`
        for hot reloading when a key is the same but a reducer is different
     */
    if (store.injectedReducers[key] && store.injectedReducers[key] === reducer) { return; }

    store.injectedReducers[key] = reducer; // eslint-disable-line no-param-reassign
    store.replaceReducer(createReducer(store.injectedReducers));
  };
}

export default function getInjectors(store) {
  return {
    injectReducer: injectReducerFactory(store),
  };
}
