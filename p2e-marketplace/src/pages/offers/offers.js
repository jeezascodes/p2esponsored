import React from 'react';
import OfferItemList from '../../components/offerItemList/offerItemList';
import styles from './offers.module.css';
import MainView from '../../components/mainView/mainView';
import Heading from '../../components/heading/heading';

export default function Offers() {
  const offers = [
    {
      thumbnail:
        'https://media.ambito.com/p/db25c95083c5e472869cfeb92fea1ffd/adjuntos/239/imagenes/039/293/0039293731/1200x1200/smart/axie-infinityjpg.jpg',
    },
    {
      thumbnail:
        'https://near.org/wp-content/uploads/2020/09/cs_zed_header.png',
    },
  ];
  return (
    <MainView>
      <div className={styles.listContainer}>
        <Heading text='Scholarships' herarchy='h3' />
        <div className={styles.relative}>
          {offers?.map((item) => {
            return <OfferItemList item={item} />;
          })}
        </div>
      </div>
    </MainView>
  );
}
