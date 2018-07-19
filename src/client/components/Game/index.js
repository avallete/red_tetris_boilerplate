import React from 'react'
import PropTypes from 'react-proptypes';
import style from './style.css'

const Game = ({ children, ...rest }) => (
  <div className={style.gamecontainer}>
    <div className={style.game} {...rest}>
      { children }
    </div>
  </div>
);

Game.propTypes = {
  children: PropTypes.elementType,
};

export default Game;
