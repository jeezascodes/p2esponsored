import React from 'react';
import styles from './offerItemList.module.css';

export default function OfferItemList({ item = { image: '' } }) {
  return (
    <div className={styles.offerItem}>
      <div className={styles.itemContent}>
        <div className={styles.row}>
          <div className={styles.thumbnailContainer}>
            <img src={item.thumbnail} className={styles.thumbnail} />
            <img src={item.thumbnail} className={styles.thumbnailBg} />
          </div>
          <div className={styles.middle}>middle</div>
          <div className={styles.right}>right</div>
        </div>
      </div>
    </div>
  );
}
