import React from 'react';
import styles from './chooseCard.module.css';
import PrimaryButton from '../../components/button/button';
import Heading from '../../components/heading/heading';
import { Link } from 'react-router-dom';
import leftVideo from '../../assets/astronaut_user.mp4';

export default function ChooseCard() {
  return (
    <div>
      <div className={styles.cardWrapper}>
        <div className={styles.thumbnailContainer}>
          {/* <img
            src='https://api.thegraph.com/ipfs/api/v0/cat?arg=QmP4AbpQXQH2gJeEY1KCtjUBnroiEksWBHH9A9zMBgrdZ8'
            className={styles.thumbnail}
          /> */}
          <video className={styles.thumbnail} autoPlay loop muted>
            <source src={leftVideo} type='video/mp4' />
          </video>
          <img
            src='https://api.thegraph.com/ipfs/api/v0/cat?arg=QmP4AbpQXQH2gJeEY1KCtjUBnroiEksWBHH9A9zMBgrdZ8'
            className={styles.thumbnail_as_bg}
          />
        </div>
        <div className={styles.textContainer}>
          <Heading
            text='Scholarship sponsor'
            herarchy='h3'
            marginBottom={false}
          />
          <Heading
            text='I will play with someone elses account and will split the profits'
            herarchy='h4'
            bold={false}
          />
          <p></p>
        </div>
      </div>
    </div>
  );
}
