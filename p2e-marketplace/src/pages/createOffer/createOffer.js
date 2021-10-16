import React from 'react';
import StaticModal from '../../components/staticModal/staticModal';
import styles from './createOffer.module.css';
import MainView from '../../components/mainView/mainView';
import CreateOfferForm from '../../components/createOfferForm/createOfferForm';

export default function CreateOffer() {
  return (
    <div>
      <MainView>
        <div className={styles.modalContainer}>
          <StaticModal>
            <CreateOfferForm />
          </StaticModal>
        </div>
      </MainView>
    </div>
  );
}
