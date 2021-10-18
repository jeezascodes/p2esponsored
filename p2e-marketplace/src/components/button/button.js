import React from 'react';
import styles from './button.module.css';

export default function PrimaryButton({
  title = 'Get a Scholarships',
  onClick = () => {},
  disabled = false,
}) {
  console.log(`disabled`, disabled);
  return (
    <button
      variant='primaryPurple'
      className={styles.primaryButton}
      onClick={() => onClick()}
      disabled={disabled}
    >
      <div className={styles.buttonBg}></div>
      <div className='hook-left'>
        <div className='line-left'></div>
        <div className='square-bracket-left'></div>
      </div>
      <span className='css-dxuqme'>{title}</span>
      <div className='hook-right'>
        <div className='square-bracket-right'></div>
        <div className='line-right'></div>
      </div>
    </button>
  );
}
