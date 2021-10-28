import React, { useState } from 'react';
import styles from './signupForm.module.css';
import TextInput from '../../components/textInput/textInput';
import PrimaryButton from '../../components/button/button';
import { registerUser } from '../../data/apiCalls';
import { useHistory } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import Heading from '../../components/heading/heading';

export default function SignupForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const onValueChange = (event, id) => {
    if (id === 'name') setName(event.target.value);
    if (id === 'email') setEmail(event.target.value);
    if (id === 'password') setPassword(event.target.value);
    if (id === 'confirm') setConfirmPassword(event.target.value);
  };

  const onSubmit = async () => {
    setIsLoading(true);
    const data = {
      username: name,
      email,
      password1: password,
      password2: confirmPassword,
    };
    try {
      const response = await registerUser(data);
      localStorage.setItem('access_token', response.access_token || '');
      localStorage.setItem('refresh_token', response.refresh_token || '');
      setIsLoading(false);
      history.push('/offers');
    } catch (err) {
      setIsLoading(false);
      console.log(`err`, err);
    }
  };

  return (
    <div className={styles.form}>
      <Heading text='Sign up' herarchy='h3' />
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
      {isLoading ? (
        <Loader type='Puff' color='#00BFFF' height={50} width={50} />
      ) : (
        <PrimaryButton title='Sign up' onClick={onSubmit} />
      )}
    </div>
  );
}
