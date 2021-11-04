import React, { useState } from 'react';
import styles from './profileForm.module.css';
import TextInput from '../../components/textInput/textInput';
import PrimaryButton from '../../components/button/button';
import { createProfile } from '../../data/apiCalls';
import { useHistory } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import Heading from '../../components/heading/heading';
import SelectInput from '../../components/selectInput/selectInput';
import { countries } from '../../utils/constants';

export default function ProfileForm({ isScholar }) {
  const [gender, setGender] = useState('');
  const [location, setLocation] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [contactData, setContactData] = useState('');
  const [contactDataType, setContactDataType] = useState('');
  const [paymentPreferences, setPaymentPreferences] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const genderOptions = [
    { value: 'MAN', label: 'Man' },
    { value: 'WOMAN', label: 'Woman' },
  ];

  const onValueChange = (event, id) => {
    if (id === 'birthdate') setBirthdate(event.target.value);
    if (id === 'contact_data') setContactData(event.target.value);
  };

  const contactDataTypeOptions = [
    {
      value: 'PHONE_NUMBER',
      label: 'Phone number',
    },
    {
      value: 'EMAIL',
      label: 'Email',
    },
    {
      value: 'DISCORD',
      label: 'Discord',
    },
    {
      value: 'OTHER',
      label: 'Other',
    },
  ];

  const locationOptions = countries;

  const paymentOptions = [
    { value: 'CRYPTO', label: 'Crypto' },
    { value: 'FIAT', label: 'Fiat' },
  ];

  const onSubmit = async () => {
    setIsLoading(true);
    let profileData = {
      gender: gender.value,
      location: location.value,
      birthdate,
    };
    if (isScholar) {
      profileData.beneficiaryprofile = {
        payment_preferences: paymentPreferences.value,
      };
    } else {
      profileData.sponsorprofile = {
        contact_data: contactData,
        contact_data_type: contactDataType.value,
        updated_at: JSON.stringify(Date.now()),
      };
    }
    console.log(`profileData`, profileData);
    try {
      const profile = await createProfile(profileData);
      setIsLoading(false);
      history.push('/offers');
    } catch (err) {
      setIsLoading(false);
      console.log(`err`, err);
    }
  };

  return (
    <div className={styles.form}>
      <Heading
        text={`Complete profile ${isScholar ? '(Scholar)' : '(Investor)'}`}
        herarchy='h3'
      />
      <SelectInput
        name='Sex'
        value={gender}
        options={genderOptions}
        onChange={setGender}
      />
      <SelectInput
        name='Location'
        value={location}
        options={locationOptions}
        onChange={setLocation}
      />
      <TextInput
        placeholder='Birth date (YYYY-MM-DD)'
        name='Birth date'
        value={birthdate}
        id='birthdate'
        onChange={onValueChange}
        type='date'
      />

      {isScholar ? (
        <SelectInput
          name='Payment preferences'
          value={paymentPreferences}
          options={paymentOptions}
          onChange={setPaymentPreferences}
        />
      ) : (
        <>
          <SelectInput
            name='Contact method'
            value={contactDataType}
            options={contactDataTypeOptions}
            onChange={setContactDataType}
          />
          <TextInput
            name={
              contactDataType.value == 'PHONE_NUMBER'
                ? 'Phone number'
                : contactDataType.value == 'EMAIL'
                ? 'Email address'
                : contactDataType.value == 'DISCORD'
                ? 'Username'
                : 'Contact info'
            }
            placeholder={
              contactDataType.value == 'PHONE_NUMBER'
                ? 'Phone number'
                : contactDataType.value == 'EMAIL'
                ? 'Email address'
                : contactDataType.value == 'DISCORD'
                ? 'Username'
                : 'Contact info'
            }
            value={contactData}
            id='contact_data'
            onChange={onValueChange}
          />
        </>
      )}

      {isLoading ? (
        <div className={styles.submitButtonContainer}>
          <Loader type='Puff' color='#00BFFF' height={50} width={50} />
        </div>
      ) : (
        <div className={styles.submitButtonContainer}>
          <PrimaryButton title='Finish' onClick={onSubmit} />
        </div>
      )}
    </div>
  );
}
