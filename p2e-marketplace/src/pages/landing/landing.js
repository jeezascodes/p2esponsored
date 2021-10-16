import React from 'react';

import styles from './landing.module.css';
import backgrounVideo from '../../assets/backgroundVideo.mp4';
import leftVideo from '../../assets/astronaut_user.mp4';
import rightVideo from '../../assets/astronaut_investor.mp4';
import PrimaryButton from '../../components/button/button';

export default function Landing() {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.heroContainer}>
        {/* <div className={styles.overlay}></div> */}
        <video className={styles.bgVideo} autoPlay loop muted>
          <source src={backgrounVideo} type='video/mp4' />
        </video>
      </div>

      <div className={styles.textContainer}>
        <h1 className={styles.title}>
          <div>Connecting</div>
          <div>P2E players with sponsors</div>
        </h1>
        <p className={styles.description}>
          <b>p2esponsored.com</b> connects people who want to get sponsored in
          other to play games like axie infinity, plant vs undead and more with
          people who want to sponsor them in exchange for a percentage of their
          gains.
        </p>
        <div className='css-1shgmgj'>
          <div className={styles.buttonWrapper}>
            <PrimaryButton />
          </div>
        </div>
      </div>
      <section className={styles.section}>
        <div className={styles.sectionContent}>
          <div className={styles.leftPane}>
            <video className={styles.leftVideo} autoPlay loop muted>
              <source src={leftVideo} type='video/mp4' />
            </video>
          </div>
          <div className={styles.rightPane}>
            <h2 className={styles.titleH2}>¿Eres jugador? Consigue una beca</h2>
            <p className={`${styles.description} ${styles.text2}`}>
              El mínimo para poder jugar son de 500 a 700 dólares. Es por ello
              que se ofrecen becas para poder entrar, ya que la inversión
              inicial es alta.
            </p>
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.sectionContent}>
          <div className={styles.leftPaneInv}>
            <h2 className={styles.titleH2}>¿Quieres becar a alguien?</h2>
            <p className={`${styles.description} ${styles.text2}`}>
              Get your money to work for you by financing the initial invesment
              on behalft of someonelse and splitting the profits.
            </p>
          </div>
          <div className={styles.rightPaneInv}>
            <video className={styles.rightVideo} autoPlay loop muted>
              <source src={rightVideo} type='video/mp4' />
            </video>
          </div>
        </div>
      </section>
    </div>
  );
}
