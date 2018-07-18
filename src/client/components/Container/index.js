import React from 'react'
import { elementType } from 'react-proptypes';
import style from './style.css'

const Container = ({ children, ...rest }) => (
  <div className={style.container} {...rest}>
    { children }
  </div>
);

Container.propTypes = {
  children: elementType,
}

export default Container;
