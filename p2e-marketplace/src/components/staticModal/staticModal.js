import React, { useState } from 'react';
import styles from './staticModal.module.css';
import TextInput from '../../components/textInput/textInput';
import PrimaryButton from '../../components/button/button';

export default function StaticModal() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onValueChange = (event, id) => {
    if (id === 'name') setName(event.target.value);
    if (id === 'email') setEmail(event.target.value);
    if (id === 'password') setPassword(event.target.value);
    if (id === 'confirm') setConfirmPassword(event.target.value);
  };

  const onSubmit = () => {
    console.log('submit');
  };
  return (
    <div className={styles.modalContainer}>
      <div className={styles.form}>
        <TextInput
          placeholder='username'
          value={name}
          id='name'
          onChange={onValueChange}
        />
        <TextInput
          placeholder='email'
          id='email'
          value={email}
          onChange={onValueChange}
          type='email'
        />
        <TextInput
          placeholder='password'
          value={password}
          id='password'
          onChange={onValueChange}
          type='password'
        />
        <TextInput
          placeholder='confirm password'
          value={confirmPassword}
          id='confirm'
          onChange={onValueChange}
          type='password'
        />
        <PrimaryButton title='Sign up' onClick={onSubmit} />
      </div>
    </div>
  );
}
