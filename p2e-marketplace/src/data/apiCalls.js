import fetch from './fetchHelper';
import * as urls from './urls';

export const registerUser = (data) => {
  return fetch(urls.register, {
    method: 'POST',
    body: data,
  });
};

export const loginUser = (data) => {
  return fetch(urls.login, {
    method: 'POST',
    body: data,
  });
};
