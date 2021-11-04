import React from 'react';
import styles from './offerItemList.module.css';
import PrimaryButton from '../../components/button/button';
import { Link } from 'react-router-dom';

export default function OfferItemList({
  item = { image: '' },
  detail = false,
}) {
  console.log(`item`, item);
  return (
    <div>
      <Link
        to={{ pathname: '/offer/1', state: item }}
        className={styles.offerItem}
      >
        <div className={styles.itemContent}>
          <div className={styles.row}>
            <div className={styles.thumbnailContainer}>
              <img src={item.thumbnail} className={styles.thumbnail} />
              <img src={item.thumbnail} className={styles.thumbnailBg} />
            </div>
            <div className={styles.middle}>
              <div className={styles.infoContainer}>
                <p className={styles.username}>{item.username}</p>
                <p className={styles.gamename}>{item.game_name}</p>
                <p className={styles.description}>{item.description}</p>
                {/* <p className={styles.date}>updated at: {item.updated_at}</p> */}
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.infoDevider}>
                <p className={styles.infoTitle}>Potential monthly earnings</p>
                <p className={styles.infoText}>300 USD</p>
              </div>
              <div>
                <p className={styles.infoTitle}>Percentage for scholar</p>
                <p className={styles.infoText}>{item.percentage}%</p>
              </div>
              <div>
                <p className={styles.infoTitle}>Places left</p>
                <p className={styles.infoText}>{item.quota}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <div className={styles.applyContainer}>
        {detail && (
          <PrimaryButton
            title='Apply for this scholarship'
            onClick={() => {}}
          />
        )}
      </div>
    </div>
  );
}
