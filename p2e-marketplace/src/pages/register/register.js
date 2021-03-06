import React from 'react';
import StaticModal from '../../components/staticModal/staticModal';
import styles from './register.module.css';
import MainView from '../../components/mainView/mainView';
import SignupForm from '../../components/signupForm/signupForm';

export default function Register() {
  return (
    <div>
      <MainView>
        <div className={styles.modalContainer}>
          <StaticModal>
            <SignupForm />
          </StaticModal>
        </div>
      </MainView>
    </div>
  );
}
