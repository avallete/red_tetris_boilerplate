import React from 'react'
import PropTypes from 'react-proptypes'
import { compose } from 'redux'
import { connect } from 'react-redux'
import injectReducer from '../../utils/injectReducer'
import reducer from './reducer';

const App = ({ app }) => (
  <span>{app}</span>
)

App.propTypes = {
  app: PropTypes.string.isRequired,
}

const mapStateToProps = (state) => ({
  app: state.message,
})

const mapDispatchToProps = (dispatch) => ({
  dispatch,
})

const withReducer = injectReducer({ key: 'app', reducer })
const withConnect = connect(mapStateToProps, mapDispatchToProps)(App)

export default compose(
  withReducer,
  withConnect
)(App);
