import { fromJS } from 'immutable';

const initialState = fromJS({
  beginapp: 'test',
})

function appReducer(state = initialState, action) {
  switch (action.type) {
  default:
    return state
  }
}

export default appReducer;
