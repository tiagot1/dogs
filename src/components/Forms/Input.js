import React from 'react';
import styles from './Input.module.css';

const Input = ({ name, label, type }) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}
        <input type={type} id={name} name={name} className={styles.input} />
        <p className={styles.error}>Error</p>
      </label>
    </div>
  );
};

export default Input;
