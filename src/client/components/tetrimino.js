import React from 'react'
import { Square } from './square';

export class Tetrimino extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='tetrimino'>
        {this.props.shape.squares().map(sq => <Square row={sq.row} col={sq.col} color={this.props.color} />)}
      </div>
    );
  }
};
