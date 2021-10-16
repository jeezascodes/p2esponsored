import React, { useState } from 'react';
import styles from './createOfferForm.module.css';
import TextInput from '../../components/textInput/textInput';
import SelectInput from '../../components/selectInput/selectInput';
import PrimaryButton from '../../components/button/button';
import Heading from '../../components/heading/heading';
import { loginUser } from '../../data/apiCalls';
import { useHistory } from 'react-router-dom';
import Loader from 'react-loader-spinner';

export default function CreateOfferForm() {
  const [game, setGame] = useState('');
  const [otherGame, setOtherGame] = useState('');
  const [percentage, setPercentage] = useState(10);
  const [duration, setDuration] = useState(1);
  const [expectations, setExpectations] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [paymentType, setPaymentType] = useState('Crypto');
  const [placesAvailable, setPlacesAvailable] = useState(0);
  const history = useHistory();

  const onValueChange = (event, id) => {
    if (id === 'other_game') setOtherGame(event.target.value);
    if (id === 'percentage') setPercentage(event.target.value);
    if (id === 'expectations') setExpectations(event.target.value);
    if (id === 'places') setPlacesAvailable(event.target.value);
  };

  const gemeOptions = [
    { value: 'Axie infinity', label: 'Axie infinity' },
    { value: 'Zed run', label: 'Zed run' },
    { value: 'Binamon', label: 'Binamon' },
    { value: 'Plant vs Undead', label: 'Plant vs Undead' },
    { value: 'Other', label: 'Other' },
  ];

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
    { value: 'Crypto', label: 'Crypto' },
    { value: 'Fiat', label: 'Fiat' },
  ];

  const onSubmit = async () => {
    setIsLoading(true);
  };

  return (
    <div className={styles.form}>
      <Heading text='Create a scholarship' herarchy='h3' />
      <SelectInput
        name='Game'
        value={game}
        options={gemeOptions}
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
      <TextInput
        name='Monthly Earnings expections for the scholar (in USD)'
        placeholder='200'
        value={expectations}
        id='expectations'
        onChange={onValueChange}
        type='text'
      />
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
      <div className={styles.submit}>
        {isLoading ? (
          <Loader type='Puff' color='#00BFFF' height={50} width={50} />
        ) : (
          <PrimaryButton title='Publish scholarship' onClick={onSubmit} />
        )}
      </div>
    </div>
  );
}
