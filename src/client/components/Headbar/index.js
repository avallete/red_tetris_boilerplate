import React from 'react';
import PropTypes from 'prop-types';
import { elementType } from 'react-proptypes';
import Container from '../Container';
import style from './style.css'

const Headbar = ({ children, title, ...rest }) => (
  <div className={style.headbar} {...rest}>
    <Container fluid>
      <div className={style.header} ><h1>{title}</h1></div>
      { children }
    </Container>
  </div>
);

Headbar.propTypes = {
  children: elementType,
  title: PropTypes.string,
};

export default Headbar;
