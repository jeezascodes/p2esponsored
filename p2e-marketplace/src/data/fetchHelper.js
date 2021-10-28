import { refreshToken } from '../utils/refreshHelper';

const fetchHelper = async (url, options = {}) => {
  const fetchOptions = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
    ...options,
  };

  let token = await localStorage.getItem('access_token');
  if (token) {
    fetchOptions.headers.Authorization = `Bearer ${token}`;
  }

  if (fetchOptions.method !== 'GET' && fetchOptions.body) {
    fetchOptions.headers['Content-Type'] = 'application/json';
    fetchOptions.body = JSON.stringify(fetchOptions.body);
  }

  return fetch(url, fetchOptions).then((response) => {
    if (response.status >= 400) {
      let error = 'generic error';

      if (response.status === 401) {
        error = 'invalid_token';
        async function refresher() {
          await refreshToken(true);
          window.location.reload();
        }
        refresher();
      }

      return new Promise((resolve, reject) => {
        response
          .json()
          .then((message) => {
            console.log(`message`, message);
            reject(error);
          })
          .catch(() => {
            reject(error);
          });
      });
    }

    if (response.ok && response.status === 204) {
      return Promise.resolve('Success');
    }
    return new Promise((resolve) => {
      response.json().then(resolve, () => {
        resolve('');
      });
    });
  });
};

export default fetchHelper;
