import React from 'react'
import PropTypes from 'react-proptypes'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { injectReducer } from '../configureStore'
import { appSelectors } from '../reducers/app'
import { initApp } from '../actions/app'
import reducer from '../reducers/app';
import Board from '../components/Board';
import Headbar from '../components/Headbar';
import Game from '../components/Game';
import styles from './style.css';
import GameStyles from '../components/Game/style.css';

const game = [
  [{ value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }],
  [{ value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }],
  [{ value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }],
  [{ value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }],
  [{ value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }],
  [{ value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }],
  [{ value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }],
  [{ value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }],
  [{ value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }],
  [{ value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }],
  [{ value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }],
  [{ value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }],
  [{ value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }],
  [{ value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }],
  [{ value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }],
  [{ value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }],
  [{ value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }],
  [{ value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }],
  [{ value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }],
  [{ value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 1, color: '#4453cf' }, { value: 0 }, { value: 0 }, { value: 1, color: '#a12133' }],
  [{ value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 1, color: '#4453cf' }, { value: 1, color: '#4453cf' }, { value: 0 }, { value: 0 }, { value: 1, color: '#a12133' }],
  [{ value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }, { value: 1, color: '#4453cf' }, { value: 0 }, { value: 0 }, { value: 1, color: '#a12133' }, { value: 1, color: '#a12133' }],
]

const App = (props) => (
  <div className={styles.app}>
    <Headbar title={'Red-tetris-boilerplate'} />
    <Board>
      <div style={{ backgroundColor: '#892123', width: '100%' }}/>
      <Game>
        {game.map(row => row.map(c => c.value === 1 ?
          <div className={GameStyles.piece} style={{ backgroundColor: c.color }} /> :
          <div className={GameStyles.square} />
        ))}
      </Game>
      <div style={{ backgroundColor: '#532123', width: '100%' }}/>
    </Board>
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
