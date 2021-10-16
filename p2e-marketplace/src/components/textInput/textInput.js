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
      {name && `${name}:`}
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
