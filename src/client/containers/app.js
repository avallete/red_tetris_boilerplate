import React from 'react'
import { connect } from 'react-redux'
import {Tetrimino} from "../components/tetrimino";
import {O, L, Z, T, I} from "../components/shapeModels";


var data = [
  new O(1, 1), new L(4,1), new Z(8, 1), new T(12, 1), new I(16, 1)
];

var data2 = [
  new O(1, 5), new L(4,5), new Z(8, 5), new T(12, 5), new I(16, 5)
];

const App = ({message}) => {
  return (
    <div>
      {data.map(t => <Tetrimino shape={t} color="red"/>)}
      {data2.map(t => <Tetrimino shape={t}/>)}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    message: state.message
  }
}
export default connect(mapStateToProps, null)(App)
