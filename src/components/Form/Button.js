import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.module.css';

const Button = ({ children, ...props }) => (
  <button type="submit" {...props} className={styles.button}>
    {children}
  </button>
);

export default Button;

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element.isRequired,
    PropTypes.string.isRequired,
  ]).isRequired,
};
