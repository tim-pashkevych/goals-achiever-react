import axios from 'axios';

const { VITE_BASE_URL } = import.meta.env;

export const api = axios.create({
  baseURL: 'https://goals-achiever.onrender.com/api/v1',
});

export const setAxiosToken = (token: string) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};
