import React from 'react';
import styles from './chooseCard.module.css';
import PrimaryButton from '../../components/button/button';
import Heading from '../../components/heading/heading';
import { Link } from 'react-router-dom';

export default function ChooseCard({ data, onClick }) {
  return (
    <div onClick={onClick}>
      <div className={styles.cardWrapper}>
        <div className={styles.thumbnailContainer}>
          <video className={styles.thumbnail} autoPlay loop muted>
            <source src={data?.videoSource} type='video/mp4' />
          </video>
          <img
            src='https://api.thegraph.com/ipfs/api/v0/cat?arg=QmP4AbpQXQH2gJeEY1KCtjUBnroiEksWBHH9A9zMBgrdZ8'
            className={styles.thumbnail_as_bg}
          />
        </div>
        <div className={styles.textContainer}>
          <Heading text={data?.title} herarchy='h3' marginBottom={false} />
          <Heading text={data?.subtitle} herarchy='h4' bold={false} />
          <p></p>
        </div>
      </div>
    </div>
  );
}
