import React from 'react';
import OfferItemList from '../../components/offerItemList/offerItemList';
import styles from './offerDetail.module.css';
import MainView from '../../components/mainView/mainView';
import Heading from '../../components/heading/heading';
import { useLocation } from 'react-router-dom';

export default function OfferDetail() {
  const location = useLocation();
  const item = location.state;

  return (
    <MainView>
      <div className={styles.listContainer}>
        {/* <Heading text='Scholarships' herarchy='h3' /> */}
        <div className={styles.relative}>
          <OfferItemList item={item} detail={true} />;
        </div>
      </div>
    </MainView>
  );
}
