import axios from 'axios';

export const api = axios.create({
  // baseURL: 'https://goals-achiever.onrender.com/api/v1',
  baseURL: 'http://localhost:3000/api/v1',
});

export const setAxiosToken = (token: string) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};
