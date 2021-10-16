import React from 'react';
import styles from './staticModal.module.css';

export default function StaticModal({ children }) {
  return <div className={styles.modalContainer}>{children}</div>;
}
