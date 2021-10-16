import React, { useState } from 'react';
import styles from './loginForm.module.css';
import TextInput from '../../components/textInput/textInput';
import PrimaryButton from '../../components/button/button';
import { loginUser } from '../../data/apiCalls';
import { useHistory } from 'react-router-dom';
import Loader from 'react-loader-spinner';

export default function LoginForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const onValueChange = (event, id) => {
    if (id === 'name') setName(event.target.value);
    if (id === 'email') setEmail(event.target.value);
    if (id === 'password') setPassword(event.target.value);
  };

  const onSubmit = async () => {
    setIsLoading(true);
    const data = {
      username: name,
      email,
      password,
    };
    try {
      const response = await loginUser(data);
      setIsLoading(false);
      history.push('/offers');
    } catch (err) {
      setIsLoading(false);
      console.log(`err`, err);
    }
  };

  return (
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
      {isLoading ? (
        <Loader type='Puff' color='#00BFFF' height={50} width={50} />
      ) : (
        <PrimaryButton title='Sign in' onClick={onSubmit} />
      )}
    </div>
  );
}
