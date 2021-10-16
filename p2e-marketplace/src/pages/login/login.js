import React from 'react';
import StaticModal from '../../components/staticModal/staticModal';
import styles from './login.module.css';
import MainView from '../../components/mainView/mainView';
import LoginForm from '../../components/loginForm/loginForm';

export default function Login() {
  return (
    <div>
      <MainView>
        <div className={styles.modalContainer}>
          <StaticModal>
            <LoginForm />
          </StaticModal>
        </div>
      </MainView>
    </div>
  );
}
