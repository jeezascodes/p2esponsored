import React from 'react';
import styles from './heading.module.css';

export default function Heading({ text = '', herarchy = 'h1' }) {
  return <h2 className={`heading ${styles[herarchy]}`}>{text}</h2>;
}
