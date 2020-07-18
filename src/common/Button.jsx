import React from 'react';
import styles from './button.module.css';

const Button = ({ type = 'first', label = 'Get Started', width = '200px' }) => {
  return type === 'first' ? (
    <button style={{ width: width }} className={styles.button_first}>
      {label}
    </button>
  ) : (
    <button style={{ width: width }} className={styles.button_second}>
      {label}
    </button>
  );
};

export default Button;
