import { verifyToken, getNewToken } from '../data/apiCalls';

export const refreshToken = async (expired) => {
  const access = localStorage.getItem('access_token');
  if (expired) {
    const refresh = localStorage.getItem('refresh_token');
    const response = await getNewToken({ refresh });
    localStorage.setItem('access_token', response.access || '');
  } else {
    try {
      await verifyToken({ token: access });
    } catch (err) {
      const refresh = localStorage.getItem('refresh_token');
      const response = await getNewToken({ refresh });
      localStorage.setItem('access_token', response.access || '');
    }
  }
};
