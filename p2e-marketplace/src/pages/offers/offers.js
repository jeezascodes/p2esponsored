import React from 'react';
import OfferItemList from '../../components/offerItemList/offerItemList';
import styles from './offers.module.css';
import MainView from '../../components/mainView/mainView';
import Heading from '../../components/heading/heading';
import PrimaryButton from '../../components/button/button';

export default function Offers() {
  const offers = [
    {
      username: 'jeezascodes - 0x6F5...c622',
      offer_id: 1,
      game: 'Axie infinity',
      description: 'Scholarship duration: 3 months',
      updated_at: '2021-7-21',
      thumbnail:
        'https://media.ambito.com/p/db25c95083c5e472869cfeb92fea1ffd/adjuntos/239/imagenes/039/293/0039293731/1200x1200/smart/axie-infinityjpg.jpg',
    },
    {
      username: 'jeezascodes - 0x6F5...c622',
      offer_id: 2,
      game: 'Zed run',
      description: 'Scholarship duration: undefined',
      updated_at: '2021-7-21',
      thumbnail:
        'https://near.org/wp-content/uploads/2020/09/cs_zed_header.png',
    },
    {
      username: 'jeezascodes - 0x6F5...c622',
      offer_id: 3,
      game: 'Plant vs undead',
      description: 'Scholarship duration: undefined',
      updated_at: '2021-7-21',
      thumbnail:
        'https://fraternidadecrypto.com/wp-content/uploads/2021/06/plantvsundeadcapa.png',
    },
  ];
  return (
    <MainView>
      <div className={styles.listContainer}>
        <div className={styles.header}>
          <Heading text='Scholarships' herarchy='h3' />
          <div>
            <PrimaryButton title='Offer a Scholarship' onClick={() => {}} />
          </div>
        </div>

        <div className={styles.relative}>
          {offers?.map((item) => {
            return <OfferItemList item={item} />;
          })}
        </div>
      </div>
    </MainView>
  );
}
