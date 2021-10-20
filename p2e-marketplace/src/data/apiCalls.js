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

export const getOffers = (limit, offset) => {
  return fetch(urls.getOffers(limit, offset), {
    method: 'GET',
  });
};

export const createOffer = (data) => {
  return fetch(urls.createOffer, {
    method: 'POST',
    body: data,
  });
};

export const getAllGames = () => {
  return fetch(urls.getGames, {
    method: 'GET',
  });
};
