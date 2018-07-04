import { fromJS } from 'immutable'
import { constants } from '../actions/app'

const initialState = fromJS({
  beginapp: 'test',
  initialized: false,
})

function appReducer(state = initialState, action) {
  switch (action.type) {
  case constants.INIT_APP:
    return state.set('initialized', !state.get('initialized'));
  default:
    return state
  }
}

const selectAppDomain = (state) => state.get('app');
const makeSelectApp = (state) => selectAppDomain(state).toJS();

export const appSelectors = {
  makeSelectApp,
};

export default appReducer;
