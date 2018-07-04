import React from 'react'
import PropTypes from 'react-proptypes'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { injectReducer } from '../configureStore'
import { appSelectors } from '../reducers/app'
import { initApp } from '../actions/app'
import reducer from '../reducers/app';
import Board from '../components/Board';

const App = (props) => (
  <div>
    <span>
      {JSON.stringify(props)}
    </span>
    <button onClick={props.onClickInit}>Init app</button>
    <button onClick={props.onClickInitAsync}>Init app async</button>
    <Board/>
  </div>
)

App.propTypes = {
  app: PropTypes.shape({
    beginapp: PropTypes.string.isRequired,
    initialized: PropTypes.bool.isRequired,
  }),
  onClickInit: PropTypes.func.isRequired,
  onClickInitAsync: PropTypes.func.isRequired,
}

const sleep = (timeout) => new Promise((resolve) => setTimeout(resolve, timeout))

function testWithSleep(time) {
  console.log('testWithSleep', time)
  return (dispatch) => {
    console.log('thunk function')
    sleep(time)
      .then(() => {
        console.log('sleep ended')
        dispatch(initApp())
      })
  }
}

const mapStateToProps = (state) => ({
  app: appSelectors.makeSelectApp(state),
})

const mapDispatchToProps = (dispatch) => ({
  dispatch,
  onClickInitAsync: () => dispatch(testWithSleep(2000)),
  onClickInit: () => dispatch(initApp()),
})

injectReducer({ key: 'app', reducer })

const withConnect = connect(mapStateToProps, mapDispatchToProps)(App)

export default compose(
  withConnect,
);
