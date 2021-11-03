import React, { useState } from 'react';
import ChooseCard from '../../components/chooseCard/chooseCard';
import styles from './createProfile.module.css';
import MainView from '../../components/mainView/mainView';
import Heading from '../../components/heading/heading';
import { useHistory } from 'react-router-dom';
import { getOffers, getAllGames } from '../../data/apiCalls';
import scholarVideo from '../../assets/astronaut_user.mp4';
import investorVideo from '../../assets/astronaut_investor.mp4';

export default function CreateProfile() {
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
        <ChooseCard data={scholar} />
        <ChooseCard data={investor} />
      </section>
    </MainView>
  );
}
