import React, { useState } from 'react';
import ChooseCard from '../../components/chooseCard/chooseCard';
import styles from './createProfile.module.css';
import MainView from '../../components/mainView/mainView';
import Heading from '../../components/heading/heading';
import { useHistory } from 'react-router-dom';
import { getOffers, getAllGames } from '../../data/apiCalls';
import scholarVideo from '../../assets/astronaut_user.mp4';
import investorVideo from '../../assets/astronaut_investor.mp4';
import StaticModal from '../../components/staticModal/staticModal';
import ProfileForm from '../../components/profileForm/profileForm';

export default function CreateProfile() {
  const [showForm, setShowForm] = useState(false);
  const [isScholar, setIsScholar] = useState(false);
  const history = useHistory();
  const scholar = {
    videoSource: scholarVideo,
    title: 'Scholar',
    subtitle:
      "I want to play with somebody else's account and split the profits",
  };
  const investor = {
    videoSource: investorVideo,
    title: 'Investor',
    subtitle: 'I want pay the entrance cost and sit down to collect profits',
  };

  return (
    <MainView>
      <Heading text='Which one are you?' herarchy='h3' />
      <section className={styles.cardsContainer}>
        <ChooseCard
          key={1}
          data={scholar}
          onClick={() => {
            setShowForm(true);
            setIsScholar(true);
          }}
        />
        <ChooseCard
          key={2}
          data={investor}
          onClick={() => {
            setShowForm(true);
            setIsScholar(false);
          }}
        />
      </section>
      {showForm && (
        <div className={styles.modalContainer}>
          <div
            className={styles.overlay}
            onClick={() => setShowForm(false)}
          ></div>
          <div className={styles.modalWrapper}>
            <StaticModal>
              <ProfileForm isScholar={isScholar} />
            </StaticModal>
          </div>
        </div>
      )}
    </MainView>
  );
}
