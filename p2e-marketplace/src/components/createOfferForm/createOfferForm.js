import React, { useState, useEffect } from 'react';
import styles from './createOfferForm.module.css';
import TextInput from '../../components/textInput/textInput';
import SelectInput from '../../components/selectInput/selectInput';
import PrimaryButton from '../../components/button/button';
import Heading from '../../components/heading/heading';
import { createOffer, getAllGames } from '../../data/apiCalls';
import { useHistory } from 'react-router-dom';
import Loader from 'react-loader-spinner';

export default function CreateOfferForm() {
  const [game, setGame] = useState('');
  const [gameList, setGameList] = useState([]);
  const [otherGame, setOtherGame] = useState('');
  const [percentage, setPercentage] = useState(10);
  const [duration, setDuration] = useState(1);
  const [expectations, setExpectations] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [paymentType, setPaymentType] = useState('CRYPTO');
  const [placesAvailable, setPlacesAvailable] = useState(0);

  useEffect(() => {
    async function fetchGames() {
      try {
        const allGames = await getAllGames();
        setGameList(allGames.results);
      } catch (err) {
        console.log(`err`, err);
      }
    }
    fetchGames();
    return () => {};
  }, []);

  const history = useHistory();

  const onValueChange = (event, id) => {
    if (id === 'other_game') setOtherGame(event.target.value);
    if (id === 'percentage') setPercentage(event.target.value);
    if (id === 'expectations') setExpectations(event.target.value);
    if (id === 'places') setPlacesAvailable(event.target.value);
  };

  const reg = new RegExp('^[0-9]+$');

  const gameOptions = gameList?.map((item) => {
    return { value: item.pk, label: item.name };
  });

  const options = [
    { value: 'undefined', label: 'undefined duration' },
    { value: 1, label: '1 month' },
    { value: 2, label: '2 months' },
    { value: 3, label: '3 months' },
    { value: 4, label: '4 months' },
    { value: 5, label: '5 months' },
    { value: 6, label: '6 months' },
    { value: 7, label: '7 months' },
    { value: 8, label: '8 months' },
    { value: 9, label: '9 months' },
    { value: 10, label: '10 months' },
    { value: 11, label: '11 months' },
    { value: 12, label: '12 months' },
  ];

  const paymentOptions = [
    { value: 'CRYPTO', label: 'Crypto' },
    { value: 'FIAT', label: 'Fiat' },
  ];

  const onSubmit = async () => {
    let data = {
      game: 36307340,
      duration: duration.value,
      percentage,
      payment_currency_type: paymentType.value,
      payment_method: 'DEFAULT',
      active: true,
      quota: placesAvailable ? placesAvailable : 0,
    };
    setIsLoading(true);
    try {
      const response = await createOffer(data);
      setIsLoading(false);
      history.push('/offers');
    } catch (err) {
      setIsLoading(false);
      console.log(`err`, err);
    }
  };

  return (
    <div className={styles.form}>
      <Heading text='Create a scholarship' herarchy='h3' />
      <SelectInput
        name='Game'
        value={game}
        options={gameOptions}
        onChange={setGame}
      />
      {game.label === 'Other' && (
        <TextInput
          name='Which game?'
          placeholder='game name'
          value={otherGame}
          id='other_game'
          onChange={onValueChange}
          type='text'
        />
      )}
      <SelectInput
        name='Scholarship duration (in months)'
        value={duration}
        options={options}
        onChange={setDuration}
      />
      <TextInput
        name='Earnings percentage for the scholar'
        placeholder='50'
        value={percentage}
        id='percentage'
        onChange={onValueChange}
        type='text'
      />
      {!reg.test(percentage) && (
        <p className={styles.errorMessage}>This field should only be numbers</p>
      )}
      <TextInput
        name='Monthly Earnings expections for the scholar (in USD)'
        placeholder='200'
        value={expectations}
        id='expectations'
        onChange={onValueChange}
        type='text'
      />
      {!reg.test(expectations) && (
        <p className={styles.errorMessage}>This field should only be numbers</p>
      )}
      <SelectInput
        name='Payment type'
        value={paymentType}
        options={paymentOptions}
        onChange={setPaymentType}
      />
      <TextInput
        name='For how many scholars is this offer? (optional)'
        placeholder='1'
        value={placesAvailable}
        id='places'
        onChange={onValueChange}
        type='text'
      />
      {!reg.test(placesAvailable) && (
        <p className={styles.errorMessage}>This field should only be numbers</p>
      )}
      <div className={styles.submit}>
        {isLoading ? (
          <Loader type='Puff' color='#00BFFF' height={50} width={50} />
        ) : (
          <PrimaryButton
            disabled={
              !reg.test(percentage) ||
              !reg.test(expectations) ||
              !reg.test(placesAvailable)
            }
            title='Publish scholarship'
            onClick={onSubmit}
          />
        )}
      </div>
    </div>
  );
}
