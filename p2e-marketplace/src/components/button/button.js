import React from 'react';
import styles from './button.module.css';

export default function PrimaryButton() {
  return (
    <button variant='primaryPurple' className={styles.primaryButton}>
      <div className={styles.buttonBg}></div>
      <div className='hook-left'>
        <div className='line-left'></div>
        <div className='square-bracket-left'></div>
      </div>
      <span className='css-dxuqme'>Explore Offers</span>
      <div className='hook-right'>
        <div className='square-bracket-right'></div>
        <div className='line-right'></div>
      </div>
    </button>
  );
}
