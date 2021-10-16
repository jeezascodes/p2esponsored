import React, { useState } from 'react';
import styles from './createOfferForm.module.css';
import TextInput from '../../components/textInput/textInput';
import SelectInput from '../../components/selectInput/selectInput';
import PrimaryButton from '../../components/button/button';
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
  const history = useHistory();

  const onValueChange = (event, id) => {
    if (id === 'other_game') setOtherGame(event.target.value);
    if (id === 'percentage') setPercentage(event.target.value);
    if (id === 'expectations') setExpectations(event.target.value);
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
  ];

  const onSubmit = async () => {
    setIsLoading(true);
  };

  return (
    <div className={styles.form}>
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
      {isLoading ? (
        <Loader type='Puff' color='#00BFFF' height={50} width={50} />
      ) : (
        <PrimaryButton title='Sign in' onClick={onSubmit} />
      )}
    </div>
  );
}
