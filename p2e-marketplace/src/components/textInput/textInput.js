import React from 'react';
import styles from './textInput.module.css';

export default function TextInput({
  name = '',
  value = '',
  onChange = () => {},
  placeholder = '',
  type = 'text',
  id = '',
}) {
  return (
    <label className={styles.label}>
      <span className={styles.labelText}>{name && `${name}:`}</span>
      <input
        className={styles.input}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={(value) => onChange(value, id)}
      />
    </label>
  );
}
