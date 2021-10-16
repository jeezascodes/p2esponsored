import React from 'react';
import StaticModal from '../../components/staticModal/staticModal';
import styles from './register.module.css';
import PrimaryButton from '../../components/button/button';
import MainView from '../../components/mainView/mainView';

export default function Register() {
  return (
    <div>
      <MainView>
        <div className={styles.modalContainer}>
          <StaticModal />
        </div>
      </MainView>
    </div>
  );
}
