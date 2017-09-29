import React from 'react'

export const Square = React.createClass({
  render: function() {
    var s = {
      left: (this.props.col - 1) * 25 + 'px',
      top: (this.props.row - 1) * 25 + 'px',
      backgroundColor: (this.props.color),
    };
    return (<div className="square" style={s}></div>);
  }
});
