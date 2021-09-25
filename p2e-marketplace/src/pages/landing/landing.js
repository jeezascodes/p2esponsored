import React from 'react';
import Navbar from '../../components/navbar/navbar';
import styles from './landing.module.css';
import backgrounVideo from '../../assets/backgroundVideo.mp4';
// import backgrounImage from '../../assets/backgrounImage.png';

export default function Landing() {
  return (
    <div>
      <Navbar />
      <div className={styles.overlay}></div>
      <video className={styles.bgVideo} autoPlay loop muted>
        <source src={backgrounVideo} type='video/mp4' />
      </video>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>
          <div>A platform</div>
          <div>for connecting</div>
          <div>P2E players and sponsors</div>
        </h1>
        <p className={styles.description}>
          The Graph is an indexing protocol for querying networks like Ethereum
          and IPFS. Anyone can build and publish open APIs, called subgraphs,
          making data easily accessible.
        </p>
        <div className='css-1shgmgj'>
          <div className={styles.buttonWrapper}>
            <button variant='primaryPurple' className={styles.primaryButton}>
              <div className={styles.buttonBg}></div>
              <div className='hook-left'>
                <div className='line-left'></div>
                <div className='square-bracket-left'></div>
              </div>
              <span className='css-dxuqme'>Explore Subgraphs</span>
              <div className='hook-right'>
                <div className='square-bracket-right'></div>
                <div className='line-right'></div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
