import React from 'react';
import styles from './mainView.module.css';

export default function MainView({ children }) {
  return <div className={styles.wrapper}>{children}</div>;
}
