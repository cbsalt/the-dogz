import React from 'react';
import PropTypes from 'prop-types';

import styles from './Input.module.css';

const Input = ({
  label, type, id, value, onChange, error, onBlur,
}) => (
  <div className={styles.wrapper}>
    <label htmlFor={id} className={styles.label}>{label}</label>
    <input
      id={id}
      className={styles.input}
      type={type}
      name={id}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />
    {error && <p className={styles.error}>{error}</p>}
  </div>
);

export default Input;

Input.defaultProps = {
  id: null,
  error: null,
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  onBlur: PropTypes.func.isRequired,
};
