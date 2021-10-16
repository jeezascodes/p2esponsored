import fetch from './fetchHelper';
import * as urls from './urls';

export const registerUser = (data) => {
  return fetch(urls.register, {
    method: 'POST',
    body: data,
  });
};
