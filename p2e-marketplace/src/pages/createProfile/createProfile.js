import React, { useState } from 'react';
import ChooseCard from '../../components/chooseCard/chooseCard';
import styles from './createProfile.module.css';
import MainView from '../../components/mainView/mainView';
import Heading from '../../components/heading/heading';
import { useHistory } from 'react-router-dom';
import { getOffers, getAllGames } from '../../data/apiCalls';

export default function CreateProfile() {
  return (
    <MainView>
      <Heading text='Which one are you?' herarchy='h3' />
      <section className={styles.cardsContainer}>
        <ChooseCard />
        <ChooseCard />
      </section>
    </MainView>
  );
}
