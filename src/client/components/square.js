import React from 'react'

export class Square extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    var s = {
      left: this.props.col < 1 ? 1 : (this.props.col - 1) * 25 + 'px',
      top: this.props.row < 1 ? 1 : (this.props.row - 1) * 25 + 'px',
      backgroundColor: (this.props.color),
    };
    return (<div className="square" style={s}></div>);
  }
};
