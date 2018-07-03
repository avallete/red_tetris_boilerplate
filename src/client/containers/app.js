import React from 'react'
import { connect } from 'react-redux'

const App = ({ message }) => (
  <span>{message}</span>
)

const mapStateToProps = (state) => ({
  message: state.message,
})
export default connect(mapStateToProps, null)(App)

