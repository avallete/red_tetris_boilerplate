import React from 'react'
import PropTypes from 'react-proptypes';
import style from './style.css'

const Board = ({ children, ...rest }) => (
  <div className={style.board} {...rest}>
    { children }
  </div>
);

Board.propTypes = {
  children: PropTypes.elementType,
};

export default Board;
