import React from 'react';
import styles from './heading.module.css';

export default function Heading({
  text = '',
  herarchy = 'h1',
  marginBottom = true,
  bold = true,
}) {
  return (
    <h2
      className={`heading ${styles[herarchy]} ${
        !marginBottom && styles.no_margin_bottom
      } ${!bold && styles.lightWeight}`}
    >
      {text}
    </h2>
  );
}
