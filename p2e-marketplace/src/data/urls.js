const BASE_API = 'https://3e7fq780v1.execute-api.us-east-2.amazonaws.com/dev/';

export const register = `${BASE_API}auth/register/`;

export const login = `${BASE_API}auth/login/`;

export const getOffers = (limit = 100, offset = 0) => {
  return `${BASE_API}market/offer/?limit=${limit}&offset=${offset}`;
};

export const createOffer = `${BASE_API}market/offer/`;

export const getGames = `${BASE_API}gaming/game/?limit=-100&offset=0`;
